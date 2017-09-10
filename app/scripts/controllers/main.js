'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('MainCtrl', function ($scope, $resource) {

    //initialize $scope and variables
    //////////////////////////////////
    $scope.filter = {};
    $scope.insurances = [];
    //////////////////////////////////

    // get data from data.json file
    //////////////////////////////////
    function fetchData (){
      $resource('data/data.json').query(
        function(res) {
          $scope.insurances = res;
          console.log("$scope.insurances : ", $scope.insurances);
        },
        function(err) {
          console.log("err : ", err);
        }
      );
    }
    fetchData ();
    //////////////////////////////////
  });
