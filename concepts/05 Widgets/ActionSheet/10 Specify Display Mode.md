By default, the **ActionSheet** comes up from the bottom of the page. If you set the [usePopover](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/usePopover.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#usePopover') option to **true**, the action sheet will pop over a certain element on the page. Use the [target](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#target') option to specify this element.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#actionSheetContainer").dxActionSheet({
            dataSource: actionSheetData,
            usePopover: true,
            target: "#actionSheetTarget"
        });
    });

##### Angular

    <!--HTML-->
    <dx-action-sheet
        [dataSource]="actionSheetData"
        [usePopover]="true"
        target="#actionSheetTarget">
    </dx-action-sheet>

    <!--TypeScript-->
    import { DxActionSheetModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxActionSheetModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Action_Sheet/PopoverMode/jQuery/iOS/"
}

#####See Also#####
- [ActionSheet - Customize Item Appearance](/concepts/05%20Widgets/ActionSheet/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/ActionSheet/Customize_Item_Appearance/')
- [ActionSheet API Reference](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/')
#include common-link-configurewidget

[tags]action sheet, actionSheet, display mode, target element