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
  $scope.ws = angular.fromJson("/json/word.json")

})

.controller('RecitingCtrl', function($scope) {})


;
