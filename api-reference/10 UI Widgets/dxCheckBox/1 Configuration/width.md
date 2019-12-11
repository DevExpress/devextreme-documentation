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

[note]

The option affects only the size of the widget container. To specify the size of a check box icon, provide the appropriate CSS rules.

    <!--CSS-->
    #checkBoxContainer .dx-checkbox-icon{
        height: 20px;
        width: 20px;
    }

[/note]