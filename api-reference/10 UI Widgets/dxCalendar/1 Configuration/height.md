This option accepts a value of one of the following types.

- **Number**  
The height of the widget in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"80%"`, `"auto"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->height: function() {
            return window.innerHeight / 1.5;
        }

[note]The widget's minimum height depends on the current theme. If the **height** option value is less than the minimum height, the widget height is set to the minimum value, ignoring the specified value. Below is a list of minimum calendar sizes depending on the current theme.

- Generic - 280x270
- Android - 290x260
- iOS 260x260
- Windows- 278x278