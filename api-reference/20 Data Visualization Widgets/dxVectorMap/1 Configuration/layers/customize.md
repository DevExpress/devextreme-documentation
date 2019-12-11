---
type: function(elements)
---
---
##### notUsedInTheme

##### shortDescription
Specifies the function that customizes each layer element individually.

##### param(elements): Array
The array of <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element">layer elements</a>.

---
When implementing a function for this option, use the fields of the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') object. To access this object, use the function's parameter or the **this** object.

Only the following options can be changed in the **customize** function.

- [borderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/borderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#borderColor')
- [borderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/borderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#borderWidth')
- [color](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#color')
- [hoveredBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderColor')
- [hoveredBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderWidth')
- [hoveredColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredColor')
- [label](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/label/') (but not **enabled**)
- [opacity](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#opacity')
- [selectedBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderColor')
- [selectedBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderWidth')
- [selectedColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedColor')
- [size](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/size.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#size')

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Vector_Map/ColorsCustomization/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>