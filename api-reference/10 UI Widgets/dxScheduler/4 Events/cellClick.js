var appointments = [
    {
        text: 'Website Re-Design Plan',
        startDate: new Date(2016, 4, 25, 9, 0),
        endDate: new Date(2016, 4, 25, 11, 30)
    },
    {
        text: 'Approve Personal Computer Upgrade',
        startDate: new Date(2016, 4, 26, 10, 0),
        endDate: new Date(2016, 4, 26, 11, 0)
    },
    {
        text: 'Install New Database',
        startDate: new Date(2016, 4, 27, 9, 45),
        endDate: new Date(2016, 4, 27, 11, 15)
    },
    {
        text: 'Prepare Marketing Plan',
        startDate: new Date(2016, 4, 28, 11, 0),
        endDate: new Date(2016, 4, 28, 13, 30)
    },
    {
        text: 'Launch New Website',
        startDate: new Date(2016, 4, 29, 10, 20),
        endDate: new Date(2016, 4, 29, 12, 0)
    }
];
var flag = false;
//<!--@Knockout-->
var myViewModel = {
    schedulerData: appointments,
    schedulerInstance: {},
    initializedHandler: function (e) {
        myViewModel.schedulerInstance = e.component;
    },
    clickHandler: function (e) {
        if (flag === false) {
            myViewModel.schedulerInstance
                .on(
                    "cellClick", function (e) { DevExpress.ui.notify("Cell is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from cellClick event");
            flag = true;
        } else {
            myViewModel.schedulerInstance.off("cellClick");
            e.component.option("text", "Subscribe to cellClick event");
            flag = false;
        }
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.schedulerData = appointments;
    $scope.currentDate = new Date(2016, 4, 25);
    $scope.schedulerInstance = {};
    $scope.initializedHandler = function (e) {
        $scope.schedulerInstance = e.component;
    };
    $scope.clickHandler = function (e) {
        if (flag === false) {
            $scope.schedulerInstance
                .on(
                    "cellClick", function (e) { DevExpress.ui.notify("Cell is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from cellClick event");
            flag = true;
        } else {
            $scope.schedulerInstance.off("cellClick");
            e.component.option("text", "Subscribe to cellClick event");
            flag = false;
        }
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScheduler").dxScheduler({
    dataSource: appointments,
    startDayHour: 9,
    endDayHour: 18,
    currentView: 'week',
    currentDate: new Date(2016, 4, 25),
    height: 650
});
$("#button").dxButton({
    text: 'Subscribe to CellClick event',
    onClick: function (e) {
        if (flag === false) {
            $("#myScheduler").dxScheduler("instance")
                .on(
                    "cellClick", function (e) { DevExpress.ui.notify("Cell is clicked", "success", 1500); }
                );
            e.component.option("text", "Unsubscribe from CellClick event");
            flag = true;
        } else {
            $("#myScheduler").dxScheduler("instance").off("cellClick");
            e.component.option("text", "Subscribe to CellClick event");
            flag = false;
        }
    }
});
//<!--/@jQuery-->