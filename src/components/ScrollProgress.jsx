import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9998] h-1 w-full bg-white/10">
      <div
        className="h-full bg-amber-400 transition-[width] duration-100"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;