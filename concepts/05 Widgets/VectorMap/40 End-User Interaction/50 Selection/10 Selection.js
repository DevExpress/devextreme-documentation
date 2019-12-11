var markerData = [{
    coordinates: [-121.2808, 38.3320], 
    attributes: { name: 'Sacramento' }
},{
    coordinates: [-97.75, 30.25], 
    attributes: { name: 'Austin' }
},{
    coordinates: [-73.7572, 42.6525], 
    attributes: { name: 'Albany' }
},{
    coordinates: [-84.2533, 30.455], 
    attributes: { name: 'Tallahassee' }
},{
    coordinates: [-89.65, 39.783], 
    attributes: { name: 'Springfield' }
},{
    coordinates: [-76.8756, 40.2697], 
    attributes: { name: 'Harrisburg' }
},{
    coordinates: [-82.9833, 39.9833], 
    attributes: { name: 'Columbus' }
},{
    coordinates: [-84.39, 33.755], 
    attributes: { name: 'Atlanta' }
},{
    coordinates: [-84.5467, 42.7336], 
    attributes: { name: 'Lansing' }
},{
    coordinates: [-78.6447, 35.8189],
    attributes: { name: 'Raleigh' }
}];

//<!--@jQuery-->
$(function () {
    $('#vectorMapContainer').dxVectorMap({
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            selectionMode: 'multiple',
            selectedColor: 'yellow',
            selectedBorderColor: 'red'
        }, {
            type: 'marker',
            dataSource: markerData,
            selectionMode: 'multiple',
            selectedColor: 'orange',
            selectedBorderColor: 'purple'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.5,
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null)
                clickedElement.selected(!clickedElement.selected());
        },
        onSelectionChanged: function (info) {
            var selectedElement = info.target;
            if (selectedElement != null) {
                var type = selectedElement.layer.type;
                var isSelected = selectedElement.selected() ? 'selected' : 'deselected';
                var name = selectedElement.attribute('name');
                
                $('#textArea').html('The <b>' + name + '</b> ' + type + ' has been ' + isSelected);
            }
        }
    });
});
//<!--/@jQuery-->
//<!--@Knockout-->
var viewModel = {
    text: ko.observable(),
    vectorMapCfg: {
        layers: [{
            type: 'area',
            dataSource: '/Content/data/vectorMap-sources/usa.txt',
            selectionMode: 'multiple',
            selectedColor: 'yellow',
            selectedBorderColor: 'red'
        }, {
            type: 'marker',
            dataSource: markerData,
            selectionMode: 'multiple',
            selectedColor: 'orange',
            selectedBorderColor: 'purple'
        }],
        bounds: [-135, 60, -65, 20],
        zoomFactor: 1.5,
        onClick: function (info) {
            var clickedElement = info.target;
            if (clickedElement != null)
                clickedElement.selected(!clickedElement.selected());
        },
        onSelectionChanged: function (info) {
            var selectedElement = info.target;
            if (selectedElement != null) {
                var type = selectedElement.layer.type;
                var isSelected = selectedElement.selected() ? 'selected' : 'deselected';
                var name = selectedElement.attribute('name');
                
                viewModel.text('The <b>' + name + '</b> ' + type + ' has been ' + isSelected);
            }
        }
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
angular
    .module('myApp', ['dx'])
    .controller('vectorMapController', function ($scope) {
        $scope.text = '';
        $scope.vectorMapCfg = {
            layers: [{
                type: 'area',
                dataSource: '/Content/data/vectorMap-sources/usa.txt',
                selectionMode: 'multiple',
                selectedColor: 'yellow',
                selectedBorderColor: 'red'
            }, {
                type: 'marker',
                dataSource: markerData,
                selectionMode: 'multiple',
                selectedColor: 'orange',
                selectedBorderColor: 'purple'
            }],
            bounds: [-135, 60, -65, 20],
            zoomFactor: 1.5,
            onClick: function (info) {
                var clickedElement = info.target;
                if (clickedElement != null)
                    clickedElement.selected(!clickedElement.selected());
            },
            onSelectionChanged: function (info) {
                var selectedElement = info.target;
                if (selectedElement != null) {
                    var type = selectedElement.layer.type;
                    var isSelected = selectedElement.selected() ? 'selected' : 'deselected';
                    var name = selectedElement.attribute('name');
                    
                    $scope.text = 'The <b>' + name + '</b> ' + type + ' has been ' + isSelected;
                }
            }
        }
    });

angular.element(document).ready(function () {
   angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->