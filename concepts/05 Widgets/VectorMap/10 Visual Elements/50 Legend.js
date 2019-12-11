var population = {
    "China": 19,
    "India": 17.4,
    "United States": 4.44,
    "Indonesia": 3.45,
    "Brazil": 2.83,
    "Nigeria": 2.42,
    "Bangladesh": 2.18,
    "Russia": 2.04,
    "Japan": 1.77,
    "Mexico": 1.67,
    "Philippines": 1.39,
    "Vietnam": 1.25,
    "Ethiopia": 1.23,
    "Egypt": 1.21,
    "Germany": 1.13,
    "Turkey": 1.07,
    "Democratic Republic of the Congo": 0.94,
    "France": 0.92,
    "Thailand": 0.9,
    "United Kingdom": 0.89,
    "Italy": 0.85,
    "Burma": 0.84,
    "South Africa": 0.74,
    "South Korea": 0.7,
    "Colombia": 0.66,
    "Spain": 0.65,
    "Tanzania": 0.63,
    "Kenya": 0.62,
    "Ukraine": 0.6,
    "Argentina": 0.59,
    "Algeria": 0.54,
    "Poland": 0.54,
    "Sudan": 0.52,
    "Canada": 0.49,
    "Uganda": 0.49,
    "Morocco": 0.46,
    "Uzbekistan": 0.43
};

//<!--@jQuery-->
$.getJSON('/Content/data/vectorMap-sources/world.txt', function (worldMapData) {
    $.each(worldMapData, function (_, item) {
        item.attributes.population = population[item.attributes.name];
        if (population[item.attributes.name])
            item.attributes.label = item.attributes.name;
    });
    
    $("#vectorMapContainer").dxVectorMap({
        controlBar: { enabled: false },
        layers: [{
            type: 'area',
            dataSource: worldMapData,
            name: 'areas',
            palette: "Violet",
            colorGroups: [0, 0.5, 0.8, 1, 2, 3, 100],
            colorGroupingField: "population",
            label: {
                enabled: true,
                dataField: "label"
            }
        }],
        legends: [{
            source: {
                layer: 'areas',
                grouping: 'color'
            },
            customizeText: function (arg) {
                if (arg.index === 0)
                    return '< 0.5%';
                else if (arg.index === 5)
                    return '> 3%';
                else
                    return arg.start + '% to ' + arg.end + '%';
            }
        }]
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
$.getJSON('/Content/data/vectorMap-sources/world.txt', function (worldMapData) {
    ko.utils.arrayForEach(worldMapData, function (item) {
        item.attributes.population = population[item.attributes.name];
        if (population[item.attributes.name]) {
            item.attributes.label = item.attributes.name;
        }
    });

    viewModel.vectorMapInstance.option('layers[0].dataSource', worldMapData)
});

var viewModel = {
    vectorMapInstance: {},
    vectorMapCfg: {
        controlBar: { enabled: false },
        layers: [{
            type: 'area',
            name: 'areas',
            palette: "Violet",
            colorGroups: [0, 0.5, 0.8, 1, 2, 3, 100],
            colorGroupingField: "population",
            label: {
                enabled: true,
                dataField: "label"
            }
        }],
        legends: [{
            source: {
                layer: 'areas',
                grouping: 'color'
            },
            customizeText: function (arg) {
                if (arg.index === 0)
                    return '< 0.5%';
                else if (arg.index === 5)
                    return '> 3%';
                else
                    return arg.start + '% to ' + arg.end + '%';
            }
        }],
        onInitialized: function(e) {
            viewModel.vectorMapInstance = e.component;
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapCtrl', function ($scope, $http) {
        $http.get('/Content/data/vectorMap-sources/world.txt')
             .then(function (response) {
                 var worldMapData = response.data;
                 angular.forEach(worldMapData, function (item) {
                    item.attributes.population = population[item.attributes.name];
                    if (population[item.attributes.name]) {
                        item.attributes.label = item.attributes.name;
                    }
                });

                $scope.vectorMapInstance.option('layers[0].dataSource', worldMapData)
             });
             
        $scope.vectorMapInstance = {};
        $scope.vectorMapCfg = {
            controlBar: { enabled: false },
            layers: [{
                type: 'area',
                name: 'areas',
                palette: "Violet",
                colorGroups: [0, 0.5, 0.8, 1, 2, 3, 100],
                colorGroupingField: "population",
                label: {
                    enabled: true,
                    dataField: "label"
                }
            }],
            legends: [{
                source: {
                    layer: 'areas',
                    grouping: 'color'
                },
                customizeText: function (arg) {
                    if (arg.index === 0)
                        return '< 0.5%';
                    else if (arg.index === 5)
                        return '> 3%';
                    else
                        return arg.start + '% to ' + arg.end + '%';
                }
            }],
            onInitialized: function(e) {
                $scope.vectorMapInstance = e.component;
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->