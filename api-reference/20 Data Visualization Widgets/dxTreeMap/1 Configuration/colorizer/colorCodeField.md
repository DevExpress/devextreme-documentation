---
id: dxTreeMap.Options.colorizer.colorCodeField
type: String
default: undefined
---
---
##### shortDescription
Specifies the name of the data source field whose values define the color of a tile. Applies only if the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/#type') option is *"gradient"* or *"range"*.

---
When you use the *"gradient"* or *"range"* colorization algorithm, the color of a tile depends on a value. Normally, this value is provided by the [value field](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#valueField'). However, you can assign another field to provide this value using the **colorCodeField** option.