The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview/"
}

The following code adds a simple **Toolbar** to your page. Three items are plain text and one is a [Button](/concepts/05%20Widgets/Button '/Documentation/Guide/Widgets/Button/') widget. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back'
                },
                location: 'before'
            }, {
                text: 'Add',
                locateInMenu: 'always'
            }, {
                text: 'Change',
                locateInMenu: 'always'
            }, {
                text: 'Products',
                location: 'center'
            }]
        });
    });

    <!--HTML-->
    <div id="toolbarContainer"></div>

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item
            widget="dxButton"
            location="before"
            [options]="{
                type: 'back',
                text: 'Back'
            }">
        </dxi-item>
        <dxi-item
            text="Add"
            locateInMenu="always">
        </dxi-item>
        <dxi-item
            text="Change"
            locateInMenu="always">
        </dxi-item>
        <dxi-item
            text="Products"
            location="center">
        </dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxToolbar>
            <DxItem
                widget="dxButton"
                location="before"
                :options="{
                    type: 'back',
                    text: 'Back'
                }">
            </DxItem>
            <DxItem
                text="Add"
                locate-in-menu="always">
            </DxItem>
            <DxItem
                text="Change"
                locate-in-menu="always">
            </DxItem>
            <DxItem
                text="Products"
                location="center">
            </DxItem>
        </DxToolbar>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';

    export default {
        components: {
            DxToolbar,
            DxItem
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Toolbar, Item } from 'devextreme-react/toolbar';

    class App extends React.Component {
        render() {
            return (
                <Toolbar>
                    <Item
                        widget="dxButton"
                        location="before"
                        options={{
                            type: 'back',
                            text: 'Back'
                        }}>
                    </Item>
                    <Item
                        text="Add"
                        locateInMenu="always">
                    </Item>
                    <Item
                        text="Change"
                        locateInMenu="always">
                    </Item>
                    <Item
                        text="Products"
                        location="center">
                    </Item>
                </Toolbar>
            );
        }
    }

    export default App;

---

Note that field names in these data source items are [conventional](/api-reference/10%20UI%20Widgets/dxToolbar/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/'). This provides a default tile appearance, which can be customized later. 

#####See Also#####
#include common-link-configurewidget
- [Toolbar - Specify Item Type](/concepts/05%20Widgets/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type')
- [Toolbar - Specify Item Location](/concepts/05%20Widgets/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location')
- [Toolbar - Customize Item Appearance](/concepts/05%20Widgets/Toolbar/15%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Toolbar/Customize_Item_Appearance')
- [Toolbar API Reference](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/')

[tags]toolbar, collection container, collection widget, overview