import Image from "next/image";
import HeroImage from "@/public/images/hero.png";


interface HeroHomeProps {
  headline: string;
  subdeck: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function HeroHome({ headline, subdeck, ctaText, ctaUrl }: HeroHomeProps) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            
            <h1
              className="animate-[gradient_6s_linear_infinite] 
              bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-red-200),var(--color-gray-50),var(--color-red-300),var(--color-gray-200))] 
              bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
            >
              {headline}
            </h1>            
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-red-200/65"
              >
                {subdeck}
              </p>
              
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div>
                  <a className="btn group mb-4 w-full bg-linear-to-t from-red-600 to-red-500 bg-[length:100%_100%] 
                                bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] 
                                hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href={ctaUrl}
                  >
                    <span className="relative inline-flex items-center">
                      {ctaText || "Get Started"}
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                
              </div>
            </div>
          </div>

          <div>
            <Image
              src={HeroImage}
              priority
              sizes="(max-width: 1152px) 100vw, 1104px"
              alt="System's SagaZ logo: free software, open standards, automation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}