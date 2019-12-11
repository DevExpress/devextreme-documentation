//<!--@jQuery-->

//<!--/@jQuery-->
//<!--@Knockout-->

//<!--/@Knockout-->
//<!--@AngularJS-->
var t, i, data = [];

for (i = 0; i <= 9; i++) {
    data.push({ time: i, velocity: Math.random() });
};

angular
    .module('myApp', ['dx'])
    .controller('exampleController', function ($scope) {
        $scope.data = data;
        $scope.isStarted = false;
        $scope.start = function () {
            var dataArray = $scope.data;
            var addPoint = function () {
                if (i > 9) {
                    $scope.$apply(function () {
                        dataArray.shift();
                    });
                }
                $scope.$apply(function () {
                    dataArray.push({ time: i, velocity: Math.random() });
                });
                i = i + 1;
            };
            t = setInterval(addPoint, 100);
            $scope.isStarted = true;
        };
        $scope.stop = function () {
            clearInterval(t);
            $scope.isStarted = false;
        };
    })

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->