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
    var chart = $("#chartContainer").dxChart({
        dataSource: createData(),
        series: {},
        animation: {
            easing: 'easeOutCubic',
            duration: 2000
        }
    }).dxChart('instance');
	
    $("#selectBoxContainer").dxSelectBox({
        items: ['easeOutCubic', 'linear'],
        value: 'easeOutCubic',
        onValueChanged: function (e) {
            chart.option({
                dataSource: createData(),
                animation: { easing: e.value }
            });
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartOptions: {
        dataSource: createData(),
        series: {},
        animation: {
            easing: 'easeOutCubic',
            duration: 2000
        }
    },
    selectBoxOptions: {
        items: ['easeOutCubic', 'linear'],
        value: 'easeOutCubic',
        onValueChanged: function (e) {
            var chart = $("#chartContainer").dxChart('instance');
            chart.option({
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
    .controller('chartController', function ($scope) {
        $scope.chartOptions = {
            dataSource: createData(),
            series: {},
            animation: {
                easing: 'easeOutCubic',
                duration: 2000
            }
        };
        $scope.selectBoxOptions = {
            items: ['easeOutCubic', 'linear'],
            value: 'easeOutCubic',
            onValueChanged: function (e) {
                var chart = $("#chartContainer").dxChart('instance');
                chart.option({
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