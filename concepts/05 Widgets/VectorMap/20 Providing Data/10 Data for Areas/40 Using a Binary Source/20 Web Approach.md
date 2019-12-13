[note] To use this approach, your web browser must support the <a href="https://developer.mozilla.org/en-US/docs/Web/API/DataView" target="_blank">DataView</a> interface.

Reference an additional script in the head of your HTML document as follows. This script can be found in the **Lib/js/vectormap-utils** folder of your DevExtreme package.

	<!--HTML--><!DOCTYPE html>
	  <html>
	      <head>
	          <meta charset="utf-8" />
		      <!-- libraries required by DevExtreme go here -->
			  <script type="text/javascript" src="js/dx.viz.js"></script>
			  <script type="text/javascript" src="js/vectormap-utils/dx.vectormaputils.js"></script>
	      </head>
	  </html>

The referenced script contains the **parse()** method for parsing a binary source into the format supported by the **VectorMap** widget. There are two possible ways of using this method.

- **Using a Shapefile**		
	If you can access a required shapefile using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank">XMLHttpRequest</a>, use the following construction.

		<!--JavaScript-->DevExpress.viz.vectormaputils.parse('/shapeSources/world', { precision: 2 }, function (data) {
			$('#mapContainer').dxVectorMap({
				layers: [{
					type: 'area',
					dataSource: data
				}]
			});
		});
	In this code, the function's first argument specifies the URI of the source. Note that the file extension is omitted. In this case, both the *world.shp* and *world.dbf* files will be parsed. Add the *.shp* or *.dbf* extension if you need to parse a certain file. The second argument specifies the precision of the resulting shape coordinates. Within the callback function, which comes as the third argument, the resulting coordinates are assigned to the **layer**.**dataSource** option of the **VectorMap** widget.

- **Using Data from an *ArrayBuffer* Source**		
	The **parse()** method can also parse any source of the *<a href="https://developer.mozilla.org/en-US/docs/Web/API/ArrayBuffer" target="_blank">ArrayBuffer</a>* type. You can get a source of this type, for instance, by sending a request and specifying 'arraybuffer' as a response type.

		<!--JavaScript-->var request = new XMLHttpRequest();
		request.open('GET', '/shapeSources/world.shp');
		request.responseType = 'arraybuffer';
		request.addEventListener('load', function () { 
			if (this.readyState === 4) {
				// shpArrayBuffer = this.response
			}
		});
		request.send(null);
		//Send a request for a .dbf file analogously 

	The following code demonstrates how to parse data of the 'arraybuffer' type and assign it as the **dataSource** field of the area layer.

		<!--JavaScript-->var parseSources = { shp: shpArrayBuffer, dbf: dbfArrayBuffer },
			parseOptions = { precision: 2 },
		var data = DevExpress.viz.vectormaputils.parse(parseSources, parseOptions);
        
		$('#mapContainer').dxVectorMap({
			layers: [{
				type: 'area',
				dataSource: data
			}]
		});

	In this code, the **parse(parseSources, parseOptions)** method transforms the sources specified by the *parseSources* object into the format supported by **VectorMap**. Shape coordinates are converted with a precision specified by the **parseOptions** object.
	
The resulting shape coordinates can be accessed using the *features* field of the object returned by the **parse()** method or the object passed to the callback function. A particular shape attribute can be accessed by its name using the **attribute(name)** method of a map area.