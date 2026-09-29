function Heritage() {
  return (
    <section id="heritage" className="relative min-h-[850px] overflow-hidden reveal">
      <img src="images/culture.jpg" alt="Ethiopian heritage" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/60" />
      <div className="relative z-10 mx-auto flex min-h-[850px] max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D9A441]">Heritage</p>
          <h2 className="display-font text-6xl leading-[1.05] md:text-8xl">Stories carved<br /><span className="italic text-[#D9A441]">into time.</span></h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/70">Walk through places where civilizations rose, kingdoms flourished and traditions continue to shape the present.</p>
          <button className="mt-9 rounded-full border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-[#07120E]">Discover heritage</button>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block"><p className="vertical-text text-[9px] uppercase tracking-[0.4em] text-white/40">Ancient • Living • Eternal</p></div>
    </section>
  );
}
export default Heritage;