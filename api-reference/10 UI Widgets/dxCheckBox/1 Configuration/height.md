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

[note]

The option affects only the size of the widget container. To specify the size of a check box icon, provide the appropriate CSS rules.

    <!--CSS-->
    #checkBoxContainer .dx-checkbox-icon{
        height: 20px;
        width: 20px;
    }

[/note]