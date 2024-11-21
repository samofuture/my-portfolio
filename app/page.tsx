import Banner from "./components/banner"
import Aboutme from "./components/about-me";
import Skills from "./components/skills";
import Education from "./components/education";

export default function Page() {
  return (
    <section>
      <Banner />
      <Aboutme />
      <Skills />
      <Education />
    </section>
  );
}
