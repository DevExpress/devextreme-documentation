This property accepts a value of one of the following types:

- **Number**  
The height in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"20vh"`, `"80%"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->height: function() {
            return window.innerHeight / 1.5;
        }
[note]The `function` value type is deprecated. Refer to the [W0017](/Documentation/ApiReference/Common/Utils/Errors_and_Warnings/#W0017) warning description to see the migration guide to viewport units. 