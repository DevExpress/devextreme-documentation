---
dep: config.md
default: false
type: boolean
---
---
##### deprecated
Use the [config(config)](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') method instead.

##### shortDescription
Specifies whether or not the entire application/site supports right-to-left representation.

---
The most common scenario is to switch the entire application/site to a right-to-left representation. In this instance, use the **DevExpress.rtlEnabled** field. When this option is set to *true*, applications built using the DevExtreme framework and sites based on DevExtreme widgets will have a right-to-left reading order, mirroring of UI elements and reversed transition animation.
 If you need to switch the display of each DevExtreme component used within the application/site to a  right-to-left representation, use a specifically designed configuration option - **rtlEnabled**.