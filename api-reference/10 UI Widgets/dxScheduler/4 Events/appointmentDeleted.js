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
//<!--@Knockout-->
var myViewModel = {
    schedulerData: appointments,
    initializedHandler: function (e) {
        e.component
            .on("appointmentAdded", function (e) {
                DevExpress.ui.notify("Appointment added");
            })
            .on("appointmentUpdated", function (e) {
                DevExpress.ui.notify("Appointment updated");
            })
            .on("appointmentDeleted", function (e) {
                DevExpress.ui.notify("Appointment deleted");
            });
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.schedulerData = appointments;
    $scope.currentDate = new Date(2016, 4, 25);
    $scope.initializedHandler = function (e) {
        e.component
            .on("appointmentAdded", function (e) {
                DevExpress.ui.notify("Appointment added");
            })
            .on("appointmentUpdated", function (e) {
                DevExpress.ui.notify("Appointment updated");
            })
            .on("appointmentDeleted", function (e) {
                DevExpress.ui.notify("Appointment deleted");
            });
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
    height: 650,
    onInitialized: function (e) {
        e.component
            .on("appointmentAdded", function (e) {
                DevExpress.ui.notify("Appointment added");
            })
            .on("appointmentUpdated", function (e) {
                DevExpress.ui.notify("Appointment updated");
            })
            .on("appointmentDeleted", function (e) {
                DevExpress.ui.notify("Appointment deleted");
            });
    }
});
//<!--/@jQuery-->