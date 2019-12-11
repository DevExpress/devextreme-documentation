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
    var pieChart = $("#pieChartContainer").dxPieChart({
        dataSource: createData(),
        series: {},
        legend: { visible: false },
        animation: {
            easing: 'easeOutCubic',
            duration: 2000
        }
    }).dxPieChart('instance');
	
    $("#selectBoxContainer").dxSelectBox({
        items: ['easeOutCubic', 'linear'],
        value: 'easeOutCubic',
        onValueChanged: function (e) {
            pieChart.option({
                dataSource: createData(),
                animation: { easing: e.value }
            });
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    pieChartOptions: {
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
            var pieChart = $("#pieChartContainer").dxPieChart('instance');
            pieChart.option({
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
    .controller('pieChartController', function ($scope) {
        $scope.pieChartOptions = {
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
                var pieChart = $("#pieChartContainer").dxPieChart('instance');
                pieChart.option({
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