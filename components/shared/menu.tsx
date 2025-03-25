import { Hashicon } from "@emeraldpay/hashicon-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const NiceMenu = () => {
  return (
    <motion.div className="mt-4 flex flex-col rounded-lg border border-gray-100 p-1 font-medium text-muted-foreground dark:text-white md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
      <MenuItem text={"Platform"} style={{ minWidth: 400 }}>
        <SubItem
          title="Quick-Start Drafting"
          href="/products/skylark"
        />
        <SubItem
          title="Document Analysis"
          href="/"
        />
        <SubItem
          title="Case Reviews"
          href="/"
        />
        <SubItem
          title="Contextual Research"
          href="/"
        />
        <SubItem
          title="Contract Analysis"
          href="/"
        />
      </MenuItem>
      <MenuItem text={"Resources"} style={{ minWidth: 400 }}>
        <SubItem
          title="About Us"
          text="Read the latest articles and thought leadership"
          href="/blog"
        />
        <SubItem
          title="Blog"
          text="Read the latest articles and thought leadership"
          href="/blog"
        />
        <SubItem
          title="News"
          text="Get updated from our latest news"
          href="/blog/category/news"
        />
      </MenuItem>
      <MenuItem text={"Pricing"} style={{ minWidth: 400 }} children={undefined} />
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
      <span className="text-balance text-zinc-700 text-base hover:underline">{text}</span>
      {isBeingHovered && children && (
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

interface SubItemProps {
  title: string;
  text?: string;
  href: string;
}

const SubItem = ({ title, text, href }: SubItemProps) => {
  return (
    <motion.div
      className="group my-2 min-w-max cursor-pointer"
      layout
      variants={SubItemVariants}
    >
      <div className="inline-flex items-center gap-4">
        <Hashicon value={title} size={25} />
        <Link href={href} className="py-2">
          <p className="text-base font-semibold text-black group-hover:text-blue-900 dark:text-white">
            {title}
          </p>
          {text && (
            <span className="text-sm text-gray-400 group-hover:text-blue-400">
              {text}
            </span>
          )}
        </Link>
      </div>
    </motion.div>
  );
};

export default NiceMenu;
