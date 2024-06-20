import React from "react";

const FooterContian = ({ name, data }) => {
  return (
    <div className="text-center md:text-left p-4 w-full md:w-auto">
      <h3 className="font-bold text-sm mb-2">{name}</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="text-xs md:text-base py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContian;
