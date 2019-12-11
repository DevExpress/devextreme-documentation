The DevExtreme data visualization widgets consist of many elements, each of which has options that determine appearance. The default values of appearance options are united in a <i>theme</i>.

DevExtreme provides at least one predefined theme for each supported platform. The list of supported platforms and themes is included below.

* **Android**
    * 'android5.light'

* **iOS**
    * 'ios7.default'

* **Windows 10**
    * 'win10.black'
    * 'win10.white'

DevExtreme also provides the platform-agnostic theme set called **Generic**, which includes the 'generic.light' and 'generic.dark' themes.

Each DevExtreme visualization widget has a **theme** configuration option that allows you to set a theme. It is also convenient to apply a theme for the entire page with several DevExtreme widgets. To do this, use the **DevExpress.viz.currentTheme** method passing the name of the required theme as a parameter.

    <!--JavaScript-->DevExpress.viz.currentTheme('android5.light');

If you are creating a cross-platform application, you can determine on which platform the page is currently running. Use the [DevExpress.devices.current()](/api-reference/50%20Common/utils/devices/3%20Methods/current().md '/Documentation/ApiReference/Common/Utils/devices/Methods/#current') method. The method's return value can be used for auto-specifying the theme.

    <!--JavaScript-->DevExpress.viz.currentTheme(DevExpress.devices.current());

In addition to the current device, you can specify the required color scheme. For this purpose, pass 'light' or 'dark' as the second parameter of the **currentTheme** method.

    <!--JavaScript-->DevExpress.viz.currentTheme(DevExpress.devices.current(), 'light');

If you do not set the required theme, the "generic.light" theme is applied.

You can customize the applied themes by setting custom values when defining the widget's configuration object. However, if you need to have a custom theme, implement a new theme. In this topic, you will learn how to implement and use a custom theme.