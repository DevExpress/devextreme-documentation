$(function() {
    function changeYear(date) {
        const thisDate = new Date();
        const thisYear = thisDate.getFullYear();
        return new Date(date.setFullYear(thisYear));
    };

    const federalHolidays = [
        changeYear(new Date('2022-01-01T00:00:00.000Z')),
        changeYear(new Date('2022-01-17T00:00:00.000Z')),
        changeYear(new Date('2022-02-21T00:00:00.000Z')),
        changeYear(new Date('2022-05-30T00:00:00.000Z')),
        changeYear(new Date('2022-06-19T00:00:00.000Z')),
        changeYear(new Date('2022-07-04T00:00:00.000Z')),
        changeYear(new Date('2022-09-05T00:00:00.000Z')),
        changeYear(new Date('2022-10-10T00:00:00.000Z')),
        changeYear(new Date('2022-11-11T00:00:00.000Z')),
        changeYear(new Date('2022-11-24T00:00:00.000Z')),
        changeYear(new Date('2022-12-25T00:00:00.000Z'))
    ];

    $("#calendar").dxCalendar({
        showTodayButton: true,
        zoomLevel: "year",
        min: changeYear(new Date('2022-01-01T00:00:00.000Z')),
        max: changeYear(new Date('2022-12-31T00:00:00.000Z')),
        disabledDates: function(data) {
            return data.view === 'month' && data.date.getDay() === 0;
        },
        cellTemplate: function(data) {
            let cssClass = '';
            $.each(federalHolidays, (_, item) => {
                if (data.date !== undefined) {
                    if (data.date.getDate() === item.getDate() && data.date.getMonth() === item.getMonth() && data.view !== 'year') {
                        cssClass = 'holiday';
                    }
                }
            });
            return `<span class='${cssClass}'>${data.text}</span>`;
        },
        showWeekNumbers: true,
        weekNumberRule: "firstDay"
    });

});