import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
  const image =
    "https://theme-land.com/brilio/demo/assets/img/content/case-4.jpg";
  return (
    <Link href={`/works/projectSlug`}>
      <div className="relative w-full md:aspect-video aspect-square overflow-clip rounded-lg group">
        <Image
          fill
          src={image}
          alt="Project Image"
          className="w-full h-full group-hover:scale-110 transition-transform duration-300 rounded-xl"
        />
        <div className="absolute inset-0 flex justify-end flex-col p-4 bg-gradient-to-t from-black/90 via-transparent to-transparent rounded bg-opacity-50 gap-2">
          <h3 className="text-2xl truncate max-w-[400px] text-white/70">
            Project Title
          </h3>
          <p className="text-white/50">Project Description</p>
        </div>
      </div>
    </Link>
  );
}
