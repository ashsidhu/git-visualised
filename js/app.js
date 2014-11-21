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
  $.ajax({
    ///url: 'https://api.github.com/orgs/hackreactor/members?per_page=100&page=2&access_token=' + config.token,
    //url: 'https://api.github.com/teams/878020/members?per_page=100&access_token=' + config.token,
    url: 'https://api.github.com/teams/878020/repos?per_page=100&page=20&access_token=' + config.token,

    dataType: "json",
    success: function (returndata)
  {
    //$("#result").html(returndata[0]["object"]["sha"]);
    console.log(returndata);

  },
    error: function() {
             console.log("BROKE")
           }

  });


  //window.config = config;
});
