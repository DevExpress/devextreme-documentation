---
type: event
---
---
##### shortDescription
Fires when the [HtmlApplication.back()](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/back().md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#back') method is called or the appropriate hardware button is pressed.

##### param(e): object
Provides function parameters.

##### field(e.cancel): Boolean
Indicates whether to cancel the backwards navigation.

##### field(e.isHardwareButton): Boolean
Indicates whether this event fires as a result of pressing a hardware Back button.

---
Use the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#oneventName_eventHandler') method to subscribe to this event and the [off(eventName)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/off(eventName).md '/Documentation/ApiReference/SPA_Framework/ViewCache/Methods/#offeventName') method to unsubscribe from it.

This event allows you to handle a Back button click, even if the hardware Back button is pressed. However, the event handler parameters do not provide information about the current view and its View Model. The following code demonstrates how to raise a confirmation dialog when clicking the Back button in a particular view and how to cancel backwards navigation if an end-users cancels it.

	<!--JavaScript-->Application1.app.currentViewModel = null;
	Application1.app.on("viewShown", function (e) {
		Application1.app.currentViewModel = e.viewInfo.model;
	});
	Application1.app.on("navigatingBack", function (e) {
		if (Application1.app.currentViewModel.name == 'View1') {
			if (!confirm("Are you sure you want to leave View1 ?")) {
				e.cancel = true;
				return;
			};
			//Execute the required code
		};
		Application1.app.currentViewModel = null;
	});