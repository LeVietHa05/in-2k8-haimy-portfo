
'use client'
import Image from "next/image"
import { useState } from "react"

const data = [
    "/canon-ixy-1.png",
    "/canon-ixy-2.png",
    "/canon-ixy-3.png",
    "/canon-ixy-4.png",
    "/canon-ixy-5.png",
    "/canon-ixy-6.png",
    "/canon-ixy-7.png",
]

export default function CanonIxy({ onClose }: { onClose: () => void }) {
    const [curentImage, setCurrentImage] = useState<number>(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [direction, setDirection] = useState<'left' | 'right' | null>(null)

    const handleIncrease = () => {
        setDirection('right')
        setIsTransitioning(true)
        setTimeout(() => {
            if (curentImage >= data.length - 1) {
                setCurrentImage(0)
            } else
                setCurrentImage(curentImage + 1)
            setIsTransitioning(false)
        }, 300)
    }

    const handleDecrease = () => {
        setDirection('left')
        setIsTransitioning(true)
        setTimeout(() => {
            if (curentImage <= 0) {
                setCurrentImage(data.length - 1)
            } else
                setCurrentImage(curentImage - 1)
            setIsTransitioning(false)
        }, 300)
    }
    return (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center z-2">
            <button onClick={onClose} className="absolute top-4 right-4 z-10">
                <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            <div className="flex justify-center items-center w-186 h-105 relative">
                <Image src={'/canon-ixy-bg.svg'} fill alt=""></Image>
                <div className={`absolute w-79 h-60 overflow-hidden `} style={{ top: 128, left: 38 }}>
                    <Image key={curentImage} className={` shadow-xl transition-all duration-300 ${isTransitioning ? (direction === 'left' ? 'translate-x-[-100%] opacity-0' : 'translate-x-[100%] opacity-0') : 'translate-x-0 opacity-100'}`} src={data[curentImage]} fill alt=""></Image>
                </div>
                <div className="cursor-pointer hover:backdrop-blur-sm hover:scale-120 absolute transition-all duration-300 size-12 rounded-full" style={{ top: 226, right: 112 }} onClick={handleIncrease}></div>
                <div className="cursor-pointer hover:backdrop-blur-sm hover:scale-120 absolute transition-all duration-300 size-12 rounded-full" style={{ top: 226, right: 202 }} onClick={handleDecrease}></div>
            </div>

        </div>
    )
}
