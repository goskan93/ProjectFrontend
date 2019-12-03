import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BlogForm from "./BlogForm";
import { blogFormInputs, blogFormInputsState } from "../../Utils/blogForm"; //blogFormInputsState
import { ApiUrlsDict, sendWebRequest } from "../../Utils/WebAPI";
import { PATHS } from "../../Utils/routes";
import { notifySuccess } from "../../Utils/notifications";

function BlogView(props) {
  const { token } = props;
  const [viewReady, onChangeViewReady] = useState(false)
  const [form, onChangeForm] = useState(blogFormInputsState);
  const [formInput, onChangeFormInput] = useState(blogFormInputs);
  const mode = props.match.path === PATHS.BLOGADD ? "new" : "edit";
  const blogId = mode === 'edit' ? props.match.params.blogId : null
  
  const getList = async listName => {
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

  const getEditedData = async (formInput) => {
    var response = await sendWebRequest(ApiUrlsDict.GetBlog.replace(":BlogId", blogId), "GET", "", { Authorization: `Token ${token}`, "Content-Type": "application/json"});
    if(response.Message === "OK"){
      const data = response.result
      let newForm = {}
      newForm.Name = data.Name
      newForm.BlogId = data.BlogId
      const listLanguages = formInput.find(x => x.apiUrlName === "LanguagesList").options
      const listCountries = formInput.find(x => x.apiUrlName === "CountriesList").options
      newForm.Languages = data.Languages.map((item,_) => {
        var language =  listLanguages.find(x => x.value === item) 
        return {label: language.label, value: language.value }
      }) 
      newForm.Countries = data.Countries.map((item,index) => {
        var country = listCountries.find(x => x.value === item) 
        return {label: country.label, value: country.value }
      })
      onChangeForm({...form, ...newForm})
      setTimeout(() => onChangeViewReady(true), 200)
    }else{
      console.log(response)
    }
  }

  useEffect(() => {
    const fetchData = () => {
      const selectInputs = formInput.filter(x => x.inputType === "SelectInput");
      let formInputListUpdated = formInput
      if (selectInputs) {
        selectInputs.forEach(async item => {
          let listData = await getList(item.apiUrlName);
          formInputListUpdated = formInputListUpdated.map(x =>
            x.fieldName === item.fieldName ? { ...x, options: listData } : x
          );
          onChangeFormInput(formInputListUpdated);
        });
      }
      if(mode === "edit") setTimeout(() =>  getEditedData(formInputListUpdated), 200)
      else setTimeout(() => onChangeViewReady(true), 200)          
    }
    fetchData()
  },[]);

  const onChangeInput = fieldName => value => {
    onChangeForm({ ...form, [fieldName]: value });
  };

  const onBlurInput = fieldName => value => {
    //TODO: validation
    //here validate inputs
    //find element with this field name
    const formInputUpdated = formInput.map(x =>
      x.fieldName === fieldName ? { ...x, error: !x.error } : x
    );
    onChangeFormInput(formInputUpdated);
  };

  const onImageChange = () => e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    //check file length to not be too big
    reader.onloadend = () => {
      onChangeForm({ ...form, PhotoUrl: reader.result });
      onChangeForm({ ...form, PhotoFile: file });
    };
  };

  const sendForm = async () => {
    //TODO: validate
    const objectToSend = {};
    objectToSend.Name = form.Name;
    objectToSend.Languages = form.Languages.map((item, id) => item.value);
    objectToSend.Countries = form.Countries.map((item, id) => item.value);
    if(mode === "new"){
      const response = await sendWebRequest(
        ApiUrlsDict.CreateBlog,
        "POST",
        objectToSend,
        {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json"
        }
      );
      if (response.Message === "OK") {
        props.history.push(PATHS.HOME);
        notifySuccess(response.result.Message);
      } else {
        //TODO: how to show errors from backend
        console.log(response.result);
      }
    }
    if(mode === 'edit'){
      const response = await sendWebRequest(
        ApiUrlsDict.UpdateBlog.replace(":BlogId", blogId),
        "PUT",
        objectToSend,
        {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json"
        }
      );
      if (response.Message === "OK") {
        props.history.push(PATHS.BLOGLIST);
        notifySuccess("You updated your blog.");
      } else {
        //TODO: how to show errors from backend
        console.log(response.result);
      }
    }


  };

  return (
    <>      
      {token ? 
        <>
          {viewReady ?
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
                  <BlogForm
                    form={form}
                    formInput={formInput}
                    onChangeInput={onChangeInput}
                    onBlurInput={onBlurInput}
                    onImageChange={onImageChange}
                    {...props}
                  />
                </Grid>
                <Button variant="contained" onClick={sendForm}>
                  {mode === "new" ? "Add" : "Edit"}
                </Button>
                {mode !== "new" && (
                  <Button variant="contained" onClick={sendForm}>
                    Delete
                  </Button>
                )}
              </Grid>
              <Grid item md={3} />
              {/* <Grid item component={Box} md={6} display={{ xs: "none", md: "block" }}>
                <span style={{ color: green }}>YY</span>
              </Grid> */}
            </Grid>
            :
            <span>Loading</span>

          }

        </>
        :
        <Redirect to={PATHS.LOGIN}/>
      }
    </>
  );
}
function mapStateToProps({ auth }) {
  return {
    token: auth.token
  };
}
export default connect(mapStateToProps)(withRouter(BlogView))