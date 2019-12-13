---
id: animationConfig.from
type: Number | String | Object
default: {}
---
---
##### shortDescription
Specifies the initial animation state.

---
The values that this option accepts depend on the specified [animation type](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#type'). The following list illustrates the dependency:

- **fade**  
 **from** accepts a number from 0 to 1 and specifies the widget's opacity. 0 makes the widget completely transparent; 1 makes it opaque.

        <!--JavaScript-->
        from: 0.1

- **pop**  
 **from** accepts an object with the **opacity** and **scale** fields; each takes a value from 0 to 1.     
Opacity is specified the same way as in the **fade** animation type. A scale of 0 hides the widget; a scale of 1 displays the widget in its default size. 
    
        <!--JavaScript-->
        from: {
            scale: 0.2,
            opacity: 0
        }

- **slide**  
 **from** accepts an object with the **opacity** field and fields that configure the widget's position.         
Opacity is specified the same way as in the **fade** animation type. The widget's position can be set using the **position** field that accepts the [position configuration object](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/'). This approach covers all cases. You can also use the **top** and **left** fields, which are shortcuts for positioning the widget relative to its parent element or shifting the widget from its default position.

        <!--JavaScript-->
        from: { 
            opacity: 0.5, 
            top: 100 // places the widget 100px below the parent element
            /* top: "+=100" // shifts the widget 100px below its default position */
        }
        ==== or ====
        from: {
            opacity: 0.5,
            position: { my: 'top', at: 'top', of: "#targetElement" } // places the top of the widget at the top of the "targetElement"
        }

- **css**  
 **from** accepts a string specifying a CSS class or several CSS classes separated by a comma.

        <!--JavaScript-->
        from: "fade-out-text, fade-out-visibility"

        <!--CSS-->
        .fade-out-visibility { opacity: 0; }
        .fade-out-text { font-size: 5pt; }

When using <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Controls</a> or <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Controls</a>, you can specify this option with an object instead of the usual lambda expression.

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