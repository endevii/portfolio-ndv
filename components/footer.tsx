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

  const arr: string[] = ["Github", "LinkedIn", "Twitter", "Instagram"];

  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-left">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            {arr.map(function (value, index) {
              return (
                <FooterItem
                  key={index}
                  itemName={items.get(value)!}
                  itemTitle={value}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
