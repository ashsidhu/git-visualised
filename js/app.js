//the require library is configuring paths
require.config({
  paths: {
    "jquery": ["../bower_components/jquery/dist/jquery.min"],
    "underscore": "../bower_components/underscore/underscore-min",
    "d3": "../bower_components/d3/d3"
  }
});

//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'underscore', 'd3', './js/config.js'], function(jquery, _, d3, config){
  console.log(config);
  
  window.config = config;
});
