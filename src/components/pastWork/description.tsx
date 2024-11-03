import { PreviousWorkSectionProps, ProjectsListProps } from "@/src/typings";
import TechTags from "./techTags";
import Link from "next/link";

type ProjectDescriptionProps = {
  companyData: PreviousWorkSectionProps["companies"]["list"][number];
  projectData: ProjectsListProps;
};

const ProjectDescription = ({
  companyData: { companyTitle, duration, role },
  projectData: { techUsed, name, description, externalLink },
}: ProjectDescriptionProps) => (
  <>
    <div className="col-span-1 row-span-5 grid w-full grid-flow-row-dense auto-rows-min grid-cols-1 flex-col content-start rounded-lg bg-white p-5 md:w-[600px] lg:size-full">
      <div className="grid w-full auto-cols-fr grid-flow-col items-center justify-evenly self-start whitespace-normal break-words border-b border-dashed border-not-black/50 pb-2 text-center font-homevideo text-xs uppercase">
        {[companyTitle, role, duration].map(
          (data, index) => data && <p key={index}>{data}</p>,
        )}
      </div>
      <div className="self-stretch py-4">
        <h3 className="break-words text-center">{name}</h3>
        <div className="prose max-h-40 w-full max-w-none flex-col overflow-x-hidden overflow-y-scroll text-pretty scrollbar scrollbar-track-brand-purple/40 scrollbar-thumb-brand-purple/80">
          <p> {description} </p>
        </div>
      </div>
      <div className="w-full gap-y-4 space-y-2 self-end border-t border-dashed border-not-black/50 pt-2">
        {externalLink && (
          <div className="flex flex-row flex-wrap items-center gap-x-2">
            <div className="inline-flex h-fit gap-x-1 bg-brand-yellow/50 font-homevideo text-sm">
              <p>Visit It</p>
            </div>
            <Link href={externalLink} target="_blank" className="custom-link">
              {externalLink}
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
        </div>{" "}
      </div>
    </div>
  </>
);

export default ProjectDescription;
