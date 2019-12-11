To provide data for map markers, assign an array of objects to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataSource') option of a corresponding layer. For any marker type, each object of the **markers** array must contain the **coordinates** field, which must be assigned to an array of two values: the first is the longitude and the second is the latitude of a map marker. 

Optionally, you can specify the **attributes** field to store additional information for each marker there. Depending on the marker [elementType](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/elementType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#elementType') used, the **attributes** object may contain different fields. 

	<!--JavaScript-->var markersArray = [{
		coordinates: [-121.2808, 38.3320],
		attributes: { text: 'Sacramento' }
	}, {
		coordinates: [-97.75, 30.25],
		attributes: { text: 'Austin' }
	}];

	var vectorMapCfg = {
        // ...
        layers: [{
            type: 'marker',
            dataSource: markersArray
        }, {
            // ...    
        }]
    }

The code above is sufficient for configuring markers of the *dot* type. For markers of other types, you need to specify several additional fields.

If you use markers of the *bubble* type, add a numeric field to each object in the **markers** array. The value of this field will define the size of the bubble marker. Then, assign this field to the *marker* layer using the [dataField](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/dataField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#dataField') option.


	<!--JavaScript-->var markersArray = [{
		coordinates: [-121.2808, 38.3320],
		attributes: {
            text: 'Sacramento',
			value: 10
		}
	}, {
		coordinates: [-97.75, 30.25],
		attributes: {
            text: 'Austin',
			value: 7
		}
	}];
    
    var vectorMapCfg = {
        // ...
        layers: [{
            type: 'marker',
            dataSource: markersArray,
            elementType: 'bubble',
            dataField: 'value'
        }, {
            // ...    
        }]
    }

To configure markers of the *pie* type, provide an additional field to each object in **markersArray**. This field must contain an array of values that define the slices of a pie marker. Then, assign this field to the *marker* layer using the **dataField** option.

	<!--JavaScript-->var markersArray = [{
		coordinates: [-121.2808, 38.3320],
		attributes: {
            text: 'Sacramento',
			values: [9, 5, 14]
		}
	}, {
		coordinates: [-97.75, 30.25],
		attributes: {
            text: 'Austin',
			values: [10, 2, 3]
		}
	}];
    
    var vectorMapCfg = {
        // ...
        layers: [{
            type: 'marker',
            dataSource: markersArray,
            elementType: 'pie',
            dataField: 'values'
        }, {
            // ...    
        }]
    }

Moreover, you can use custom images as map markers. To do this, supply each object in the **markers** array with a field that contains the URL of the image. After that, assign this field to the *marker* layer using the **dataField** option.

	<!--JavaScript-->var markersArray = [{
		coordinates: [-121.2808, 38.3320],
		attributes: {
            text: 'Sacramento',
			url: 'images/myimage1.jpg'
		}
	}, {
		coordinates: [-97.75, 30.25],
		attributes: {
            text: 'Austin',
			url: 'images/myimage2.jpg'
		}
	}];
    
    var vectorMapCfg = {
        // ...
        layers: [{
            type: 'marker',
            dataSource: markersArray,
            elementType: 'image',
            dataField: 'url'
        }, {
            // ...    
        }]
    }
    
You can also specify a data source for markers from a JSON object. For this purpose, assign the URL of this object to the **dataSource** option.