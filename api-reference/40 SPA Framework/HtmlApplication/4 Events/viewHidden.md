---
type: eventType
---
---
##### shortDescription
An event triggered when the current view is replaced with another view on the application page.

##### param(e): object
Information about the event.

##### field(e.viewInfo): object
Provides information required for displaying a view.

---
If the current view and the next view are displayed in the same layout, the corresponding layout controller executes a transition to the next view and then fires the **viewHidden** event. In the case of different layouts of the current and next views, the layout controller of the current view layout fires the **viewHidden** event anyway. You can access information on the current view, which is replaced with another view. To do this, handle the **viewHidden** event and use the object that is provided by the **viewInfo** field of the event handler's parameter. This object exposes the following fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo**, **layoutController**, **model** (the ViewModel of the disposed view) and **renderResult** (an object exposing the **$markup** field).

Use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler') method to subscribe to this event and the [off(eventName)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/off(eventName).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName') method to unsubscribe from it.

    <!--JavaScript-->MyApp.app.on("viewHidden", function(args) {
        var viewModel = args.viewInfo.model;
        //...
    });

[note]This event can be handled for a specific view only. In this instance, add the **viewHidden** field to the view's ViewModel and assign the required function (handler) to it. For details, refer to the [Handle View Events](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/9%20Handle%20View%20Events.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events') topic.

For details on the events related to the view display process, refer to the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic.