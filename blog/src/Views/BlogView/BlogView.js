import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import BlogForm from "./BlogForm";
import { blogFormInputs, blogFormInputsState } from "../../Utils/blogForm"; //blogFormInputsState
import { ApiUrlsDict, sendWebRequest } from "../../Utils/WebAPI";
import { PATHS } from "../../Utils/routes";
import { notifySuccess } from "../../Utils/notifications";
import { getList } from "../../Utils/utils";
import { validateBlogForm } from "../../Utils/validation";
import CustomButton from "../../Components/CustomButton";

function BlogView(props) {
  const { token } = props;
  const [viewReady, onChangeViewReady] = useState(false)
  const [form, onChangeForm] = useState(blogFormInputsState);
  const [formInput, onChangeFormInput] = useState(blogFormInputs);
  const mode = props.match.path === PATHS.BLOGADD ? "new" : "edit";
  const blogId = mode === 'edit' ? props.match.params.blogId : null

  const getEditedData = async (formInput) => {
    //TODO: Take data better way
    var response = await sendWebRequest(ApiUrlsDict.GetBlog.replace(":BlogId", blogId), "GET", "", { Authorization: `Token ${token}`, "Content-Type": "application/json"});
    if(response.Message === "OK"){
      const data = response.result
      let newLists = {}
      const listLanguages = formInput.find(x => x.apiUrlName === "LanguagesList").options
      const listCountries = formInput.find(x => x.apiUrlName === "CountriesList").options
      newLists.Languages = data.Languages.map((item,_) => {
        var language =  listLanguages.find(x => x.value === item) 
        return {label: language.label, value: language.value }
      }) 
      newLists.Countries = data.Countries.map((item,_) => {
        var country = listCountries.find(x => x.value === item) 
        return {label: country.label, value: country.value }
      })
      onChangeForm({...form, ...data, ...newLists})
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
      if(mode === "edit") setTimeout(() => getEditedData(formInputListUpdated), 200)
      else setTimeout(() => onChangeViewReady(true), 200)          
    }
    fetchData()
  },[]);

  const onChangeInput = fieldName => value => {
    onChangeForm({ ...form, [fieldName]: value });
  };

  // const onBlurInput = fieldName => value => {
  //   TODO: validation
  //   here validate inputs
  //   find element with this field name
  //   const formInputUpdated = formInput.map(x =>
  //     x.fieldName === fieldName ? { ...x, error: !x.error } : x
  //   );
  //   onChangeFormInput(formInputUpdated);
  // };

  const onImageChange = () => e => {
    const file = e.target.files[0];
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.onerror = (err) => {
          reject(err);
        };
        reader.readAsBinaryString(file);
        console.log(reader)
    });

  };

  const cleanFormErrors = () => {
    const updatedFormInput = formInput.map(x => {return {...x, error: false }});
    return updatedFormInput
  }

  const sendForm = async () => {
    //TODO: validate
    var updatedFormInput = cleanFormErrors()
    const validation = validateBlogForm(form)
    if(validation){
      formInput.forEach(x => {
        var err = validation[x.fieldName]
        if(err){
          var helperText =  formInput.find(z => z.fieldName === x.fieldName).helperText[0]
          updatedFormInput = updatedFormInput.map((y) => y.fieldName === x.fieldName ? {...y, error: true, helperText:[helperText, err]} : y ) 
        }              
      })      
      onChangeFormInput(updatedFormInput)
      if(validation.all){
        
      }
    }else{
      const objectToSend = {...form};
      delete objectToSend.languages;
      delete objectToSend.countries;
      delete objectToSend.blogId;
      objectToSend.Languages = form.languages.map((item, _) => item.value);
      objectToSend.Countries = form.countries.map((item, _) => item.value);
      const url = mode === 'new' ? ApiUrlsDict.CreateBlog : ApiUrlsDict.UpdateBlog.replace(":BlogId", blogId)
      const method = mode === 'new' ? "POST" : "PUT"
      const response = await sendWebRequest(url,method,objectToSend,{Authorization: `Token ${token}`, "Content-Type": "application/json"});
      if(response.Message == "OK"){
        const path = mode === 'new' ? PATHS.HOME : PATHS.BLOGLIST;
        props.history.push(path);
        notifySuccess(response.result.Message ? response.result.Message : "You updated your blog.");
      }else {
        console.log(response.result);
      }
    }
  };

  const deleteBlog = async () => {
    const response = await sendWebRequest(ApiUrlsDict.DeleteBlog.replace(":BlogId", blogId),'DELETE',"",{Authorization: `Token ${token}`, "Content-Type": "application/json"});
    if(response.Message == "OK"){
      props.history.push(PATHS.BLOGLIST);
      notifySuccess("You deleted your blog.");
    }else {
      console.log(response.result);
    }
  }

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
                    // onBlurInput={onBlurInput}
                    onImageChange={onImageChange}
                    {...props}
                  />
                </Grid>
                <CustomButton variant="contained" onClick={sendForm}>
                  {mode === "new" ? "Add" : "Edit"}
                </CustomButton>
                {mode !== "new" && (
                  <CustomButton variant="contained" onClick={deleteBlog}>
                    Delete
                  </CustomButton>
                )}
              </Grid>
              <Grid item md={3} />
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