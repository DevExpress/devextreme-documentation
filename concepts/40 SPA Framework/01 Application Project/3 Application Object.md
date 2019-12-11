To configure the application and control its life cycle, an [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object must be created using the **document.ready** event or the jQuery "$()" function. There should be an *index.js* file within the application project. The HTMLApplication object should be created in this file.

	<!--JavaScript-->window.MyApp = {};
	MyApp.$(function() {
    	MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace: MyApp
		});
    });

The parameter of the HTMLApplication's constructor is a [configuration object](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/') that is used to set up application options.

Using the **HTMLApplication** object, register a [routing rule](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/') for the application, and navigate to the starting view.

    <!--JavaScript-->$(function() {
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			//...
		});
		MyApp.app.router.register(":view", { view: "home"});
		MyApp.app.navigate();
	});

The *index.js* file must be linked in the application page.

	<script type="text/javascript" src="index.js"></script>

The application template project includes this file and has a reference to it within the application page.