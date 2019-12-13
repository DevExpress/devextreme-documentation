---
id: dxToolbarItem.location
acceptValues: 'after' | 'before' | 'center'
type: String
default: 'center'
---
---
##### shortDescription
Specifies a location for the item on the toolbar.

---
Whatever template you use for widget items (default or a custom) will be located according to the value specified for the **location** field in the item data source object.

#include common-ref-enum with {
    enum: "`ToolbarItemLocation`",
    values: "`Before`, `After`, and `Center`"
}

#####See Also#####
- [Toolbar - Specify Item Location](/concepts/05%20Widgets/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location/')