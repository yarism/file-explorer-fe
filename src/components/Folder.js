import React from 'react';
import { Folder as FolderIcon } from 'react-feather';

// Components
import DirectoryItem from "./DirectoryItem";

const Folder = (props) => {
  const { name, children } = props;

  // Render folder and possible subfolders & files
  return (
    <li>
      <div className="iconLabel">
        <FolderIcon />
        <span>{name}</span>
      </div>
      {children.length && (
        <ul>
          {children.map((item, key) =>
            DirectoryItem(item, key)
          )}
        </ul>
      )}
    </li>
  )
}

export default Folder;