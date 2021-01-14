The DevExtreme UI components enable you to use the keyboard to switch between UI components within a view. The UI component tabbing order is specified by the **tabIndex** property. When an end-user presses **Tab** or **Shift**+**Tab**, focus is moved to the UI component with a higher or lower **tabIndex** value respectively.

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

If a UI component is focused, the **dx-state-focused** css class is applied to the UI component element. You can modify this class to use a custom style for a UI component when it is focused.

Focused UI components can be fully controlled with the keyboard. To learn how to control a certain UI component using the keyboard, refer to the UI component description in the [UI Widgets](/concepts/05%20Widgets '/Documentation/Guide/Widgets/') guides.