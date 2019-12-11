The **Switch** is a widget that can be in two states: "On" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value') is *true*) and "Off" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value') is *false*).

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-switch-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Switch** to your page.

    <!--HTML-->
    <div id="switchContainer"></div>
     
<!---->
 
    <!--JavaScript-->
    $(function() {
        $("#switchContainer").dxSwitch({
            value: true
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Switch - Handle the Value Change Event](/concepts/05%20Widgets/Switch/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Switch/Handle_the_Value_Change_Event')
- [Switch - Keyboard Support](/concepts/05%20Widgets/Switch/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Switch/Keyboard_Support')
- [Switch API Reference](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Widgets/dxSwitch/')

[tags]switch, editor, overview