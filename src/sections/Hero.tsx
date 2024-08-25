import emojy from "@/assets/images/memoji-computer.png";
import grain from "@/assets/images/grain.jpg";
import Arrowdown from "@/assets/icons/arrow-down.svg";
import Star from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";

import Image from "next/image";
import HeroOrbits from "@/components/HeroOrbits";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-24 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grain.src})` }}
      ></div>

      <div className="ring-hero size-[620px]"></div>
      <div className="ring-hero size-[820px]"></div>
      <div className="ring-hero size-[1020px]"></div>
      <div className="ring-hero size-[1220px]"></div>
      
          <HeroOrbits size={800} rotaion={-72} isSpin spinDuration="48s" shouldSpin spin="6s">
            <Star className="size-28 text-emerald-300" />
          </HeroOrbits>
          <HeroOrbits size={550} rotaion={20} isSpin spinDuration="38s" shouldSpin spin="6s">
            <Star className="size-12 text-emerald-300" />
          </HeroOrbits>
          <HeroOrbits size={590} rotaion={98} isSpin spinDuration="40s" shouldSpin spin="6s">
            <Star className="size-8 text-emerald-300" />
          </HeroOrbits>
          <HeroOrbits size={430} rotaion={-14} isSpin spinDuration="30s" shouldSpin spin="3s" >
            <Sparkle className="size-8 text-emerald-300/20" />
          </HeroOrbits>
          <HeroOrbits size={440} rotaion={79} isSpin spinDuration="32s" shouldSpin spin="3s">
            <Sparkle className="size-5 text-emerald-300/20" />
          </HeroOrbits>
          <HeroOrbits size={530} rotaion={178} isSpin spinDuration="36s" shouldSpin spin="3s">
            <Sparkle className="size-10 text-emerald-300/20" />
          </HeroOrbits>
          <HeroOrbits size={710} rotaion={144} isSpin spinDuration="44s" shouldSpin spin="3s">
            <Sparkle className="size-14 text-emerald-300/20" />
          </HeroOrbits>
          <HeroOrbits size={720} rotaion={85} isSpin spinDuration="46s">
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbits>
          <HeroOrbits size={520} rotaion={-41} isSpin spinDuration="34s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbits>
          <HeroOrbits size={650} rotaion={-5} isSpin spinDuration="42s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbits>
          </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={emojy}
            alt="person peeking from behind"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full  relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Availabe for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Lets's discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2  border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <Arrowdown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2  border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
