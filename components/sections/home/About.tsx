import Button from "@/components/Button";
import MovingCards from "@/components/MovingCards";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Software Development",
    description:
      "Designing and building tailored software solutions to meet unique business needs.",
  },
  {
    title: "Data Insights",
    description:
      "Leveraging data to uncover trends, drive decisions, and optimize operations.",
  },
  {
    title: "App Development",
    description:
      "Creating seamless, user-friendly mobile and web applications for all platforms.",
  },
];

export default function About() {
  return (
    <section className="py-[2rem] md:py-[5rem]">
      <div className="container">
        <h1 className="text-heading text-4xl md:text-6xl font-medium">
          Empowering businesses with innovation, strategy, and adaptable tech
          solutions.
        </h1>
        <p className="my-8 max-w-prose">
          Turning visions into impactful solutions through innovation, strategy,
          and technology, empowering brands to excel in the dynamic digital
          world.
        </p>
        <Button
          variant="secondary"
          url="/about"
          text="About Me"
          Icon={ArrowRight}
        />
        <div className="py-6 md:py-12">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {services.map((service, index) => (
              <div key={index} className="w-[300px] md:w-[250px]">
                <h2 className="text-xl font-medium">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MovingCards />
    </section>
  );
}
