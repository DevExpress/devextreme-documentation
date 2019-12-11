var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'South America', population: 392555000 }
];

$(function () {
    var pieChartIntance = $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population'
        },
        title: {
            text: 'Population by Continent',
            placeholderSize: 60
        }
    }).dxPieChart("instance");
    
    $("#sliderContainer").dxSlider({
		min: 10,
		max: 100,
		value: 60,
		onValueChanged: function (e) {
			$('#sliderValue').html(e.value);
			pieChartIntance.option({
				title: { placeholderSize: e.value }
			});
		}
	});
});