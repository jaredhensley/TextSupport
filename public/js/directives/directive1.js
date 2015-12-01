angular.module('myApp').directive('directiveTest', function (mainService) {

  return {
    templateUrl: '../../templates/directiveTmp.html',
    controller: function ($scope, mainService) {
      $scope.reply = function (text, number) {
        console.log('i got sent!');
        console.log($scope.key);
        var objToSend = {
          to: $scope.key,
          body: $scope.message
        };
        mainService.sendStuff(objToSend).then(function (res) {
          //do something
          console.log('THIS IS MY RES', res);
        });
      }
    },
    link: function (scope, elem, attrs) {
      /*   console.log('link scope right here!!', scope);
         var objForService = {
           to: scope.key,
           body: 'my name is jeff *bad spanish accent*'

         }*/


      /*mainService.sendStuff(objForService);*/
    }
  }
});