---
id: dxProgressBar.Options.statusFormat
type: String | function(ratio, value)
default: function(ratio, value) { return 'Progress: ' + Math.round(ratio * 100) + '%' }
---
---
##### shortDescription
Specifies a format for the progress status.

##### param(ratio): Number
The ratio of the current progress to the entire range. (From 0 to 1)

##### param(value): Number
The widget's value.

##### return: String
The customized progress status string.

---
A function passed to this option should take on a numeric value and return a formatted value. For instance, you can add a "%" sign after a value. In this case, the function passed to the **statusFormat** option should look like the following.

    <!--JavaScript-->
    function(ratio, value) {
        return ratio * 100 + "% (" + value + ")";
    }

The function may also return a string containing a Globalize format pattern.