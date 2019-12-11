In this topic, you will learn how to use predefined themes in applications that are built using the DevExtreme SPA framework.

Add the following links to the *index.html* file of your application.

	<!--HTML--><link rel="stylesheet" type="text/css" href="css/dx.common.css" />
	<link rel="stylesheet" type="text/css" href="css/dx.spa.css" />
	<link rel="dx-theme" data-theme="android5.light" href="css/dx.android5.light.css" />
	<link rel="dx-theme" data-theme="ios7.default" href="css/dx.ios7.default.css" />
	<link rel="dx-theme" data-theme="win10.black" href="css/dx.win10.black.css" data-active="true" />
	<link rel="dx-theme" data-theme="win10.white" href="css/dx.win10.white.css" data-active="false" />
	<link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" data-active="true" />
	<link rel="dx-theme" data-theme="generic.dark" href="css/dx.dark.css" data-active="false" />
	<link rel="dx-theme" data-theme="generic.light.compact" href="css/dx.light.compact.css" data-active="false" />
	<link rel="dx-theme" data-theme="generic.dark.compact" href="css/dx.dark.compact.css" data-active="false" />
	<link rel="dx-theme" data-theme="generic.contrast" href="css/dx.contrast.css" data-active="false" />
	<link rel="dx-theme" data-theme="generic.contrast.compact" href="css/dx.contrast.compact.css" data-active="false" />

[note]Add links to the *dx.common.css* and *dx.spa.css* files first before referencing the required themes. The *dx.common.css* file contains a set of common CSS classes that do not depend on the currently used device/browser. The *dx.spa.css* file must go second. It contains specific styles for views and layouts that are managed by the framework.

[note]The themes that are differentiated by a color scheme can be included together. But one of them should be set as the active one (see the **data-active** attribute within the links).

[note]The "dx-theme" links must go before DevExtreme scripts so that themes in the early stages of initialization can be processed. If "dx-theme" links are found afterwards, an error will occur.

When running, an application built using the DevExtreme SPA framework retrieves information about the device (its platform and device type) from the browser. A corresponding CSS class is applied to the root element of the page - the element that is accompanied by the "dx-viewport" class. If a style specific to the required platform is not found, a generic theme ("light" or "dark") is applied.

You can build a device-specific application supplying resources for a specific device only. In this case, you can expect that your application will have a particular theme applied. To set the target device for an application, use the [DevExpress.devices.current](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName') method, passing an object that defines the target device.

    <!--JavaScript-->window.MyApp = {};
	$(function() {
        DevExpress.devices.current({
            platform: 'generic',
			deviceType: 'tablet'
        });
        MyApp.app = new DevExpress.framework.html.HtmlApplication({namespace: MyApp});
    });

[note]The target device should be set before an application object is created.

When there are several themes provided for the same platform(device), you can switch between them at runtime. For this purpose, use the [ui.themes.current](/api-reference/50%20Common/utils/ui/themes/3%20Methods/current(themeName).md '/Documentation/ApiReference/Common/Utils/ui/themes/Methods/#currentthemeName') method.

	<!--JavaScript-->DevExpress.ui.themes.current('win10.white');  //Windows 10 Light theme
	//DevExpress.ui.themes.current('win10.black');  //Windows 10 Dark theme 

If your application uses a single theme only, you can link this theme using a classic HTML <link rel="stylesheet"> tag.

	<!--HTML--><link rel="stylesheet" type="text/css" href="css/dx.light.css" />