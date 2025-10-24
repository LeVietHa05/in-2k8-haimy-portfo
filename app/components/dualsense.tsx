
import Image from "next/image"
import { useState } from "react"

const data = [{
    img: "/dualsense-honkai.png",
    text: "In the cosmos of Honkai Star Rail, where a spaceship glides through nebulae and destinies collide, the vast ocean of philosophy all crashing down into pixels. Each frame pulses with existential questions, weaving Plato’s shadows on the cave wall into the radiant struggles of characters who defy fate. A lone figure, bound to a cycle of 33 million loops, pushes a sphere up an endless incline, only to watch it tumble, wrestling with meaning in a universe indifferent to their toil.<br><br>Here, the game transcends mere combat, becoming a canvas for emotional storytelling. Philosophy, literature, gaming all intertwine together and deliver one of the most striking stories ever.",
    cdLink1: "/dualsense-honkai-cd.png",
    cdLink2: "/dualsense-split-cd-2.png",
    cdLink3: "/dualsense-split-cd-3.png",
    bg1: "#303F7A",
    bg2: "#4B67D8"
}, {
    img: "/dualsense-split.png",
    text: "What’s a better game than the one where both the (slightly) old, the adult and the teenage can play together - across ages, across genders? Playing this game with my sister while my mom dotes playfully on us, I learn the value of patience through frustration and determination amidst humiliation as we find ourselves replaying the same cutscene for 5 hours. <br> <br>Split Fiction is not just a simple co-op game; it’s military training for understanding and cooperation between teammates. Each stage will be one opportunity for you to see from another’s perspective, to synchronize your movements, to fail together and try again until chaos steps out and allows for harmony to take its rightful place.",
    cdLink1: "/dualsense-split-cd-1.png",
    cdLink2: "/dualsense-split-cd-2.png",
    cdLink3: "/dualsense-split-cd-3.png",
    bg1: "#275372",
    bg2: "#4B9DD8"
}]

export default function Dualsense({ onClose }: { onClose: () => void }) {
    const [activegame, setActivegame] = useState<{ img: string, text: string, cdLink1: string, cdLink2: string, cdLink3: string, bg1: string, bg2: string } | null>(null)
    return (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center z-2 overflow-hidden">
            <button onClick={onClose} className="absolute top-4 right-4 z-10">
                <Image src="/close.svg" alt="Close" width={24} height={24} />
            </button>
            {activegame && <button onClick={() => setActivegame(null)} className="absolute top-4 left-4 z-10">
                <Image src="/left.svg" alt="Close" width={24} height={24} />
            </button>}
            <div className="flex justify-center items-center w-125 h-168  fixed -bottom-1/3">
                <Image src={'/home-dualsense.svg'} fill alt=""></Image>
            </div>
            {
                !activegame && (
                    <div className="flex w-fit h-full">
                        <div className="relative" onClick={() => setActivegame(data[0])}>
                            <Image src={"/dualsense-honkai.png"} alt="" width={500} height={500}></Image>
                        </div>
                        <div className="relative" onClick={() => setActivegame(data[1])}>
                            <Image src={"/dualsense-split.png"} alt="" width={500} height={500}></Image>
                        </div>
                    </div>
                )
            }
            {
                activegame && (
                    <div className="flex relative -top-20">
                        <div className={`w-98 h-121 py-5 px-4 rounded-lg relative z-1`} style={{ backgroundColor: `${activegame.bg1}`, boxShadow: `0 0 85px rgba(255,255,255,1)` }}>
                            <div className={`h-full w-full rounded-lg`} style={{ backgroundColor: `${activegame.bg2}` }}>
                                <div>
                                    <Image src={activegame.cdLink1} alt="" className="absolute top-1/2 left-1/2 -translate-1/2" width={700} height={700}></Image>
                                    <Image src={activegame.cdLink2} alt="" className="absolute top-1/2 left-1/2 -translate-1/2" width={42} height={42}></Image>
                                    <Image src={activegame.cdLink3} alt="" className="absolute top-1/2 left-1/2 -translate-1/2" width={36} height={36}></Image>
                                </div>
                            </div>
                        </div>
                        <div className={`w-98 h-121 py-5 px-4 rounded-lg realtive z-0`} style={{ backgroundColor: `${activegame.bg1}`, boxShadow: `0 0 85px rgba(255,255,255,1)` }}>
                            <div className={`h-full w-full rounded-lg relative`} style={{ backgroundColor: `${activegame.bg2}` }}>
                                <Image src={'/dualsense-text-bg.png'} alt="" fill></Image>
                                <div className="relative z-1 p-16 text-[11px] font-[Times_New_Roman]" dangerouslySetInnerHTML={{ __html: activegame.text }}>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
