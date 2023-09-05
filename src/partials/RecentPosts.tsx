import type { MarkdownInstance } from 'astro';
import {IFrontmatter} from "@/types/IFrontMatter";
import {Section} from "@/components/Section";
import {GradientText} from "@/components/GradientText";
import {BlogGallery} from "@/components/BlogGallery";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
