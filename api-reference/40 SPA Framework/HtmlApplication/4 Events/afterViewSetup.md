---
type: eventType
---
---
##### shortDescription
Fires after a ViewModel has been created during the view display process.

##### param(e): object
Information about the event.

##### field(e.viewInfo): object
Provides information required for displaying a view.

---
When a view is displayed for the first time or information on it is removed from the [cache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache'), information on this view is gathered. A ViewModel object is one of the pieces of this information required to display the view. Handle the **afterViewSetup** event to modify the created ViewModel. Use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler') method to subscribe to this event and the [off(eventName)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/off(eventName).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName') method to unsubscribe from it.

To access the ViewModel, use the **model** field of the **viewInfo** object. This object can be accessed using the **viewInfo** field of the object passed as the event handler's parameter.

    <!--JavaScript-->MyApp.app.on("afterViewSetup", function(arg) {
        var viewModel = arg.viewInfo.model;
        //...
    })

In addition to the **model** field, the **viewInfo** object exposes the **viewName**, **uri**, **routeData**,  **viewTemplateInfo** and **layoutController** fields.

For details on this and other events related to the view display process, refer to the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic.