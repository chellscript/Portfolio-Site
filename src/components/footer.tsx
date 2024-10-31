import Link from "next/link";
import React from "react";
import { FooterProps } from "../typings";
import { marked } from "marked";
import { FontAwesomeIconMapper } from "../iconMapper";

const Footer = ({ data }: { data: FooterProps }) => {
  const {
    copyright,
    aIImages,
    vector,
    links: { list },
  } = data;

  const year = new Date().getFullYear();
  const copyrightDate = copyright.replace("{year}", String(year));

  return (
    <footer className="flex w-full flex-col flex-wrap items-center gap-2 gap-y-6 bg-not-black p-4 text-center text-white">
      <div className="flex flex-col gap-y-2">
        <div
          className="p-span:text-brand-yellow prose-span: p-span:font-caffie_lofie span:text-lg"
          dangerouslySetInnerHTML={{ __html: marked.parse(copyrightDate) }}
        />
        <li className="flex justify-center gap-x-4">
          {list.map(({ key, icon, url }) => (
            <ul key={key}>
              <Link href={url} className="text-white hover:text-brand-green">
                <FontAwesomeIconMapper className="size-8" icon={icon} />{" "}
              </Link>
            </ul>
          ))}
        </li>
      </div>
      <div className="flex flex-col flex-nowrap gap-y-2">
        {" "}
        {[aIImages, vector].map((item, index) => (
          <div
            key={index}
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html: marked.parse(item),
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
