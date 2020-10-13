---
id: Utils.applyChanges(data, changes, options)
module: data/apply_changes
export: default
---
---
##### shortDescription
Applies an array with edited changes to a data source array.

##### return: Array<any>
An array with applied changes.

##### param(data): Array<any>
The data source array to be updated.

##### param(changes): Array<any>
The array with edited data to be applied to a data source array.

##### param(options?): Object
An object defining how to apply changes.

##### field(options?.immutable): Boolean
If `true`, a new array with applied changes is returned; the initial `data` array is unchanged.
If `false`, the initial `data` array is changed in place and then returned.

##### field(options?.keyExpr): String | Array<String>
Specifies which data fields provide keys used to locate data source objects to be updated.

---
<!-- Description goes here -->