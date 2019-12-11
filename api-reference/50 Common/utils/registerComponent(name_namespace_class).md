---
hidden: 
module: core/component_registrator
---
---
##### shortDescription
Registers a new component in the specified namespace as a jQuery plugin, AngularJS directive and Knockout binding.

##### param(name): String
The name for the component to register.

##### param(namespace): Object
The object that represents the namespace within which the registered component will be accessible.

##### param(class): Object
A DevExpress.Class inheritor implementing the component's functionality.

---
Call the [registerComponent(name, class)](/Documentation/ApiReference/Common/Utils/#registerComponentname_class) method overload to register the specified component within the [DevExpress.ui](/api-reference/50%20Common/utils/ui '/Documentation/ApiReference/Common/Utils/#ui') namespace.