---
##### shortDescription
Specifies the device-dependent default configuration options for this component.

##### param(rule): Object
An object specifying default options for the component and the device for which the options must be applied.

##### field(rule.device): Object|Array|function()
[Device parameters](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/').      
When specifying a function, get information about the current device from the argument. Return **true** if the options should be applied to the device.

##### field(rule.options): Object
A configuration object with specified options.

---
The **defaultOptions** method is a static method supported by the widget class. The following code demonstrates how to specify default options for all instances of the **{WidgetName}** widget in an application executed on the desktop.

---
#####jQuery

    <!--JavaScript-->
    DevExpress.ui.dx{WidgetName}.defaultOptions({ 
        device: { deviceType: "desktop" },
        options: {
            // Here go the {WidgetName} options
        }
    });

#####Angular

    <!--TypeScript-->
    import {WidgetName} from 'devextreme/ui/{widget_name}';
    // ...
    export class AppComponent {
        constructor () {
            var {widgetName}: any = {WidgetName};
            {widgetName}.defaultOptions({
                device: { deviceType: "desktop" },
                options: {
                    // Here go the {WidgetName} options
                }
            });
        }
    }

---