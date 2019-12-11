---
default: function(ratio, value) { return 'Progress: ' + Math.round(ratio * 100) + '%' }
type: string | function
---
---
##### shortDescription
Specifies a format for the progress status.

##### param(ratio): number
Specifies the ratio of the current progress to the entire range. (From 0 to 1)

##### param(value): number
The current widget value, which can also be accessed using the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value">value option</a>.

##### return: string
A status string for the current progress value.

---
A function passed to this option should take on a numeric value and return a formatted value. For instance, you can add a "%" sign after a value. In this case, the function passed to the **statusFormat** option should look like the following.

    <!--JavaScript-->
    function(ratio, value) {
        return ratio * 100 + "% (" + value + ")";
    }

The function may also return a string containing a Globalize format pattern.