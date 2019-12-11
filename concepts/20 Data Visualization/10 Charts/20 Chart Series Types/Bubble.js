var dataSource = [
    { tag: 'Avatar (2009)', budget2000: 237000000, gross2000: 2782245172, relation2000: 11.739 },
    { tag: 'Titanic (1997)', budget1990: 200000000, gross1990: 2186772302, relation1990: 10.934 },
    { tag: 'The Avengers (2012)', budget2010: 220000000, gross2010: 1518594910, relation2010: 6.903 },
    { tag: 'Harry Potter and the Deathly Hallows Part 2 (2011)', budget2010: 125000000, gross2010: 1341511219, relation2010: 10.732 },
    { tag: 'Iron Man 3 (2013)', budget2010: 200000000, gross2010: 1215439994, relation2010: 6.077 },
    { tag: 'Transformers: Dark of the Moon (2011)', budget2010: 195000000, gross2010: 1123794079, relation2010: 5.763 },
    { tag: 'The Lord of the Rings: The Return of the King (2003)', budget2000: 94000000, gross2000: 1119929521, relation2000: 11.914 },
    { tag: 'Skyfall (2012)', budget2010: 200000000, gross2010: 1108561013, relation2010: 5.543 },
    { tag: 'The Dark Knight Rises (2012)', budget2010: 250000000, gross2010: 1084439099, relation2010: 4.338 },
    { tag: "Pirates of the Caribbean: Dead Man's Chest (2006)", budget2000: 225000000, gross2000: 1066179725, relation2000: 4.739 },
    { tag: 'Toy Story 3 (2010)', budget2010: 200000000, gross2010: 1063171911, relation2010: 5.316 },
    { tag: 'Pirates of the Caribbean: On Stranger Tides (2011)', budget2010: 250000000, gross2010: 1045713802, relation2010: 4.183 },
    { tag: 'Jurassic Park (1993)', budget1990: 63000000, gross1990: 1029153882, relation1990: 16.336 },
    { tag: 'Star Wars: Episode I - The Phantom Menace (1999)', budget1990: 115000000, gross1990: 1027044677, relation1990: 8.931 },
    { tag: 'Alice in Wonderland (2010)', budget2010: 200000000, gross2010: 1025467110, relation2010: 5.127 }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'bubble'
        },
        argumentAxis: {
            title: 'Worldwide Gross',
            label: {
                format: {
                    type: 'largeNumber',
                    precision: 1
                }
            }
        },
        valueAxis: {
            title: 'Movie Budget',
            label: { format: 'largeNumber' }
        },
        series: [
            { argumentField: 'gross1990', valueField: 'budget1990', sizeField: 'relation1990', name: '1990 - 1999' },
            { argumentField: 'gross2000', valueField: 'budget2000', sizeField: 'relation2000', name: '2000 - 2009' },
            { argumentField: 'gross2010', valueField: 'budget2010', sizeField: 'relation2010', name: '2010 - now' }
        ],
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return {
                    text: this.point.tag
                };
            }
        },
        title: "15 Highest-Grossing Movies of All Time"
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            type: 'bubble'
        },
        argumentAxis: {
            title: 'Worldwide Gross',
            label: {
                format: {
                    type: 'largeNumber',
                    precision: 1
                }
            }
        },
        valueAxis: {
            title: 'Movie Budget',
            label: { format: 'largeNumber' }
        },
        series: [
            { argumentField: 'gross1990', valueField: 'budget1990', sizeField: 'relation1990', name: '1990 - 1999' },
            { argumentField: 'gross2000', valueField: 'budget2000', sizeField: 'relation2000', name: '2000 - 2009' },
            { argumentField: 'gross2010', valueField: 'budget2010', sizeField: 'relation2010', name: '2010 - now' }
        ],
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                return {
                    text: this.point.tag
                };
            }
        },
        title: "15 Highest-Grossing Movies of All Time"
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('chartController', function ($scope) {
        $scope.chartConfiguration = {
            dataSource: dataSource,
            commonSeriesSettings: {
                type: 'bubble'
            },
            argumentAxis: {
                title: 'Worldwide Gross',
                label: {
                    format: {
                        type: 'largeNumber',
                        precision: 1
                    }
                }
            },
            valueAxis: {
                title: 'Movie Budget',
                label: { format: 'largeNumber' }
            },
            series: [
                { argumentField: 'gross1990', valueField: 'budget1990', sizeField: 'relation1990', name: '1990 - 1999' },
                { argumentField: 'gross2000', valueField: 'budget2000', sizeField: 'relation2000', name: '2000 - 2009' },
                { argumentField: 'gross2010', valueField: 'budget2010', sizeField: 'relation2010', name: '2010 - now' }
            ],
            legend: {
                horizontalAlignment: 'center',
                verticalAlignment: 'bottom'
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function () {
                    return {
                        text: this.point.tag
                    };
                }
            },
            title: "15 Highest-Grossing Movies of All Time"
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->