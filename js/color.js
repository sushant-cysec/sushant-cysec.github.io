  // --bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-light:#f8f9fa;--bs-dark:#212529;
  var donen = document.querySelector(':root');

  const changedefault = [
      ["--ss-main-100", "#FFF3CD"],
      ["--ss-main-200", "#FFE69C"],
      ["--ss-main-300", "#FFDA6A"],
      ["--ss-main-400", "#FFCD39"],
      ["--ss-main-500", "#FFC107"],
      ["--ss-main-600", "#CC9A06"],
      ["--ss-main-700", "#997404"],
      ["--ss-main-800", "#664D03"],
      ["--ss-main-900", "#332701"],
      ["--ss-white", "#fff"],
      ["--ss-black", "#000"]
  ];
  const bluemode = [
      ["--ss-main-100", "#CFE2FF"],
      ["--ss-main-200", "#9EC5FE"],
      ["--ss-main-300", "#6EA8FE"],
      ["--ss-main-400", "#3D8BFD"],
      ["--ss-main-500", "#0D6EFD"],
      ["--ss-main-600", "#0A58CA"],
      ["--ss-main-700", "#084298"],
      ["--ss-main-800", "#052C65"],
      ["--ss-main-900", "#031633"],
      ["--ss-white", "#fff"],
      ["--ss-black", "#000"]
  ];
  const greenmode = [
      ["--ss-main-100", "#D2F4EA"],
      ["--ss-main-200", "#A6E9D5"],
      ["--ss-main-300", "#4DD4AC"],
      ["--ss-main-400", "#20C997"],
      ["--ss-main-500", "#1AA179"],
      ["--ss-main-600", "#1AA179"],
      ["--ss-main-700", "#0D503C"],
      ["--ss-main-800", "#06281E"],
      ["--ss-main-900", "#000000"],
      ["--ss-white", "#fff"],
      ["--ss-black", "#000"]
  ];
  const redmode = [
      ["--ss-main-100", "#F8D7DA"],
      ["--ss-main-200", "#EA868F"],
      ["--ss-main-300", "#EA868F"],
      ["--ss-main-400", "#E35D6A"],
      ["--ss-main-500", "#DC3545"],
      ["--ss-main-600", "#842029"],
      ["--ss-main-700", "#842029"],
      ["--ss-main-800", "#2C0B0E"],
      ["--ss-main-900", "#198754"],
      ["--ss-white", "#fff"],
      ["--ss-black", "#000"]
  ];
  const pinkmode = [
      ["--ss-main-100", "#F7D6E6"],
      ["--ss-main-200", "#EFADCE"],
      ["--ss-main-300", "#DE5C9D"],
      ["--ss-main-400", "#DE5C9D"],
      ["--ss-main-500", "#AB296A"],
      ["--ss-main-600", "#AB296A"],
      ["--ss-main-700", "#801F4F"],
      ["--ss-main-800", "#2B0A1A"],
      ["--ss-main-900", "#FFFFFF"],
      ["--ss-white", "#fff"],
      ["--ss-black", "#000"]
  ];
  const orangemode = [
      ["--ss-main-100", "#FECBA1"],
      ["--ss-main-200", "#FEB272"],
      ["--ss-main-300", "#FEB272"],
      ["--ss-main-400", "#FD7E14"],
      ["--ss-main-500", "#FD7E14"],
      ["--ss-main-600", "#984C0C"],
      ["--ss-main-700", "#653208"],
      ["--ss-main-800", "#331904"],
      ["--ss-main-900", "#FFFFFF"],
      ["--ss-white", "#fff"],
      ["--ss-black", "#000"]
  ];
  const purplemode = [
      ["--ss-main-100", "#C5B3E6"],
      ["--ss-main-200", "#A98EDA"],
      ["--ss-main-300", "#8C68CD"],
      ["--ss-main-400", "#6F42C1"],
      ["--ss-main-500", "#59359A"],
      ["--ss-main-600", "#432874"],
      ["--ss-main-700", "#2C1A4D"],
      ["--ss-main-800", "#160D27"],
      ["--ss-main-900", "#FFFFFF"],
      ["--ss-white", "#fff"],
      ["--ss-black", "#000"]
  ];

  const greymode = [
      ["--ss-main-100", "#212529"],
      ["--ss-main-200", "#343A40"],
      ["--ss-main-300", "#495057"],
      ["--ss-main-400", "#6C757D"],
      ["--ss-main-500", "#ADB5BD"],
      ["--ss-main-600", "#CED4DA"],
      ["--ss-main-700", "#DEE2E6"],
      ["--ss-main-800", "#E9ECEF"],
      ["--ss-main-900", "#F8F9FA"],
      ["--ss-white", "#000"],
      ["--ss-black", "#fff"]
  ];

  function greenMode() {
      changeTheme(greenmode);
  }

  function redMode() {
      changeTheme(redmode);
  }

  function pinkMode() {
      changeTheme(pinkmode);
  }

  function orangeMode() {
      changeTheme(orangemode);
  }

  function blueMode() {
      changeTheme(bluemode);
  }

  function purpleMode() {
      changeTheme(purplemode);
  }

  function greyMode() {
      changeTheme(greymode);
  }

  function changeTheme(changetheme) {
      for (let i = 0; i < changetheme.length; i++) {
          donen.style.setProperty(changetheme[i][0], changetheme[i][1]);
      }
  }

  const changefont = [
      ["--ss-text-sm", 12],
      ["--ss-text-md", 18],
      ["--ss-text-lg", 20],
      ["--ss-text-xl", 24],
      ["--ss-text-xxl", 32],
      ["--ss-text-xxxl", 48]
  ]

  function changeFont(val) {
      for (let i = 0; i < changefont.length; i++) {
          donen.style.setProperty(changefont[i][0], changefont[i][1] * val + "px");
      }
  }

  function defaultMode() {
      changeTheme(changedefault);
      for (let i = 0; i < changefont.length; i++) {
          donen.style.setProperty(changefont[i][0], changefont[i][1] + "px");
      }
  }