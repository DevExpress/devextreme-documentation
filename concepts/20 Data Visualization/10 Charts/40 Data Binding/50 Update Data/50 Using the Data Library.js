var dataSource = new DevExpress.data.DataSource({
    store: {
        type: 'array',
        key: 'candidate',
        data: [
            { candidate: 'John', value: 0 },
            { candidate: 'Mike', value: 0 }
        ]
    }
});

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        animation: false,
        dataSource: dataSource,
        series: {
            argumentField: 'candidate',
            valueField: 'value',
            type: 'bar',
            color: 'skyblue'
        },
        valueAxis: { max: 50 },
        legend: { visible: false }
    });

    $("#pieChartContainer").dxPieChart({
        animation: false,
        dataSource: dataSource,
        series: {
            argumentField: 'candidate',
            valueField: 'value'
        },
        palette: 'Soft'
    });

    $("#voteJohnButton").dxButton({
        text: 'John',
        onClick: function () {
            vote('John');
        }
    });

    $("#voteMikeButton").dxButton({
        text: 'Mike',
        onClick: function () {
            vote('Mike');
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    data: dataSource,
    vote: vote
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.chartConfig = {
            animation: false,
            dataSource: dataSource,
            series: {
                argumentField: 'candidate',
                valueField: 'value',
                type: 'bar',
                color: 'skyblue'
            },
            valueAxis: { max: 50 },
            legend: { visible: false }
        };
        $scope.pieChartConfig = {
            animation: false,
            dataSource: dataSource,
            series: {
                argumentField: 'candidate',
                valueField: 'value'
            },
            palette: 'Soft'
        }
    })
    .controller('buttonsController', function ($scope) {
        $scope.johnButtonConfig = {
            text: 'John',
            onClick: function () {
                vote('John');
            }
        };
        $scope.mikeButtonConfig = {
            text: 'Mike',
            onClick: function () {
                vote('Mike');
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->

function vote(name) {
    updateCandidateVotes(name);
    dataSource.load();
};

function updateCandidateVotes(name) {
    var store = dataSource.store();
    store.byKey(name).done(function (dataItem) {
        store.update(name, { value: dataItem.value + 1 });
    });
};