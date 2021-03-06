import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";
import { PATHS } from "../../Utils/routes";
import CustomButton from "../../Components/CustomButton";
import { ApiUrlsDict, sendWebRequest } from "../../Utils/WebAPI";

function ListBlogsUserView(props) {
  const [blogsUser, onChangeBlogsUser] = useState([])
  const {token} = props;
  const hasBlogs = blogsUser.length > 0 

  const getList = async () => {
    const response = await sendWebRequest(ApiUrlsDict.GetUserBlogs, "GET", null, { Authorization: `Token ${token}`, "Content-Type": "application/json" });
    if(response.Message === "OK") return response.result
    else return []
  };

  useEffect( () => {
    const fetchData = async () => {
      let blogsUser = await getList();
      onChangeBlogsUser(blogsUser)
    }
    fetchData()
  },[]);

  const editBlog = blogId => {
    //go to edit view get data
    props.history.push(PATHS.BLOGEDIT.replace(":blogId", blogId))
  }

  return (
    <>
      {token? 
          <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={3} />
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >   
              {hasBlogs ? 
                <>
                  {blogsUser.map((item, index) => {
                    return(
                      <Grid key={index} item xs={12}>
                        <span style={{ cursor: "pointer", marginLeft: 10, fontSize: 14 }} onClick={() => editBlog(item.BlogId)}>
                          {item.Name}
                        </span>
                      </Grid>
                  )})}
                </>
              :
                <span>You did not add yet any blog.</span>
              }
              <Grid item xs={12}>
                <CustomButton variant="contained" onClick={() => props.history.push(PATHS.BLOGADD)}>
                  Add new
                </CustomButton>
              </Grid>
            </Grid>             
          </Grid>
          <Grid item md={3} />
        </Grid>
      :
        <Redirect to={PATHS.LOGIN}/>
      }
    </>
  )
}

function mapStateToProps({ auth }) {
  return {
    token: auth.token
  };
}
export default connect(mapStateToProps)(withRouter(ListBlogsUserView));
