---
type: Array<Object>
inherits: ..\..\..\..\MapLocation\MapLocation.md
---
---
##### shortDescription
Contains an array of objects making up the route.

---
You can specify the **locations** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - 'Brooklyn Bridge,New York,NY'

When you use the **Map** as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `Address()` or `Coordinates()` method as shown in the following code.

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