---
default: 'hide'
acceptValues: 'hide' | 'none'
type: String
---
---
##### shortDescription
Decides how to arrange scale labels when there is not enough space to keep all of them.

---
When scale labels overlap each other, you can rearrange them by setting this option to one of the following values.

- **hide**      
Hides certain scale labels leaving more space for the others.
- **none**      
Leaves scale labels overlapped.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ScaleLabelOverlappingBehavior` enum. This enum accepts the following values: `Hide` and `None`.