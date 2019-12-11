var dataSource = [{ arg: 0, val: 0 },
                 { arg: 30, val: 1.7 },
                 { arg: 45, val: 0 },
                 { arg: 60, val: 1.7 },
                 { arg: 90, val: 0 },
                 { arg: 120, val: 1.7 },
                 { arg: 135, val: 0 },
                 { arg: 150, val: 1.7 },
                 { arg: 180, val: 0 },
                 { arg: 210, val: 1.7 },
                 { arg: 225, val: 0 },
                 { arg: 240, val: 1.7 },
                 { arg: 270, val: 0 },
                 { arg: 300, val: 1.7 },
                 { arg: 315, val: 0 },
                 { arg: 330, val: 1.7 },
                 { arg: 360, val: 0 }];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [{ type: 'line' }],
        legend: { visible: false },
        valueAxis: {
            constantLines: [
                { value: 1.7 }
            ],
        },
        argumentAxis: {
            constantLines: [
                { value: 30, label: { text: '30 &degC' } },
                { value: 60, label: { text: '60 &degC' } },
                { value: 120, label: { text: '120 &degC' } },
                { value: 150, label: { text: '150 &degC' } },
                { value: 210, label: { text: '210 &degC' } },
                { value: 240, label: { text: '240 &degC' } },
                { value: 300, label: { text: '300 &degC' } },
                { value: 330, label: { text: '330 &degC' } }
            ]
        },
        commonAxisSettings: {
            constantLineStyle: {
                opacity: 0.85
            }
        }
    });
});
