import React, { useState, useEffect } from "react";
import cover from "../assets/cover.png";
// Import your couple profile images here when ready, e.g.:
import groomImg from "../assets/groom.jpg";
 import brideImg from "../assets/bride.png";

export default function MainPage() {
  // Target Date: 20 November 2026
  const targetDate = new Date("2026-11-20T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <main className="w-full bg-[#fdf6ed] flex flex-col items-center select-none">
      
      {/* SECTION 1: Cover Screen */}
      <section
        className="w-full max-w-md h-[100svh] flex flex-col justify-between items-center text-center px-6 pt-6 pb-12 bg-cover bg-center bg-no-repeat relative overflow-hidden "
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        {/* Top Space under the Archway */}
        <div className="h-[12vh] sm:h-[15vh]" />

        {/* Header Text + Names */}
        <div className="w-full flex flex-col justify-center items-center gap-1 z-10 px-2">
          <div className="font-cherry text-[10px] sm:text-xs tracking-[1.5px] text-black font-semibold max-w-xs leading-snug drop-shadow-sm">
            <span>Wedding date</span>
            <span className="block font-bold text-amber-900 mt-0.5">20 November 2026</span>
          </div>

          <h1 className="font-playfair text-amber-950 pt-3 text-2xl sm:text-4xl font-bold leading-none flex flex-col items-center my-1 drop-shadow-sm">
            <span>JERROLD A</span>
            <span className="text-xl sm:text-2xl my-0.5">&amp;</span>
            <span className="-mt-1">PRIYANKA R</span>
          </h1>
        </div>

        {/* Space reserved for the Swans */}
        <div className="h-[28vh] sm:h-[30vh]" />

        {/* Remaining Details */}
        <div className="w-full flex-1 pt-6 flex flex-col justify-start items-center gap-2 z-10">
          <div className="font-playfair italic text-lg sm:text-2xl text-amber-900 font-medium leading-tight">
            <span>Jerrold &amp; Priyanka</span>
            <span className="block text-base sm:text-xl text-amber-800">warmly invite you</span>
          </div>

          <p className="font text-[11px] sm:text-xs tracking-[1px] text-stone-800 uppercase font-medium mt-2 max-w-xs leading-relaxed">
            "With the blessings of God and our beloved families, we cordially invite you to celebrate the wedding"
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce text-stone-600 font-medium text-xs pb-1 z-10">
          Scroll Down ↓
        </div>

        {/* Non-linear Torn Paper Bottom Border 1 */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-0">
          <svg
            className="relative block w-full h-[32px] sm:h-[48px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,40 350,-20 500,25 C650,70 800,10 950,35 C1100,60 1150,15 1200,30 L1200,120 L0,120 Z"
              fill="#fdf6ed"
            ></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: Event Details & Venue */}
      <section className="w-full max-w-md bg-[#fdf6ed] px-4 pt-8 pb-10 flex flex-col items-center text-center relative overflow-hidden">
        <h2 className="font-playfair text-3xl sm:text-4xl italic text-amber-950 border-b border-amber-900/20 pb-3 w-full max-w-lg mb-6">
          Event Details &amp; Venue
        </h2>

        {/* Semi-Transparent Glass Card */}
        <div className="w-full max-w-lg bg-white/60 backdrop-blur-md border border-amber-200/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5 text-stone-800 z-10">
          {/* Holy Mass / Ceremony */}
          <div className="space-y-1">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-amber-900">
              Wedding Ceremony
            </h3>
            <p className="font-cherry text-xs sm:text-sm text-stone-600">
              Holy Mass: 9:15 AM onwards
            </p>
            <p className="font-cherry text-sm sm:text-base font-medium pt-1">
              St. Theresa's Church, Karur
            </p>
          </div>

          <div className="w-24 h-[1px] bg-amber-300/60 mx-auto" />

          {/* Reception */}
          <div className="space-y-1">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-amber-900">
              Reception
            </h3>
            <p className="font-cherry text-xs sm:text-sm text-stone-600">
              12:00 PM Onwards
            </p>
            <p className="font-cherry text-sm sm:text-base font-medium pt-1">
              D.P. Mahal, Pasupathipalayam, Karur.
            </p>
          </div>

          <div className="w-24 h-[1px] bg-amber-300/60 mx-auto" />

          {/* Get Directions Button */}
          <div className="pt-1">
            <button className="px-5 py-2 rounded-full bg-amber-900/90 text-white font-cherry text-xs sm:text-sm tracking-wide shadow-md hover:bg-amber-900 transition-colors">
              Get Directions 📍
            </button>
          </div>
        </div>

        {/* Non-linear Torn Paper Bottom Border 2 */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-0">
          <svg
            className="relative block w-full h-[28px] sm:h-[40px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,40 350,-20 500,25 C650,70 800,10 950,35 C1100,60 1150,15 1200,30 L1200,120 L0,120 Z"
              fill="#f7e5d1"
            ></path>
          </svg>
        </div>
      </section>

      {/* SECTION 3: Live Countdown & Couple Profile Cards */}
      <section className="w-full max-w-md bg-[#f7e5d1] px-6 pt-6 pb-12 flex flex-col items-center text-center">
        <h2 className="font-playfair text-3xl sm:text-4xl italic text-amber-950 border-b border-amber-900/20 pb-3 w-full mb-6">
          The Celebration Begins In
        </h2>

        {/* Live Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-xs mb-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/80 backdrop-blur-md border border-amber-200/80 rounded-xl p-2.5 sm:p-3 shadow-md flex flex-col items-center"
            >
              <span className="font-playfair text-2xl sm:text-3xl font-bold text-amber-950">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-cherry text-[9px] sm:text-[11px] text-amber-900/80 uppercase tracking-wider font-semibold mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </div>

 

        {/* Warm Closing Note (Names Removed) */}
        <div className="space-y-2 pt-2">
          <p className="font-playfair italic text-2xl sm:text-3xl text-amber-900">
            We look forward to seeing you!
          </p>
          <p className="font-cherry text-xs sm:text-sm text-stone-700 max-w-xs mx-auto leading-relaxed">
            Your presence will make our special day even more memorable.
          </p>
          <p className="font-cinzel text-sm sm:text-base font-bold text-amber-950 pt-2 tracking-wider">
            With Love
          </p>
        </div>
               {/* Couple Profile Circles (Groom & Bride) */}
<div className="flex justify-center items-center gap-6 sm:gap-8 w-full max-w-sm mb-8">

  {/* Groom Profile */}
  <div className="flex flex-col  items-center">
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-amber-900/30 overflow-hidden shadow-lg bg-amber-100 relative">
      <img
        src={groomImg}
        alt="Jerrold A"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <h3 className="font-playfair text-lg sm:text-xl font-bold text-amber-950 mt-3">
      Jerrold A
    </h3>
    <p className="font-serif font-bold text-xs sm:text-sm text-stone-700 tracking-wide">
      TCS
    </p>
  </div>

  {/* Bride Profile */}
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-amber-900/30 overflow-hidden shadow-lg bg-amber-100 relative">
      <img
        src={brideImg}
        alt="Priyanka R"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <h3 className="font-playfair text-lg sm:text-xl font-bold text-amber-950 mt-3">
      Priyanka R
    </h3>
    <p className="font-serif font-bold text-xs sm:text-sm text-stone-700 tracking-wide">
      TCS
    </p>
  </div>

</div>
      </section>

    </main>
  );
}