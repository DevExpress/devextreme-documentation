---
type: Object | String | Array<Number>
inherits: ..\..\..\MapLocation\MapLocation.md
---
---
##### shortDescription
An object, a string, or an array specifying which part of the map is displayed at the widget's center using coordinates. The widget can change this value if [autoAdjust](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/autoAdjust.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#autoAdjust') is enabled.

---
You can specify the **center** value in one of the following formats:

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - "Brooklyn Bridge,New York,NY"

When you use the **Map** as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), this option accepts either a string value indicating the address, or two `double` type values indicating the coordinates.

    <!--Razor C#-->@(Html.DevExtreme().Map()
        .Center("Brooklyn Bridge,New York,NY")
        // ===== or =====
        .Center(40.74982, -73.987963)
    )

    <!--Razor VB-->@(Html.DevExtreme().Map() _
        .Center("Brooklyn Bridge,New York,NY") _
        ' ===== or =====
        .Center(40.74982, -73.987963)
    )