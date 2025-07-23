---
id: dxToast.Options.type
type: Enums.ToastType
default: 'info'
---
---
##### shortDescription
Specifies the Toast UI component type.

---
The available toast types (except for "custom") only differ by the icon and background color.

If you assign "custom" to the **type** property, the `dx-toast-custom` class is applied to the UI component element. Use CSS styles to customize the appearance of the toast.

[note] The component displays an icon only when using Generic [themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/). Toast follows the [Material Snackbar Guidelines](https://m3.material.io/components/snackbar/guidelines#dded658f-5b06-4289-adfc-fd0856704a13) on avoiding icons when using Material and Fluent themes.