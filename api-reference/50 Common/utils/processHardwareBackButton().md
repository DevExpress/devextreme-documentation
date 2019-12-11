---
module: mobile/process_hardware_back_button
export: default
---
---
##### shortDescription
Processes the hardware back button click.

---
When building a mobile application, you should initiate processing of the hardware back button click. The following code demonstrates how to do this by calling the **processHardwareBackButton()** method within the event listener of the PhoneGap [backbutton](https://docs.phonegap.com/en/3.5.0/cordova_events_events.md.html) event.

	<!--JavaScript-->$(function() {
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			//...
			document.addEventListener("backbutton", onBackButton, false);
		}
		function onBackButton() {
			DevExpress.processHardwareBackButton();
		}	
		//...	
	}
	
To handle the back button click, subscribe to the [HtmlApplication.navigatingBack()](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/navigatingBack.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#navigatingBack') event and use the **isHardwareButton** event handler parameter within the handling function.