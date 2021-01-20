---
id: dxMap.Options.markers.location
type: Object | String | Array<Number>
inherits: MapLocation
---
---
##### shortDescription
Specifies the marker location.

---
You can specify the **location** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - "Brooklyn Bridge,New York,NY"

When you use the **Map** as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option using the `Address()` or `Coordinates()` method as shown in the following code.

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