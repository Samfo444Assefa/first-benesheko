import { MapPin } from "lucide-react";
import { useState } from "react";

const regions = [
  { name:"Coffee", description:"Vast landscapes, forests, coffee origins and remarkable natural diversity.", image:"images/benchsheko.jpg" },
  { name:"Debi luguge", description:"Historic landscapes, ancient churches, castles and mountain scenery.", image:"images/dd1.png" },
  { name:"benche culture", description:"Ancient rock churches, dramatic mountains and archaeological heritage.", image:"images/culture.jpg" },
  { name:"SNNPR", description:"Diverse communities, landscapes and cultural traditions.", image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85" },
  { name:"Harari", description:"A historic walled city known for architecture, culture and traditions.", image:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1400&q=85" }
];

function Regions() {
  const [selected,setSelected] = useState(regions[0]);
  return (
    <section id="regions" className="section-padding bg-[#0B1D16] reveal">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14"><p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#D9A441]">Explore the country</p><h2 className="display-font text-5xl md:text-7xl">One nation.<br />Many worlds.</h2></div>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="flex flex-col">
            {regions.map((r,index) => <button key={r.name} onClick={()=>setSelected(r)} className={`group flex items-center justify-between border-b border-white/10 py-6 text-left transition ${selected.name===r.name ? "text-[#D9A441]" : "text-white/50 hover:text-white"}`}>
              <div className="flex items-center gap-5"><span className="text-[10px]">0{index+1}</span><span className="display-font text-2xl">{r.name}</span></div>
              <MapPin size={16} className={selected.name===r.name ? "opacity-100" : "opacity-0 group-hover:opacity-100"} />
            </button>)}
          </div>
          <div className="relative min-h-[550px] overflow-hidden">
            <img src={selected.image} alt={selected.name} className="absolute inset-0 h-full w-full object-cover transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8"><p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-[#D9A441]">Discover</p><h3 className="display-font text-5xl">{selected.name}</h3><p className="mt-4 max-w-lg text-sm leading-7 text-white/65">{selected.description}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Regions;