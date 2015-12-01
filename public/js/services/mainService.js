angular.module('myApp').service('mainService', function ($http) {

  this.sendStuff = function (obj) {

    $http({

      method: 'POST',
      url: 'http://localhost:3000/support/messages',
      data: {

        to: obj.to,
        body: obj.body
      }


    });



  }

});