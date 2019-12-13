If you develop using the <a href="http://nodejs.org/" target="_blank">Node.js</a> platform, utilize a special script allowing you to parse binary sources and generate **VectorMap**-compatible files from them. This script can be found in the **Lib/js/vectormap-utils** folder of your DevExtreme package. Load this script as a <a href="http://nodejs.org/api/modules.html" target="_blank">module</a> using the following code.

	<!--JavaScript-->var vectormaputils = require('./dx.vectormaputils.node.js');

The next two subtopics describe the parsing and generating operations in details.

####Parsing####

There are two possible ways to parse binary data for **VectorMap**.

- **Using a Shapefile**		
	If you can access a required shapefile, use the following construction.

		<!--JavaScript-->vectormaputils.parse('/shapeSources/world', { precision: 2 }, function (data) {
			$('#mapContainer').dxVectorMap({
				layers: [{
					type: 'area',
					dataSource: data
				}]
			});
		});
	In this code, the function's first argument specifies the URI of the source. Note that the file extension is omitted. In this case, both the *world.shp* and *world.dbf* files will be parsed. Add the *.shp* or *.dbf* extension if you need to parse a certain file. The second argument specifies the precision of the resulting shape coordinates. Within the callback function, which comes as the third argument, the resulting coordinates are assigned to the **layer**.**dataSource** option of the **VectorMap** widget.

- **Using Data from a *Buffer* Source**		
	The following code sample demonstrates how to use the **parse()** method for parsing data from any source of the *<a href="http://nodejs.org/api/buffer.html" target="_blank">Buffer</a>* type.		

		<!--JavaScript-->var parseSources = { shp: shpBuffer, dbf: dbfBuffer },
			parseOptions = { precision: 2 },
		var data = vectormaputils.parse(parseSources, parseOptions);
        
		$('#mapContainer').dxVectorMap({
			layers: [{
				type: 'area',
				dataSource: data
			}]
		});
	In this code, the **parse(parseSources, parseOptions)** method transforms the sources specified by the *parseSources* object into the format supported by **VectorMap**. Shape coordinates are converted with a precision specified by the **parseOptions** object.
	
No matter the way, the resulting shape coordinates can be accessed using the *features* field of the object returned by the **parse()** method or the object passed to the callback function. A particular shape attribute can be accessed by its name using the **attribute(name)** method of a map area.

####Generating####

In addition, you can generate **VectorMap**-compatible files from shapefiles to use them as a data source afterwards. For this purpose, use the **processFiles(source, options)** method.

	<!--JavaScript-->var source = 'shapeSources/world.shp',
		options = {
			output: 'destinationFolder',
			precision: 2,
			isJSON: true
		};

	vectormaputils.processFiles(source, options);

This method accepts the URI of the source shapefile as the first argument. When a folder (instead of a file) is passed as the first argument, all shapefiles from this folder will be processed.

The **processFiles(source, options)** method accepts processing options as the second argument. These options include:

- **output** <span style="font-size:10px"><i>string</i></span>		
Specifies a destination folder. This folder should be created in advance. When this option is not specified, the resulting file is placed in the folder where its source shapefile is located.

- **precision** <span style="font-size:10px"><i>numeric</i></span>		
Specifies a precision for shape coordinates. By default, no precision applies.

- **isJSON** <span style="font-size:10px"><i>boolean</i></span>		
Specifies the format of the resulting file. When this option is set to **true**, the resulting file has the *'.json'* extension and can be [used in VectorMap as a JSON object](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#VectorMap_Providing_Data_Data_for_Areas_Using_a_JSON_object). When this option is set to **false**, the resulting file has the *'.js'* extension and can be [used in VectorMap as a script](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#VectorMap_Providing_Data_Data_for_Areas_Using_a_Script).

You can use the Node.js console for generating files as well. The accepted string has the following format.

	node dx.vectormaputils.node.js Source [--output DestinationFolder] [--precision Precision] [--json]

To receive help on the parameters, type the following string in the console.

	node dx.vectormaputils.node.js --help