---
default: {}
type: Number | String | Object
---
---
##### shortDescription
Specifies a final animation state.

---
The current option can take on the following values, depending on the animation [type](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#type').

- **fade**          
 The **to** option takes on a numeric value of 0 to 1, which specifies target element opacity.

        <!--JavaScript-->
        to: 1

- **pop**       
The option can take on an object containing the **scale** and **opacity** properties, which specify the target element scale and opacity, respectively. Each property can take on a numeric value of 0 to 1.

        <!--JavaScript-->
        to: {
            scale: 1,
            opacity: 1
        }

- **slide**             
 The option takes on an object containing the **opacity** property and properties specifying the element position (**top** and **left**).

        <!--JavaScript-->
        to: {
            opacity: 1,
            top: 0
        }

- **css**           
 The option takes on a string specifying the CSS class or several CSS classes delimited by comma that you want to apply at the animation end.

        <!--JavaScript-->from: 'fade-out-active'

        <!--CSS-->.fade-out-active { opacity: 1; }

You can specify the initial or target element position relative to the current element position. For this purpose, use the **+=** or **-=** operators.

    <!--JavaScript-->
    from: {
        top: "-=300",
    }
    to: {
        top: "+=200",
    }

When using [ASP.NET MVC Controls](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option with an object instead of the usual lambda expression.

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .Animation(a => a
            .Show(s => s
                .To(new { scale = 1, opacity = 1 })
            )
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .Animation(Sub(a)
            a.Show(Sub(s)
                s.To(New With { .scale = 1, .opacity = 1 })
            End Sub)
        End Sub)
    )