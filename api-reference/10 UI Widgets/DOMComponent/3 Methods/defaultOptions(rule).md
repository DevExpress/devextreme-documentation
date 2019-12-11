---
##### shortDescription
Specifies the device-dependent default configuration options for this component.

##### param(rule): Object
The component's default device options.

##### field(rule.device): Device|Array<Device>|function()
Device parameters.      
When specifying a function, get information about the current device from the argument. Return **true** if the options should be applied to the device.

##### field(rule.options): Object
Options to be applied.

---
**defaultOptions** is a static method that the widget class supports. The following code demonstrates how to specify default options for all instances of the **{WidgetName}** widget in an application executed on the desktop.

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
            {WidgetName}.defaultOptions({
                device: { deviceType: "desktop" },
                options: {
                    // Here go the {WidgetName} options
                }
            });
        }
    }

---