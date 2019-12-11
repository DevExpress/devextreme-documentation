The **TextBox** is a widget that enables a user to enter and edit a single line of text.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-text_box-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **TextBox** with a [placeholder](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#placeholder') to your page.

    <!--HTML--><div id="textBoxContainer" style="width:300px"></div>

<!---->

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            placeholder: "Type a text here..."
        });
    });

If an end user should _not_ be able to edit the value in the **TextBox**, assign *true* to the **readOnly** option. In this case, make sure to set the **value** option too.

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            value: "The value that should not be edited",
            readOnly: true
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [TextBox - Task-Specific Modes](/concepts/05%20Widgets/TextBox/05%20Task-Specific%20Modes.md '/Documentation/Guide/Widgets/TextBox/Task-Specific_Modes/')
- [TextBox - Handle the Value Change Event](/concepts/05%20Widgets/TextBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TextBox/Handle_the_Value_Change_Event/')
- [TextBox - Handle the Keyboard Events](/concepts/05%20Widgets/TextBox/13%20Handle%20the%20Keyboard%20Events.md '/Documentation/Guide/Widgets/TextBox/Handle_the_Keyboard_Events/')
- [TextBox - Limit the String Length](/concepts/05%20Widgets/TextBox/15%20Limit%20the%20String%20Length.md '/Documentation/Guide/Widgets/TextBox/Limit_the_String_Length/')
- [TextBox - Specify a Mask for the Input](/concepts/05%20Widgets/TextBox/20%20Specify%20a%20Mask%20for%20the%20Input.md '/Documentation/Guide/Widgets/TextBox/Specify_a_Mask_for_the_Input/')
- [TextBox API Reference](/api-reference/10%20UI%20Widgets/dxTextBox '/Documentation/ApiReference/UI_Widgets/dxTextBox/')
- [TextArea](/concepts/05%20Widgets/TextArea/00%20Overview.md '/Documentation/Guide/Widgets/TextArea/Overview/')

[tags]textBox, text box, editor, overview