
'use client'
import Image from "next/image";
import { useState } from "react";
import Aboutme from "./components/aboutme";
import Smallbook from "./components/smallbook";
import { createPortal } from "react-dom";
import CanonEDS from "./components/canoneds";
import CanonIxy from "./components/canonixy";

export default function Home() {

  const [showAbout, setShowAbout] = useState(false)
  const [activeSmallBook, setactivesmallbook] = useState<number | null>(null)
  const [showCanonEDS, setshowcanoneds] = useState(false)
  const [showCanonIxy, setshowcanonixy] = useState(false)

  return (
    <div className="w-[1440px] mx-auto relative z-1">

      <div className="w-160 h-210 mx-auto relative  flex flex-col p-20 pt-32">
        <Image src={'/shelf.png'} alt="" fill></Image>
        <div className="justify-between flex z-1 h-40 mt-2 ml-4">
          <div onClick={() => setShowAbout(true)}>
            <Image src={'/aboutme.svg'} alt="" width={156} height={126} ></Image>
          </div>
          <div className="flex -space-x-4">
            <div className="" onClick={() => setactivesmallbook(3)}>
              <Image src={'/home-book-3.svg'} alt="" width={92} height={128} ></Image>
            </div>
            <div className="" onClick={() => setactivesmallbook(2)}>
              <Image src={'/home-book-4.svg'} alt="" width={92} height={128} ></Image>
            </div>
            <div className="" onClick={() => setactivesmallbook(1)}>
              <Image src={'/home-book-5.svg'} alt="" width={92} height={128} ></Image>
            </div>
          </div>
        </div>

        <div className=" flex z-1 h-40 justify-between items-end mt-12 ml-4">
          <div className="flex-4" onClick={() => setshowcanonixy(true)}>
            <Image src={'/home-canon-ixy.svg'} alt="" width={135} height={80} ></Image>
          </div>
          <div className="flex-3">
            <Image src={'/home-instax.svg'} alt="" width={105} height={120}></Image>
          </div>
          <div className="flex-3" onClick={() => setshowcanoneds(true)}>
            <Image src={'/home-canon-eds.svg'} alt="" width={134} height={120} ></Image>
          </div>
        </div>

        <div className=" flex z-1 h-40 mt-5 justify-around">
          <div className=" flex items-end">
            <div>
              <Image src={'/home-book-2.svg'} alt="" width={39} height={169}></Image>
            </div>
            <div>
              <Image src={'/home-book-1.svg'} alt="" width={36} height={155}></Image>
            </div>
          </div>
          <Image src={'/home-typer.svg'} alt="" width={200} height={149} ></Image>
        </div>

        <div className="mt-8 ml-3 flex z-1 h-40 items-end justify-between">
          <div>
            <Image src={'/home-dslite.svg'} alt="" width={135} height={140} ></Image>
          </div>
          <div>
            <Image src={'/home-switch.svg'} alt="" width={140} height={60} ></Image>
          </div>
          <div>
            <Image src={'/home-dualsense.svg'} alt="" width={120} height={80} ></Image>
          </div>
        </div>
      </div>
      {showAbout && createPortal(<Aboutme onClose={() => setShowAbout(false)} />, document.body)}
      {activeSmallBook && createPortal(<Smallbook onClose={() => setactivesmallbook(null)} activeSmallBook={activeSmallBook} />, document.body)}
      {showCanonEDS && createPortal(<CanonEDS onClose={() => setshowcanoneds(false)} />, document.body)}
      {showCanonIxy && createPortal(<CanonIxy onClose={() => setshowcanonixy(false)} />, document.body)}
    </div>
  );
}
