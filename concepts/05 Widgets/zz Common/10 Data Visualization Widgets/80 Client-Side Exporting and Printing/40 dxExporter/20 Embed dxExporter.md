To add **Exporter** to your page, do the following.

- Provide links to the exporter client script and one of the external stylesheets as it is shown below.	

		<!--HTML--><link rel="stylesheet" type="text/css" href="dx.exporter.light.css">
		<!-- <link rel="stylesheet" type="text/css" href="dx.exporter.dark.css"> -->
		<script src="Exporter/dx.exporter.js"></script>
- Add a div container for the **Exporter** widget.

		<!--HTML--><div id='exportMenu'></div>
- Create the **Exporter** widget within this container using the [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/'), [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/') or [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/') approach. In the code below, the widget is created using the jQuery approach.

		<!--JavaScript-->$(function () {
			$("#exportMenu").dxExporter();
		});

If you run your page, you will see the ![Exporter Icon ChartJS](/images/ChartJS/ExporterFormat.png) and ![Exporter Icon ChartJS](/images/ChartJS/ExporterPrint.png) icons on it. But exporting and printing do not work yet, because the **Exporter** widget is not tuned properly. Refer to the next step to tune it.