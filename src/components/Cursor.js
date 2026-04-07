import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.1;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px';
        ringRef.current.style.top  = pos.current.ry + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
