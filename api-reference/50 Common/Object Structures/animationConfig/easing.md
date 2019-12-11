---
default: 'ease'
type: string
---
---
##### shortDescription
A string specifying the easing function for animation.

---
DevExtreme supports predefined jQuery easing (*"linear"* and *"swing"*) and CSS transition timing functions (*"linear"*, *"ease"*, *"ease-in"*, *"ease-out"*, *"ease-in-out"*, *"cubic-besier(0,1,1,0)"*, etc.). For more information on CSS transition timing functions, see [CSS3 transition-timing-function Property](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp). You can also register a custom easing function using jQuery and pass its name to the **easing** option.

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