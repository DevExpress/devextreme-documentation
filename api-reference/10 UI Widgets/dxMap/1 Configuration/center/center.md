---
type: Object | String | Array
inherits: ..\..\..\MapLocation\MapLocation.md
---
---
##### shortDescription
An object, a string, or an array specifying the location displayed at the center of the widget.

---
You can specify the **center** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - 'Brooklyn Bridge,New York,NY'

When you configure the **Map** using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), this option accepts either a string value indicating the address, or two values of the `double` type indicating the coordinates.

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