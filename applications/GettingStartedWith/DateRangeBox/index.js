$(function() {
    $("#dateRangeBox").dxDateRangeBox({
        min: new Date(1920, 0, 1),
        max: new Date(2030, 0, 1),
        startDateLabel: "Start",
        endDateLabel: "End",
        labelMode: "floating",
        displayFormat: "EEEE, d 'of' MMM", // "Tuesday, 19 of Oct - Sunday, 24 of Oct" 
        useMaskBehavior: true,
        showClearButton: true,
        onValueChanged: (e) => {
            console.log(e.value);
            console.log(e.previousValue);
        },
    });
});
