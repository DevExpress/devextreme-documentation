---
hidden: 
module: core/component_registrator
---
---
##### shortDescription
Registers a new component in the [DevExpress.ui](/api-reference/50%20Common/utils/ui '/Documentation/ApiReference/Common/Utils/#ui') namespace as a jQuery plugin, AngularJS directive and Knockout binding.

##### param(name): string
The name for the component to register.

##### param(class): Class
A DevExpress.Class inheritor implementing the component's functionality.

---
Use the following code to register a new component within the **DevExpress.ui** namespace.

    <!--JavaScript-->DevExpress.registerComponent(
        "myComponent",
        DevExpress.Component.inherit({
            //Implement your component here
        });
    });