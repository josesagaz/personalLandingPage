import Image from "next/image";
import VideoThumb from "@/public/images/hero.png";

// Assuming you have this import for the VideoThumb further up in your file:
// import VideoThumb from "@/public/images/video-thumb.png";

// 1. We only define the two columns you are currently using
interface HeroHomeProps {
  headline: string;
  subdeck: string;
  ctaText: string;
  ctaUrl: string;
}

export default function HeroHome({ headline, subdeck, ctaText, ctaUrl }: HeroHomeProps) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            
            {/* The h1 now uses your Sheet's 'headline' column */}
            <h1
              className="animate-[gradient_6s_linear_infinite] 
              bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-red-200),var(--color-gray-50),var(--color-red-300),var(--color-gray-200))] 
              bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              {headline}
            </h1>            
            <div className="mx-auto max-w-3xl">
              {/* Description is temporarily hardcoded again */}
              <p
                className="mb-8 text-xl text-red-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {subdeck}
              </p>
              
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href={ctaUrl}
                  >
                    <span className="relative inline-flex items-center">
                      {ctaText}
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                {/*}
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href={ctaUrl}
                  >
                    Schedule Demo
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div>
            <Image
              src={VideoThumb}
              width={1104}
              height={576}
              alt="Description of your image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}