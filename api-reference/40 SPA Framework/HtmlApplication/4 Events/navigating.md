---
type: event
---
---
##### shortDescription
Fires after navigation to another view has started.

##### param(e): object
Provides function parameters.

##### field(e.currentUri): string
The URI from which the application navigates to another URI.

##### field(e.uri): string
The URI to which the application navigates.

##### field(e.cancel): Boolean
Indicates whether to cancel the navigation.

##### field(e.options): object
Defines navigation options (see the second parameter of the navigate() method description).

---
Use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler') method to subscribe to this event and the [off(eventName)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/off(eventName).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName') method to unsubscribe from it.

You can use this event to cancel navigation, as illustrated in the following example.

    <!--JavaScript-->MyApp.app.on("navigating", function(e){
        e.cancel = true; //Cancel navigation
    });

For details on this and other events related to the view display process, refer to the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic.