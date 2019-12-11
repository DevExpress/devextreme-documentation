$(function(){    
    var chart = $("#chart").dxPieChart({
        dataSource: [
            { arg: 'A', val: 8 },
            { arg: 'B', val: 20 },
            { arg: 'C', val: 10 },
            { arg: 'D', val: 14 },
            { arg: 'E', val: 9 },
            { arg: 'F', val: 18 },
            { arg: 'G', val: 14 }
        ],
        series: { label: { visible: true, connector: { visible: true } } },
        animation: false,
        legend: { visible: false }
    }).dxPieChart("instance");
    
    $("#palette").dxSelectBox({
        items: [ 'Default', 'Soft Pastel', 'Harmony Light', 'Pastel', 'Bright', 'Soft', 'Ocean', 'Vintage', 'Violet', 'Carmine', 'Dark Moon', 'Soft Blue', 'Dark Violet', 'Green Mist'],
        value: 'Default',
        onValueChanged: function (e) {
            chart.option("palette", e.value)
        }
    });
});