import Link from "next/link";
import React from "react";
import { FooterProps } from "../typings";
import { marked } from "marked";
import { FontAwesomeIconMapper } from "../iconMapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

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
        <li className="flex justify-center gap-x-4">
          {list.map(({ key, icon, url }) => (
            <ul key={key}>
              <Link
                href={url}
                className="text-4xl text-white hover:text-brand-green"
              >
                <FontAwesomeIconMapper icon={icon} />{" "}
              </Link>
            </ul>
          ))}
        </li>
        <div
          className="prose-span: span:text-lg p-span:font-garden_delight p-span:text-brand-yellow"
          dangerouslySetInnerHTML={{ __html: marked.parse(copyrightDate) }}
        />
        <div className="text-start">
          <details className="flex cursor-pointer flex-col flex-nowrap items-start">
            <summary className="text-start hover:font-bold">
              <FontAwesomeIcon icon={faImage} /> Asset Attributions
            </summary>
            <div
              className="text-start text-sm prose-ul:list-inside prose-ul:list-disc"
              dangerouslySetInnerHTML={{
                __html: marked.parse(attributions),
              }}
            />
          </details>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
