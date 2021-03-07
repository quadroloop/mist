import React, { useState, useEffect } from "react";
import "./styles/index.scss";
import Header from "./components/Header";
import axios from "axios";
import moment from "moment";
import filesize from "filesize";

function App() {
  const [data, setData] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get("./mist.map.json").then((res) => {
      setData(res.data.mist);
      setFiles(res.data.mist);
    });
  }, []);

  const getNodeSize = (list) => {
    let size = 0;
    list.forEach((item) => {
      size += item.size;
    });
    return filesize(size, { output: "array" });
  };

  return (
    <div className="App">
      <div className="fixed-top">
        <Header data={data} setFiles={setFiles} />
      </div>

      {data && (
        <div className="content-body">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="mist-card">
                <p>Files</p>
                <h3>{data.length}</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mist-card">
                <p>Node Size</p>
                <h3>
                  {getNodeSize(data)[0]} <small>{getNodeSize(data)[1]}</small>
                </h3>
              </div>
            </div>

            {/* <div className="col-md-4">
              <div className="mist-card">
                <p>Last update</p>
                <h3>{"-"}</h3>
              </div>
            </div> */}
          </div>
          <hr />
          <p>
            <i className="la la-list mr-1" /> List of assets
          </p>
          <hr />
          <div className="file-list-wrapper">
            {files.length !== 0 &&
              files
                .reverse()
                .filter(
                  (x: any) =>
                    x.name.split(".")[x.name.split(".").length - 1] !==
                    "DS_Store"
                )
                .map((file, index) => {
                  return (
                    <a
                      href={`${window.location.href}/mist/${file.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`file-item fade-in-bottom`}
                        style={{ animationDelay: `${index * 150}ms` }}
                        key={index}
                      >
                        <img
                          src={`${window.location.href}/mist/${file.name}`}
                          alt="asset-avatar"
                        />
                        <span className="mt-2" style={{ width: "100%" }}>
                          {/* <i className="la la-file mr-2" /> */}
                          {/* {file.name} */}
                        </span>
                        <span>{filesize(file.size)}</span>
                        <span>
                          {moment(file.modified).format("MMMM D, YYYY")}
                        </span>

                        <a
                          href={`${window.location.href}/mist/${file.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-dark btn-sm px-2 py-1 mt-2">
                            <i className="la la-bullseye mr-2" />
                            View File
                          </button>
                        </a>
                      </div>
                    </a>
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
