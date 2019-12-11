By default, the **ActionSheet** comes up from the bottom of the page. If you set the [usePopover](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/usePopover.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#usePopover') option to *true*, the action sheet will pop over a certain element on the page. Use the [target](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#target') option to specify this element.

    <!--JavaScript-->
    $(function() {
        $("#actionSheetContainer").dxActionSheet({
            dataSource: actionSheetData,
            usePopover: true,
            target: $("#actionSheetTarget")
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Action_Sheet/PopoverMode/jQuery/iOS/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

#####See Also#####
- [ActionSheet - Customize Item Appearance](/concepts/05%20Widgets/ActionSheet/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/ActionSheet/Customize_Item_Appearance/')
- [ActionSheet API Reference](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/')
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')

[tags]action sheet, actionSheet, display mode, target element