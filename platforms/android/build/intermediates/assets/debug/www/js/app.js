// Ionic Starter App


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.reciting', {
      url: '/reciting',
      views: {
        'tab-reciting': {
          templateUrl: 'templates/tab-reciting.html',
          controller: 'RecitingCtrl'
        }
      }
    })

    .state('tab.words', {
      url: '/words',
      views: {
        'tab-words': {
          templateUrl: 'templates/tab-words.html',
          controller: 'WordsCtrl'
        }
      }
    })
    .state('tab.word-item', {
      url: '/words/:wordId',
      views: {
        'tab-words': {
          templateUrl: 'templates/word-item.html',
          controller: 'WordItemCtrl'
        }
      }
    })


    .state('tab.setting', {
      url: '/setting',
      views: {
        'tab-setting': {
          templateUrl: 'templates/tab-setting.html',
          controller: 'SettingCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/words');


  $ionicConfigProvider.tabs.position('bottom'); // other values: top
  $ionicConfigProvider.tabs.style('standard');


});


