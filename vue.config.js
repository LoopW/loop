module.exports = {
  //配置跨域
  devServer: {
    host: "0.0.0.0",
    port: 8888, // 端口号
    open: false,
    proxy:{
      '/service':{
        target:'http://192.168.2.144:8601',//接口，域名端口
        changeOrigin:true,//是否跨域
        ws:true,//webstock
        pathRewrite:{
          '/service':''
        }
      }
    }
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
