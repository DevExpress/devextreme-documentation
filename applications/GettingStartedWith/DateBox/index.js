$(function() {
    const now = new Date();
    const holidays = [
        new Date(0, 0, 1),
        new Date(0, 0, 20),
        new Date(0, 1, 17),
        new Date(0, 4, 10),
        new Date(0, 4, 25),
        new Date(0, 5, 21),
        new Date(0, 6, 4),
        new Date(0, 8, 7),
        new Date(0, 9, 5),
        new Date(0, 9, 12),
        new Date(0, 10, 11),
        new Date(0, 10, 26),
        new Date(0, 10, 27),
        new Date(0, 11, 24),
        new Date(0, 11, 25),
        new Date(0, 11, 31)
    ];

    $("#dateBox").dxDateBox({
        opened: true,
        type: "datetime",
        value: now,
        max: now,
        min: new Date(1900, 0, 1),
        onValueChanged: function(e) {
            console.log(e.value);
            console.log(e.previousValue);
        },
        disabledDates: function(args) {
            const dayOfWeek = args.date.getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; 
            return args.view === "month" && (isWeekend || isHoliday(args.date));
        },
    });

    function isHoliday(date) {
        for (let holiday of holidays) {
            if (date.getDate() === holiday.getDate() && date.getMonth() === holiday.getMonth()) {
                return true;
            }          
        }
        return false;
    }
});