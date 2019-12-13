---
id: dxToast.Options.type
acceptValues: 'custom' | 'error' | 'info' | 'success' | 'warning'
type: String
default: 'info'
---
---
##### shortDescription
Specifies the **Toast** widget type.

---
The available toast types (except for "custom") only differ by the icon and background color.

If you assign "custom" to the **type** option, the `dx-toast-custom` class is applied to the widget element. Implement the appropriate CSS class to specify toast appearance.

#include common-ref-enum with {
    enum: "`ToastType`",
    values: "`Info`, `Warning`, `Error`, `Success`, and `Custom`"
}