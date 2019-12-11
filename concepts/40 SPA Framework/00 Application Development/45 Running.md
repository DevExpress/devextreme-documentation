As an HTML-JavaScript application, a DevExtreme application is run by a browser.

**Check**:

- Use the browsers that are supported by the framework. See [Supported Browsers](/concepts/Common/10%20Supported%20Browsers '/Documentation/Guide/Common/Supported_Browsers/').
- All required themes must be referenced within the application page. See [Supplied Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/').

####Guidelines for DevExtreme Mobile and DevExtreme Web Applications####

To run an application locally, use any web server ([Apache HTTP Server](https://httpsd.apache.org/docs/2.4), [IIS](https://www.iis.net) or any other).

To see how your application looks and behaves on different devices, use one of the following options.

- When your application is running in a browser, choose the required browser using the [user agent switcher](https://osxdaily.com/2013/01/16/change-user-agent-chrome-safari-firefox) that is built into the browser.

- In the **index.js** file of your application project, set the target device using the [devExpress.devices.current(deviceName)](/Documentation/ApiReference/Common/Utils/#devicescurrentdeviceName) function before the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object creation. In this instance, the application will run in your browser with the theme corresponding to the device you specified. This approach is helpful when testing URLs that are generated during navigation between views.

- Use third-party device simulators, such as [Ripple](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc) or [PhoneGap Emulator](https://emulate.phonegap.com).

####Guidelines for DevExtreme Complete Applications####

The mobile applications that are built in Visual Studio with a DevExtreme project template can be run using one of the following techniques.

- In a device simulator  
	DevExtreme comes with a simulator that allows you to see how your application looks and behaves on different devices.
	
- In a mobile browser  
	You can scan the QR code provided by the simulator to run the application on a device in a mobile browser.
	
- On a device as a native application  
	Download the **DevExtreme Courier** application from  [GooglePlay](https://play.google.com/store/apps/details?id=com.devexpress.dxtreme.courier) or [iTunes](https://itunes.apple.com/us/app/courier/id559760607?mt=8&ign-mpt=uo%3D2) using your device. Use this application to run your DevExtreme application. This allows you to see how the application looks and behaves when it is running as a native application.

**Read**:

- [Simulation Tools](/concepts/50%20VS%20Integration/2%20Simulation%20Tools '/Documentation/Guide/VS_Integration/Simulation_Tools/')






