const baseAPI = "http://127.0.0.1:8000/api/";
const authAPI = "http://127.0.0.1:8000/rest-auth/";

export const ApiUrlsDict = {
  GetBlogList: `${baseAPI}GetBlogList/`,
  GetLanguagesList: `${baseAPI}GetLanguagesList/`,
  GetCountriesList: `${baseAPI}GetCountriesList/`,
  CreateBlog: `${baseAPI}CreateBlog/`,
  GetUserBlogs: `${baseAPI}GetUsersBlogs/`,
  GetBlog: `${baseAPI}GetBlog/:BlogId`,

  Register: `${authAPI}registration/`,
  Login: `${authAPI}login/`
};

export function sendWebRequest(url, method, objectToSend, headers = null) {
  return fetch(url, {
    method: method,
    headers:
      headers === null
        ? {
            Accept: "application/json"
          }
        : headers,
    body: method === "GET" ? undefined : JSON.stringify(objectToSend)
  })
    .then(async response => {
      if (response !== undefined && response !== null && response.ok) {
        const parsedJson = await response.json();
        return { Message: "OK", result: parsedJson };
      } else {
        return { Message: "error", result: response };
      }
    })
    .catch(error => {
      return { Message: "error", result: error };
    });
}
