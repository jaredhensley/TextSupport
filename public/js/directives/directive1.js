angular.module('myApp').directive('directiveTest', function (mainService) {

  return {
    templateUrl: '../../templates/directiveTmp.html',
    link: function (scope, elem, attrs) {
      console.log('link scope right here!!', scope);
      var objForService = {
        to: scope.key,
        body: 'my name is jeff *bad spanish accent*'

      }
      mainService.sendStuff(objForService);
    }
  }
});