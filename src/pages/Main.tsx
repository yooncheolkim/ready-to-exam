import React, { useEffect, useState } from "react";
import ListElement from "../components/ListElement";
import useLocalStorage from "../hook/LocalStorageHook";
import { apiCalllInstance, MockData } from "../service/ApiCall";

const Main = () => {
  const [elements, setElements] = useState<MockData[]>([]);
  useEffect(() => {
    const apiCall = async () => {
      const result = await apiCalllInstance.sampleApiCall({ a: "1", b: "2" });
      setElements(result);
    };
    apiCall();
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "1000px",
          margin: "auto",
        }}
      >
        {elements.length > 0 &&
          elements.map((data) => (
            <ListElement id={data.id} url={data.url} title={data.title} />
          ))}
      </div>
    </>
  );
};

export default Main;
