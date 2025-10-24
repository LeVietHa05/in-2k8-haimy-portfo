
import Image from "next/image"
import { useState } from "react"

export default function Switch({ onClose }: { onClose: () => void }) {
    const [currentImage, setcuI] = useState(1)
    const handleClick = () => {
        setcuI(currentImage == 1 ? 2 : 1)
    }
    return (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center z-2">
            <button onClick={onClose} className="absolute top-4 right-4 z-10">
                <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            <div className="flex justify-center items-center w-250 h-111  relative">
                <Image src={'/home-switch.svg'} fill alt=""></Image>
                <div className="absolute size-10 hover:scale-104" style={{ top: 113, right: 35 }} onClick={handleClick}>
                    <Image src={'/switch-button.png'} fill alt=""></Image>
                </div>
                <div className="absolute w-147 h-84 z-1 rounded-sm" style={{ top: 55, left: 203 }}>
                    <Image src={'/switch-1.png'} className={`${currentImage == 1 ? '' : 'hidden '} rounded-sm transition-all duration-300`} alt="" fill></Image>
                    <Image src={'/switch-2.png'} className={`${currentImage != 1 ? '' : 'hidden '} rounded-sm transition-all duration-300`} alt="" fill></Image>
                </div>
            </div>

        </div >
    )
}
