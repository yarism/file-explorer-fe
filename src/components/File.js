import React from 'react';
import { FileText, Image, File as FileIcon } from "react-feather";

const File = (props) => {
  const { name, extension } = props;

  function icon () {
    if (extension === ".txt") {
      return <FileText />
    }
    else if (extension === ".png") {
      return <Image />
    }
    else {
      return <FileIcon />
    }
  }

  return (
    <li>
      <div className="iconLabel">
        {icon()}
        <span className="fileLabel">{name}</span>
      </div>
    </li>
  )
}

export default File;