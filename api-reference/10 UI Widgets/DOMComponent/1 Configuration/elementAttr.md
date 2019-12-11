---
default: {}
type: Object
---
---
##### shortDescription
Specifies the [attributes](https://www.w3schools.com/tags/ref_attributes.asp) to be attached to the widget's root element.

---
When you configure this option using a [server-side wrapper](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), pass a dictionary as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme()
        // other widget options
        // ...
        .ElementAttr(new Dictionary<string, object>() {
            { "id", "elementId" },
            { "class", "class-name" },
            // ...
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .ElementAttr(New Dictionary(Of String, Object) From {
            { "id", "elementId" },
            { "class", "class-name" }
        })
    )