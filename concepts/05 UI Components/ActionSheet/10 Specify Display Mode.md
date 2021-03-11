By default, the ActionSheet comes up from the bottom of the page. If you set the [usePopover](/api-reference/10%20UI%20Components/dxActionSheet/1%20Configuration/usePopover.md '/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/#usePopover') property to **true**, the action sheet will pop over a certain element on the page. Use the [target](/api-reference/10%20UI%20Components/dxActionSheet/1%20Configuration/target.md '/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/#target') property to specify this element.

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

##### Vue

    <template>
        <DxActionSheet ...
            :use-popover="true"
            target="#actionSheetTarget"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxActionSheet } from 'devextreme-vue/action-sheet';

    export default {
        components: {
            DxActionSheet
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { ActionSheet } from 'devextreme-react/action-sheet';

    class App extends React.Component {
        render() {
            return (
                <ActionSheet ...
                    usePopover={true}
                    target="#actionSheetTarget"
                />
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Action_Sheet/PopoverMode/jQuery/iOS/"
}

#####See Also#####
- [ActionSheet - Customize Item Appearance](/concepts/05%20UI%20Components/ActionSheet/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/ActionSheet/Customize_Item_Appearance/')
- [ActionSheet API Reference](/api-reference/10%20UI%20Components/dxActionSheet '/Documentation/ApiReference/UI_Components/dxActionSheet/')
#include common-link-configurewidget

[tags]action sheet, actionSheet, display mode, target element
