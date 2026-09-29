import { ArrowUpRight } from "lucide-react";

const destinations = [
  { name:"Lalibela", location:"Amhara", description:"Rock-hewn churches carved from living stone.", image:"images/d11.png" },
  { name:"debi Loguge", location:"", description:"Dramatic peaks, cliffs and unique wildlife.", image:"images/d11.png" },
  { name:"debi Loguge", location:"", description:"Dramatic peaks, cliffs and unique wildlife.", image:"images/d11.png" },
  { name:"Harar", location:"Harari", description:"A historic walled city filled with living culture.", image:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85" },
  { name:"Lake Tana", location:"Amhara", description:"Ethiopia's great lake and island monasteries.", image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85" }
];

function Destinations() {
  return (
    <section id="destinations" className="section-padding reveal">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D9A441]">Explore</p><h2 className="display-font text-5xl md:text-7xl">Extraordinary places</h2></div>
          <p className="max-w-md text-sm leading-7 text-white/50">From ancient cities to wild landscapes, discover places that tell the story of Ethiopia.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {destinations.map((d,index) => <article key={d.name} className={`group relative overflow-hidden ${index===0 ? "md:row-span-2 md:h-[720px]" : "h-[350px]"}`}>
            <img src={d.image} alt={d.name} className="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-end justify-between">
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#D9A441]">{d.location}</p>
                  <h3 className="display-font text-3xl md:text-4xl">{d.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">{d.description}</p>
                </div>
                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 transition group-hover:border-[#D9A441] group-hover:bg-[#D9A441] group-hover:text-[#07120E]"><ArrowUpRight size={18} /></button>
              </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
export default Destinations;