
import Image from "next/image"

export default function Dslite({ onClose }: { onClose: () => void }) {

    return (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center z-2">
            <button onClick={onClose} className="absolute top-4 right-4 z-10">
                <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            <div className="flex justify-center items-center w-160 h-160  relative">
                <Image src={'/dslite-bg.svg'} fill alt=""></Image>
                <div className="absolute w-72 h-53 z-1 rounded-sm" style={{ top: 47, left: 175 }}>
                    <Image src={'/dslite-1.png'} className="rounded-sm" alt="" fill></Image>
                </div>
                <div className="absolute w-72 h-53 z-1 rounded-sm" style={{ top: 373, left: 175 }}>
                    <Image src={'/dslite-2.png'} className="rounded-sm" alt="" fill></Image>
                </div>
            </div>

        </div >
    )
}
