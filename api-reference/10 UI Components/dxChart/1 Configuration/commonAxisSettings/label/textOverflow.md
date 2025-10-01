---
id: dxChart.Options.commonAxisSettings.label.textOverflow
type: Enums.TextOverflow
default: 'none'
---
---
##### shortDescription
Specifies how the component handles label overflow after applying [wordWrap](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label/wordWrap.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/label/#wordWrap').

---
The **textOverflow** property does not apply in the following cases:

- When **label**.[displayMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label/displayMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/label/#displayMode') or **label**.[overlappingBehavior](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label/overlappingBehavior.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/label/#overlappingBehavior') is set to *"rotate"*.
- When **label**.[template](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/label/template.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/label/#template') is specified.

To apply the *"ellipsis"* **textOverflow** mode to vertical chart axes, specify the [placeholderSize](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/placeholderSize.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/#placeholderSize') property (in vertical axis configuration objects or [commonAxisSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/')).