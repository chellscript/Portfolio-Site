import { PastWorkDataProps, WorkProps } from "@/src/typings";
import TechTags from "./techTagsDisplay";

const ProjectDescription = ({
  companyData: { name: companyName, duration, role },
  projectData: { techUsed, name, description, link },
}: {
  companyData: PastWorkDataProps;
  projectData: WorkProps;
}) => (
  <div className="col-span-1 row-span-5 grid size-full grid-cols-1 grid-rows-[auto_2fr_1fr] flex-col content-start rounded-lg border bg-white p-5 shadow-thick-hover md:w-[600px] lg:w-full">
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-evenly self-start whitespace-normal break-words border-b border-dashed border-black/50 text-center text-xs uppercase">
      {[companyName, duration, role].map(
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
        <div className="flex flex-row">
          <p className="bg-brand-green/50 font-bold"> Visit It:</p>
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-2">
        <p className="font-bold"> Tech Used:</p>
        <TechTags tags={techUsed} />
      </div>{" "}
    </div>
  </div>
);

export default ProjectDescription;
