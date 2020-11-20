import React, { useState } from "react";
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
	return (
		<div>
			<Editor onChange={onChange}/>
		</div>
	);
};



export default Code;
