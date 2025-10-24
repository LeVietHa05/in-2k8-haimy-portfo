'use client';

import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';


interface BookFlipProps {
  totalPages: number;
  folder: string,
  onClose: () => void
}

export default function BookFlip({ totalPages, folder, onClose }: BookFlipProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center z-2 overflow-hidden">
      <button onClick={onClose} className="absolute top-4 right-4 z-10">
        <Image src="/close.svg" alt="Close" width={24} height={24} />
      </button>
      <div className="flex justify-center items-center h-screen overflow-hidden w-full">
        <HTMLFlipBook
          width={500}
          height={700}
          // size="stretch"
          minWidth={315}
          maxWidth={1500}
          minHeight={400}
          maxHeight={800}
          maxShadowOpacity={0.5}
          className="shadow-xl"
          flippingTime={800}
          showCover={false}
          mobileScrollSupport={true}
        >
          {pages.map((num) => (
            <div
              key={num}
              className="bg-white flex items-center justify-center text-black text-2xl font-semibold relative"
            >
              <Image
                src={`${folder}/${num}.png`}
                alt={`Trang ${num}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
