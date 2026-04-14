"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  pressed: boolean;
  interactive: boolean;
};

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], canvas, [data-ball-cursor="interactive"]';

export function BallCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    pressed: false,
    interactive: false
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateEnabledState() {
      const nextEnabled = mediaQuery.matches && !reducedMotionQuery.matches;
      setEnabled(nextEnabled);
      document.body.classList.toggle("ball-cursor-enabled", nextEnabled);
    }

    updateEnabledState();
    mediaQuery.addEventListener("change", updateEnabledState);
    reducedMotionQuery.addEventListener("change", updateEnabledState);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabledState);
      reducedMotionQuery.removeEventListener("change", updateEnabledState);
      document.body.classList.remove("ball-cursor-enabled");
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      setState((current) => ({ ...current, visible: false, pressed: false, interactive: false }));
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      const target = event.target instanceof Element ? event.target : null;

      setState((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        visible: true,
        interactive: Boolean(target?.closest(INTERACTIVE_SELECTOR))
      }));
    }

    function handlePointerDown() {
      setState((current) => ({ ...current, pressed: true }));
    }

    function handlePointerUp() {
      setState((current) => ({ ...current, pressed: false }));
    }

    function handlePointerLeave() {
      setState((current) => ({ ...current, visible: false, pressed: false }));
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className={`ball-cursor fixed left-0 top-0 z-[120] hidden -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 lg:block ${
        state.visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%)`
      }}
    >
      <div
        className={`relative rounded-full transition duration-200 ${
          state.interactive
            ? "drop-shadow-[0_0_26px_rgba(124,255,103,0.34)]"
            : "drop-shadow-[0_12px_26px_rgba(0,0,0,0.28)]"
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full blur-xl transition duration-200 ${
            state.interactive ? "bg-[#7cff67]/28 opacity-100" : "bg-[#57d4ff]/20 opacity-70"
          }`}
        />
        <div
          className={`relative h-9 w-9 rounded-full border transition duration-200 ${
            state.interactive
              ? "border-white/55 bg-white/12"
              : "border-white/28 bg-white/7"
          } ${state.pressed ? "scale-[0.88]" : state.interactive ? "scale-110" : "scale-100"}`}
        >
          <div className="absolute inset-[6px] rounded-full border border-white/14" />
          <div
            className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition duration-200 ${
              state.interactive ? "bg-[#7cff67]/90" : "bg-white/55"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
