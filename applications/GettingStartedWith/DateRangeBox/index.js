$(function() {
    $("#dateRangeBox").dxDateRangeBox({
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        min: new Date(new Date().setDate(new Date().getDate() - 14)),
        max: new Date(new Date().setDate(new Date().getDate() + 14)),
        startDateLabel: "Start",
        endDateLabel: "End",
        labelMode: "floating",
        displayFormat: "EEEE, d 'of' MMM", // "Tuesday, 19 of Oct - Sunday, 24 of Oct" 
        useMaskBehavior: true,
        openOnFieldClick: false,
        showClearButton: true,
    });
});
