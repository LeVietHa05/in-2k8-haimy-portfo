import Image from "next/image"
import { useState } from 'react'

const data = [
    "/about-1.png",
    "/about-2.png",
    "/about-3.png",
    "/about-4.png",
]

export default function Aboutme({ onClose }: { onClose: () => void }) {
    const [currentPage, setCurrentPage] = useState(0)
    const [isFlipping, setIsFlipping] = useState(false)
    const [isFlippingLeft, setIsFlippingLeft] = useState(false)

    const totalPages = Math.ceil(data.length / 2)

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setIsFlipping(true)
            setTimeout(() => {
                setCurrentPage(prev => prev + 1)
                setIsFlipping(false)
            }, 500)
        }
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setIsFlippingLeft(true)
            setTimeout(() => {
                setCurrentPage(prev => prev - 1)
                setIsFlippingLeft(false)
            }, 500)
        }
    }

    const leftImage = data[currentPage * 2]
    const rightImage = data[currentPage * 2 + 1]

    return (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center z-2">
            <button onClick={onClose} className="absolute top-4 right-4 z-10">
                <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            <div className="book">
                <div className={`page left-page ${isFlippingLeft ? 'flipping-left' : ''}`}>
                    {leftImage && <Image src={leftImage} alt="left page" width={433} height={717} />}
                </div>
                <div className={`page right-page ${isFlipping ? 'flipping' : ''}`}>
                    {rightImage && <Image src={rightImage} alt="right page" width={433} height={717} />}
                </div>
            </div>
            <div className="controls mt-4">
                <button onClick={handlePrev} disabled={currentPage === 0} className="mr-2 px-4 py-2 bg-blue-500 text-white disabled:bg-gray-300">Prev</button>
                <button onClick={handleNext} disabled={currentPage >= totalPages - 1} className="px-4 py-2 bg-blue-500 text-white disabled:bg-gray-300">Next</button>
            </div>
            <style jsx>{`
                .book {
                    display: flex;
                    perspective: 1200px;
                    width: 866px;
                    height: 717px;
                    transform-style: preserve-3d;
                }
                .page {
                    width: 433px;
                    height: 717px;
                    background: white;
                    border: 1px solid #ccc;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform-style: preserve-3d;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    position: relative;
                }
                .page::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 50%);
                    opacity: 0;
                    transition: opacity 0.5s;
                }
                .left-page {
                    transform-origin: right center;
                }
                .right-page {
                    transform-origin: left center;
                }
                .flipping {
                    animation: flip 0.5s forwards;
                }
                .flipping-left {
                    animation: flip-left 0.5s forwards;
                }
                @keyframes flip {
                    0% {
                        transform: rotateY(0deg) translateZ(0px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                    50% {
                        transform: rotateY(-90deg) translateZ(-50px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                    }
                    100% {
                        transform: rotateY(-180deg) translateZ(0px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                }
                @keyframes flip-left {
                    0% {
                        transform: rotateY(0deg) translateZ(0px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                    50% {
                        transform: rotateY(90deg) translateZ(-50px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                    }
                    100% {
                        transform: rotateY(180deg) translateZ(0px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    }
                }
                .flipping .page::before,
                .flipping-left .page::before {
                    opacity: 1;
                }
            `}</style>
        </div>
    )
}
