---
default: 'full'
acceptValues: 'center' | 'centerBottom' | 'centerTop' | 'full' | 'leftBottom' | 'leftCenter' | 'leftTop' | 'rightBottom' | 'rightCenter' | 'rightTop'
type: String
---
---
##### shortDescription
Specifies a location for the image in the background of a range selector.

---
If the image does not occupy the entire background area, you can set the required background color to be displayed in the remaining area. Use the **color** property of the **background** configuration object to do this.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `BackgroundImageLocation` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'leftTop'* becomes `LeftTop`.