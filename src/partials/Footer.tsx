
import { AppConfig } from '@/utils/AppConfig';
import {Section} from "@/components/Section";
import {FooterCopyright} from "@/components/FooterCopyright";

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
