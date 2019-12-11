var appointments = [
    {
        text: 'Website Re-Design Plan',
        priorityId: 1,
        startDate: new Date(2015, 4, 25, 9, 0),
        endDate: new Date(2015, 4, 25, 11, 30)
    },
    {
        text: 'Book Flights to San Fran for Sales',
        priorityId: 2,
        startDate: new Date(2015, 4, 25, 12, 0),
        endDate: new Date(2015, 4, 25, 13, 30)
    },
    {
        text: 'Approve Personal Computer Upgrade',
        priorityId: 2,
        startDate: new Date(2015, 4, 26, 10, 0),
        endDate: new Date(2015, 4, 26, 11, 0)
    },
    {
        text: 'Final Budget Review',
        priorityId: 1,
        startDate: new Date(2015, 4, 26, 12, 0),
        endDate: new Date(2015, 4, 26, 13, 30)
    },
    {
        text: 'Install New Database',
        priorityId: 2,
        startDate: new Date(2015, 4, 27, 9, 45),
        endDate: new Date(2015, 4, 27, 11, 15)
    },
    {
        text: 'Approve New On-line Marketing Strategy',
        priorityId: 1,
        startDate: new Date(2015, 4, 27, 12, 0),
        endDate: new Date(2015, 4, 27, 14, 0)
    },
    {
        text: 'Prepare Marketing Plan',
        priorityId: 1,
        startDate: new Date(2015, 4, 28, 11, 0),
        endDate: new Date(2015, 4, 28, 13, 30)
    },
    {
        text: 'Create Icons for Website',
        priorityId: 2,
        startDate: new Date(2015, 4, 29, 10, 0),
        endDate: new Date(2015, 4, 29, 11, 30)
    },
    {
        text: 'Launch New Website',
        priorityId: 1,
        startDate: new Date(2015, 4, 29, 12, 20),
        endDate: new Date(2015, 4, 29, 14, 0)
    }
];
//<!--@Knockout-->
var myViewModel = {
    schedulerData: appointments,
    groupsValue: ko.observable(['priorityId']),
    priorityData: [
        {
            id: 1,
            text: "High priority",
            color: "#AA3933"
        },
        {
            id: 2,
            text: "Low priority",
            color: "#55AA88"
        }
    ],
    updateGroups: function (e) {
        this.groupsValue(e.value ? ['priorityId'] : []);
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.schedulerData = appointments;
    $scope.groupsValue = ['priorityId'],
    $scope.currentDate = new Date(2015, 4, 25);
    $scope.updateGroups = function (e) {
        $scope.groupsValue = e.value ? ['priorityId'] : [];
    };
    $scope.priorityData = [
        {
            id: 1,
            text: "High priority",
            color: "#AA3933"
        },
        {
            id: 2,
            text: "Low priority",
            color: "#55AA88"
        }
    ]
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var priorityData = [
    {
        id: 1,
        text: "High priority",
        color: "#AA3933"
    },
    {
        id: 2,
        text: "Low priority",
        color: "#55AA88"
    }
];
$("#myScheduler").dxScheduler({
    dataSource: appointments,
    startDayHour: 9,
    endDayHour: 18,
    currentView: 'week',
    currentDate: new Date(2015, 4, 25),
    resources: [{
        field: 'priorityId',
        dataSource: priorityData,
        label: 'Priority'
    }],
    groups: ['priorityId'],
    height: 650
});
$("#groupSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myScheduler").dxScheduler("instance").option("groups", e.value ? ['priorityId'] : []);
    }
});
//<!--/@jQuery-->