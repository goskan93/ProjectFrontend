//https://www.instagram.com/goskan93/?__a=1 API
export const blogFormInputsState = {
    BlogId: "",
    Name: "",
    Instagram: "",
    Youtube: "",
    Website: "",
    Facebook: "",
    Countries: [],
    Languages: [],
    flaOrganizeTrips: false,
    flaTravelWithAnimals: false,
    flaTravelWithChildren: false,
    About: "",
    Photo: ""
  };
  
  export const blogFormInputs = [
    {
      inputType: "TextInput",
      label: "Name",
      fieldName: "Name",
      error: false,
      helperText: ["", ""],
      otherProps: {}
    },
    {
      inputType: "TextInput",
      label: "Ins",
      fieldName: "Instagram",
      error: false,
      helperText: ["Only your nickname.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "YT",
      fieldName: "Youtube",
      error: false,
      helperText: ["Only your nickname.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "WWW",
      fieldName: "Website",
      error: false,
      helperText: ["Url to your website.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "FB",
      fieldName: "Facebook",
      error: false,
      helperText: ["Only your nickname.", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "SelectInput",
      apiUrlName: "CountriesList",
      options: {},
      value:[],
      fieldName: "Countries",
      otherProps: {},
      helperText: ["Countries that information can be found on your blog.", ""]
    },
    {
      inputType: "SelectInput",
      apiUrlName: "LanguagesList",
      options: {},
      value:[],
      fieldName: "Languages",
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
      label: "Travel with Animals",
      fieldName: "flaTravelWithAnimals",
      otherProps: { xs: 6, md: 6 }
    },
    {
      inputType: "CheckBoxInput",
      label: "Travel with Children",
      fieldName: "flaTravelWithChildren",
      otherProps: {}
    },
    {
      inputType: "TextInput",
      label: "About",
      fieldName: "About",
      error: false,
      helperText: ["", ""],
      otherProps: { multiline: true }
    }
  ];
  