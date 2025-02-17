import { infos } from "@/config/landing";
import Faq from "@/components/sections/faq";
import HeroLanding from "@/components/sections/hero-landing";
import HowItWorks from "@/components/sections/how-it-works";
import InfoLanding from "@/components/sections/info-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import CtaSection from "@/components/shared/cta-section";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <HowItWorks />
      <InfoLanding data={infos[0]} reverse={true} />
      <Testimonials />
      <Faq />
      <CtaSection />
    </>
  );
}
