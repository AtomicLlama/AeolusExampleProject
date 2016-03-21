var app = angular.module('aeolus', []);

app.controller('MainCtrl', function ($scope, $http) {

  $scope.method = "GET";
  $scope.url = "";
  $scope.user = "";
  $scope.pass = "";
  $scope.data = "";

  $scope.doRequest = function() {
    $scope.error = false;
    $scope.res = false;
    if ($scope.user !== "" && $scope.pass !== "") {
      $http.defaults.headers.common.Authorization = 'Basic ' +  window.btoa($scope.user + ":" + $scope.pass);
    } else {
      $http.defaults.headers.common.Authorization = undefined;
    }
    $http({method: $scope.method, url: $scope.url}).then(function(response) {
      $scope.res = true;
      new PrettyJSON.view.Node({
        el:$('#result'),
        data:response
      });
    }, function(response) {
      $scope.error = true;
      new PrettyJSON.view.Node({
        el:$('#result'),
        data:response
      });
    });
  };

});
