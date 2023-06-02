---
id: dxLookup.Options.grouped
type: Boolean
default: false
---
---
##### shortDescription
A Boolean value specifying whether or not to group UI component items.

---
If this property is set to **true**, the object assigned to the items property should
include **key** and **items** properties. The **key** property specifies the group caption in the list. The **items** property represents an array listing group items.

[note]Only one-level grouping is supported.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/"
}