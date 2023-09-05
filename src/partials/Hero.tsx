import {Section} from "@/components/Section";
import {HeroAvatar} from "@/components/HeroAvatar";
import {GradientText} from "@/components/GradientText";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Adithi</GradientText> 👋
        </>
      }
      description={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
