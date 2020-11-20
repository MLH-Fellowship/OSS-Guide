import React, { useState } from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';

import 'codemirror/mode/python/python.js';
import 'codemirror/addon/lint/lint.js';

const Editor = ({ onChange }) => {

 
    return (
    <CodeMirror
        value='#Write your Python code here...'
        options={{
            mode: "python",
            theme: "material",
            gutters: ["CodeMirror-lint-markers"],
            lineNumbers: true,
            lineWrapping: true
        }}
        onChange={onChange}
      />     
  
    )
}

export default Editor
