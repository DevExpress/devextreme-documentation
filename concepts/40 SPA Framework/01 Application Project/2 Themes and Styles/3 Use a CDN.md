It is not always necessary to deliver stylesheets with a published application. There are times when it is best to use a link to these libraries from a [Content Delivery Network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network). This can improve the performance of your applications.

The DevExpress CDN hosts DevExtreme stylesheets and enables you to easily add them to your applications. Links to the required files should be added in the following manner.

	<!--HTML-->
	<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_2/css/dx.common.css" />
	<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_17_2/css/dx.spa.css" />
	<link rel="dx-theme" data-theme="ios.default" href="https://cdn3.devexpress.com/jslib/minor_17_2/css/dx.ios7.default.css" />
 

[note][Font icons](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/') that are linked in CSS themes are also located on CDN.
