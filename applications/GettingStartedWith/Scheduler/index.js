$(function(){
    const data = [
        {
            text: "Install New Database",
            priorityId: 1,
            startDate: new Date("2021-05-23T08:45:00.000Z"),
            endDate: new Date("2021-05-23T09:45:00.000Z")
        }, {
            text: "Create New Online Marketing Strategy",
            priorityId: 1,
            startDate: new Date("2021-05-24T09:00:00.000Z"),
            endDate: new Date("2021-05-24T11:00:00.000Z")
        }, {
            text: "Upgrade Personal Computers",
            priorityId: 1,
            startDate: new Date("2021-05-25T10:15:00.000Z"),
            endDate: new Date("2021-05-25T13:30:00.000Z")
        }, {
            text: "Customer Workshop",
            priorityId: 1,
            startDate: new Date("2021-05-26T08:00:00.000Z"),
            endDate: new Date("2021-05-26T10:00:00.000Z"),
            allDay: true,
            recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
        }, {
            text: "Prepare Development Plan",
            priorityId: 1,
            startDate: new Date("2021-05-27T08:00:00.000Z"),
            endDate: new Date("2021-05-27T10:30:00.000Z")
        }, {
            text: "Testing",
            priorityId: 2,
            startDate: new Date("2021-05-23T09:00:00.000Z"),
            endDate: new Date("2021-05-23T10:00:00.000Z"),
            recurrenceRule: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
        }, {
            text: "Meeting of Instructors",
            priorityId: 2,
            startDate: new Date("2021-05-24T10:00:00.000Z"),
            endDate: new Date("2021-05-24T11:15:00.000Z"),
            recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
        }, {
            text: "Recruiting students",
            priorityId: 2,
            startDate: new Date("2021-05-25T08:00:00.000Z"),
            endDate: new Date("2021-05-25T09:00:00.000Z"),
            recurrenceRule: "FREQ=YEARLY",
        }, {
            text: "Monthly Planning",
            priorityId: 2,
            startDate: new Date("2021-05-26T09:30:00.000Z"),
            endDate: new Date("2021-05-26T10:45:00.000Z"),
            recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
        }, {
            text: "Open Day",
            priorityId: 2,
            startDate: new Date("2021-05-27T09:30:00.000Z"),
            endDate: new Date("2021-05-27T11:00:00.000Z"),
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
    });
});