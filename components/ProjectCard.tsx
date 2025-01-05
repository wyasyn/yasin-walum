import { getPlaceholder } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ProjectCardWrapper from "./ProjectCardWrapper";

export default async function ProjectCard({
  image,
  title,

  tags,
}: {
  image: string;
  title: string;
  tags: string[];
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
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-muted text-xl hidden group-hover:flex transition-all items-center gap-3 duration-300">
                Show project{" "}
                <span className="w-24 h-[1px] rounded-full bg-muted shrink-0" />
              </p>
              <div className="flex group-hover:hidden items-center gap-3 flex-wrap duration-300 transition-all">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-muted text-muted rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProjectCardWrapper>
    </Link>
  );
}
