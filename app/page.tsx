import Banner from "./components/banner"
import Aboutme from "./components/about-me";
import Experience from "./components/experience";

export default function Page() {
  return (
    <section>
      <Banner />
      <Aboutme />
      <Experience />
    </section>
  );
}
