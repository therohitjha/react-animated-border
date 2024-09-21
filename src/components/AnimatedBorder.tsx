import React, { ReactNode } from "react";
import "./rohit-animated-border.css";

interface AnimatedBorderProps {
  children: ReactNode;
  borderAnimationColor?: string;
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  borderAnimationColor = "rgba(41, 141, 223, 1)",
}) => {
  return (
    <div
      className="rohit-animated-border"
      style={
        {
          "--c1": borderAnimationColor,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default AnimatedBorder;
