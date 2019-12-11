This option accepts a value of one of the following types.

- **Number**  
The width of the widget in pixels.

- **String**  
A CSS-accepted measurement of width. For example, `"55px"`, `"80%"`, `"auto"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->width: function() {
            return window.innerWidth / 1.5;
        }

[note]The widget has a minimum width that depends on the current theme. If the **width** option value is less than the minimum width, the widget width is set to the minimum value, ignoring the specified value. Below is a list of minimum calendar sizes depending on the current theme.

- Generic - 280x270
- Android - 290x260
- iOS 260x260
- Windows- 278x278