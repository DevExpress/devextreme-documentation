The following editor widgets also support the text editor functionality. Text editors are intended to display a string, a numeric or date/time value and allow a user to edit this value.

- [Autocomplete](/api-reference/10%20UI%20Widgets/dxAutocomplete '/Documentation/ApiReference/UI_Widgets/dxAutocomplete/')
- [Date Box](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/')
- [Number Box](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/')
- [Text Box](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/')  

These widgets are based on the **input** HTML element. In addition to editor specific options, they include options that enable you to specify handlers for events of the underlying **input** element (**onEnterKey**, **onFocusIn**, **onFocusOut**, etc.).

    <!--JavaScript-->
    var textBoxOptions = {
        onFocusIn: function() {
            alert("The widget has got focus");
        }
    }

Text editor widgets support the read-only state, which can be enabled or disabled using the **readOnly** configuration option. You can also specify the widget placeholder text using the **placeholder** option. In addition, text editor widgets can show the **Clear** button that clears the widget value. Use the **showClearButton** option to specify button visibility.