---
id: dxRangeSelector.Options.background.image.location
acceptValues: 'center' | 'centerBottom' | 'centerTop' | 'full' | 'leftBottom' | 'leftCenter' | 'leftTop' | 'rightBottom' | 'rightCenter' | 'rightTop'
type: String
default: 'full'
---
---
##### shortDescription
Specifies a location for the image in the background of a range selector.

---
If the image does not occupy the entire background area, you can set the required background color to be displayed in the remaining area. Use the **color** property of the **background** configuration object to do this.

When using the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option using the `BackgroundImageLocation` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'leftTop'* becomes `LeftTop`.