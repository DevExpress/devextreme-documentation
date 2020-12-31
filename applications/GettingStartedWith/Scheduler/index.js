const appointments = [
    {
        title: "Install New Database",
        start: new Date("2021-05-23T08:45:00.000Z"),
        end: new Date("2021-05-23T09:45:00.000Z")
    }, {
        title: "Create New Online Marketing Strategy",
        start: new Date("2021-05-24T09:00:00.000Z"),
        end: new Date("2021-05-24T11:00:00.000Z")
    }, {
        title: "Upgrade Personal Computers",
        start: new Date("2021-05-25T10:15:00.000Z"),
        end: new Date("2021-05-25T13:30:00.000Z")
    }, {
        title: "Customer Workshop",
        start: new Date("2021-05-26T08:00:00.000Z"),
        end: new Date("2021-05-26T10:00:00.000Z"),
        dayLong: true,
        recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
    }, {
        title: "Prepare Development Plan",
        start: new Date("2021-05-27T08:00:00.000Z"),
        end: new Date("2021-05-27T10:30:00.000Z")
    }, {
        title: "Testing",
        start: new Date("2021-05-23T09:00:00.000Z"),
        end: new Date("2021-05-23T10:00:00.000Z"),
        recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
    }, {
        title: "Meeting of Instructors",
        start: new Date("2021-05-24T10:00:00.000Z"),
        end: new Date("2021-05-24T11:15:00.000Z"),
        recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
    }, {
        title: "Recruiting students",
        start: new Date("2021-05-25T08:00:00.000Z"),
        end: new Date("2021-05-25T09:00:00.000Z"),
        recurrence: "FREQ=YEARLY",
    }, {
        title: "Monthly Planning",
        start: new Date("2021-05-26T09:30:00.000Z"),
        end: new Date("2021-05-26T10:45:00.000Z"),
        recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
    }, {
        title: "Open Day",
        start: new Date("2021-05-27T09:30:00.000Z"),
        end: new Date("2021-05-27T19:00:00.000Z"),
    }
];

$(function(){
    $("#scheduler").dxScheduler({
        dataSource: appointments,
        textExpr: "title",
        startDateExpr: "start",
        endDateExpr: "end",
        allDayExpr: "dayLong",
        currentDate: new Date(2021, 4, 25),
        recurrenceRuleExpr: "recurrence",
        views: [{
            type: "day",
            startDayHour: 10,
            endDayHour: 22
        }, {
            type: "week",
            startDayHour: 10,
            endDayHour: 22
        },
        "month"
        ],
        currentView: "week",
        editing: {
            allowDragging: false,
            allowTimeZoneEditing: true
        },
        timeZone: "Europe/Berlin",
        adaptivityEnabled: true
    });
});