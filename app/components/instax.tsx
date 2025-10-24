
import Image from "next/image"

export default function Instax({ onClose }: { onClose: () => void }) {

    return (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-end z-2">
            <button onClick={onClose} className="absolute top-4 right-4 z-10">
                <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            <div className="flex justify-center items-center w-125 h-168  relative">
                <Image src={'/instax-bg.png'} fill alt=""></Image>
            </div>

        </div>
    )
}
