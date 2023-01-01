module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": [
    "lodash",
    ["import", { "libraryName": "reactstrap", "libraryDirectory": "lib", "camel2DashComponentName": false}, 'reactstrap'],
    ["import", { "libraryName": "antd", "libraryDirectory": "lib"}, 'antd'],
    ["import", { "libraryName": "@material-ui/core", "libraryDirectory": "components", "camel2DashComponentName": false}, 'material-ui'],
    "inline-react-svg",
    [
      "styled-components",
      {
        "ssr": false,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
};
