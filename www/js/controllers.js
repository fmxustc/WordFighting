/**
 * Created by franky on 16/1/31.
 */

angular.module('starter.controllers', [])

.controller('WordsCtrl', function($scope, Words){
  $scope.words = Words.all();
  $scope.remove = function (word) {
    Words.remove(word)
  };
})

.controller('WordItemCtrl', function($scope, $stateParams, Words) {
  $scope.word = Words.get($stateParams.wordId)
})

.controller('SettingCtrl', function($scope) {
  $scope.setting ={
    num: 500,
    learning_time: 8
  };
  //$scope.ws = angular.fromJson("/json/word.json")

})

.controller('RecitingCtrl', function($scope, Words, $rootScope, $timeout) {
  $scope.words = Words.all();

  $scope.currentWordId = 0;
  $scope.pauseState = "button button-icon icon ion-play stateButton";
  $scope.playState = "button button-icon icon ion-pause stateButton";
  $scope.currentState = $scope.pauseState;

  var changeWord = function(){
    timer = $timeout(changeWord, 4000);
    $scope.currentWordId += 1;
  }
  /*changeState主要做了以下几个事情:
    实现类似播放器的暂停/继续按钮的切换效果
    当页面处于进行状态时隐藏tabs防止切出去
    每隔一定时间更换单词
   */
  $scope.changeState = function(){
    if($scope.currentState == $scope.pauseState){
      $scope.currentState = $scope.playState;
      $rootScope.hideTabs = true;
      $timeout(changeWord, 4000);
    }
    else{
      $scope.currentState = $scope.pauseState;
      $rootScope.hideTabs = false;
      $timeout.cancel(timer);
    }
  }
})

.directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          scope.$watch(attributes.hideTabs, function(value){
            $rootScope.hideTabs = value;
          });
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })

;
