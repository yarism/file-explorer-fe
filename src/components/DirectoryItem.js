import React from 'react';

// Components
import File from "./File";
import Folder from "./Folder";

// Render folder or file
function DirectoryItem(item, key) {
  if (item.type === "directory") {
    return <Folder key={key} name={item.name} children={item.children} />
  }
  else if (item.type === "file") {
    return <File key={key} name={item.name} extension={item.extension} />
  }
};

export default DirectoryItem;