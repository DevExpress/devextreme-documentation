---
id: Utils.applyChanges(data, changes, options)
module: data/apply_changes
export: default
---
---
##### shortDescription
Applies an array with edit changes to a data source array.
 
##### return: Array<any>
An array with applied changes.

##### param(data): Array<any>
The data source array to be updated.

##### param(changes): Array<any>
The array with changes data to be applied.

##### param(options?): Object
An object defining how to apply changes.

##### field(options?.immutable): Boolean
A flag that defines immutability of the `data` array.

##### field(options?.keyExpr): String | Array<String>
Specifies te key fields by which to locate objects for updating.
---

If options.immutable is `true`, the initial `data` array is unchanged; a new array with applied changes is returned. If `false`, the initial `data` array is changed in place and then returned.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/EditStateManagement/"
}