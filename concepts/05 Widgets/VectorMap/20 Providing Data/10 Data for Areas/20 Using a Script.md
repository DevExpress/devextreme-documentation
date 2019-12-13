DevExtreme is shipped with a number of predefined data sources for the **VectorMap** widget. You can find these sources as *.js*-scripts in the **Lib/js/vectormap-data** folder of your DevExtreme package. Each data source contains an array describing a geographical territory. The following territories are available.

- World *(world.js)*
- Africa *(africa.js)*
- Canada *(canada.js)*
- Eurasia *(eurasia.js)*
- Europe *(europe.js)*
- USA *(usa.js)*

[note] Built-in maps were not created by DevExpress. They were taken from a <a href="http://www.naturalearthdata.com/" target="_blank">free map data provider</a> and converted to the **VectorMap** format with the **parse()** method. Refer to the [Using a Binary Source](/concepts/05%20Widgets/VectorMap/20%20Providing%20Data/10%20Data%20for%20Areas/40%20Using%20a%20Binary%20Source/10%20Using%20a%20Binary%20Source.md '/Documentation/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Areas/Using_a_Binary_Source') section to learn how to display a custom map with the **VectorMap** widget.

To use one of these sources on your map, reference the corresponding file in the head of your HTML document. Note that this file should be referenced after the ChartJS library file (see topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/10%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section).

	<!--HTML--><!DOCTYPE html>
	  <html>
	      <head>
	          <meta charset="utf-8" />
		      <!-- libraries required by DevExtreme go here -->
			  <script type="text/javascript" src="js/dx.viz.js"></script>
			  <script type="text/javascript" src="js/vectormap-data/world.js"></script>
	      </head>
	  </html>

Alternatively, the same data sources can be accessed and referenced using the DevExpress CDN.

	<!--HTML--><script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/vectormap-data/world.js"></script>
	<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/vectormap-data/africa.js"></script>
	<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/vectormap-data/canada.js"></script>
	<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/vectormap-data/eurasia.js"></script>
	<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/vectormap-data/europe.js"></script>
	<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_2/js/vectormap-data/usa.js"></script>

After that, set the [data](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#data) option for a layer to the array defined in the referenced file.

	<!--JavaScript-->var vectorMapCfg = {
        // ...
        layers: [{
            type: 'area',
            dataSource: DevExpress.viz.map.sources.world
            // dataSource: DevExpress.viz.map.sources.africa
            // dataSource: DevExpress.viz.map.sources.canada
            // dataSource: DevExpress.viz.map.sources.eurasia
            // dataSource: DevExpress.viz.map.sources.europe
            // dataSource: DevExpress.viz.map.sources.usa
            // ...
        }, {
            // ...
        }]
    }