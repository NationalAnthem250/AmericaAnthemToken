import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  placeholder?: "blur" | "empty";
}

export const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  sizes = "100vw",
  placeholder = "blur"
}: OptimizedImageProps) => {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    const ext = src.split('.').pop();
    const basePath = src.substring(0, src.lastIndexOf('.'));
    
    // Return srcset with different sizes for responsive loading
    return `${basePath}-400w.${ext} 400w, ${basePath}-800w.${ext} 800w, ${src} 1200w`;
  };

  const blurDataUrl = "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3Crect width='100' height='100' fill='%23ddd' filter='url(%23blur)'/%3E%3C/svg%3E";

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Placeholder blur while loading */}
      {placeholder === "blur" && !hasLoaded && (
        <img
          src={blurDataUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={isInView ? src : blurDataUrl}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          hasLoaded ? "opacity-100" : "opacity-0"
        }`}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setHasLoaded(true)}
      />
    </div>
  );
};