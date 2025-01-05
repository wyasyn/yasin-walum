import { getPlaceholder } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ProjectCardWrapper from "./ProjectCardWrapper";

export default async function ProjectCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  const base64 = await getPlaceholder(image);
  return (
    <Link href={`/works/projectSlug`}>
      <ProjectCardWrapper>
        <div className="relative w-full md:aspect-video aspect-square overflow-clip rounded-lg group">
          <Image
            fill
            src={image}
            placeholder="blur"
            blurDataURL={base64}
            alt="Project Image"
            sizes="100vw"
            className="w-full object-cover object-center h-full group-hover:scale-110 transition-transform duration-300 rounded-xl"
          />
          <div className="absolute inset-0 flex justify-end flex-col p-4 bg-gradient-to-t from-black/90 via-transparent to-transparent rounded bg-opacity-50 gap-2">
            <h3 className="text-2xl truncate max-w-[400px] text-white/70">
              {title}
            </h3>
            <p className="text-white/50 max-w-[600px]">{description}</p>
          </div>
        </div>
      </ProjectCardWrapper>
    </Link>
  );
}
