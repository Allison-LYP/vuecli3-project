module.exports = {
  presets: ["@vue/app"],
    plugins:[
        [
            "component",
            {
              "libraryName":"mint-ui",
                "style":true
            }
        ],
        // ['transform-remove-strict-mode']
    ],
    ignore:[
        "./src/assets/js/mui.js"
    ]
};
