import React from "react";
import Link from "next/link";

const Navlink = ({ href, title }) => {
  return (
    <Link className="text-darkest font-semibold p-4" href={href}>
      {title}
    </Link>
  );
};

export default Navlink;
