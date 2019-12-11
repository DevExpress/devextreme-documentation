---
default: 'info'
acceptValues: 'info' | 'warning' | 'error' | 'success' | 'custom'
type: string
---
---
##### shortDescription
Specifies the **Toast** widget type.

---
The available toast types (except for "custom") only differ by the icon and background color.

If you assign "custom" to the **type** option, the **dx-toast-custom** class is applied to the widget element. Implement the appropriate CSS class to specify toast appearance.