---
default: {}
type: Number | String | Object
---
---
##### shortDescription
Specifies the initial animation state.

---
The option can take on the following values, depending on the animation type.

- **fade**  
 The **from** option takes on a numeric value from 0 to 1, which specifies the initial element opacity.

        <!--JavaScript-->
        from: 0.1

- **pop**  
 The option can take on an object containing the **scale** and **opacity** properties, which specify the initial element scale and opacity, respectively. Each property can take on a numeric value of 0 to 1.
    
        <!--JavaScript-->
        from: {
            scale: 0.2,
            opacity: 0
        }

- **slide**  
 The option takes on an object containing the **opacity** property and properties specifying the element position (**top** and **left**).

        <!--JavaScript-->
        from: {
            opacity: 0.5,
            top: -100
        }

- **css**  
 The option takes on a string specifying the CSS class or several CSS classes delimited by comma that you want to apply at the animation start.

        <!--JavaScript-->from: 'fade-out'

        <!--CSS-->.fade-out { opacity: 1; }

You can specify the initial or target element position relative to the current element position. For this purpose use the **+=** or **-=** operators.

    <!--JavaScript-->
    from: {
        top: "-=300",
    }
    to: {
        top: "+=200",
    }

When using [ASP.NET MVC Controls](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option with an object instead of the usual lambda expression.

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .Animation(a => a
            .Show(s => s
                .From(new { scale = 0.2, opacity = 0.7 })
            )
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .Animation(Sub(a)
            a.Show(Sub(s)
                s.From(New With { .scale = 0.2, .opacity = 0.7 })
            End Sub)
        End Sub)
    )