import { Music, Coffee, Shirt, Utensils, Users, Sparkles } from "lucide-react";

const cultureItems = [
  { icon:Music, title:"Music", text:"Sounds and rhythms passed through generations." },
  { icon:Shirt, title:"Tradition", text:"Distinctive clothing, craftsmanship and identity." },
  { icon:Coffee, title:"Coffee", text:"Experience the birthplace of coffee culture." },
  { icon:Utensils, title:"Cuisine", text:"Flavors, spices and communal dining traditions." },
  { icon:Users, title:"People", text:"Many communities connected by shared history." },
  { icon:Sparkles, title:"Celebration", text:"Festivals filled with color, music and meaning." }
];

function Culture() {
  return (
    <section id="culture" className="section-padding bg-[#0B1D16] reveal">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#D9A441]">Living culture</p>
            <h2 className="display-font text-5xl leading-tight md:text-7xl">A culture<br /><span className="text-[#D9A441]">alive</span></h2>
            <p className="mt-7 max-w-md text-sm leading-8 text-white/55">Culture in Ethiopia isn't something preserved behind glass. It is lived, celebrated and shared every day.</p>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {cultureItems.map(({icon:Icon,title,text}) => <div key={title} className="bg-[#0B1D16] p-8 transition duration-500 hover:bg-[#10291F]">
              <Icon size={25} strokeWidth={1} className="text-[#D9A441]" />
              <h3 className="mt-8 text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/45">{text}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Culture;