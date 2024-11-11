import Link from "next/link";
import React from "react";
import { FooterProps } from "../typings";
import { marked } from "marked";
import IconMapper from "../utils/iconMapper";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = ({ data }: { data: FooterProps }) => {
  const {
    copyright,
    attributions,
    links: { list },
  } = data;

  const year = new Date().getFullYear();
  const copyrightDate = copyright.replace("{year}", String(year));

  return (
    <footer className="flex w-full flex-col flex-wrap items-center gap-2 gap-y-6 bg-not-black p-4 text-center text-white">
      <div className="flex flex-col gap-y-2">
        <ul className="flex justify-center gap-x-4">
          {list.map(({ key, icon, url }) => (
            <li key={key}>
              <Link
                aria-label={`${key} Link`}
                href={url}
                className="text-4xl text-white hover:text-brand-green"
              >
                <Icon icon={IconMapper[icon]} />
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="span:text-lg p-span:font-garden_delight p-span:text-brand-yellow"
          dangerouslySetInnerHTML={{
            __html: marked.parse(copyrightDate) as string,
          }}
        />
        <div className="flex self-center text-start md:w-11/12">
          <details className="flex cursor-pointer flex-col flex-nowrap items-start">
            <summary className="flex items-center gap-x-2 text-start text-brand-pink hover:font-bold">
              <Icon icon="mingcute:pic-ai-fill" />
              Asset Attributions (open me)
            </summary>
            <span className="mb-4 mt-2 text-sm">
              <i>I woke up like thiiiis, I woke up like this—</i> <br />
              Actually nope, not this time! Here’s a list of asset resources I
              used to create this marvelous non-commercial portfolio site:{" "}
            </span>
            <div
              className="text-start text-sm prose-ul:list-inside prose-ul:list-disc"
              dangerouslySetInnerHTML={{
                __html: marked.parse(attributions) as string,
              }}
            />
          </details>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
