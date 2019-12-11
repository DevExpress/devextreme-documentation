---
default: 'center'
acceptValues: 'before' | 'after' | 'center'
type: String
---
---
##### shortDescription
Specifies a location for the item on the toolbar.

---
Whatever template you use for widget items (default or a custom) will be located according to the value specified for the **location** field in the item data source object.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ToolbarItemLocation` enum. This enum accepts the following values: `Before`, `After` and `Center`.

#####See Also#####
- [Toolbar - Specify Item Location](/concepts/05%20Widgets/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location/')