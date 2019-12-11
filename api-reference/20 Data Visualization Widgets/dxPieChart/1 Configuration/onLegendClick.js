var dataSource = [
    { age: '0-14 year old', population2000: 58554755, population2014: 61801455 },
    { age: '15-64 year old', population2000: 182172625, population2014: 210911644},
    { age: '65 years and older', population2000: 34835293, population2014: 46179004}
];
 
$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'age',
            label: {
                visible: true,
                format: {
                    type: 'largeNumber',
                    precision: 1
                }
            }
        },
        series:[
            { valueField: 'population2000', name: '2000' },
            { valueField: 'population2014', name: '2014' }
        ],
        title: 'Population in the US: Age Structure',
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        tooltip:{
            enabled: true,
            customizeTooltip: function(e){
                return { text: e.point.series.name }
            }
        },
        onLegendClick: function (info) {
            var pieChart = info.component;
            var argument = info.target;
            var text = argument + ': <br/>';
            $.each(pieChart.getAllSeries(), function (_, series) {
                var value = series.getPointsByArg(argument)[0].value;
                text += '<b>' + series.name + '</b> - ' + value + '<br/>';
            });
            $('#selectionSpan').html(text);
        }
    });
});