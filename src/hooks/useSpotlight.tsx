import { useState } from "react";

function useSpotlight(
  spotlightColor = "rgba(41, 141, 223, 0.3)",
  hotspotColor = "rgba(255, 255, 255, 1)"
) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: {
    currentTarget: {
      getBoundingClientRect: () => {
        left: number;
        top: number;
        width: number;
        height: number;
      };
    };
    clientX: number;
    clientY: number;
  }) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const spotlightStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${spotlightColor}, ${hotspotColor})`,
  };
  return { handleMouseMove, spotlightStyle };
}

export default useSpotlight;
