import { DataProps } from "../typings";
import sanitizeResponse from "./sanitizeResponse";

const getCopyData = async () => {
  //TODO add try catch to handle errors

  const response = await fetch(`${process.env.CMS_URL}`, {
    cache: "no-store",
  });

  const unsafeJSON = await response.json();
  const { data }: { data: DataProps } = sanitizeResponse(unsafeJSON);

  return data;
};

export default getCopyData;
