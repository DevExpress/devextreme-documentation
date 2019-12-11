var data = [
    { category: 'Oceania', value: 35 },
    { category: 'Africa', value: 1016 },
    { category: 'Americas', value: 936 },
    { category: 'Asia', value: 4149 },
    { category: 'Europe', value: 728 }
];

var dataSource = new DevExpress.data.DataSource({
    load: function (loadOptions) {
        var d = $.Deferred();
        setTimeout(function () {
            d.resolve(data);
        }, 5000);
        return d.promise();
    },
});

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'category',
            valueField: 'value',
            label: {
                visible: true,
                connector: { visible: true }
            }
        },
        title: 'Continental Population by 2010 (in millions)',
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        loadingIndicator: {
            show: true
        }
    });
    
    $('#showLoadingIndicatorButton').click(function () {
        var pieChart = $('#pieChartContainer').dxPieChart('instance');
        pieChart.showLoadingIndicator();
    });

    $('#hideLoadingIndicatorButton').click(function () {
        var pieChart = $('#pieChartContainer').dxPieChart('instance');
        pieChart.hideLoadingIndicator();
    });
});