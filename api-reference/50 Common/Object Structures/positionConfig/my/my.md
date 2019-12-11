---
acceptValues: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'left top' | 'left bottom' | 'right top' | 'right bottom'
type: String | Object
---
---
##### shortDescription
The position of the widget to align against the target element.

---
The **my** option can take on an object containing the **x** and **y** fields, which specify horizontal and vertical position specifier respectively, or a string value consisting of horizontal and vertical position specifiers separated by a space (e.g., "left top"). The default value for each position specifier is "center". If you assign the "left" value to this option, it will be converted to the "left center" value.

    <!--JavaScript-->
    position: { my: 'left' };

When configuring a widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `HorizontalAlignment` and `VerticalAlignment` enums in the following manner.

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .Position(p => p
            .My(HorizontalAlignment.Right, VerticalAlignment.Bottom)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .Position(Sub(p)
            p.My(HorizontalAlignment.Right, VerticalAlignment.Bottom)
        End Sub)
    )