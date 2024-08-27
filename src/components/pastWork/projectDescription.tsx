import { PastWorkDataProps, WorkProps } from "@/src/typings";
import TechTags from "./techTagsDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faTerminal } from "@fortawesome/free-solid-svg-icons";

const ProjectDescription = ({
  companyData: { name: companyName, duration, role },
  projectData: { techUsed, name, description, link },
  setSelectedProjectIndex,
}: {
  companyData: PastWorkDataProps;
  projectData: WorkProps;
  setSelectedProjectIndex: (arg: null) => void;
}) => (
  <>
    {" "}
    <div className="col-span-1 row-span-5 grid size-full grid-cols-1 grid-rows-[auto_2fr_1fr] flex-col content-start rounded-lg border bg-white p-5 shadow-thick-hover md:w-[600px] lg:w-full">
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-evenly self-start whitespace-normal break-words border-b border-dashed border-black/50 pb-2 text-center text-xs uppercase">
        {[companyName, role, duration].map(
          (data, index) => data && <p key={index}>{data}</p>,
        )}
      </div>
      <div className="self-stretch">
        <h3 className="text-center">{name}</h3>
        <div className="max-h-40 w-full flex-col overflow-auto">
          <p> {description} </p>
        </div>
      </div>
      <div className="w-full gap-y-4 space-y-2 self-end border-t border-dashed border-black/50 pt-2">
        {link && (
          <div className="flex flex-row flex-wrap items-center gap-x-2">
            <div className="inline-flex h-fit gap-x-1 bg-brand-yellow/50 text-sm font-bold">
              <FontAwesomeIcon icon={faGlobe} size="xl" />
              <p>Visit It</p>
            </div>
            <a href={link} target="_blank" className="">
              {link}
            </a>
          </div>
        )}
        <div className="flex flex-row flex-wrap items-center gap-2">
          <div className="inline-flex h-fit flex-nowrap items-center gap-x-1 whitespace-nowrap bg-brand-yellow/50 text-sm font-bold">
            <FontAwesomeIcon icon={faTerminal} />
            <p>Tech Used</p>
          </div>
          <TechTags tags={techUsed} />
        </div>{" "}
      </div>
    </div>
    <button
      className="col-span-1 row-span-1 w-full rounded-lg bg-brand-purple p-1 font-bold text-white shadow-thick shadow-not-black hover:shadow-thick-hover hover:shadow-not-black md:w-1/2 lg:justify-self-end"
      onClick={() => setSelectedProjectIndex(null)}
    >
      <div className="text-nowrap rounded-lg border-2 border-white p-1">
        Go back
      </div>
    </button>
  </>
);

export default ProjectDescription;
