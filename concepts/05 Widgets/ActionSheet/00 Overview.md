The **ActionSheet** widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-action_sheet-overview/ios7" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **ActionSheet** to your page. The widget is shown on a button click.  

    <!--HTML-->
    <div id="buttonContainer"></div>
    <div id="actionSheetContainer"></div>

<!---->

    <!--JavaScript-->
    // Shows a message with a button name
    var processClick = function (name) {
        DevExpress.ui.notify(name + " clicked", "success", 3000);
    };

    $(function() {
        $("#buttonContainer").dxButton({
            text: 'Show the ActionSheet',
            onClick: function () {
                // Shows the ActionSheet widget
                $("#actionSheetContainer").dxActionSheet("instance").show();
            }
        });

        $("#actionSheetContainer").dxActionSheet({
            dataSource: [
                { text: "Reply", onClick: function () { processClick("Reply") } },
                { text: "Reply All", onClick: function () { processClick("Reply All") } },
                { text: "Forward", onClick: function () { processClick("Forward") } },
                { text: "Delete", onClick: function () { processClick("Delete") } }
            ]
        });
    });

Note that every data source object has a **text** field that is rendered on the buttons of the **ActionSheet**. Also, there is the **onClick** field that represents a click handler for a certain **ActionSheet** button.

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [ActionSheet - Customize Item Appearance](/concepts/05%20Widgets/ActionSheet/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/ActionSheet/Customize_Item_Appearance/')
- [ActionSheet - Specify Display Mode](/concepts/05%20Widgets/ActionSheet/10%20Specify%20Display%20Mode.md '/Documentation/Guide/Widgets/ActionSheet/Specify_Display_Mode')
- [ActionSheet API Reference](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/')

[tags]action sheet, actionSheet, collection container, collection widget, navigation, overview