

import Image from "next/image"
import { Rufina } from "next/font/google"
const rufi = Rufina({
    weight: "400"
})

const books = [
    {
        text: "On that bus ride, Thư once again sees five twinkling stars in the sky, as if they were smiling at her, sparking a hope of reuniting with her family, one with herself, her siblings, her mother, and her father. Those stars will go on shining in the sky, the bus keeps rolling forward, the wheels of life continue to turn, and no reader will ever know whether they will truly be reunited. As the book closes, some will carry deeply in their hearts the dream of Thư’s family reunion, while others may quietly breathe a sigh of relief for the bright new future awaiting her. These questions will forever remain unanswered, yet perhaps that is precisely the beauty of little Thư’s story: the fate of each character will ultimately depend on the aspirations and emotions that linger uniquely within the heart of every reader.",
        bgLink: "/smallbook-bg-3.svg",
        coverLink: "smallbook-cover-3.svg"
    }, {
        text: "Everyone who chooses to fight the plague, to rebel against death, knows that their efforts increase their chances of contracting it, yet they also realize that they could fall ill even if they did nothing at all. Faced with such a seemingly meaningless choice between death and death, the very act of choosing to act, to fight for themselves and their community, becomes all the more significant. It is a note of defiance cast into the wind, yet that note is the only thing through which one can define oneself.",
        bgLink: "/smallbook-bg-2.svg",
        coverLink: "smallbook-cover-2.svg"
    }, {
        text: "He knows the 'why' for his existence, and will be able to bear almost any 'how'.",
        bgLink: "/smallbook-bg-1.svg",
        coverLink: "smallbook-cover-1.svg"
    },
]

export default function Smallbook({ onClose, activeSmallBook }: { onClose: () => void, activeSmallBook: number }) {

    return (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center z-2">
            <button onClick={onClose} className="absolute top-4 right-4 z-10">
                <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            <div className="flex justify-center items-center -space-x-15">
                <div className="relative flex justify-center items-center w-168 h-166 text-center">
                    <div className={`${rufi.className} px-20 text-lg z-1 relative`}>
                        {books[activeSmallBook - 1].text}
                    </div>
                    <Image src={books[activeSmallBook - 1].bgLink} alt="" fill></Image>
                </div>
                <div className="relative">
                    <Image src={books[activeSmallBook - 1].coverLink} alt="" width={600} height={800}></Image>
                </div>
            </div>

        </div>
    )
}
