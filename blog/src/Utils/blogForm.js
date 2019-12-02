export const blogFormInputsState = {
    Name: "",
    Ins: "",
    YT: "",
    WWW: "",
    FB: "",
    Countries: [],
    Languages: [],
    Trips: false,
    Animals: false,
    Children: false,
    About: "",
    Photo: ""
  };
  
  export const blogFormInputs = [
    {
      inputType: "TextInput",
      label: "Name",
      fieldName: "Name",
      error: false,
      helperText: ["Text1", "Text2"],
      otherProps: {}
    },
    {
      inputType: "TextInput",
      label: "Ins",
      fieldName: "Ins",
      error: false,
      helperText: ["", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "YT",
      fieldName: "YT",
      error: false,
      helperText: ["", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "WWW",
      fieldName: "WWW",
      error: false,
      helperText: ["", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "TextInput",
      label: "FB",
      fieldName: "FB",
      error: false,
      helperText: ["", ""],
      otherProps: { md: 6 }
    },
    {
      inputType: "SelectInput",
      apiUrlName: "CountriesList",
      options: {},
      fieldName: "Countries",
      otherProps: {}
    },
    {
      inputType: "SelectInput",
      apiUrlName: "LanguagesList",
      options: {},
      fieldName: "Languages",
      otherProps: {}
    },
    {
      inputType: "CheckBoxInput",
      label: "Make Trips",
      fieldName: "Trips",
      otherProps: { xs: 6, md: 6 }
    },
    {
      inputType: "CheckBoxInput",
      label: "Animals",
      fieldName: "Animals",
      otherProps: { xs: 6, md: 6 }
    },
    {
      inputType: "CheckBoxInput",
      label: "Children",
      fieldName: "Children",
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
  