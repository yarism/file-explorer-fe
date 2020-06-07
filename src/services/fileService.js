import axios from "axios";

// Fetch file tree from server
function GetFileTree() {
  return axios.get("https://sleepy-reaches-76118.herokuapp.com/").then(response => {
    return response.data
  });
}

export { GetFileTree };