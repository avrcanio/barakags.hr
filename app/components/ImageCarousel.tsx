"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { carouselImages, type CarouselImageId } from "@/lib/carousel";

type Labels = {
  prev: string;
  next: string;
  imageAlts: Record<CarouselImageId, string>;
};

export function ImageCarousel({ labels }: { labels: Labels }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = carouselImages.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
    touchStartX.current = null;
  }

  const slide = carouselImages[index];

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.imageAlts[slide.id]}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carouselViewport" aria-live="polite">
        <Image
          key={slide.src}
          src={slide.src}
          alt={labels.imageAlts[slide.id]}
          width={1200}
          height={675}
          priority={index === 0}
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="carouselImage"
        />
      </div>

      <button
        type="button"
        className="carouselBtn carouselBtnPrev"
        onClick={prev}
        aria-label={labels.prev}
      >
        ‹
      </button>
      <button
        type="button"
        className="carouselBtn carouselBtnNext"
        onClick={next}
        aria-label={labels.next}
      >
        ›
      </button>

      <div className="carouselFooter">
        <span className="carouselCounter">
          {index + 1} / {total}
        </span>
        <div className="carouselDots" role="tablist" aria-label="Slides">
          {carouselImages.map((img, i) => (
            <button
              key={img.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1}`}
              className={`carouselDot${i === index ? " carouselDotActive" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
