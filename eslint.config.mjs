import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  pluginJs.configs.recommended,
  ];

  import daStyle from 'eslint-config-dicodingacademy';
 
  export default [
    daStyle,
    // other config style
  ];
