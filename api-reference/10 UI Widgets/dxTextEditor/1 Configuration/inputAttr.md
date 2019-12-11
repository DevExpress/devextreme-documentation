---
default: {}
type: Object
---
---
##### shortDescription
Specifies the attributes to be passed on to the underlying HTML element.

---
You can configure this option in an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/') as follows:

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .InputAttr("id", "inputId")
        // ===== or =====
        .InputAttr(new {
            @id = "inputId"
        })
        // ===== or =====
        .InputAttr(new Dictionary<string, object>() {
            { "id", "inputId" }
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .InputAttr("id", "inputId")
        ' ===== or =====
        .InputAttr(New With {
            .id = "inputId"
        })
        ' ===== or =====
        .InputAttr(New Dictionary(Of String, Object) From {
            { "id", "inputId" }
        })
    )