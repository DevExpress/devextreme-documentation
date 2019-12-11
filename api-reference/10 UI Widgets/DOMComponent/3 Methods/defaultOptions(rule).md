---
##### shortDescription
Specifies the device-dependent default configuration options for this component.

##### param(rule): object
An object specifying default options for the component and the device for which the options must be applied.

##### field(rule.device): Object|array|function
An object representing device parameters, or an array of objects representing device parameters, or a function that provides information on the current device as an input parameter and returning a Boolean value.

##### field(rule.options): Object
A configuration object with specified options.

---
The **defaultOptions** method is a static method supported by the widget class. The following code demonstrates how to specify default options for all buttons in the application executed on the iOS platform.

    <!--JavaScript-->
    DevExpress.ui.dxButton.defaultOptions({ 
        device: { platform: "ios" },
        options: {
            text: "Click me"
        }
    });