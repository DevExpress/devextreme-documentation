---
default: 'normal'
acceptValues: 'back' | 'danger' | 'default' | 'normal' | 'success'
type: String
---
---
##### shortDescription
Specifies the button type.

---
DevExtreme provides the following button types.

![Button Types](/images/UiWidgets/Button_Types.png) 

When using a widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ButtonType` enum. This enum accepts the following values: `Normal`, `Default`, `Back`, `Danger` and `Success`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/jQuery/Light/"
}