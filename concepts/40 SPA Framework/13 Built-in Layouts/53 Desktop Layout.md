The Desktop layout is available for the 'generic' platform only. This platform is set when the application is running in a desktop, or the current platform is not known to the framework. You can also set the 'generic' platform [manually](/api-reference/50%20Common/utils/devices/3%20Methods/current(deviceName).md '/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName') to make the application look like a web site.

The Desktop layout is characterized by the presence of a navigation control on a view. The navigation control is a global navigation that provides access to the root views of the application. In addition, there is a toolbar on the view, which you can use to add custom actions.

![Desktop Layout](/images/PhoneJS/DesktopLayout.png)

**Links**:

    <!--HTML--><link rel="dx-template" type="text/html" href="layouts/Desktop/DesktopLayout.html" />
    <script type="text/javascript" src="layouts/Desktop/DesktopLayout.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/Desktop/DesktopLayout.css" />