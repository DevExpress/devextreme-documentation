---
default: {}
type: Object
---
---
##### shortDescription
Specifies the attributes to be passed on to the underlying HTML element.

---
When you configure this option using a [server-side wrapper](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), pass a dictionary as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme()
        // other widget options
        // ...
        .InputAttr(new Dictionary<string, object>() {
            { "id", "inputId" },
            // ...
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .InputAttr(New Dictionary(Of String, Object) From {
            { "id", "inputId" }
        })
    )