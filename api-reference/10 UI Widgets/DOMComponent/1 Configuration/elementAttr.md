---
default: {}
type: Object
---
---
##### shortDescription
Specifies the [attributes](https://www.w3schools.com/tags/ref_attributes.asp) to be attached to the widget's root element.

---
You can configure this option in an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/') as follows:

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .ElementAttr("class", "class-name")
        // ===== or =====
        .ElementAttr(new {
            @id = "elementId",
            @class = "class-name"
        })
        // ===== or =====
        .ElementAttr(new Dictionary<string, object>() {
            { "id", "elementId" },
            { "class", "class-name" }
        })
        
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .ElementAttr("class", "class-name")
        ' ===== or =====
        .ElementAttr(New With {
            .id = "elementId",
            .class = "class-name"
        })
        ' ===== or =====
        .ElementAttr(New Dictionary(Of String, Object) From {
            { "id", "elementId" },
            { "class", "class-name" }
        })
    )