import React, { useState } from "react";
import { Hashicon } from "@emeraldpay/hashicon-react";
import { motion } from "framer-motion";

const NiceMenu = () => {
  return (
    <motion.div className="mt-4 flex flex-col rounded-lg border border-gray-100 p-1 font-medium text-muted-foreground dark:text-white md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
      <MenuItem text={"Products"} style={{ minWidth: 400 }}>
        <SubItem
          title="Skylark"
          text="Transform documents into structured data."
        />
        <SubItem
          title="Pocono"
          text="Workflow-based central contract database."
        />
      </MenuItem>
      <MenuItem text={"Use cases"} style={{ minWidth: 400 }}>
        <SubItem
          title="Legal Professionals"
          text="Extract clauses, contracts, and case details."
        />
        <SubItem
          title="Finance Teams"
          text="Automate invoices, expenses, and compliance."
        />
        <SubItem
          title="Research Teams & Scientists"
          text="Speed up data collection from studies."
        />
        <SubItem
          title="Healthcare Organizations"
          text="Digitize records, claims, and reports."
        />
        <SubItem
          title="Government Agencies"
          text="Process official documents efficiently."
        />
        <SubItem
          title="Enterprises & Businesses"
          text="Streamline HR and operations workflows."
        />
      </MenuItem>
      <MenuItem text={"Resources"} style={{ minWidth: 400 }}>
        <SubItem
          title="Blog"
          text="Read the latest articles and thought leadership"
        />
        <SubItem title="News" text="Get updated from our latest news" />
      </MenuItem>
      <MenuItem text={"About us"} style={{ minWidth: 400 }}>
        <SubItem title="The Team" text="Get to know us better" />
        <SubItem title="The Company" text="Since 2024" />
        <SubItem title="Careers" text="Explore opportunity with Mesprit" />
      </MenuItem>
    </motion.div>
  );
};

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const MenuItem = ({ text, children, ...props }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="text-balance text-base hover:underline">{text}</span>
      {isBeingHovered && (
        <div className="min-w-max">
          <motion.div
            {...props}
            layoutId="menu"
            className="absolute -left-2/4 rounded-lg border bg-white px-6 py-2 shadow-lg dark:bg-black"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const SubItem = ({ title, text }) => {
  return (
    <motion.div
      className="group my-2 min-w-max cursor-pointer"
      layout
      variants={SubItemVariants}
    >
      <div className="flex items-center gap-4 space-y-4">
        <Hashicon value={title} size={25} />
        <div className="">
          <p className="text-base font-semibold text-black group-hover:text-blue-900 dark:text-white">
            {title}
          </p>
          <span className="text-sm text-gray-400 group-hover:text-blue-400">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default NiceMenu;
