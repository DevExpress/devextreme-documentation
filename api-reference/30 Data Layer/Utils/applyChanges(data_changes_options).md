---
id: Utils.applyChanges(data, changes, options)
module: common/data
export: applyChanges
---
---
##### shortDescription
Applies an array of changes to a source data array.

##### return: Array<any>
An array with applied changes.

##### param(data): Array<any>
A source data array to be updated.

##### param(changes): Array<any>
An array of changes to be applied.

##### param(options?): any | Object
Configures how to apply changes.

##### field(options?.immutable): Boolean
If `true` (default), the source array remains unchanged; a new array with applied changes is returned.                            
If `false`, changes are applied directly to the source array which is then returned.

##### field(options?.keyExpr): String | Array<String>
Specifies the key property (or properties) that provide(s) keys to locate data items. Default value: *"id"*

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/EditStateManagement/"
}
