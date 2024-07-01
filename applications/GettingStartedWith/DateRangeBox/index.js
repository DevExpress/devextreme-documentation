$(function() {
    $("#dateRangeBox").dxDateRangeBox({
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        min: new Date(new Date().setDate(new Date().getDate() - 14)),
        max: new Date(new Date().setDate(new Date().getDate() + 14)),
        startDateLabel: "Start",
        endDateLabel: "End",
        labelMode: "floating",
        displayFormat: "EEEE, MMM d", // "Tuesday, Oct 19 - Sunday, Oct 24"
        useMaskBehavior: true,
        openOnFieldClick: false,
        showClearButton: true,
        opened: true,
    });
});
