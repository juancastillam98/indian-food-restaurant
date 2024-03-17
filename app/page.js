
import {Hero} from "@/components/Hero";
import {Dishes} from "@/components/Dishes";
import {About} from "@/components/About";
import {Menu} from "@/components/Menu";
import {Reviews} from "@/components/Reviews";

export default function Home() {
    console.log("Home");
  return (
      <main>
          <Hero/>
          <Dishes/>
          <About/>
          <Menu/>
          <Reviews/>
      </main>
      );
}
