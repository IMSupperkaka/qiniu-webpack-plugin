var QiniuPlugin = require('../');
var path = require('path');

var devConfig = require('./webpack.dev');

devConfig.plugins = devConfig.plugins || [];

devConfig.plugins.push(new QiniuPlugin({
  ACCESS_KEY: '',
  SECRET_KEY: '',
  bucket: '',
  path: require('child_process').execSync('git describe').toString().replace(/\n/, ''),
  
  /**
   *  You can specify certain file to upload
   */
  //include: ['main.js'],
}));

devConfig.output.publicPath = "http://7xs30h.com1.z0.glb.clouddn.com/[hash]/";

devConfig.devtool = "source-map";

module.exports = devConfig;