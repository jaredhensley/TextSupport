angular.module('myApp').service('mainService', function ($http) {

  this.sendStuff = function (obj) {
    console.log('got called man');
    console.log(obj);
    $http({

      method: 'POST',
      url: 'http://localhost:3000/support/messages',
      data: {

        to: obj.to,
        body: obj.body
      }


    }).then(function (res) {
      console.log(res);
    });



  }

});