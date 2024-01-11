import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function FooterItem({
  itemName,
  itemTitle,
  itemLink,
}: {
  itemName: IconDefinition;
  itemTitle: string;
  itemLink: string;
}) {
  return (
    <>
      <div className={"transition-colors hover:text-yellow-500"}>
        <FontAwesomeIcon icon={itemName} className="pr-1"></FontAwesomeIcon>
        <a href={itemLink} target="_blank" rel="noreferrer">
          {itemTitle}
        </a>
      </div>
    </>
  );
}
