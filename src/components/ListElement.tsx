import React from "react";

export interface ListElementPros {
  id: number;
  url: string;
  title: string;
}

const ListElement = ({ id, url, title }: ListElementPros) => {
  return (
    <div onClick={() => {}} style={{ width: "fit-content" }}>
      <img
        src={url}
        id={`img_${id}`}
        alt="loading..."
        width={500}
        height={250}
      />
      <div>{title}</div>
    </div>
  );
};

export default ListElement;
