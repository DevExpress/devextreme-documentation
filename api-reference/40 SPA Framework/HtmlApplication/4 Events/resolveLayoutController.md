---
type: event
---
---
##### shortDescription
Fires when information about a view to be shown is gathered.

##### param(e): object
Provides function parameters.

##### field(e.viewInfo): object
Provides information required for displaying a view. The following fields are available: 'viewName', 'uri', 'routData' and 'viewTemplateInfo'.

##### field(e.layoutController): object
The layout controller that must be used to provide a layout markup for the given view.

##### field(e.availableLayoutControllers): array
A collection of the layout controllers that are registered in the application and appropriate for the current device (its platform and form). Each object exposes the "controller" field and the fields presenting the <a href="/Documentation/16_1/ApiReference/Common/Object_Structures/device/">device</a> object fields.

---
Within the information required to display a view, the application sets the instance of the layout controller that will create a layout markup for the view. By default, it is the layout controller from the application's [layout set](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet') that is most appropriate in the current navigation context. Handle the **resolveLayoutController** event to set a specific layout controller for a particular view, which will prevent the system from searching for an appropriate controller for this view.
 
Use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler') method to subscribe to this event and the [off(eventName)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/off(eventName).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName') method to unsubscribe from it.

<!---->

    <!--JavaScript-->window.AppNamespace = {};
    $(function () {
        AppNamespace.myController = new myLayoutController();     
        AppNamespace.app = new DevExpress.framework.html.HtmlApplication(
            {
                namespace: AppNamespace,
                layoutSet: [
                    { platform: 'android', controller: new MyAndroidLayoutController() },
                    { platform: 'ios', controller: new MyiOSLayoutController() },
                    { customResolveRequired: true, controller: AppNamespace.myController }
                ],
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

#####See Also#####
- You can find more information about this event and other ways to specify a custom layout set in the [Custom Layout Sets](Documentation/Howto/SPA_Framework/Built-in_Layouts#Custom_Layout_Sets) topic.
- For details on the events related to the view display process, refer to the [View Life Cycle](Documentation/Howto/SPA_Framework/Views_and_Layouts#View_Life_Cycle) topic.