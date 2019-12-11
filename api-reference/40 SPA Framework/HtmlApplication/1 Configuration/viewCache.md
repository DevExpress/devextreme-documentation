---
type: Object
---
---
##### shortDescription
A custom view cache to be used in the application.

---
The framework's navigation system uses a view cache to save information about the views that have already been displayed in this application. Each time a view is displayed, information about the view is requested from the view cache, so that the markup does not need to be generated again. You can influence the way the predefined view cache works by using the techniques below.

- Totally disable caching  
	Set the application's [disableViewCache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/disableViewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#disableViewCache') configuration option to *true*.

- Disable the caching of some of the application views  
	Set the [disableCache](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/disableCache.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#disableCache') configuration option of the dxView markup component that represents the required view to *true*. This may be helpful for the views that contain map widgets and large images.

- Specify a limit for the number of views that can be cached
	Specify the application's [viewCacheSize](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCacheSize.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCacheSize') configuration option.

If the options above do not allow you to achieve the required caching behavior, implement a custom view cache and assign it to the **viewCache** option of the HtmlApplication object. A view cache must be an object that exposes the following members:

- **setView**: function(key, viewInfo){};
- **getView**: function(key) {};
- **removeView**: function(key) {};
- **clear**: function() {};
- **hasView**: function(key) {};
- **viewRemoved** = $.Callbacks().

You can inherit from the base view cache and implement some of the functions in a custom manner. The base view cache does not take into account the application and view options listed above. It only implements basic caching functionality.

	<!--JavaScript-->MyNamespace.AdvancedViewCache = DevExpress.framework.ViewCache.inherit({
		setView: function(key, viewInfo) {
			//...
		}
	});

Then, assign your view cache object to the application's **viewCache** configuration option.

	<!--JavaScript-->MyNamespace.app = new DevExpress.framework.html.HtmlApplication({
		//...
		viewCache: new MyNamespace.AdvancedViewCache(),
	});

For details on the view display process, refer to the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic.