import { ContactForm } from "@/components/contact-form";
import WorldMap from "@/components/ui/world-map";
import { IconMail, IconPhone, IconAward, IconLanguage } from "@tabler/icons-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 mb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center gap-8">
          {/* Text content */}
          <div className="relative z-10 text-center">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Let&apos;s <span className="text-primary">Connect</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-muted-foreground mb-8 max-w-md mx-auto"
            >
              Available for freelance projects, full-time roles, or just a
              friendly chat about tech. I&apos;d love to hear from you.
            </p>
          </div>

          {/* Two-column layout with Map and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full items-center mt-4">
            {/* Map (Left side) */}
            <div data-aos="fade-right" data-aos-delay="200" className="w-full flex justify-center">
              <div className="w-full max-w-2xl relative flex items-center justify-center scale-100 sm:scale-110 -ml-0 sm:-ml-4">
                <WorldMap
                  dots={[
                    {
                      start: { lat: 14.5995, lng: 120.9842 },
                      end: { lat: 37.7749, lng: -122.4194 }, // Dummy end
                    },
                  ]}
                  lineColor="#38bdf8"
                />
              </div>
            </div>

            {/* Contact form (Right side) */}
            <div data-aos="fade-left" data-aos-delay="300" className="w-full">
              <ContactForm />
            </div>
          </div>

          {/* Contact Details */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-12"
          >
            {/* Email */}
            <div className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <IconMail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Email</h3>
              <a href="mailto:jasonjamesstarita@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                jasonjamesstarita@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <IconPhone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:+639671792789" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                +63 967 179 2789
              </a>
            </div>

            {/* Languages */}
            <div className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <IconLanguage className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Languages</h3>
              <p className="text-xs text-muted-foreground">
                English, Filipino
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <IconAward className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Certifications</h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                Certified QuickBooks ProAdvisor<br />
                Computer System & Servicing NCII
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
