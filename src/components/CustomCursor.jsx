import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 rounded-full border-2 border-amber-400 md:block"
      style={{
        transform: `translate(${position.x - 10}px, ${
          position.y - 10
        }px)`,
      }}
    />
  );
}

export default CustomCursor;