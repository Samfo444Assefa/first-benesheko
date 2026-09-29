import { ArrowUpRight } from "lucide-react";

const foods = [
  { name:" አቶ ሃብታሙ ካፍትን", category:"የቤንች ሸኮ ዞን ዋና አስተዳዳሪ ", image:"images/habtamu.jpg" },
  { name:"አቶ ደግፌ ኩድን ", category:"የቤንች ሸኮ ዞን ብልጽግና ፓርቲ ቅ/ጽ/ቤት ሃላፊ", image:"images/degefe.jpg" },
  { name:" ኢንጂነር ሰለሞን", category:"የቤንች ሸኮ ዞን ከንቲባ", image:"images/solo.jpg"}
];

function Food() {
  return (
    <section  id="culture" className="section-padding bg-[#0B1D16] reveal">
      <div className="mx-auto max-w-7xl px-3 lg:px-10">
        <div className="mb-8 text-center">
          <h2 className="mb-5  uppercase tracking-[0.4em] text-[#D9A441]">Bench Shok zone leaders</h2>
          {/* <h2 className="display-font text-5xl md:text-7xl">A journey through flavor</h2> */}
          {/* <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">Food is more than nourishment here. It is hospitality, ceremony and connection.</p> */}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {foods.map(f => <article key={f.name} className="group relative h-[500px] overflow-hidden">
            <img src={f.image} alt={f.name} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D9A441]">{f.category}</p>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="display-font text-3xl">{f.name}</h3>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition group-hover:border-[#D9A441] group-hover:bg-[#D9A441] group-hover:text-[#07120E]"><ArrowUpRight size={16} /></div>
              </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
export default Food;