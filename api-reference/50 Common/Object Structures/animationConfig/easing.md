---
id: animationConfig.easing
type: String
default: 'ease'
---
---
##### shortDescription
A string specifying the easing function for animation.

---
DevExtreme supports predefined jQuery easing (*"linear"* and *"swing"*) and CSS transition timing functions (*"linear"*, *"ease"*, *"ease-in"*, *"ease-out"*, *"ease-in-out"*, *"cubic-besier(0,1,1,0)"*, etc.). For more information on CSS transition timing functions, see <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp" target="_blank">CSS3 transition-timing-function Property</a>. You can also register a custom easing function using jQuery and pass its name to the **easing** option.

    <!--JavaScript-->
    $.easing.customEasing = function(t, millisecondsSince, startValue, endValue, totalDuration) {
        if (t < 0.5) {
            return t * 4;
        } else {
            return -2 * t + 3;
        }
    };

    var animationOptions = {
        show: {
            duration: 2000,
            type: "slide",
            from: { left: -300 },
            easing: "customEasing"
        }
    };

When using a widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option using the `AnimationEasing` enum. This enum accepts the following values: `Ease`, `EaseIn`, `EaseInOut`, `EaseOut`, `Linear`, `Swing`, `StepStart` and `StepEnd`.

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .Animation(a => a
            .Hide(h => h.Easing(AnimationEasing.Linear))
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .Animation(Sub(a)
            a.Hide(Sub(h) h.Easing(AnimationEasing.Linear))
        End Sub)
    )

In case you want to employ the cubic-bezier transition function, use the `EasingCubicBezier()` method that accepts four values of the `double` type.

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .Animation(a => a
            .Hide(h => h.EasingCubicBezier(0, 1, 1, 0))
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .Animation(Sub(a)
            a.Hide(Sub(h) h.EasingCubicBezier(0, 1, 1, 0))
        End Sub)
    )