var appointments = [
    {
        text: 'Website Re-Design Plan',
        startDate: new Date(2015, 4, 25, 9, 0),
        endDate: new Date(2015, 4, 25, 11, 30)
    },
    {
        text: 'Book Flights to San Fran for Sales',
        startDate: new Date(2015, 4, 25, 12, 0),
        endDate: new Date(2015, 4, 25, 13, 30)
    },
    {
        text: 'Approve Personal Computer Upgrade',
        startDate: new Date(2015, 4, 26, 10, 0),
        endDate: new Date(2015, 4, 26, 11, 0)
    },
    {
        text: 'Final Budget Review',
        startDate: new Date(2015, 4, 26, 12, 0),
        endDate: new Date(2015, 4, 26, 13, 30)
    },
    {
        text: 'Install New Database',
        startDate: new Date(2015, 4, 27, 9, 45),
        endDate: new Date(2015, 4, 27, 11, 15)
    },
    {
        text: 'Approve New On-line Marketing Strategy',
        startDate: new Date(2015, 4, 27, 12, 0),
        endDate: new Date(2015, 4, 27, 14, 0)
    },
    {
        text: 'Prepare Marketing Plan',
        startDate: new Date(2015, 4, 28, 11, 0),
        endDate: new Date(2015, 4, 28, 13, 30)
    },
    {
        text: 'Create Icons for Website',
        startDate: new Date(2015, 4, 29, 10, 0),
        endDate: new Date(2015, 4, 29, 11, 30)
    },
    {
        text: 'Launch New Website',
        startDate: new Date(2015, 4, 29, 12, 20),
        endDate: new Date(2015, 4, 29, 14, 0)
    }
];
//<!--@Knockout-->
var myViewModel = {
    schedulerData: new DevExpress.data.DataSource({
        store: appointments,
        map: function (dataItem) {
            dataItem.from = dataItem.startDate.getHours() + ":" + dataItem.startDate.getMinutes() + (dataItem.startDate.getMinutes() < 10 ? "0" : "");
            dataItem.to = dataItem.endDate.getHours() + ":" + dataItem.endDate.getMinutes() + (dataItem.endDate.getMinutes() < 10 ? "0" : "");
            return dataItem;
        }
    })
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.schedulerData = new DevExpress.data.DataSource({
        store: appointments,
        map: function (dataItem) {
            dataItem.from = dataItem.startDate.getHours() + ":" + dataItem.startDate.getMinutes() + (dataItem.startDate.getMinutes() < 10 ? "0" : "");
            dataItem.to = dataItem.endDate.getHours() + ":" + dataItem.endDate.getMinutes() + (dataItem.endDate.getMinutes() < 10 ? "0" : "");
            return dataItem;
        }
    });
    $scope.currentDate = new Date(2015, 4, 25);
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScheduler").dxScheduler({
    dataSource: new DevExpress.data.DataSource({
        store: appointments,
        map: function (dataItem) {
            dataItem.from = dataItem.startDate.getHours() + ":" + dataItem.startDate.getMinutes() + (dataItem.startDate.getMinutes() < 10 ? "0" : "");
            dataItem.to = dataItem.endDate.getHours() + ":" + dataItem.endDate.getMinutes() + (dataItem.endDate.getMinutes() < 10 ? "0" : "");
            return dataItem;
        }
    }),
    startDayHour: 9,
    endDayHour: 18,
    currentView: 'week',
    currentDate: new Date(2015, 4, 25),
    appointmentTemplate: function(itemData, itemIndex, itemElement){
        itemElement.css("padding", "0");
        itemElement.append("<div class='appointment-header'>" + itemData.text + "</div>");
        itemElement.append("<div class='appointment-time'>" + itemData.from + " - " + itemData.to + "</div>");
    },
    height: 650
});
//<!--/@jQuery-->