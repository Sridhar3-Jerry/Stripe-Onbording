import React from "react";

const NUM_VERTICAL = 12;
const NUM_HORIZONTAL = 8;

const GridLines = () => {
  const verticals = Array.from({ length: NUM_VERTICAL }, (_, i) => (
    <div
      key={`v-${i}`}
      style={{
        left: `${(i / (NUM_VERTICAL - 1)) * 100}%`,
        top: 0,
        bottom: 0,
        width: 1,
        background: "rgba(200,200,200,0.18)",
        position: "absolute",
      }}
    />
  ));
  const horizontals = Array.from({ length: NUM_HORIZONTAL }, (_, i) => (
    <div
      key={`h-${i}`}
      style={{
        top: `${(i / (NUM_HORIZONTAL - 1)) * 100}%`,
        left: 0,
        right: 0,
        height: 1,
        background: "rgba(200,200,200,0.18)",
        position: "absolute",
      }}
    />
  ));
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
      style={{
        zIndex: -1,
        clipPath: 'polygon(0 60%, 100% 20%, 100% 100%, 0 100%)',
      }}
    >
      {verticals}
      {horizontals}
    </div>
  );
};

export default GridLines; 