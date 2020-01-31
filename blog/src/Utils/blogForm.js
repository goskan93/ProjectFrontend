//https://www.instagram.com/goskan93/?__a=1 API
export const blogFormInputsState = {
    blogId: "",
    name: "",
    instagram: "",
    youtube: "",
    website: "",
    facebook: "",
    countries: [],
    languages: [],
    flaOrganizeTrips: false,
    flaTravelWithAnimals: false,
    flaTravelWithChildren: false,
    about: "",
    // photo: ""
  };
  
  export const blogFormInputs = [
    {
      inputType: "TextInput",
      label: "Name",
      fieldName: "name",
      error: false,
      helperText: ["", ""],
      otherProps: {}
    },
    {
      inputType: "TextInput",
      label: "Ins",
      fieldName: "instagram",
      error: false,
      helperText: ["Only your nickname.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "YT",
      fieldName: "youtube",
      error: false,
      helperText: ["Url to your channel.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "WWW",
      fieldName: "website",
      error: false,
      helperText: ["Url to your website.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "FB",
      fieldName: "facebook",
      error: false,
      helperText: ["Url to you fanpage.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "SelectInput",
      apiUrlName: "CountriesList",
      options: {},
      value:[],
      error:false,
      fieldName: "countries",
      otherProps: {},
      helperText: ["Countries that information can be found on your blog.", ""]
    },
    {
      inputType: "SelectInput",
      apiUrlName: "LanguagesList",
      options: {},
      value:[],
      error:false,
      fieldName: "languages",
      otherProps: {},
      helperText: ["Languages that you writing your blog with.", ""]
    },
    {
      inputType: "CheckBoxInput",
      label: "Organize Trips",
      fieldName: "flaOrganizeTrips",
      otherProps: { xs: 6, md: 6 }
    },
    {
      inputType: "CheckBoxInput",
      label: "Travel with Kids",
      fieldName: "flaTravelWithChildren",
      otherProps: {xs: 6, md: 6 }
    },
    {
      inputType: "CheckBoxInput",
      label: "Travel with Animals",
      fieldName: "flaTravelWithAnimals",
      otherProps: { xs: 12 }
    },
    {
      inputType: "TextInput",
      label: "About",
      fieldName: "about",
      error: false,
      helperText: ["", ""],
      otherProps: { multiline: true }
    }
  ];
  