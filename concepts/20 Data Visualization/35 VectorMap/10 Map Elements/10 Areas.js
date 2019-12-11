var i = 0;

//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            // specifying palette settings
            palette: 'Violet',
            paletteSize: 9,
            customize: function (elements) {
                $.each(elements, function (_, element) {
                    if (element.attribute('name') == 'Canada')
                        element.applySettings({ color: 'lightblue' });
                    element.applySettings({ paletteIndex: i++ % 9 });
                });
            },

            // changing the appearance in the hovered state
            hoveredColor: 'sandybrown',

            // changing the appearance in the selected state
            selectedColor: 'lightcoral',
            selectionMode: 'multiple'
        }],
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null && clickedElement.layer.type == "area")
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
            dataSource: '/Content/data/vectorMap-sources/world.txt',
            // specifying palette settings
            palette: 'Violet',
            paletteSize: 9,
            customize: function (elements) {
                ko.utils.arrayForEach(elements, function (element) {
                    if (element.attribute('name') == 'Canada')
                        element.applySettings({ color: 'lightblue' });
                    element.applySettings({ paletteIndex: i++ % 9 });
                });
            },

            // changing the appearance in the hovered state
            hoveredColor: 'sandybrown',

            // changing the appearance in the selected state
            selectedColor: 'lightcoral',
            selectionMode: 'multiple'
        }],
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null && clickedElement.layer.type == "area")
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
                dataSource: '/Content/data/vectorMap-sources/world.txt',
                // specifying palette settings
                palette: 'Violet',
                paletteSize: 9,
                customize: function (elements) {
                    angular.forEach(elements, function (element) {
                        if (element.attribute('name') == 'Canada')
                            element.applySettings({ color: 'lightblue' });
                        element.applySettings({ paletteIndex: i++ % 9 });
                    });
                },

                // changing the appearance in the hovered state
                hoveredColor: 'sandybrown',

                // changing the appearance in the selected state
                selectedColor: 'lightcoral',
                selectionMode: 'multiple'
            }],
            onClick: function (info) {
                var clickedElement = info.target;
                if (clickedElement != null && clickedElement.layer.type == "area")
                    clickedElement.selected(!clickedElement.selected());
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->