By default, the application object is configured so that the built-in navigation system treats the application as a mobile application. It creates navigation stacks based on "root" views and performs backwards navigation within the current stack. In web applications, the navigation system must behave in another manner. Web applications run in web browsers. So browser history should be used by the navigation system instead of building navigation stacks. To switch to this mode of the navigation system, set the [mode](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/mode.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode') option of the application object to *'webSite'*. 

	<!--JavaScript-->window.MyApp = {};
	MyApp.$(function() {
    	MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace: MyApp,
			mode: 'webSite'
		});
    });

In this mode, each navigated view is added next to the previous view in the navigation history. However, you can change this behavior and replace the previous view by the navigated view in the navigation history. For this purpose, call the [navigate()](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/navigate(uri_options).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options') method passing an object with the **target** field set to *'current'* as the second method parameter.

	<!--JavaScript-->myApplication.navigate("OrderItems/", {target: 'current');

The browser's **Back** button should be the only possible way of navigating backwards in the browser's history. There should not be a Back button in a view. However, you may still need to perform a backwards navigation when clicking some view element. For this purpose, use the application's [back()](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/back().md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#back') method. It will call the browser's **Back** method, which will navigate to the previous view in the navigation history.

