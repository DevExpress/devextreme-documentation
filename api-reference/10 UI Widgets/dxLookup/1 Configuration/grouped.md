---
id: dxLookup.Options.grouped
type: Boolean
default: false
---
---
##### shortDescription
A Boolean value specifying whether or not to group widget items.

---
If this option is set to **true**, the object assigned to the items option should
include **key** and **items** properties. The **key** property specifies the group caption in the list. The **items** property represents an array listing group items.

[note]Only one-level grouping is supported.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/"
}