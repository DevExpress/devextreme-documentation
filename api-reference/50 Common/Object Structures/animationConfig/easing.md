---
id: AnimationConfig.easing
type: String
default: 'ease'
---
---
##### shortDescription
A string specifying the easing function for animation.

---
DevExtreme supports CSS transition timing functions (*"linear"*, *"ease"*, *"ease-in"*, *"ease-out"*, *"ease-in-out"*, *"cubic-besier(0,1,1,0)"*, etc.). For more information on CSS transition timing functions, see <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp" target="_blank">CSS3 transition-timing-function Property</a>. 

---
##### jQuery 

You can also implement predefined jQuery easing (*"linear"* and *"swing"*), or register a custom easing function and pass its name to the **easing** property.

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

---