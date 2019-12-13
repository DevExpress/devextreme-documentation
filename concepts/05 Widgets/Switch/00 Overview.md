The **Switch** is a widget that can be in two states: "On" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value') is **true**) and "Off" (when [value](/api-reference/10%20UI%20Widgets/dxSwitch/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value') is **false**).

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Switch/Overview/"
}

The following code adds the **Switch** to your page.

    <!--HTML-->
    <div id="switchContainer"></div>
     
 
    <!--JavaScript-->
    $(function() {
        $("#switchContainer").dxSwitch({
            value: true
        });
    });

#####See Also#####
#include common-link-configurewidget
- [Switch - Handle the Value Change Event](/concepts/05%20Widgets/Switch/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Switch/Handle_the_Value_Change_Event')
- [Switch - Keyboard Support](/concepts/05%20Widgets/Switch/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Switch/Keyboard_Support')
- [Switch API Reference](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Widgets/dxSwitch/')

[tags]switch, editor, overview