import { useCallback, useEffect, useRef, useState } from 'react';

const AVATAR_IMAGES = {
  pixelArt: '/avatar-abdirahman-8-bit.webp',
  photo: '/avatar-abdirahman.webp',
} as const;

const GRID_SIZE = 8;
const PIXEL_COUNT = GRID_SIZE * GRID_SIZE;
const PIXEL_ANIMATION_DURATION = 600;
const TRANSITION_INTERVAL = 5000;

export function useAvatarPixelTransition() {
  const [showPixelArt, setShowPixelArt] = useState(false); // Start with photo, pixel art is the alt
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pixelColors, setPixelColors] = useState<string[]>([]);

  // Shuffled indices for pixel grid animation
  const [shuffledIndices] = useState(() => {
    const indices = Array.from({ length: PIXEL_COUNT }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  // Sample colors from an image for the pixel grid
  const sampleColorsFromImage = useCallback((imageSrc: string) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = GRID_SIZE;
      canvas.height = GRID_SIZE;

      // Draw image scaled down to grid size
      ctx.drawImage(img, 0, 0, GRID_SIZE, GRID_SIZE);

      // Extract colors for each pixel
      const colors: string[] = [];
      const imageData = ctx.getImageData(0, 0, GRID_SIZE, GRID_SIZE);
      for (let i = 0; i < PIXEL_COUNT; i++) {
        const idx = i * 4;
        const r = imageData.data[idx];
        const g = imageData.data[idx + 1];
        const b = imageData.data[idx + 2];
        colors.push(`rgb(${r}, ${g}, ${b})`);
      }
      setPixelColors(colors);
    };
    img.src = imageSrc;
  }, []);

  // Ref to track current avatar for sampling inside interval
  const showPixelArtRef = useRef(showPixelArt);
  useEffect(() => {
    showPixelArtRef.current = showPixelArt;
  }, [showPixelArt]);

  // Main transition interval
  useEffect(() => {
    let swapTimeout: ReturnType<typeof setTimeout>;
    let endTimeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      // Sample colors from the CURRENT avatar before transitioning
      const currentAvatar = showPixelArtRef.current
        ? AVATAR_IMAGES.pixelArt
        : AVATAR_IMAGES.photo;
      sampleColorsFromImage(currentAvatar);

      // Start transition animation
      setIsTransitioning(true);

      // Swap avatar AFTER all pixels have fully appeared
      swapTimeout = setTimeout(() => {
        setShowPixelArt((prev) => !prev);
      }, PIXEL_ANIMATION_DURATION);

      // End transition AFTER pixels have animated out
      endTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, PIXEL_ANIMATION_DURATION * 2);
    }, TRANSITION_INTERVAL);

    return () => {
      clearInterval(interval);
      clearTimeout(swapTimeout);
      clearTimeout(endTimeout);
    };
  }, [sampleColorsFromImage]);

  return {
    showPixelArt,
    isTransitioning,
    pixelColors,
    shuffledIndices,
    avatarImages: AVATAR_IMAGES,
    gridSize: GRID_SIZE,
  };
}
