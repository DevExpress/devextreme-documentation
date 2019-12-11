var createData = function () {
    var data = [];
    var max = 10;
    for (var i = 0; i < max; i++) {
        data.push({ arg: i, val: Math.random() * 10 });
    };
    return data;
};

//<!--@jQuery-->
$(function () {
    var polarChart = $("#polarChartContainer").dxPolarChart({
        dataSource: createData(),
        series: {},
        legend: { visible: false },
        animation: {
            easing: 'easeOutCubic',
            duration: 2000
        }
    }).dxPolarChart('instance');
	
    $("#selectBoxContainer").dxSelectBox({
        items: ['easeOutCubic', 'linear'],
        value: 'easeOutCubic',
        onValueChanged: function (e) {
            polarChart.option({
                dataSource: createData(),
                animation: { easing: e.value }
            });
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    polarChartOptions: {
        dataSource: createData(),
        series: {},
        legend: { visible: false },
        animation: {
            easing: 'easeOutCubic',
            duration: 2000
        }
    },
    selectBoxOptions: {
        items: ['easeOutCubic', 'linear'],
        value: 'easeOutCubic',
        onValueChanged: function (e) {
            var polarChart = $("#polarChartContainer").dxPolarChart('instance');
            polarChart.option({
                dataSource: createData(),
                animation: { easing: e.value }
            });
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('polarChartController', function ($scope) {
        $scope.polarChartOptions = {
            dataSource: createData(),
            series: {},
            legend: { visible: false },
            animation: {
                easing: 'easeOutCubic',
                duration: 2000
            }
        };
        $scope.selectBoxOptions = {
            items: ['easeOutCubic', 'linear'],
            value: 'easeOutCubic',
            onValueChanged: function (e) {
                var polarChart = $("#polarChartContainer").dxPolarChart('instance');
                polarChart.option({
                    dataSource: createData(),
                    animation: { easing: e.value }
                });
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->