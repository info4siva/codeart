import {Section} from "@/components/Section";
import {Newsletter} from "@/components/Newsletter";
import {GradientText} from "@/components/GradientText";

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate."
    />
  </Section>
);

export { CTA };
