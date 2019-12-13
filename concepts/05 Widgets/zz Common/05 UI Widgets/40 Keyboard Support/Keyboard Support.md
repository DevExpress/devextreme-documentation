The DevExtreme UI widgets enable you to use the keyboard to switch between widgets within a view. The widget tabbing order is specified by the **tabIndex** option. When an end-user presses **Tab** or **Shift**+**Tab**, focus is moved to the widget with a higher or lower **tabIndex** value respectively.

    <!--JavaScript-->
    var buttonOptions = {
        text: 'Click me',
        tabIndex: 0
    }
    var checkBoxOptions = {
        value: true,
        tabIndex: 1
    }
    var textBoxOptions = {
        placeholder: 'Input text'
        tabIndex: 2
    }

If a widget is focused, the **dx-state-focused** css class is applied to the widget element. You can modify this class to use a custom style for a widget when it is focused.

Focused widgets can be fully controlled with the keyboard. To learn how to control a certain widget using the keyboard, refer to the widget description in the [UI Widgets](/Documentation/Guide/#uiwidgets) guides.