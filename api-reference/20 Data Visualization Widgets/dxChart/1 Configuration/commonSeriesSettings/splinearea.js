var dataSource = [
    { company: 'ExxonMobil', y2005: 362.53, y2004: 277.02},
    { company: 'GeneralElectric', y2005: 348.45, y2004: 328.54},
    { company: 'Microsoft', y2005: 279.02, y2004: 297.02},
    { company: 'Citigroup', y2005: 230.93, y2004: 255.3},
    { company: 'Royal Dutch Shell plc', y2005: 203.52, y2004: 173.54},
    { company: 'Procter & Gamble', y2005: 197.12, y2004: 131.89}
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'splineArea',
            splinearea: {
                argumentField: 'company'
            }
        },
        series: [
            { valueField: 'y2005', name: '2005' },
            { valueField: 'y2004', name: '2004' }
        ],
        title: {
            text: 'Corporations with Highest Market Value'
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        tooltip: {
            enabled: true
        }
    });
});