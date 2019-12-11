var dataSource = [
    { month: 'يناير', high: -4.9, low: -11.6 },
    { month: 'فبراير', high: -3, low: -10.1 },
    { month: 'مارس', high: 1.1, low: -7.1 },
    { month: 'إبريل', high: 6.9, low: -1.6 },
    { month: 'مايو', high: 13.3, low: 4.2 },
    { month: 'يونية', high: 17.13, low: 8.7 },
    { month: 'يولية', high: 18.6, low: 11.2 },
    { month: 'أغسطس', high: 17.5, low: 10 },
    { month: 'سبتمبر', high: 12.8, low: 5.6 },
    { month: 'أكتوبر', high: 4.7, low: -1.6 },
    { month: 'نوفمبر', high: -2.3, low: -8.6 },
    { month: 'ديسمبر', high: -4, low: -10.4 },
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'month',
            type: 'line',
            point: {visible: false},
        },
        series: [
            { valueField: 'low', name: 'في ليل' },
            { valueField: 'high', name: 'في النهار' }
        ],
        title: 'متوسط درجة الحرارة في مرسى، ألاسكا',
        rtlEnabled: true,
    });
});
