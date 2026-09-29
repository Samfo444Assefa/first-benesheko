import { ArrowDown, Play } from "lucide-react";

function Hero({ onEnter }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="images/hero.png" alt="Ethiopian landscape" className="h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-gradient absolute inset-0" />
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <header className="flex items-center justify-between px-6 py-7 lg:px-14">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/60">
              <span className="text-lg font-bold text-[#D9A441]">BS</span>
            </div>
            <div>
              {/* <p className="text-sm tracking-[0.35em]">BenchSheko</p> */}
              {/* <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">Land of Green Vally</p> */}
            </div>
          </div>
          {/* <button className="hidden text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white md:block" onClick={onEnter}>Skip intro</button> */}
        </header>

        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 text-center">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#D9A441]">Welcome to</p>
            <p className="display-font text-2xl leading-none md:text-3xl lg:text-[5rem]">Bench Sheko Zone</p>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/75 md:text-base">
              A Land of Green Vally a country where ancient civilizations, extraordinary landscapes and living traditions come together.
            </p>
            <button onClick={onEnter} className="group mx-auto mt-10 flex items-center gap-4 rounded-full border border-white/30 bg-white/10 px-7 py-4 backdrop-blur-md transition duration-500 hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-[#07120E]">
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">Exloper More</span>
              {/* <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9A441] text-[#07120E] transition group-hover:bg-[#07120E] group-hover:text-[#D9A441]"><Play size={13} fill="currentColor" /></span> */}
            </button>
          </div>
        </div>

        {/* <div className="flex items-center justify-center pb-8">
          <div className="flex flex-col items-center gap-3 text-white/50">
            <span className="text-[9px] uppercase tracking-[0.35em]">Scroll to discover</span>
            <ArrowDown size={17} className="animate-bounce" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
export default Hero;