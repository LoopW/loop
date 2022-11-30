module.exports = {
  //配置跨域
  devServer: {
    host: "192.168.2.142",
    port: 8888, // 端口号
    open: false,
    // proxy:{
    //   '/service':{
    //     target:'http://61.156.14.109:8081/Xt',//接口，域名端口
    //     changeOrigin:true,//是否跨域
    //     ws:true,//webstock
    //     pathRewrite:{
    //       '/service':''
    //     }
    //   }
    // }
  },

  publicPath: "./",

  outputDir: "dist",

  assetsDir: "static",

  indexPath: "index.html",

  filenameHashing: true,
  // chainWebpack: (config) => {
  //   config.plugin("html").tap((args) => {
  //     args[0].title = "欢迎访问滨州市工程建设标准造价";
  //     return args;
  //   });
  // },
};
