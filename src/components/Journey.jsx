import { ArrowRight, CalendarDays, Compass, Map } from "lucide-react";

function Journey() {
  return (
    <section id="journey" className="section-padding reveal">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10291F]">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#D9A441]/10 blur-3xl" />
          <div className="relative z-10 p-8 md:p-14 lg:p-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#D9A441]">Your journey</p>
              <h2 className="display-font text-5xl leading-tight md:text-7xl">Ethiopia is<br /><span className="text-[#D9A441]">waiting.</span></h2>
              <p className="mt-7 max-w-xl text-sm leading-8 text-white/55">Build your own journey through landscapes, history, culture and unforgettable experiences.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="group flex items-center gap-4 rounded-full bg-[#D9A441] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#07120E] transition hover:bg-white">Start planning <ArrowRight size={15} className="transition group-hover:translate-x-1" /></button>
                <button className="rounded-full border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:border-[#D9A441] hover:text-[#D9A441]">Explore experiences</button>
              </div>
            </div>
            <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
              {[[Compass,"Find a destination","Discover places based on your interests."],[CalendarDays,"Choose your time","Find experiences suited to your trip."],[Map,"Build your route","Connect destinations into one journey."]].map(([Icon,title,text]) => <div key={title} className="bg-[#10291F] p-7"><Icon size={23} className="text-[#D9A441]" /><h3 className="mt-5">{title}</h3><p className="mt-2 text-xs leading-6 text-white/40">{text}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Journey;