var appointments = [
    {
        summary: 'Website Re-Design Plan',
        start: new Date(2016, 1, 1, 9, 0),
        end: new Date(2016, 1, 1, 10, 30),
        priority: 1
    },
    {
        summary: 'Book Flights to San Fran for Sales',
        start: new Date(2016, 1, 1, 11, 30),
        end: new Date(2016, 1, 1, 14, 15),
        priority: 2
    },
    {
        summary: 'Approve Personal Computer Upgrade',
        start: new Date(2016, 1, 2, 8, 15),
        end: new Date(2016, 1, 2, 10, 45),
        priority: 1
    },
    {
        summary: 'Final Budget Review',
        start: new Date(2016, 1, 2, 12, 0),
        end: new Date(2016, 1, 2, 13, 45),
        priority: 1
    },
    {
        summary: 'Install New Database',
        start: new Date(2016, 1, 3, 8, 15),
        end: new Date(2016, 1, 3, 9, 0),
        priority: 1
    },
    {
        summary: 'Approve New On-line Marketing Strategy',
        start: new Date(2016, 1, 3, 10, 0),
        end: new Date(2016, 1, 3, 11, 15),
        priority: 2
    },
    {
        summary: 'Prepare Marketing Plan',
        start: new Date(2016, 1, 3, 11, 45),
        end: new Date(2016, 1, 3, 13, 45),
        priority: 2
    },
    {
        summary: 'Create Icons for Website',
        start: new Date(2016, 1, 4, 16, 15),
        end: new Date(2016, 1, 4, 18, 0),
        priority: 1
    },
    {
        summary: 'Launch New Website',
        start: new Date(2016, 1, 4, 11, 15),
        end: new Date(2016, 1, 4, 13, 0),
        priority: 1
    }
];
//<!--@Knockout-->
var myViewModel = {
    schedulerData: new DevExpress.data.DataSource({
        store: appointments,
        filter: ["priority", 1]
    }),
    currentDate: new Date(2016, 1, 1)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.schedulerData = new DevExpress.data.DataSource({
        store: appointments,
        filter: ["priority", 1]
    });
    $scope.currentDate = new Date(2016, 1, 1);
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScheduler").dxScheduler({
    dataSource: new DevExpress.data.DataSource({
        store: appointments,
        filter: ["priority", 1]
    }),
    textExpr: 'summary',
    startDateExpr: 'start',
    endDateExpr: 'end',
    startDayHour: 9,
    endDayHour: 18,
    currentView: 'week',
    currentDate: new Date(2016, 1, 1),
    height: 650
});
//<!--/@jQuery-->