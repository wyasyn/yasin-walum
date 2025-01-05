import Button from "@/components/Button";
import Projects from "@/components/sections/home/Projects";
import SubHeading from "@/components/SubHeading";
import { ArrowRight } from "lucide-react";

export default function Works() {
  return (
    <section>
      <div className="container pt-12">
        <header className="flex justify-between items-center gap-4">
          <SubHeading text="Selected Works" />
          <Button
            variant="secondary"
            Icon={ArrowRight}
            text="View All"
            url="/works"
          />
        </header>
        <Projects />
      </div>
    </section>
  );
}
