var dataSource = [
    { country: 'China', y014: 320866959, y1564: 853191410, y65: 87774113, tag: "China, officially the People's Republic of China (PRC), is a country in East Asia. It is the world's most populous country, with a population of over 1.3 billion. The PRC is a single-party state governed by the Communist Party of China with its seat of government in the capital city of Beijing. It exercises jurisdiction over 22 provinces, five autonomous regions, four direct-controlled municipalities (Beijing, Tianjin, Shanghai, and Chongqing), and two mostly self-governing special administrative regions (Hong Kong and Macau). The PRC also claims Taiwan—which is controlled by the Republic of China (ROC), a separate political entity—as its 23rd province, a claim controversial due to the complex political status of Taiwan and the unresolved Chinese Civil War." },
    { country: 'India', y014: 340419115, y1564: 626520945, y65: 47063757, tag: "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India's Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia." },
    { country: 'United States', y014: 58554755, y1564: 182172625, y65: 34835293, tag: "The United States of America (USA), commonly called the United States (US or U.S.) and America, is a federal constitutional republic consisting of fifty states and a federal district. The country is situated mostly in central North America, where its forty-eight contiguous states and Washington, D.C., the capital district, lie between the Pacific and Atlantic Oceans, bordered by Canada to the north and Mexico to the south. The state of Alaska is in the northwest of the continent, with Canada to the east and Russia to the west across the Bering Strait. The state of Hawaii is an archipelago in the mid-Pacific. The country also possesses several territories in the Pacific and Caribbean. At 3.79 million square miles (9.83 million km2) and with over 315 million people, the United States is the third- or fourth-largest country by total area, and the third-largest by both land area and population. It is one of the world's most ethnically diverse and multicultural nations, the product of large-scale immigration from many countries. The geography and climate of the United States is also extremely diverse and is home to a variety of species." },
    { country: 'Indonesia', y014: 68715705, y1564: 146014815, y65: 10053690, tag: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania. Indonesia is an archipelago comprising approximately 17,508 islands. It has 34 provinces with over 238 million people, and is the world's fourth most populous country. Indonesia is a republic, with an elected legislature and president. The nation's capital city is Jakarta. The country shares land borders with Papua New Guinea, East Timor, and Malaysia. Other neighboring countries include Singapore, Philippines, Australia, Palau, and the Indian territory of the Andaman and Nicobar Islands. Indonesia is a founding member of ASEAN and a member of the G-20 major economies. The Indonesian economy is the world's sixteenth largest by nominal GDP and fifteenth largest by purchasing power parity." },
    { country: 'Brazil', y014: 50278034, y1564: 113391494, y65: 9190842, tag: "Brazil, officially the Federative Republic of Brazil, is the largest country in South America and in the Latin America region. It is the world's fifth largest country, both by geographical area and by population with over 193 million people. It is the largest Lusophone country in the world, and the only one in the Americas." },
    { country: 'Russia', y014: 26465156, y1564: 101123777, y65: 18412243, tag: "Russia, also officially known as the Russian Federation, is a country in northern Eurasia. It is a federal semi-presidential republic, comprising 83 federal subjects. At 17,075,400 square kilometres (6,592,800 sq mi), Russia is the largest country in the world, covering more than one-eighth of the Earth's inhabited land area. Russia is also the world's ninth most populous nation with 143 million people as of 2012. Extending across the whole of northern Asia, Russia spans nine time zones and incorporates a wide range of environments and landforms. Russia has the world's largest reserves of mineral and energy resources and is the largest producer of oil and natural gas globally. Russia has the world's largest forest reserves and its lakes contain approximately one-quarter of the world's liquid fresh water." }
];

//<!--@jQuery-->
$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            tagField: 'tag',
            point: {
                hoverMode: 'allArgumentPoints',
                selectionMode: 'allArgumentPoints'
            }
        },
        series: [
            { valueField: 'y014', name: '0-14 years' },
            { valueField: 'y1564', name: '15-64 years' },
            { valueField: 'y65', name: '65 years and older' }
        ],
        title: 'Population: Age Structure (2000)',
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        onPointClick: function (info) {
            var point = info.target;
            point.isSelected() ? point.clearSelection() : point.select();
        },
        onPointSelectionChanged: function (info) {
            var point = info.target;
            point.isSelected() ? $('#outputText').html(point.tag) : $('#outputText').html('');
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    outputText: ko.observable(),
    chartConfiguration: {
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            tagField: 'tag',
            point: {
                hoverMode: 'allArgumentPoints',
                selectionMode: 'allArgumentPoints'
            }
        },
        series: [
            { valueField: 'y014', name: '0-14 years' },
            { valueField: 'y1564', name: '15-64 years' },
            { valueField: 'y65', name: '65 years and older' }
        ],
        title: 'Population: Age Structure (2000)',
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        valueAxis: {
            label: { format: 'largeNumber' }
        },
        onPointClick: function (info) {
            var point = info.target;
            point.isSelected() ? point.clearSelection() : point.select();
        },
        onPointSelectionChanged: function (info) {
            var point = info.target;
            point.isSelected() ? viewModel.outputText(point.tag) : viewModel.outputText('');
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('exampleController', function ($scope) {
        $scope.outputText = "";
        $scope.chartConfiguration = {
            dataSource: dataSource,
            commonSeriesSettings: {
                argumentField: 'country',
                tagField: 'tag',
                point: {
                    hoverMode: 'allArgumentPoints',
                    selectionMode: 'allArgumentPoints'
                }
            },
            series: [
                { valueField: 'y014', name: '0-14 years' },
                { valueField: 'y1564', name: '15-64 years' },
                { valueField: 'y65', name: '65 years and older' }
            ],
            title: 'Population: Age Structure (2000)',
            legend: {
                horizontalAlignment: 'center',
                verticalAlignment: 'bottom'
            },
            valueAxis: {
                label: { format: 'largeNumber' }
            },
            onPointClick: function (info) {
                var point = info.target;
                point.isSelected() ? point.clearSelection() : point.select();
            },
            onPointSelectionChanged: function (info) {
                var point = info.target;
                point.isSelected() ? $scope.outputText = point.tag : $scope.outputText = '';
            }
        };
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->