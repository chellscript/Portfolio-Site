import { PreviousWorkSectionProps, ProjectsListProps } from "@/src/typings";
import TechTags from "./techTagsDisplay";
import Link from "next/link";

type ProjectDescriptionProps = {
  companyData: PreviousWorkSectionProps["companies"]["list"][number];
  projectData: ProjectsListProps;
  setSelectedProjectIndex: (arg: null) => void;
};

const ProjectDescription = ({
  companyData: { companyTitle, duration, role },
  projectData: { techUsed, name, description, externalLink },
  setSelectedProjectIndex,
}: ProjectDescriptionProps) => (
  <>
    <div className="col-span-1 row-span-5 grid size-full grid-cols-1 grid-rows-[auto_2fr_1fr] flex-col content-start rounded-lg bg-white p-5 md:w-[600px] lg:w-full">
      <div className="grid w-full auto-cols-fr grid-flow-col items-center justify-evenly self-start whitespace-normal break-words border-b border-dashed border-not-black/50 pb-2 text-center font-homevideo text-xs uppercase">
        {[companyTitle, role, duration].map(
          (data, index) => data && <p key={index}>{data}</p>,
        )}
      </div>
      <div className="self-stretch">
        <h3 className="break-words text-center">{name}</h3>
        <div className="prose max-h-40 w-full flex-col overflow-auto text-pretty">
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
          <div className="inline-flex h-fit flex-nowrap items-center gap-x-1 whitespace-nowrap">
            <p className="bg-brand-green/50 font-homevideo text-sm">
              Tech Used
            </p>
          </div>
          <TechTags tagsString={techUsed} />
        </div>{" "}
      </div>
    </div>
    <button
      className="text-shadow cta-button col-span-1 row-span-1 w-full text-nowrap rounded-lg border bg-brand-purple p-2 text-xl text-white hover:translate-y-1 md:w-1/2 lg:justify-self-end"
      onClick={() => setSelectedProjectIndex(null)}
    >
      Go back
    </button>
  </>
);

export default ProjectDescription;
