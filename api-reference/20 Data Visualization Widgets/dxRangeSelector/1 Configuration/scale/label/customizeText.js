$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        dataSource: [
            { carName: 'Volkswagen Golf Mk7', maxSpeed: 134 },
            { carName: 'Audi A3 Mk3', maxSpeed: 155 },
            { carName: 'Renault Logan', maxSpeed: 115 },
            { carName: 'Nissan Skyline GTR R35', maxSpeed: 193 },
            { carName: 'Toyota Camry XV50', maxSpeed: 155 }
        ],
        dataSourceField: 'maxSpeed',
        scale: {
            label: {
                customizeText: function (value) {
                    return value.value + 'mph';
                }
            }
        }
    });
});