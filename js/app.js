//the require library is configuring paths
require.config({
  paths: {
    "jquery": ["../bower_components/jquery/dist/jquery.min"],
    "underscore": "../bower_components/underscore/underscore-min",
    "d3": "../bower_components/d3/d3",
    "c3": "../bower_components/c3/c3"
  },
  shim: {
    "c3": {
            //loads dependencies first
      deps: ["d3"],
            //custom export name, this would be lowercase otherwise
      exports: "c3"
    }
  }
});

//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'underscore', 'd3', 'c3'], function(jquery, _, d3, c3){
  console.log('init');

  var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
  });
});