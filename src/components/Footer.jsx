import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

function Footer() {
  const backToTop = () => window.scrollTo({ top:0, behavior:"smooth" });
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9A441]"><span className="font-bold text-[#D9A441]">E</span></div>
              <div><p className="text-sm tracking-[0.3em]">ETHIOPIA</p><p className="text-[8px] tracking-[0.25em] text-white/40">LAND OF ORIGINS</p></div>
            </div>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/40">Discover a country of ancient history, extraordinary nature, vibrant cultures and unforgettable human stories.</p>
          </div>
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#D9A441]">Explore</p>
            <div className="flex flex-col gap-4 text-sm text-white/50">
              <a href="#destinations">Destinations</a><a href="#culture">Culture</a><a href="#heritage">Heritage</a><a href="#regions">Regions</a>
            </div>
          </div>
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#D9A441]">Connect</p>
            <div className="flex gap-3">
              {[Instagram,Facebook,Youtube].map((Icon,i)=><a href="#" key={i} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D9A441]"><Icon size={16}/></a>)}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-[9px] uppercase tracking-[0.2em] text-white/30 md:flex-row">
          <p>© 2026 Discover Ethiopia</p>
          <button onClick={backToTop} className="flex items-center gap-3 transition hover:text-[#D9A441]">Back to top <ArrowUp size={14}/></button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;