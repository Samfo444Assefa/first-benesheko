function ExperienceIntro() {
  return (
    <section id="experience" className="section-padding reveal">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#D9A441]">The beginning</p>
            <h2 className="display-font text-5xl leading-tight md:text-7xl">
              Where the<br /><span className="text-[#D9A441]">journey</span><br />begins.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-white/70">Benche sheko  is not simply a destination. It is a story that has been unfolding for thousands of years.</p>
            <p className="mt-6 text-base leading-8 text-white/50">Bench Sheko (previously known as Bench Maji) is a zone in the South West Ethiopia Peoples' Region of Ethiopia. Bench Sheko is bordered on the south and southeast by West Omo, on the west by the Gambela Region on the north by Sheka, and on the east by Keffa. The administrative center of Bench Sheko is Mizan Teferi.</p>
            <div className="mt-10 grid grid-cols-3 gap-5">
              {[["3,000+","Years of history"],["80+","Languages"],["12+","UNESCO sites"]].map(([n,l]) => <div key={l}><p className="display-font text-3xl text-[#D9A441]">{n}</p><p className="mt-2 text-[9px] uppercase tracking-widest text-white/40">{l}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExperienceIntro;