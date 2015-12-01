angular.module('myApp').controller('temp2Ctrl', function ($scope, $firebaseObject, $firebaseArray, mainService) {

  var ref = new Firebase('https://fs-text-support.firebaseio.com/numbers');

  var syncObject = $firebaseObject(ref);

  syncObject.$bindTo($scope, "datas");
  syncObject.$loaded(function () {

    console.log($scope.datas);
  })

});