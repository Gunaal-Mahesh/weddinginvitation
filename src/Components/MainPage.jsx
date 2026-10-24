
import React, { useState, useEffect } from "react";
import cover from "../assets/cover.png";
import groomImg from "../assets/groom.jpg";
import brideImg from "../assets/bride.png";

export default function MainPage() {
  const targetDate = new Date("2026-11-20T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown Timer
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

  // Scroll Reveal Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-zoom, .reveal-left, .reveal-right"
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#fdf6ed] flex flex-col items-center select-none">

      {/* SECTION 1: COVER */}
      <section
        className="w-full max-w-[480px] min-h-[100svh] mx-auto flex flex-col items-center text-center px-5 sm:px-7 pt-[11svh] pb-7 bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url(${cover})` }}
      >
        {/* Header */}
        <div className="w-full flex flex-col justify-center items-center gap-1 z-10 px-2">
          <div className="font-cherry text-[10px] sm:text-xs tracking-[1.5px] text-black font-semibold max-w-xs leading-snug drop-shadow-sm">
            <span>Wedding date</span>
            <span className="block font-bold text-amber-900 mt-0.5">
              20 November 2026
            </span>
          </div>

          <h1 className="font-playfair text-amber-950 pt-3 text-2xl sm:text-4xl font-bold leading-tight flex flex-col items-center my-1 drop-shadow-sm">
            <span>JERROLD A</span>
            <span className="text-xl sm:text-2xl my-0.5">&</span>
            <span>PRIYANKA R</span>
          </h1>
        </div>

        {/* Flexible space for background artwork */}
        <div className="flex-1 min-h-[15vh]" />

        {/* Invitation Details */}
        <div className="w-full pt-4 flex flex-col justify-start items-center gap-2 z-10">
          <div className="font-playfair italic text-lg sm:text-2xl text-amber-900 font-medium leading-tight">
            <span>Jerrold & Priyanka</span>
            <span className="block text-base sm:text-xl text-amber-800">
              warmly invite you
            </span>
          </div>

          <p className="font text-[10px] sm:text-xs tracking-[1px] text-stone-800 uppercase font-medium mt-2 max-w-xs leading-relaxed">
            "With the blessings of God and our beloved families, we cordially invite you to celebrate the wedding"
          </p>
        </div>

        {/* Invitation Image */}
        <div className="flex flex-wrap justify-center pt-4 z-10">
          <a
            href="/in.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-amber-900/90 text-white font-cherry text-xs sm:text-sm tracking-wide shadow-md hover:bg-amber-950 transition-all duration-200"
          >
            View Invitation 📄
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce text-stone-600 font-medium text-xs mt-auto pt-6 z-10">
          Scroll Down ↓
        </div>

        {/* Torn Border */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-0">
          <svg
            className="block w-full h-[32px] sm:h-[45px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,40 350,-20 500,25 C650,70 800,10 950,35 C1100,60 1150,15 1200,30 L1200,120 L0,120 Z"
              fill="#fdf6ed"
            />
          </svg>
        </div>
      </section>

      {/* SECTION 2: EVENT DETAILS */}
      <section className="w-full max-w-[480px] mx-auto bg-[#fdf6ed] px-4 sm:px-6 pt-10 pb-12 flex flex-col items-center text-center relative overflow-hidden">

        <h2 className="reveal font-playfair text-2xl sm:text-4xl italic text-amber-950 border-b border-amber-900/20 pb-3 w-full mb-7">
          Event Details & Venue
        </h2>

        <div className="reveal w-full bg-white/60 backdrop-blur-md border border-amber-200/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5 text-stone-800 z-10">

          {/* Ceremony */}
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

          <div className="w-24 h-px bg-amber-300/60 mx-auto" />

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

          <div className="w-24 h-px bg-amber-300/60 mx-auto" />

          <div className="pt-1">
            <a
              href="https://maps.google.com/?q=St.+Theresa%27s+Church+Karur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full bg-amber-900/90 text-white font-cherry text-xs sm:text-sm tracking-wide shadow-md hover:bg-amber-950 transition-colors"
            >
              Get Directions 📍
            </a>
          </div>
        </div>

        {/* Torn Border */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-0">
          <svg
            className="block w-full h-[28px] sm:h-[40px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,40 350,-20 500,25 C650,70 800,10 950,35 C1100,60 1150,15 1200,30 L1200,120 L0,120 Z"
              fill="#f7e5d1"
            />
          </svg>
        </div>
      </section>

      {/* SECTION 3: COUNTDOWN */}
      <section className="w-full max-w-[480px] mx-auto bg-[#f7e5d1] px-4 sm:px-6 pt-8 pb-10 flex flex-col items-center text-center">

        <h2 className="reveal font-playfair text-2xl sm:text-4xl italic text-amber-950 border-b border-amber-900/20 pb-3 w-full mb-7">
          The Celebration Begins In
        </h2>

        {/* Countdown */}
        <div className="reveal-zoom grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-[340px] mb-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="min-w-0 bg-white/80 backdrop-blur-md border border-amber-200/80 rounded-xl p-2 sm:p-3 shadow-md flex flex-col items-center"
            >
              <span className="font-playfair text-xl sm:text-3xl font-bold text-amber-950 tabular-nums">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-cherry text-[9px] sm:text-[11px] text-amber-900/80 uppercase tracking-wider font-semibold mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="reveal space-y-2 pt-2 mb-8">
          <p className="font-playfair italic text-xl sm:text-3xl text-amber-900">
            We look forward to seeing you!
          </p>
          <p className="font-cherry text-xs sm:text-sm text-stone-700 max-w-xs mx-auto leading-relaxed">
            Your presence will make our special day even more memorable.
          </p>
          <p className="font-cinzel text-sm sm:text-base font-bold text-amber-950 pt-2 tracking-wider">
            With Love
          </p>
        </div>

        {/* Couple Profiles */}
        <div className="flex justify-center items-start gap-5 sm:gap-10 w-full max-w-sm mb-2">

          {/* Groom */}
          <div className="reveal-left flex flex-col items-center flex-1 min-w-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-amber-900/30 overflow-hidden shadow-lg bg-amber-100">
              <img
                src={groomImg}
                alt="Jerrold A"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-playfair text-base sm:text-xl font-bold text-amber-950 mt-3">
              Jerrold A
            </h3>
            <p className="font-serif font-bold text-xs sm:text-sm text-stone-700 tracking-wide">
              TCS
            </p>
          </div>

          {/* Bride */}
          <div className="reveal-right flex flex-col items-center flex-1 min-w-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-amber-900/30 overflow-hidden shadow-lg bg-amber-100">
              <img
                src={brideImg}
                alt="Priyanka R"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-playfair text-base sm:text-xl font-bold text-amber-950 mt-3">
              Priyanka R
            </h3>
            <p className="font-serif font-bold text-xs sm:text-sm text-stone-700 tracking-wide">
              TCS
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATIONS */}
      <section className="w-full max-w-[480px] mx-auto bg-[#fdf6ed] px-4 sm:px-6 pt-12 pb-16 flex flex-col items-center text-center relative overflow-hidden">

        {/* Torn Top Border */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-0 rotate-180">
          <svg
            className="block w-full h-[28px] sm:h-[40px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,40 350,-20 500,25 C650,70 800,10 950,35 C1100,60 1150,15 1200,30 L1200,120 L0,120 Z"
              fill="#f7e5d1"
            />
          </svg>
        </div>

        <h2 className="reveal font-playfair text-2xl sm:text-4xl italic text-amber-950 mb-2 z-10 pt-2">
          Location & Venues
        </h2>

        <p className="reveal font-cherry text-xs sm:text-sm text-stone-600 mb-8 max-w-xs z-10">
          Tap below to view the locations on Google Maps
        </p>

        {/* Venue Circles */}
        <div className="flex justify-center items-start gap-5 sm:gap-10 w-full max-w-sm z-10">

          {/* Church */}
          <a
            href="https://maps.google.com/?q=St.+Theresa%27s+Church+Karur"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-left flex flex-col items-center flex-1 min-w-0 group cursor-pointer"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-amber-900/30 bg-white/80 backdrop-blur-md shadow-xl flex flex-col justify-center items-center p-3 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-900">
              <span className="text-2xl sm:text-3xl mb-1">⛪</span>
              <span className="font-playfair font-bold text-amber-950 text-xs sm:text-sm">
                Church
              </span>
              <span className="font-cherry text-[10px] text-stone-500 mt-0.5">
                Karur
              </span>
            </div>
            <h3 className="font-playfair text-xs sm:text-base font-bold text-amber-950 mt-3 group-hover:underline">
              St. Theresa's Church
            </h3>
          </a>

          {/* Mahal */}
          <a
            href="https://maps.google.com/?q=DP+Mahal+Pasupathipalayam+Karur"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-right flex flex-col items-center flex-1 min-w-0 group cursor-pointer"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-amber-900/30 bg-white/80 backdrop-blur-md shadow-xl flex flex-col justify-center items-center p-3 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-900">
              <span className="text-2xl sm:text-3xl mb-1">🏛️</span>
              <span className="font-playfair font-bold text-amber-950 text-xs sm:text-sm">
                Reception
              </span>
              <span className="font-cherry text-[10px] text-stone-500 mt-0.5">
                Mahal
              </span>
            </div>
            <h3 className="font-playfair text-xs sm:text-base font-bold text-amber-950 mt-3 group-hover:underline">
              D.P. Mahal
            </h3>
          </a>

        </div>
      </section>
    </main>
  );
}
