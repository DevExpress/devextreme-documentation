---
type: Object | String | Array
inherits: ..\..\..\..\MapLocation\MapLocation.md
---
---
##### shortDescription
Specifies the marker location.

---
You can specify the **location** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - 'Brooklyn Bridge,New York,NY'

When you configure the **Map** using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `Address()` or `Coordinates()` method as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme().Map()
        .Markers(markers => {
            markers.Add().Address("Brooklyn Bridge,New York,NY");
            markers.Add().Coordinates(40.74982, -73.987963);
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Map() _
        .Markers(Sub(markers)
            markers.Add().Address("Brooklyn Bridge,New York,NY")
            markers.Add().Coordinates(40.74982, -73.987963)
        End Sub)
    )