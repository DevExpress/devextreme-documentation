---
default: function(ratio, value) { return 'Progress: ' + Math.round(ratio * 100) + '%' }
type: String | function(ratio, value)
---
---
##### shortDescription
Specifies a format for the progress status.

##### param(ratio): Number
Specifies the ratio of the current progress to the entire range. (From 0 to 1)

##### param(value): Number
The current widget value, which can also be accessed using the [value option](/api-reference/10%20UI%20Widgets/dxProgressBar/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value').

##### return: String
A status string for the current progress value.

---
A function passed to this option should take on a numeric value and return a formatted value. For instance, you can add a "%" sign after a value. In this case, the function passed to the **statusFormat** option should look like the following.

    <!--JavaScript-->
    function(ratio, value) {
        return ratio * 100 + "% (" + value + ")";
    }

The function may also return a string containing a Globalize format pattern.