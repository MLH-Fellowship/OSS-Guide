import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import Editor from "../../components/Editor";

const Code = () => {
  const [code, setCode] = useState("");

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

  const onClick = () => {
    // Send code to back-end
  };
  return (
    <div>
      <Editor onChange={onChange} />
      <button className={clsx(styles.btn)} onClick={onClick}>
        <span>Get</span>
      </button>

      <select className={clsx(styles.dropdown)} name="graphs" id="graphs">
        <option value="UML">UML</option>
        <option value="Call Graph">Call Graph</option>
      </select>
    </div>
  );
};

export default Code;
