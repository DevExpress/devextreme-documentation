---
type: eventType
---
---
##### shortDescription
Fires before a ViewModel is created during the view display process.

##### param(e): object
Information about the event.

##### field(e.viewInfo): object
Provides information required for displaying a view.

---
When a view is displayed for the first time or information on it is removed from the [cache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache'), information on this view is gathered. A ViewModel object is one of the pieces of this information required to display the view. Handle the **beforeViewSetup** event to set a custom ViewModel for the view. Otherwise, a ViewModel will be created using the corresponding function (with the view's name) found in the application's [namespace](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/namespace.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#namespace').

Use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler') method to subscribe to this event and the [off(eventName)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/off(eventName).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName') method to unsubscribe from it.

    <!--JavaScript-->MyApp.app.on("beforeViewSetup", function(args) {
        var viewModel = args.viewInfo.model;
        //...
    })

The object passed as the event handler's parameter provides access to the **viewInfo** object. At this step, the **viewInfo** object exposes the following  fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo** and **layoutController**. You can add the **model** field. The object assigned to this field will be used as the view's View Model.

For details on this and other events related to the view display process, refer to the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic.