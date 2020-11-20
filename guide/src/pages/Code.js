import React, { useState } from "react";
import clsx from "clsx";
import axios from "axios";
import base64 from "base-64";
import styles from "./styles.module.css";

import Editor from "../../components/Editor";

const Code = () => {
  let img;
  const [code, setCode] = useState("");
  const [selected, setSelected] = useState("");

  const getCode = (e) => {
    var finalCode = "";

    e.display.view.forEach((code) => {
      finalCode += code.line.text;
      finalCode += "\n";
    });
    return finalCode;
  };

  const onChange = (e) => {
    setCode(getCode(e));
  };

  const onClick = async () => {
    // Send code to back-end
    let res;
    var input = {
      value: btoa(code),
    };
    if (selected === "UML") {
      res = await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/uml",
        data: input,
      });
    } else if (selected === "Call Graph") {
      res = await axios({
        method: "POST",
        url: "http://127.0.0.1:5000/callgraph",
        data: input,
      });
    }

    img = base64.decode(res.status);
  };

  const handleSelection = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <Editor onChange={onChange} />
      <button className={clsx(styles.btn)} onClick={onClick}>
        <span>Get</span>
      </button>

      <select
        className={clsx(styles.dropdown)}
        onChange={handleSelection}
        name="graphs"
        id="graphs"
      >
        <option value="UML">UML</option>
        <option value="Call Graph">Call Graph</option>
      </select>

      {img && <img src={`data:image/png;base64,${img}`} />}
    </div>
  );
};

export default Code;
