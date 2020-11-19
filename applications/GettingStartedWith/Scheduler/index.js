$(function(){
    var scheduler = $("#scheduler").dxScheduler({
        height: 600,
        startDayHour: 10,
        currentDate: new Date(2021, 4, 25),
        dataSource: data,
        views: ["day", "week", "month", "timelineWeek"],
        currentView: "week",
        resources: [
            {
                fieldExpr: "priorityId",
                dataSource: priorities,
                label: "Priority"
            }
        ],
        groups: ["priorityId"],
        editing: {
            allowDragging: false,
            allowTimeZoneEditing: true
        },
        timeZone: "Europe/Berlin",
        adaptivityEnabled: true
    }).dxScheduler();
});