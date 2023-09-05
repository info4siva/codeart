import {Section} from "@/components/Section";
import {GradientText} from "@/components/GradientText";
import {Project} from "@/components/Project";
import {ColorTags, Tags} from "@/components/Tags";

const ProjectList = () => (
  <Section
    title={
      <>
        Upcoming <GradientText>Events</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="2023 Kenmore Children's Business Fair"
        description="6728 NE 181st St, Kenmore, WA 98028-5041, United States; Sep 9 - 12:30 PM onwards"
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Art Event',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Madhubani Art</Tags>
            <Tags color={ColorTags.LIME}>Public Speaking</Tags>
            <Tags color={ColorTags.SKY}>Mandala Art</Tags>
            <Tags color={ColorTags.ROSE}>Traditional</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
