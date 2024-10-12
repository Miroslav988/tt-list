import React from "react";

const ListItem = ({ companyName, desc, link }) => {
  return (
    <div className="ttcont">
      <h1 className="companyName">{companyName}</h1>
      <p className="ttDesc">{desc}</p>
      <a className="ttRef" href={link}>
        Ссылка
      </a>
    </div>
  );
};

export default ListItem;
