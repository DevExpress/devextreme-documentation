var markers = [{
    coordinates: [-121.2808, 38.3320],
    attributes: { text: 'Sacramento' }
}, {
    coordinates: [-97.75, 30.25],
    attributes: { text: 'Austin' }
}, {
    coordinates: [-73.7572, 42.6525],
    attributes: { text: 'Albany' }
}, {
    coordinates: [-84.2533, 30.455],
    attributes: { text: 'Tallahassee' }
}, {
    coordinates: [-89.65, 39.783],
    attributes: { text: 'Springfield' }
}, {
    coordinates: [-123.028889, 44.930833],
    attributes: { text: 'Salem' }
}, {
    coordinates: [-96.680278, 40.810556],
    attributes: { text: 'Lincoln' }
}, {
    coordinates: [-112.066667, 33.45],
    attributes: { text: 'Phoenix' }
}, {
    coordinates: [-106.61, 35.110833],
    attributes: { text: 'Albuquerque' }
}];

//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            type: 'marker',
            dataSource: markers,

            // specifying the appearance in the normal state
            color: 'skyblue',
            customize: function (elements) {
                $.each(elements, function (_, element) {
                    if (element.attribute('text') == 'Albuquerque')
                        element.applySettings({
                            size: 14,
                            color: 'crimson'
                        });
                });
            },

            // changing the appearance in the hovered state
            hoveredColor: 'lightseagreen',

            // changing the appearance in the selected state
            selectedColor: 'green'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null && clickedElement.layer.type == "marker")
                clickedElement.selected(!clickedElement.selected());
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            hoverEnabled: false
        }, {
            type: 'marker',
            dataSource: markers,

            // specifying the appearance in the normal state
            color: 'skyblue',
            customize: function (elements) {
                ko.utils.arrayForEach(elements, function (element) {
                    if (element.attribute('text') == 'Albuquerque')
                        element.applySettings({
                            size: 14,
                            color: 'crimson'
                        });
                });
            },

            // changing the appearance in the hovered state
            hoveredColor: 'lightseagreen',

            // changing the appearance in the selected state
            selectedColor: 'green'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.25,
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null && clickedElement.layer.type == "marker")
                clickedElement.selected(!clickedElement.selected());
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapCtrl', function ($scope) {
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/usa.txt',
                hoverEnabled: false
            }, {
                type: 'marker',
                dataSource: markers,

                // specifying the appearance in the normal state
                color: 'skyblue',
                customize: function (elements) {
                    angular.forEach(elements, function (element) {
                        if (element.attribute('text') == 'Albuquerque')
                            element.applySettings({
                                size: 14,
                                color: 'crimson'
                            });
                    });
                },

                // changing the appearance in the hovered state
                hoveredColor: 'lightseagreen',

                // changing the appearance in the selected state
                selectedColor: 'green'
            }],
            bounds: [-135, 60, -65, 20],
            zoomFactor: 1.25,
            onClick: function (info) {
                var clickedElement = info.target;
                if (clickedElement != null && clickedElement.layer.type == "marker")
                    clickedElement.selected(!clickedElement.selected());
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->