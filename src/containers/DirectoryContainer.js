import React, { useState, useEffect } from "react";

// Services
import { GetFileTree } from "../services/fileService";

// Components
import DirectoryItem from "../components/DirectoryItem";

function DirectoryContainer() {

  const [fileTree, setFileTree] = useState({});

  // Fetch folders and files
  function SetFileStructure() {
    GetFileTree().then(res => {
      setFileTree(res);
    });
  };

  useEffect(() => {
    SetFileStructure()
  }, []);
  
  // Render file tree
  if (fileTree && fileTree.children) {
    return (
      <ul className="fileTree">
        {fileTree && fileTree.children.map((item, key) =>
          DirectoryItem(item, key)
        )}
      </ul>
    );
  }
  else return null;
  
};

export default DirectoryContainer;
