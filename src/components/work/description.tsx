import { PreviousWorkSectionProps, ProjectsListProps } from "@/src/typings";
import TechTags from "./techTags";
import Link from "next/link";
import { marked } from "marked";

type ProjectDescriptionProps = {
  companyData: PreviousWorkSectionProps["companies"]["list"][number];
  projectData: ProjectsListProps;
};

const ProjectDescription = ({
  companyData: { companyTitle, duration, role },
  projectData: { techUsed, name, description, externalLink, githubLink },
}: ProjectDescriptionProps) => (
  <>
    <div className="col-span-1 row-span-5 grid w-full grid-cols-1 grid-rows-[auto_minmax(auto,1fr)_auto] flex-col content-start rounded-lg bg-white p-5 md:w-[600px] lg:w-full">
      <div className="grid w-full auto-cols-fr grid-flow-col items-center justify-evenly self-start whitespace-normal break-words border-b border-dashed border-not-black/50 pb-2 text-center font-homevideo text-xs uppercase">
        {[companyTitle, role, duration].map(
          (data, index) => data && <p key={index}>{data}</p>,
        )}
      </div>
      <div className="py-4">
        <h3 className="m-0 break-words text-center">{name}</h3>
        {description ? (
          <>
            <div className="prose max-h-40 w-full max-w-none flex-col overflow-y-auto overflow-x-hidden text-pretty p-4 scrollbar scrollbar-track-brand-purple/40 scrollbar-thumb-brand-purple/80">
              <div
                className="leading-normal marker:text-lg marker:text-brand-purple"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(description, { async: false }),
                }}
              />
            </div>
            <div className="w-full gap-y-4 space-y-2 self-end border-t border-dashed border-not-black/50 pt-2 prose-a:text-sky-600">
              {externalLink && (
                <div className="flex flex-row flex-wrap items-center gap-x-2">
                  <div className="inline-flex h-fit gap-x-1 bg-brand-yellow/50 font-homevideo text-sm">
                    <p>Visit It</p>
                  </div>
                  <Link
                    href={externalLink}
                    target="_blank"
                    className="custom-link"
                  >
                    {externalLink}
                  </Link>
                </div>
              )}
              {githubLink && (
                <div className="flex flex-row flex-wrap items-center gap-x-2">
                  <div className="inline-flex h-fit gap-x-1 bg-brand-yellow/50 font-homevideo text-sm">
                    <p>Check out the code</p>
                  </div>
                  <Link
                    href={githubLink}
                    target="_blank"
                    className="custom-link"
                  >
                    {githubLink}
                  </Link>
                </div>
              )}
              <div className="flex flex-row flex-wrap items-center gap-2">
                {techUsed && (
                  <>
                    <div className="inline-flex h-fit flex-nowrap items-center gap-x-1 whitespace-nowrap">
                      <p className="bg-brand-green/50 font-homevideo text-sm">
                        Tech Used
                      </p>
                    </div>
                    <TechTags tagsString={techUsed} />
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <p className="my-2 text-center text-lg font-bold italic text-gray-400">
            Text coming soon
          </p>
        )}
      </div>
    </div>
  </>
);

export default ProjectDescription;
