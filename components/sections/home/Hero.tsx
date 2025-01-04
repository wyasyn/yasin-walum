import Button from "@/components/Button";
import CircleBackground from "@/components/Circle";
import HeroTitle from "@/components/Title";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <CircleBackground />
      <div className="container z-10 relative py-[3rem] md:py-[5rem]">
        <p className="text-xl tracking-wider text-heading">
          Hello! I&apos;m <span className="font-medium">Yasin</span>
        </p>
        <HeroTitle />
        <div className="flex flex-col gap-12 sm:flex-row py-[2rem] sm:justify-between">
          <div>
            <Button text="Let's Talk!" Icon={ArrowRight} url="/contact" />
          </div>
          <div className="max-w-[600px] text-xl text-wrap">
            I craft innovative solutions that turn ideas into seamless digital
            experiences, empowering brands and engaging audiences across the
            globe.
          </div>
        </div>
      </div>
    </section>
  );
}
