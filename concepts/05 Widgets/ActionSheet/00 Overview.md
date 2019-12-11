The **ActionSheet** widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-action_sheet-overview/ios7"
}

The following code adds a simple **ActionSheet** to your page. The widget is shown on a button click.  

---
##### jQuery

    <!--HTML-->
    <div id="buttonContainer"></div>
    <div id="actionSheetContainer"></div>

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

##### Angular

    <!--HTML-->
    <dx-button
        text="Show the ActionSheet"
        (onClick)="actionSheet.visible = true">
    </dx-button>

    <dx-action-sheet
        #actionSheet
        [dataSource]="actionSheetData"
        [visible]="false">
    </dx-action-sheet>

    <!--TypeScript-->
    import { DxActionSheetModule, DxButtonModule } from 'devextreme-angular';
    import notify from 'devextreme/ui/notify';
    // ...
    export class AppComponent {
        actionSheetData = [
            { text: "Reply", onClick: () => { this.processClick("Reply") } },
            { text: "Reply All", onClick: () => { this.processClick("Reply All") } },
            { text: "Forward", onClick: () => { this.processClick("Forward") } },
            { text: "Delete", onClick: () => { this.processClick("Delete") } }
        ];
        processClick (name) {
            notify(name + " clicked", "success", 3000);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxActionSheetModule,
            DxButtonModule
        ],
        // ...
    })

---

Note that every data source object has a **text** field that is rendered on the buttons of the **ActionSheet**. Also, there is the **onClick** field that represents a click handler for a certain **ActionSheet** button.

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [ActionSheet - Customize Item Appearance](/concepts/05%20Widgets/ActionSheet/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/ActionSheet/Customize_Item_Appearance/')
- [ActionSheet - Specify Display Mode](/concepts/05%20Widgets/ActionSheet/10%20Specify%20Display%20Mode.md '/Documentation/Guide/Widgets/ActionSheet/Specify_Display_Mode')
- [ActionSheet API Reference](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/')

[tags]action sheet, actionSheet, collection container, collection widget, navigation, overview