$(function(){
    const data = [
        {
            appointmentText: "Install New Database",
            priorityId: 1,
            start: new Date("2021-05-23T08:45:00.000Z"),
            end: new Date("2021-05-23T09:45:00.000Z")
        }, {
            appointmentText: "Create New Online Marketing Strategy",
            priorityId: 1,
            start: new Date("2021-05-24T09:00:00.000Z"),
            end: new Date("2021-05-24T11:00:00.000Z")
        }, {
            appointmentText: "Upgrade Personal Computers",
            priorityId: 1,
            start: new Date("2021-05-25T10:15:00.000Z"),
            end: new Date("2021-05-25T13:30:00.000Z")
        }, {
            appointmentText: "Customer Workshop",
            priorityId: 1,
            start: new Date("2021-05-26T08:00:00.000Z"),
            end: new Date("2021-05-26T10:00:00.000Z"),
            allDay: true,
            recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            appointmentText: "Prepare Development Plan",
            priorityId: 1,
            start: new Date("2021-05-27T08:00:00.000Z"),
            end: new Date("2021-05-27T10:30:00.000Z")
        }, {
            appointmentText: "Testing",
            priorityId: 2,
            start: new Date("2021-05-23T09:00:00.000Z"),
            end: new Date("2021-05-23T10:00:00.000Z"),
            recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            appointmentText: "Meeting of Instructors",
            priorityId: 2,
            start: new Date("2021-05-24T10:00:00.000Z"),
            end: new Date("2021-05-24T11:15:00.000Z"),
            recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            appointmentText: "Recruiting students",
            priorityId: 2,
            start: new Date("2021-05-25T08:00:00.000Z"),
            end: new Date("2021-05-25T09:00:00.000Z"),
            recurrence: "FREQ=YEARLY",
        }, {
            appointmentText: "Monthly Planning",
            priorityId: 2,
            start: new Date("2021-05-26T09:30:00.000Z"),
            end: new Date("2021-05-26T10:45:00.000Z"),
            recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            appointmentText: "Open Day",
            priorityId: 2,
            start: new Date("2021-05-27T09:30:00.000Z"),
            end: new Date("2021-05-27T19:00:00.000Z"),
        }
    ];
    
    const priorities = [
        {
            text: "High priority",
            id: 1,
            color: "#cc5c53"
        }, {
            text: "Low priority",
            id: 2,
            color: "#ff9747"
        }
    ];

    var scheduler = $("#scheduler").dxScheduler({
        currentDate: new Date(2021, 4, 25),
        dataSource: appointments,
        textExpr: "appointmentText",
        startDateExpr: "start",
        endDateExpr: "end",
        allDayExpr: "wholeDay",
        recurrenceRuleExpr: "recurrence",
        currentView: "workWeek",
        views: [
            "day",
            {
                type: "workWeek",
                startDayHour: 10,
                endDayHour: 22
            },
            "month", 
            "timelineWeek"
        ],
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
        adaptivityEnabled: true,
    });
});