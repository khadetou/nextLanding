import Banner from "sections/banner";
import SEO from "components/seo";
import KeyFeatures from "sections/key-features";
export default function Home() {
  return (
    <>
      <SEO title="NextJS Landing Page" />
      <Banner />
      <KeyFeatures />
    </>
  );
}
