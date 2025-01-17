---
id: dxTreeMap.Options.colorizer.colorCodeField
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of the data source field whose values define the color of a tile. Applies only if the [type](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/colorizer/type.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/colorizer/#type') property is *"gradient"* or *"range"*.

---
When you use the *"gradient"* or *"range"* colorization algorithm, the color of a tile depends on a value. Normally, this value is provided by the [value field](/api-reference/10%20UI%20Components/dxTreeMap/1%20Configuration/valueField.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/#valueField'). However, you can assign another field to provide this value using the **colorCodeField** property.