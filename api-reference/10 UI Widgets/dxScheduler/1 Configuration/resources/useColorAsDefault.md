---
id: dxScheduler.Options.resources.useColorAsDefault
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether appointments are colored like this resource kind.

---
Appointments that have a single resource kind inherit its color. Appointments with several resource kinds are colored like the one whose **useColorAsDefault** option is set to **true**, which is the last resource kind in the **resources** array by default.