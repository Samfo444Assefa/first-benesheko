import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Experience", "experience"], ["Culture", "culture"], ["Destinations", "destinations"],
    ["Heritage", "heritage"], ["Taste", "food"], ["Regions", "regions"], ["Journey", "journey"]
  ];
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="border-b border-white/10 bg-[#07120E]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <button onClick={() => scrollTo("experience")} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]"><span className="font-bold text-[#D9A441]">BS</span></div>
            <div className="hidden sm:block">
              {/* <p className="text-xs tracking-[0.3em]">BENCHSHEKO</p> */}
              {/* <p className="text-[8px] tracking-[0.25em] text-white/50">LAND OF ORIGINS</p> */}
            </div>
          </button>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:text-[#D9A441]">{label}</button>)}
          </div>

          <button onClick={() => setOpen(!open)} className="rounded-full border border-white/20 p-3 lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && <div className="border-t border-white/10 bg-[#07120E] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="text-left text-xs uppercase tracking-[0.2em] text-white/70">{label}</button>)}
          </div>
        </div>}
      </div>
    </nav>
  );
}
export default Navbar;