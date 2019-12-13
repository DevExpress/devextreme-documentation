$(function(){
    var usPersonalIncome = [
        { sex: "Male", income: 39740, real: 30513 },
        { sex: "Female", income: 22960, real: 17629 }
    ];

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    $("#chart").dxPieChart({
        dataSource: usPersonalIncome,
        series: {
            argumentField: "sex",
            valueField: "income",
            label: {
                visible: true,
                connector: {
                    visible: true
                },
                format: "currency"
            },
            tagField: "real"
        },
        tooltip: {
            enabled: true,
            format: "currency",
            customizeTooltip: function (e) {
                
                return {
                    html: "<b>Real dollars</b>: " + formatter.format(e.point.tag) + "<br/>" +
                          "<b>2017 dollars</b>: " + e.valueText
                }
            }
        },
        palette: "Soft Pastel",
        title: "Personal income in the US by gender in 2004"
    });
});