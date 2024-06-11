import React from "react";
export default function FooterContian({ name, data }) {
  return (
    <>
      <div className="Flex  mt-10">
        <p className="">{name}</p>
        <div className="  ">
          {data && data.map((element) => <p className="p-1">{element}</p>)}
        </div>
      </div>
    </>
  );
}
