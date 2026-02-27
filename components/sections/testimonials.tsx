import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SparklesCore } from "@/components/ui/sparkles";

const testimonials = [
    {
        quote:
            "Jason delivered our capstone project ahead of schedule with excellent code quality. His ability to lead the team and make technical decisions under pressure was truly impressive.",
        name: "Project Adviser",
        designation: "Capstone Adviser, USTP",
        src: "https://ui-avatars.com/api/?name=PA&background=062056&color=38bdf8&size=200&bold=true",
    },
    {
        quote:
            "Working with Jason on the logistics dashboard was a great experience. He quickly understood our business needs and translated them into a functional, reliable system that our team uses daily.",
        name: "Eamon Express Team",
        designation: "Client, EamonExpress",
        src: "https://ui-avatars.com/api/?name=EE&background=062056&color=38bdf8&size=200&bold=true",
    },
    {
        quote:
            "Jason is a dependable developer who writes clean, maintainable code. He's always willing to help teammates debug issues and consistently delivers quality work on time.",
        name: "Development Peer",
        designation: "Fellow Developer, USTP",
        src: "https://ui-avatars.com/api/?name=DP&background=062056&color=38bdf8&size=200&bold=true",
    },
    {
        quote:
            "Jason is a talented software engineer with a strong work ethic. He quickly grasped complex concepts and contributed valuable insights during our project discussions.",
        name: "Ricky Pagarra",
        designation: "Senior Software Engineer, EamonExpress",
        src: "https://ui-avatars.com/api/?name=RP&background=062056&color=38bdf8&size=200&bold=true",
    },
];

interface TestimonialsSectionProps {
    primaryHsl: string;
}

export function TestimonialsSection({ primaryHsl }: TestimonialsSectionProps) {
    return (
        <section id="testimonials" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="testimonialsSparkles"
                    background="transparent"
                    minSize={0.2}
                    maxSize={0.6}
                    particleDensity={12}
                    particleColor={primaryHsl}
                    className="w-full h-full"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <h2
                    data-aos="fade-up"
                    className="text-3xl md:text-5xl font-bold text-center mb-4"
                >
                    What People <span className="text-primary">Say</span>
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-muted-foreground text-center max-w-xl mx-auto mb-8"
                >
                    Feedback from advisers, clients, and teammates I&apos;ve worked with.
                </p>

                <div data-aos="fade-up" data-aos-delay="200">
                    <AnimatedTestimonials testimonials={testimonials} autoplay />
                </div>
            </div>
        </section>
    );
}
