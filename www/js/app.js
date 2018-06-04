// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

//Attendance data fetched
// var fun = $(function(){

  // var $records=$('records'); // this orders is the id orders fetched from html on which json data has to be appededin inner html
//   $.ajax({
//     type: 'GET',
//     url: '',
//     success: function(records) {// this orders is the data array from the ajax
//       $records.append('<tr'+ function(){
//           $.each(records, function(i,record){// order is one single order from orders array fetched from json
//           $records.append('<th>'+ record[i] + '</th>');
//         });
//       })
      
//     }
//   });
// });

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
