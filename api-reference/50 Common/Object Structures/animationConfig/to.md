---
id: animationConfig.to
type: Number | String | Object
default: {}
---
---
##### shortDescription
Specifies a final animation state.

---
The values that this option accepts depend on the specified [animation type](/api-reference/50%20Common/Object%20Structures/animationConfig/type.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#type'). The following list illustrates the dependency:

- **fade**  
 **to** accepts a number from 0 to 1 and specifies the widget's opacity. 0 makes the widget completely transparent; 1 makes it opaque.

        <!--JavaScript-->
        to: 1

- **pop**  
 **to** accepts an object with the **opacity** and **scale** fields; each takes a value from 0 to 1.     
Opacity is specified the same way as in the **fade** animation type. A scale of 0 hides the widget; a scale of 1 displays the widget in its default size. 
    
        <!--JavaScript-->
        to: {
            scale: 1,
            opacity: 1
        }

- **slide**  
 **to** accepts an object with the **opacity** field and fields that configure the widget's position.         
Opacity is specified the same way as in the **fade** animation type. The widget's position can be set using the **position** field that accepts the [position configuration object](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/'). This approach covers all cases. You can also use the **top** and **left** fields, which are shortcuts for positioning the widget relative to its parent element or shifting the widget from its default position.

        <!--JavaScript-->
        to: { 
            opacity: 1, 
            top: 10 // places the widget 10px below the parent element
            /* top: "+=10" // shifts the widget 10px below its default position */
        }
        ==== or ====
        to: {
            opacity: 1,
            position: { my: 'top', at: 'bottom', of: "#targetElement" } // places the top of the widget at the bottom of the "targetElement"
        }

- **css**  
 **to** accepts a string specifying a CSS class or several CSS classes separated by a comma.

        <!--JavaScript-->
        to: "fade-out-active-text, fade-out-active-visibility"

        <!--CSS-->
        .fade-out-active-visibility { opacity: 1; }
        .fade-out-active-text { font-size: 15pt; }

When using <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Controls</a> or <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Controls</a>, you can specify this option with an object instead of the usual lambda expression.

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