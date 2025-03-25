import { ChevronRight } from "lucide-react";
import { useState } from "react";

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
        className={cn("flex w-full cursor-pointer items-center justify-between rounded-md border bg-muted/25 p-4 text-left font-medium text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75", active && "border-b-0 rounded-b-none")}
      >
        {title}
        <ChevronRight
          className={cn(
            active ? "rotate-90" : "",
            "size-5 cursor-pointer text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180",
          )}
          strokeWidth={1.2}
        />
      </div>
      <div
        className={cn(
          active ? "block border border-t-0 rounded-b-lg" : "hidden",
          "bg-muted/25 px-4 pb-4 pt-2 text-muted-foreground",
        )}
      >
        <p>{description}</p>
        <ul className="mt-4 list-inside list-disc">
          {list?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div >
  );
}
