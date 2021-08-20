This property accepts a value of one of the following types:

- **Number**  
The width in pixels.

- **String**  
A CSS-accepted measurement of width. For example, `"55px"`, `"20vw"`, `"80%"`, `"auto"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->width: function() {
            return window.innerWidth / 1.5;
        }
[note]The `function` value type is deprecated. Refer to the [W0017](/Documentation/ApiReference/Common/Utils/Errors_and_Warnings/#W0017) warning description to see the migration guide to viewport relative units. 