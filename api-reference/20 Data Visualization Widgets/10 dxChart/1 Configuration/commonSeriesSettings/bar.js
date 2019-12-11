var dataSource = [
    { company: 'ExxonMobil', 2004: 277.02, 2005: 362.53, 2006: 398.91 },
    { company: 'General Electric', 2004: 328.54, 2005: 348.45, 2006: 364.41 },
    { company: 'Microsoft', 2004: 297.02, 2005: 279.02, 2006: 272.68 },
    { company: 'Citigroup', 2004: 255.3, 2005: 230.93, 2006: 246.72 },
    { company: 'Royal Dutch Shell plc', 2004: 173.54, 2005: 203.52, 2006: 216.37 },
    { company: 'Procter &amp; Gamble', 2004: 131.89, 2005: 197.12, 2006: 200.32 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            bar: {
                cornerRadius: 10
            },
            argumentField: 'company'
        },
        commonAxisSettings: {
            label: {
                overlappingBehavior: {
                    mode: 'rotate',
                    rotationAngle: 45
                }
            }
        },
        series: [
            { valueField: '2004', name: '2004', type: 'bar', color: 'plum' },
            { valueField: '2005', name: '2005', type: 'bar', color: 'palevioletred' },
            { valueField: '2006', name: '2006', type: 'spline', color: 'darkturquoise' }
        ],
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        },
        title: {
            text: 'Corporations with Highest Market Value'
        }
    });
});