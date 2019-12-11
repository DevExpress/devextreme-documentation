var dataSource = [{ arg: 0,	  val: 0 },
               	  { arg: 720, val: 2 }];

$(function () {
	$("#chartContainer").dxPolarChart({
		dataSource: dataSource,
		series: [{ type: "line", valueField: "val" }],
		commonSeriesSettings: { closed: false },
		argumentAxis: {
		    inverted: true,
		    startAngle: 90,
		    tickInterval: 45,
		    period: 360
		},
		valueAxis:{
		    tickInterval: 0.5,
		},
		title: 'Archimedean Spiral',
		legend: { visible: false }
	});
});