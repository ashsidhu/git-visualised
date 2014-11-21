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
require(['jquery', 'underscore', 'd3', 'c3', './js/config.js'], function(jquery, _, d3, c3, config){
  $.ajax({
    ///url: 'https://api.github.com/orgs/hackreactor/members?per_page=100&page=2&access_token=' + config.token,
    //url: 'https://api.github.com/teams/878020/members?per_page=100&access_token=' + config.token,
    url: 'https://api.github.com/teams/878020/repos?per_page=100&page=15&access_token=' + config.token,

    dataType: "json",
    success: function (returndata)
  {
    //$("#result").html(returndata[0]["object"]["sha"]);
    //console.log(returndata);
    returndata.forEach(function(fork) {
      console.log(fork)
    })

  },
    error: function() {
             console.log("BROKE")
           }

  });


  var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 5000, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
  });
  //window.config = config;
});
