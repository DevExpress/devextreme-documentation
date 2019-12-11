If the predefined layout sets do not address your task at hand, introduce a custom layout set.

[note]Even if you need to use a single layout for all views in your app, introduce a layout set that consists of this single layout.

A custom layout set is an array of objects that define which layout controller should be used and when. Here is an example.

    <!--JavaScript-->window.MyApp = {};
	$(function() {
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			layoutSet:[
				{ platform: 'android', controller: new MyAndroidLayoutController() },
				{ platform: 'ios', controller: new MyiOSLayoutController() }
			],
			namespace: MyApp
		});
	});

The object defining a layout within a layout set should expose the following fields.

- **controller**  
	Specifies an instance of a layout controller.
- **root**  
	Indicates whether or not the view to which the application navigates must be a root view (the view that is available from global navigation).
- **customResolveRequired**  
	Indicates whether or not the specified layout controller must be excluded when choosing the most appropriate controller for a view. When you set this field to *true*, it is implied that you will set it for views manually in a custom context. For this purpose, use the **resolveLayoutController** event (read below).
- **modal**  
	Indicates whether or not the specified layout controller must be used to manage a modal view display.
- Any field of the [device](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') object.  
	Specifies in which device the layout can be used.

[note]Define contexts for using layout controllers precisely, so that several layout controllers cannot be found to be appropriate in any specific context. Otherwise, an exception will be raised.

In very specific cases, when the fields listed above do not allow you to define a context for using a layout, handle the application's [resolveLayoutController](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/resolveLayoutController.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#resolveLayoutController') event. The **viewInfo** field of the object passed as the event handler's parameter provides you access to information on the currently displayed view. Set the layout controller that should be used for this view using the **layoutController** field of the object passed as the parameter.

[note]The layout controller that is set for a view within the **resolveLayoutController** event handler should be already initialized. This means that the required templates ([layout template and a template for a loading view](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#GetViewInfo)) are prepared beforehand. For this purpose, this controller must be added to the layout set that is assigned to the application. When the application is created, the layout controllers that are registered using the **layoutSet** configuration option and that are appropriate for the current device are initialized. 

	<!--JavaScript-->window.AppNamespace = {};
    $(function () {
		AppNamespace.myController = new myLayoutController({ layoutTemplateName: "myLayout" });     
        AppNamespace.app = new DevExpress.framework.html.HtmlApplication(
            {
                namespace: AppNamespace,
                layoutSet: [
					{ platform: 'android', controller: new MyAndroidLayoutController() },
					{ platform: 'ios', controller: new MyiOSLayoutController() },
					{ customResolveRequired: true, controller: AppNamespace.myController }
				],
				//...
             }
        );
        AppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
		AppNamespace.app.on("resolveLayoutController", function(args) {
			var viewName = args.viewInfo.viewName;
			if(viewName === "about") {
				args.layoutController = AppNamespace.myController;
			}
		});
        AppNamespace.app.navigate();
    });

You can assign a combination of several predefined layout sets to the application's **layoutSet** option. In this instance, handle the application's **resolveLayoutController** event to specify the contexts in which the layout controllers from the combined layout sets must be applied.

	<!--JavaScript-->function findController(name, controllers) {
		var result = $.grep(controllers, function (item, index) {
			return item.controller.name == name;
		});
		return result.length ? result[0].controller : null;
	}
	window.AppNamespace = {};
	$(function() {
		var layoutSet = [];
		layoutSet.push.apply(layoutSet, DevExpress.framework.html.layoutSets["navbar"]);
		layoutSet.push.apply(layoutSet, DevExpress.framework.html.layoutSets["empty"]);

		AppNamespace.app = new DevExpress.framework.html.HtmlApplication({
			namespace: AppNamespace,
			layoutSet: layoutSet,
			//...
		});
		AppNamespace.app.router.register(":view/:id", { view: "home", id: undefined });
		AppNamespace.app.on("resolveLayoutController", function (args) {
			if (args.viewInfo.viewName == 'home') {
				args.layoutController = findController('empty', args.availableLayoutControllers);
			}
		});
		AppNamespace.app.navigate();
	});

As you can see in the code above, you can use the application's collection of available controllers when deciding which layout controller to use for the currently displayed view. This collection includes objects from the application's layout set. But not all the objects - just the ones that can be used for the current device (its platform and type). To access this collection, use the **availableLayoutControllers** field of the object passed as the **resolveLayoutController** event handler parameter. To find the required controller within the **availableLayoutControllers** collection, use the layout controller's **name** field.