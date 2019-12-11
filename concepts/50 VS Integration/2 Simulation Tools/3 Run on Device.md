The **Courier** application hosts your DevExtreme web app and allows you to experience how your mobile app will behave on a mobile device once it is deployed. The following list explains how to use the DevExtreme **Courier**.

- Download the **Courier** application from [Google play](https://play.google.com/store/apps/details?id=com.devexpress.dxtreme.courier), [iTunes](https://itunes.apple.com/us/app/courier/id559760607?mt=8&ign-mpt=uo%3D2) or [Windows Store](https://www.windowsphone.com/en-us/store/app/devextreme-courier/19aec28e-35ae-4411-b2a1-c13428283065) on your device.

- Run your application in a Visual Studio debugger and locate the QR code in the [simulator](/concepts/50%20VS%20Integration/2%20Simulation%20Tools/1%20Use%20Simulator.md '/Documentation/Guide/VS_Integration/Simulation_Tools/#Use_Simulator').

- From the **Courier** application, scan the QR Code using the **Scan** button. The QR code represents a link to your application. This link is valid only while the Visual Studio debugger is running.
	
	![Application in Simulator](/images/DevExtreme/CourierApp.png)

	This will load your application on your device. Test the application. Take a note of the Courier menu that is available while testing an application.

	![Application in Simulator](/images/DevExtreme/CourierMenu.png)

To close the application executed in the Courier, perform a triple click somewhere in a view.

The great thing about using this approach is that you don't have to build [native packages](/concepts/50%20VS%20Integration/3%20Packaging%20Tools '/Documentation/Guide/VS_Integration/Packaging_Tools/') every time you test your application on a device.

####Use Hardware Functions####

Since the application's native packages are prepared using the PhoneGap Build, you can utilize the PhoneGap API to access the device's hardware features within the application. Check out the [PhoneGap API Reference](https://docs.phonegap.com/en/3.6.0/index.html) to see which device capabilities you can leverage. The **Courier** application allows you to test these functions without building a native package.

[note]The following applications can be tested using the **Courier** application.

- Compatible with Cordova library version 3.7
- Using the [standard PhoneGap plugins](https://build.phonegap.com/plugins)

Check out the [DevExtreme device access examples](https://www.devexpress.com/Support/Center/Question/Details/Q434945) article to see sample DevExtreme applications that utilize the PhoneGap API.