This option accepts a value of one of the following types:

- **Number**  
The height in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"80%"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->height: function() {
            return window.innerHeight / 1.5;
        }