// Synthetic data for the canvas demonstration.
//
// Everything here is generated at runtime from a seeded PRNG. It is not a
// reproduction of any real product, and no client data, assets, or UI are used.

export type DemoShapeKind = "box" | "circle" | "marker";

export type DemoShape = {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  kind: DemoShapeKind;
  tone: 0 | 1 | 2;
};

// Virtual canvas the shapes are laid out on, before scaling to the viewport.
export const VIRTUAL_WIDTH = 1600;
export const VIRTUAL_HEIGHT = 1000;

export const KIND_LABEL: Record<DemoShapeKind, string> = {
  box: "Box",
  circle: "Circle",
  marker: "Marker",
};

export const TONE_STROKE = ["#2a4b9b", "#1f6b4a", "#b0603a"] as const;
export const TONE_FILL = [
  "rgba(42, 75, 155, 0.16)",
  "rgba(31, 107, 74, 0.16)",
  "rgba(176, 96, 58, 0.16)",
] as const;

export const MIN_SHAPES = 200;
export const MAX_SHAPES = 9000;

function mulberry32(seed: number) {
  let a = seed;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Distributes shapes over a jittered grid so the result reads like a dense
// annotation scene rather than a uniform pattern.
export function generateShapes(count: number, seed: number): DemoShape[] {
  const random = mulberry32(seed + count);
  const ratio = VIRTUAL_WIDTH / VIRTUAL_HEIGHT;
  const columns = Math.max(1, Math.round(Math.sqrt(count * ratio)));
  const rows = Math.max(1, Math.ceil(count / columns));
  const cellWidth = VIRTUAL_WIDTH / columns;
  const cellHeight = VIRTUAL_HEIGHT / rows;

  const shapes: DemoShape[] = [];

  for (let index = 0; index < count; index += 1) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const w = cellWidth * (0.26 + random() * 0.42);
    const h = cellHeight * (0.26 + random() * 0.42);
    const x = column * cellWidth + (cellWidth - w) * random();
    const y = row * cellHeight + (cellHeight - h) * random();

    const roll = random();
    const kind: DemoShapeKind =
      roll < 0.45 ? "box" : roll < 0.8 ? "circle" : "marker";
    const tone = Math.floor(random() * 3) as 0 | 1 | 2;

    shapes.push({ id: index + 1, x, y, w, h, kind, tone });
  }

  return shapes;
}
