import { ApiUrlsDict, sendWebRequest } from "./WebAPI";

export const getList = async listName => {
  var urlName = `Get${listName}`;
  var response = await sendWebRequest(ApiUrlsDict[urlName], "GET", "");
  if(response.result.length > 0){
    var listData = response.result.map(item => {
      return {
        label: item.name,
        value: item.id
      };
    });
    return listData;
  }
  return null
};