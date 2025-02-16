import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface FaqItemProps {
  title: string;
  description?: string;
  list?: string[];
}

export default function FaqItem({ title, description, list }: FaqItemProps) {
  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <div>
      <div
        onClick={toggleAccordion}
        className="flex w-full items-center justify-between rounded-md border bg-muted/25 px-4 py-3 text-left font-medium text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
      >
        {title}
        <ChevronDown
          className="size-5 cursor-pointer text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180"
          strokeWidth={1.2}
        />
      </div>
      <div
        className={cn(
          active ? "block" : "hidden",
          "bg-muted/25 px-4 pb-4 pt-2 text-muted-foreground",
        )}
      >
        <p>{description}</p>
        <ul className="mt-4 list-inside list-disc">
          {list?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
