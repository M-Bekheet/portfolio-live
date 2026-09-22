"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

import { generateShapes, KIND_LABEL, MAX_SHAPES, MIN_SHAPES } from "./demo-data";
import styles from "./canvas-demo.module.scss";

const KonvaStage = dynamic(() => import("./konva-stage"), {
  ssr: false,
  loading: () => (
    <p className={styles.loading}>Preparing the canvas demonstration…</p>
  ),
});

const DEFAULT_SHAPES = 900;

export default function CanvasDemo() {
  const [draftCount, setDraftCount] = useState(DEFAULT_SHAPES);
  const [appliedCount, setAppliedCount] = useState(DEFAULT_SHAPES);
  const [seed, setSeed] = useState(1);
  const [outlineOnly, setOutlineOnly] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const wrapRef = useRef<HTMLDivElement>(null);

  const shapes = useMemo(
    () => generateShapes(appliedCount, seed),
    [appliedCount, seed]
  );
  const selected = selectedId
    ? shapes.find((shape) => shape.id === selectedId) ?? null
    : null;
  const pending = draftCount !== appliedCount;

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      setSize({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setSelectedId(null);
  }, [appliedCount, seed]);

  const selectByStep = (delta: number) => {
    setSelectedId((current) => {
      if (shapes.length === 0) return null;
      const currentIndex =
        current === null ? -1 : shapes.findIndex((shape) => shape.id === current);
      const nextIndex =
        currentIndex === -1
          ? delta >= 0
            ? 0
            : shapes.length - 1
          : (currentIndex + delta + shapes.length) % shapes.length;
      return shapes[nextIndex].id;
    });
  };

  const status = selected
    ? `Selected ${KIND_LABEL[selected.kind]} number ${selected.id} of ${shapes.length.toLocaleString()}, synthetic class ${
        selected.tone + 1
      }, at position ${Math.round(selected.x)}, ${Math.round(selected.y)}.`
    : `${shapes.length.toLocaleString()} synthetic shapes rendered. Use the Previous and Next shape buttons, or select a shape on the canvas, to inspect one.`;

  return (
    <figure className={styles.figure}>
      <figcaption className={styles.caption}>
        <span className={styles.label}>Original demonstration · synthetic data</span>
        <p>
          A generic React and Konva example, built for this portfolio. It renders
          thousands of synthetic shapes on one canvas so you can see how density
          and interaction are handled at scale. It is not a reproduction of any
          client product, and it uses no client assets or data. Selecting a shape
          on the canvas is optional; the controls below do the same job by
          keyboard.
        </p>
      </figcaption>

      <div className={styles.toolbar}>
        <div className={styles.control}>
          <label htmlFor="shape-count" className={styles.controlLabel}>
            Requested shapes:{" "}
            <output htmlFor="shape-count" className={styles.count}>
              {draftCount.toLocaleString()}
            </output>
          </label>
          <input
            id="shape-count"
            type="range"
            min={MIN_SHAPES}
            max={MAX_SHAPES}
            step={100}
            value={draftCount}
            onChange={(event) => setDraftCount(Number(event.target.value))}
          />
          <p className={styles.controlHint}>
            Rendering {appliedCount.toLocaleString()} shapes.
            {pending ? " Choose Render to apply the new count." : ""}
          </p>
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setAppliedCount(draftCount)}
            disabled={!pending}
          >
            {pending
              ? `Render ${draftCount.toLocaleString()} shapes`
              : "Shapes up to date"}
          </button>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={outlineOnly}
              onChange={(event) => setOutlineOnly(event.target.checked)}
            />
            Outlines only
          </label>

          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => setSeed((value) => value + 1)}
          >
            Regenerate layout
          </button>
        </div>
      </div>

      <div
        className={styles.inspect}
        role="group"
        aria-label="Inspect synthetic shapes"
      >
        <span className={styles.groupTitle}>Inspect a shape</span>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => selectByStep(-1)}
        >
          Previous shape
        </button>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => selectByStep(1)}
        >
          Next shape
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => setSelectedId(null)}
          disabled={selectedId === null}
        >
          Clear selection
        </button>
      </div>

      <div
        ref={wrapRef}
        className={styles.canvasWrap}
        role="img"
        aria-label="Canvas demonstration containing synthetic shapes. Interacting with the canvas is optional; the current selection is described below."
      >
        {size.width > 0 ? (
          <KonvaStage
            shapes={shapes}
            width={size.width}
            height={size.height}
            outlineOnly={outlineOnly}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ) : null}
      </div>

      <p className={styles.readout} role="status" aria-live="polite">
        {status}
      </p>

      <p className={styles.notes}>
        Techniques on show: a single Konva layer, hit-testing disabled on the
        backdrop, and per-shape shadow and perfect-draw passes turned off.
        Slider changes are committed with the Render button, so the canvas does
        not regenerate on every input event. The view updates only in response
        to your input, so nothing animates on its own and reduced-motion
        preferences are respected by default.
      </p>
    </figure>
  );
}
