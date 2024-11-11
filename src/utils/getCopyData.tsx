import { DataProps } from "../typings";
import sanitizeResponse from "./sanitizeResponse";

export type ReturnedResponse = {
  data: DataProps | null;
  error: null | Error;
};

const getCopyData = async (): Promise<ReturnedResponse> => {
  try {
    const response = await fetch(`${process.env.CMS_URL}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Data not found");
    }
    const unsafeJSON = await response.json();
    const { data }: { data: DataProps } = sanitizeResponse(unsafeJSON);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export default getCopyData;
