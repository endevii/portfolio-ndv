import React from "react";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import FooterItem from "./footerItem";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function Footer() {
  const items: Map<string, IconDefinition> = new Map<string, IconDefinition>();
  items.set("Github", faGithub);
  items.set("Instagram", faInstagram);
  items.set("Twitter", faTwitter);
  items.set("LinkedIn", faLinkedin);

  const links: Map<string, string> = new Map<string, string>();
  links.set("Twitter", "https://twitter.com/_endevii_");
  links.set("Instagram", "https://www.instagram.com/endevii/");
  links.set("Github", "https://github.com/endevii");
  links.set("LinkedIn", "https://www.linkedin.com/in/joshua-gorman/");

  const arr: string[] = ["Github", "LinkedIn", "Twitter", "Instagram"];

  return (
    <div className="backdrop-blur-sm lg:mt-18 sm:pb-36 sm:py-12 py-6 bg-gray-100 dark:bg-zinc-800">
      <div className="max-w-4xl px-4 mx-auto dark:text-slate-300 text-gray-700">
        <div className="flex flex-col justify-between lg:flex-row items-left">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            {arr.map(function (value, index) {
              return (
                <FooterItem
                  key={index}
                  itemName={items.get(value)!}
                  itemTitle={value}
                  itemLink={links.get(value)!}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
