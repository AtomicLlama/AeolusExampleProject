var app = angular.module('aeolus', []);

app.controller('MainCtrl', function ($scope, $http) {

  $scope.method = "GET";
  $scope.url = "";
  $scope.user = "";
  $scope.pass = "";
  $scope.data = "";

  var updateResults = function(response) {
    $scope.info = response;
    var data = typeof response.data != "object" ? { message: response.data } : response.data;
    new PrettyJSON.view.Node({
      el:$('#result'),
      data:data
    });
    new PrettyJSON.view.Node({
      el:$('#headers'),
      data:response.config.headers
    });
  };

  $scope.doRequest = function() {
    $scope.error = false;
    $scope.res = false;
    if ($scope.user !== "" && $scope.pass !== "") {
      $http.defaults.headers.common.Authorization = 'Basic ' +  window.btoa($scope.user + ":" + $scope.pass);
    } else {
      $http.defaults.headers.common.Authorization = undefined;
    }
    $http({method: $scope.method, url: $scope.url}, {data: "Hello!"}).then(function(response) {
      $scope.error = false;
      updateResults(response);
    }, function(response) {
      $scope.error = true;
      updateResults(response);
    });
  };

});
