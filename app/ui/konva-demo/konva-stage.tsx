"use client";

import type { KonvaEventObject } from "konva/lib/Node";
import { Circle, Layer, Rect, RegularPolygon, Stage } from "react-konva";

import {
  type DemoShape,
  TONE_FILL,
  TONE_STROKE,
  VIRTUAL_HEIGHT,
  VIRTUAL_WIDTH,
} from "./demo-data";

type KonvaStageProps = {
  shapes: DemoShape[];
  width: number;
  height: number;
  outlineOnly: boolean;
  selectedId: number | null;
  onSelect: (id: number | null) => void;
};

export default function KonvaStage({
  shapes,
  width,
  height,
  outlineOnly,
  selectedId,
  onSelect,
}: KonvaStageProps) {
  const scale = Math.min(width / VIRTUAL_WIDTH, height / VIRTUAL_HEIGHT);

  const handleClick = (event: KonvaEventObject<MouseEvent>) => {
    const id = event.target.id();
    onSelect(id ? Number(id) : null);
  };

  const setCursor = (event: KonvaEventObject<MouseEvent>, value: string) => {
    const container = event.target.getStage()?.container();
    if (container) container.style.cursor = value;
  };

  return (
    <Stage width={width} height={height} onClick={handleClick}>
      <Layer
        scaleX={scale}
        scaleY={scale}
        onMouseOver={(event) => setCursor(event, "pointer")}
        onMouseOut={(event) => setCursor(event, "default")}
      >
        <Rect
          x={0}
          y={0}
          width={VIRTUAL_WIDTH}
          height={VIRTUAL_HEIGHT}
          fill="#ffffff"
          stroke="#dcd7cb"
          strokeWidth={2}
          listening={false}
        />

        {shapes.map((shape) => {
          const selected = shape.id === selectedId;
          const stroke = selected ? "#171a1f" : TONE_STROKE[shape.tone];

          const shared = {
            id: String(shape.id),
            fill: outlineOnly ? undefined : TONE_FILL[shape.tone],
            stroke,
            strokeWidth: selected ? 3 : 1.5,
            perfectDrawEnabled: false,
            shadowForStrokeEnabled: false,
            hitStrokeWidth: 0,
          };

          if (shape.kind === "box") {
            return (
              <Rect
                key={shape.id}
                {...shared}
                x={shape.x}
                y={shape.y}
                width={shape.w}
                height={shape.h}
              />
            );
          }

          const cx = shape.x + shape.w / 2;
          const cy = shape.y + shape.h / 2;
          const radius = Math.min(shape.w, shape.h) / 2;

          if (shape.kind === "circle") {
            return (
              <Circle key={shape.id} {...shared} x={cx} y={cy} radius={radius} />
            );
          }

          return (
            <RegularPolygon
              key={shape.id}
              {...shared}
              x={cx}
              y={cy}
              sides={3}
              radius={radius}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}
