"use client";

import ScrollReveal from "./ScrollReveal";

const features = [
  {
    text: "Our highway and surface street capabilities enable an unprecedented Direct to Customer trucking model and seamless entry into robotaxis.",
    video: "https://static.ext.waabi.ai/scene_1_v2_HD_FINAL.mp4",
  },
  {
    text: "The combination of advanced AI and neural simulation sets a new standard for the entire industry.",
    video: "https://static.ext.waabi.ai/Scalable.mp4",
  },
  {
    text: "A single, verifiable end-to-end AI model capable of reasoning serves as a shared brain powering multiple verticals.",
    video: "https://static.ext.waabi.ai/scene_3_v5_HD_FINAL-small.mp4",
  },
];

export default function UnlockingScale() {
  return (
    <section className="bg-dark text-white py-20 md:py-32 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <h2 className="font-zagma text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Unlocking scale in the real world.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-16">
            We deliver a product that&apos;s faster, safer, more scalable, and
            efficient—unlocking the true potential of autonomous transportation.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="rounded-card overflow-hidden bg-dark border border-white/10 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={feature.video} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <p className="text-white/80 text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
