import React from "react";
import { ApiUrlsDict, sendWebRequest } from "../../Utils/WebAPI";

function Home(props) {
  const onClick = async () => {
    var response = await sendWebRequest(ApiUrlsDict.GetBlogList, "GET", "");
    console.log(response);
  };

  return (
    <>
      <span>Welcome</span>
      <button onClick={() => onClick()}>Click</button>
    </>
  );
}
export default Home;
