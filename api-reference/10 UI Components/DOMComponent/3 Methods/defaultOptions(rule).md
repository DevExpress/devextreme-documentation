---
id: DOMComponent.defaultOptions(rule)
---
---
##### shortDescription
Specifies the device-dependent default configuration properties for this component.

##### param(rule): Object
The component's default device properties.

##### field(rule.device): Device | Array<Device> | function()
[Device parameters](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/').      
When specifying a function, get information about the current device from the argument. Return **true** if the properties should be applied to the device.

##### field(rule.options): Object
Propertiesto be applied.

---
**defaultOptions** is a static method that the UI component class supports. The following code demonstrates how to specify default properties for all instances of the {WidgetName} UI component in an application executed on the desktop.

---
##### jQuery

    <!--JavaScript-->
    DevExpress.ui.dx{WidgetName}.defaultOptions({ 
        device: { deviceType: "desktop" },
        options: {
            // Here go the {WidgetName} options
        }
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/ui/{widget_name}";
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

##### Vue

    <template>
        <div>
            <Dx{WidgetName} id="{widgetName}1" />
            <Dx{WidgetName} id="{widgetName}2" />
        </div>
    </template>
    <script>
    import Dx{WidgetName} from "devextreme-vue/{widget-name}";
    import {WidgetName} from "devextreme/ui/{widget_name}";

    {WidgetName}.defaultOptions({
        device: { deviceType: "desktop" },
        options: {
            // Here go the {WidgetName} options
        }
    });

    export default {
        components: {
            Dx{WidgetName}
        }
    }
    </script>


##### React

    import React from "react";
    import dx{WidgetName} from "devextreme/ui/{widget_name}";
    import {WidgetName} from "devextreme-react/{widget-name}";

    class App extends React.Component {
        render () {
            dx{WidgetName}.defaultOptions({
                device: { deviceType: "desktop" },
                options: {
                    // Here go the {WidgetName} options
                }
            })
            return (
                <div>
                    <{WidgetName} id="{widgetName}1" />
                    <{WidgetName} id="{widgetName}2" />
                </div>
            )
        }
    }

    export default App;

---