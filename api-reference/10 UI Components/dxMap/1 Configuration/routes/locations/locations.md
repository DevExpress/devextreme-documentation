---
id: dxMap.Options.routes.locations
type: Array<Object>
inherits: MapLocation
---
---
##### shortDescription
Contains an array of objects making up the route.

---
You can specify the **locations** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - "Brooklyn Bridge,New York,NY"

When you use the **Map** as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option using the `Address()` or `Coordinates()` method as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme().Map()
        .Routes(routes => {
            routes.Add().Locations(locations => {
                locations.Add().Address("Brooklyn Bridge,New York,NY");
                locations.Add().Coordinates(40.753889, -73.95);
            });
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Map() _
        .Routes(Sub(routes)
            routes.Add().Locations(Sub(locations)
                locations.Add().Address("Brooklyn Bridge,New York,NY")
                locations.Add().Coordinates(40.753889, -73.95)
            End Sub)
        End Sub)
    )