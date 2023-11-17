import React from "react";

const MasterServiceContent = ({
  link,
  title,
  service,
  marijuana,
  lastChild,
}) => {
  return (
    <div
      className={`${!marijuana ? "media" : ""} ${
        lastChild ? "border-0 m-0" : ""
      }`}
    >
      <div dangerouslySetInnerHTML={{ __html: link }} />
      <div className="media-body">
        <h6 style={{ fontWeight: "bold", color: "#000000" }}>{title}</h6>
        <small>{service}</small>
      </div>
    </div>
  );
};

export default MasterServiceContent;
