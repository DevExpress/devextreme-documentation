var appointments = [
    {
        text: 'Meeting',
        startDate: new Date(2015, 4, 25, 10, 0),
        endDate: new Date(2015, 4, 25, 12, 30),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO"
    },
    {
        text: 'Report',
        startDate: new Date(2015, 4, 29, 12, 0),
        endDate: new Date(2015, 4, 29, 13, 0),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=FR;INTERVAL=2"
    },
    {
        text: 'Summit',
        startDate: new Date(2015, 4, 27, 9, 0),
        allDay: true,
        recurrenceRule: "FREQ=MONTHLY;INTERVAL=1"
    }
];
//<!--@Knockout-->
var myViewModel = {
    schedulerData: appointments,
    currentDate: ko.observable(new Date())
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.schedulerData = appointments;
    $scope.currentDate = new Date();
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
    currentDate: new Date(),
    height: 650
});
$("#dateSelector").dxDateBox({
    value: new Date(),
    onValueChanged: function (e) {
        $("#myScheduler").dxScheduler("instance").option("currentDate", e.value);
    }
});
//<!--/@jQuery-->