import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden gradient-bg text-foreground">
      
      {/* Decorative background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[100px] pointer-events-none" />

      <main className="relative z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center justify-center">
        
        {/* Main Glassmorphic Card */}
        <div className="glass rounded-[2rem] p-8 md:p-12 lg:p-16 w-full flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase mb-2">
            ✨ Welcome to the Future
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
            Geomatic Portfolio
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            A showcase of modern web engineering, blending robust functionality with stunning aesthetic design. Fast, accessible, and deeply interactive.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#"
              className="smooth-hover flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary-hover shadow-lg shadow-primary/25"
            >
              Explore the Work
            </a>
            <a
              href="#"
              className="smooth-hover flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-transparent border-2 border-border text-foreground font-semibold text-lg hover:bg-foreground/5"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
          {[
            { title: "Next.js 15", desc: "App Router & React Server Components for peak performance." },
            { title: "Glassmorphism", desc: "Sophisticated styling with backdrop blurs and subtle depths." },
            { title: "Fluid Motions", desc: "Micro-interactions that make the interface come alive." }
          ].map((feature, i) => (
            <div key={i} className="glass rounded-2xl p-6 flex flex-col items-start text-left smooth-hover cursor-default">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
