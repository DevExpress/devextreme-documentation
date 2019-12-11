---
type: eventType
---
---
##### shortDescription
An event triggered each time after a view is shown.

##### param(e): object
Information about the event.

##### field(e.viewInfo): object
Provides information about the displayed view.

##### field(e.direction): string
Specifies the direction in which the layout controller animated the transition to the displayed view. The following values are accepted: 'backward', 'forward' or 'none'.

---
Use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler') method to subscribe to this event and the [off(eventName)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/off(eventName).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName') method to unsubscribe from it.

The **viewInfo** object that is accessible from the event handler's parameter exposes the following fields: **viewName**, **uri**, **routeData**, **viewTemplateInfo**, **layoutController**, **model** (the ViewModel of the displayed view) and **renderResult** (an object exposing the **$markup** field).

<!---->

    <!--JavaScript-->MyApp.app.on("viewShown", function(args) {
        var viewModel = args.viewInfo.model,
            direction = args.direction;
        //...
    });

[note]This event can be handled for a specific view only. To do so, add the **viewShown** field to the view's ViewModel and assign the required function (handler) to it. For details, refer to the [Handle View Events](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/9%20Handle%20View%20Events.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events') topic.

This event is appropriate for sending asynchronous requests, because the transition to the view is already completed at this time, and the forthcoming response will not interrupt the process of the view display.

To perform specific actions after the view is rendered for the first time, handle the [viewRendered](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewRendered.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewRendered') event.

For details on events related to the view display process, refer to the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic.

[note]If you use device APIs provided by [Apache Cordova](https://cordova.apache.org) in your application, call device API functions after the [deviceready](https://cordova.apache.org/docs/en/5.0.0/cordova_events_events.md.html#deviceready) event of Cordova has fired. Otherwise, the application may work too slow on startup. The **deviceready** event fires when Apache Cordova is fully loaded.