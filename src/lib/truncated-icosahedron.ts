import {
  BufferGeometry,
  Float32BufferAttribute,
  IcosahedronGeometry,
  Vector3
} from "three";

export type FootballFaceKind = "pentagon" | "hexagon";

export type FootballFace = {
  geometry: BufferGeometry;
  center: [number, number, number];
  outline: [number, number, number][];
  kind: FootballFaceKind;
};

const EDGE_CUT_RATIO = 1 / 3;
const FACE_PRECISION = 6;
const FOOTBALL_OUTER_RADIUS = 1.82;

function roundKey(vector: Vector3) {
  return [vector.x, vector.y, vector.z]
    .map((value) => value.toFixed(FACE_PRECISION))
    .join(":");
}

function createPolygonGeometry(points: Vector3[]) {
  const vertices: number[] = [];
  const center = averagePoint(points);
  const averageRadius =
    points.reduce((sum, point) => sum + point.length(), 0) / points.length;
  const projectedCenter = center.normalize().multiplyScalar(averageRadius);

  for (let index = 0; index < points.length; index += 1) {
    const pointA = projectedCenter;
    const pointB = points[index];
    const pointC = points[(index + 1) % points.length];

    vertices.push(
      pointA.x,
      pointA.y,
      pointA.z,
      pointB.x,
      pointB.y,
      pointB.z,
      pointC.x,
      pointC.y,
      pointC.z
    );
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
  geometry.computeVertexNormals();

  return geometry;
}

function createRoundedInsetPolygonPoints(points: Vector3[]) {
  const baseRadius = points[0].length();
  const outerScale = FOOTBALL_OUTER_RADIUS / baseRadius;
  const scaledPoints = points.map((point) => point.clone().multiplyScalar(outerScale));
  const center = averagePoint(scaledPoints);
  const faceNormal = center.clone().normalize();
  const insetRatio = 0.94;
  const faceLift = 0.016;

  return scaledPoints.map((point) =>
    point.clone().lerp(center, 1 - insetRatio).addScaledVector(faceNormal, faceLift)
  );
}

function sortPointsAroundVertex(points: Vector3[], vertex: Vector3) {
  const normal = vertex.clone().normalize();
  const referenceAxis =
    Math.abs(normal.y) > 0.8 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0);
  const tangent = new Vector3().crossVectors(normal, referenceAxis).normalize();
  const bitangent = new Vector3().crossVectors(normal, tangent).normalize();

  return [...points].sort((pointA, pointB) => {
    const angleA = Math.atan2(pointA.dot(bitangent), pointA.dot(tangent));
    const angleB = Math.atan2(pointB.dot(bitangent), pointB.dot(tangent));
    return angleA - angleB;
  });
}

function averagePoint(points: Vector3[]) {
  const center = new Vector3();

  points.forEach((point) => center.add(point));
  center.divideScalar(points.length);

  return center;
}

function buildFootballFaces() {
  const baseGeometry = new IcosahedronGeometry(1.85, 0);
  const positionAttribute = baseGeometry.getAttribute("position");
  const vertices: Vector3[] = [];
  const faces: [number, number, number][] = [];
  const vertexIndexByKey = new Map<string, number>();

  for (let index = 0; index < positionAttribute.count; index += 3) {
    const face: number[] = [];

    for (let offset = 0; offset < 3; offset += 1) {
      const point = new Vector3(
        positionAttribute.getX(index + offset),
        positionAttribute.getY(index + offset),
        positionAttribute.getZ(index + offset)
      );
      const key = roundKey(point);
      let vertexIndex = vertexIndexByKey.get(key);

      if (vertexIndex === undefined) {
        vertexIndex = vertices.length;
        vertices.push(point);
        vertexIndexByKey.set(key, vertexIndex);
      }

      face.push(vertexIndex);
    }

    faces.push(face as [number, number, number]);
  }

  const edgePointMap = new Map<string, Vector3>();
  const adjacentPointsByVertex = new Map<number, Vector3[]>();

  function getEdgePoint(fromIndex: number, toIndex: number) {
    const edgeKey = `${fromIndex}->${toIndex}`;
    const cachedPoint = edgePointMap.get(edgeKey);

    if (cachedPoint) {
      return cachedPoint;
    }

    const point = vertices[fromIndex]
      .clone()
      .lerp(vertices[toIndex], EDGE_CUT_RATIO);

    edgePointMap.set(edgeKey, point);

    const currentPoints = adjacentPointsByVertex.get(fromIndex) ?? [];
    currentPoints.push(point);
    adjacentPointsByVertex.set(fromIndex, currentPoints);

    return point;
  }

  faces.forEach(([a, b, c]) => {
    getEdgePoint(a, b);
    getEdgePoint(b, a);
    getEdgePoint(b, c);
    getEdgePoint(c, b);
    getEdgePoint(c, a);
    getEdgePoint(a, c);
  });

  const pentagons: FootballFace[] = vertices.map((vertex, vertexIndex) => {
    const polygonPoints = sortPointsAroundVertex(
      adjacentPointsByVertex.get(vertexIndex) ?? [],
      vertex
    );
    const roundedPoints = createRoundedInsetPolygonPoints(polygonPoints);
    const center = averagePoint(roundedPoints);

    return {
      geometry: createPolygonGeometry(roundedPoints),
      center: [center.x, center.y, center.z],
      outline: roundedPoints.map((point) => [point.x, point.y, point.z]),
      kind: "pentagon"
    };
  });

  const hexagons: FootballFace[] = faces.map(([a, b, c]) => {
    const polygonPoints = [
      getEdgePoint(a, b),
      getEdgePoint(b, a),
      getEdgePoint(b, c),
      getEdgePoint(c, b),
      getEdgePoint(c, a),
      getEdgePoint(a, c)
    ];
    const roundedPoints = createRoundedInsetPolygonPoints(polygonPoints);
    const center = averagePoint(roundedPoints);

    return {
      geometry: createPolygonGeometry(roundedPoints),
      center: [center.x, center.y, center.z],
      outline: roundedPoints.map((point) => [point.x, point.y, point.z]),
      kind: "hexagon"
    };
  });

  return [...pentagons, ...hexagons];
}

export const footballFaces = buildFootballFaces();
