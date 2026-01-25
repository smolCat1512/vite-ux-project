import { useMantineTheme } from "@mantine/core";
import { IoOpenOutline } from "react-icons/io5";
import { useState } from "react";

interface PortfolioCardLinkProps {
  href: string;
  title: string;
}

const PortfolioCardLink = ({ href, title }: PortfolioCardLinkProps) => {
  const theme = useMantineTheme();
  const linkColor = theme.other?.portfolio?.card?.link?.color ?? "#ff6e00";
  const hoverColor = theme.other?.portfolio?.card?.link?.hoverColor ?? "#e66300";
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color: isHovered ? hoverColor : linkColor }}
    >
      <IoOpenOutline size="24" title={title} className="mr-1" />
    </a>
  );
};

export default PortfolioCardLink;