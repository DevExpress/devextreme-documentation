The Toolbar is a UI component containing items that usually manage screen content. Those items can be plain text or UI components.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview/"
}

The following code adds a simple Toolbar to your page. Three items are plain text and one is a [Button](/Documentation/Guide/UI_Components/Button/) UI component. 

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
            [options]="buttonOptions">
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
        buttonOptions = {
            type: 'back',
            text: 'Back'
        };
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
                :options="buttonOptions"
            />
            <DxItem
                text="Add"
                locate-in-menu="always"
            />
            <DxItem
                text="Change"
                locate-in-menu="always"
            />
            <DxItem
                text="Products"
                location="center"
            />
        </DxToolbar>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';

    export default {
        components: {
            DxToolbar,
            DxItem
        },
        data() {
            return {
                buttonOptions: {
                    type: 'back',
                    text: 'Back'
                }
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Toolbar, Item } from 'devextreme-react/toolbar';

    const buttonOptions = {
        type: 'back',
        text: 'Back'
    };

    class App extends React.Component {
        render() {
            return (
                <Toolbar>
                    <Item
                        widget="dxButton"
                        location="before"
                        options={buttonOptions}
                    />
                    <Item
                        text="Add"
                        locateInMenu="always"
                    />
                    <Item
                        text="Change"
                        locateInMenu="always"
                    />
                    <Item
                        text="Products"
                        location="center"
                    />
                </Toolbar>
            );
        }
    }

    export default App;

---

Note that field names in these data source items are [conventional](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/'). This provides a default tile appearance, which can be customized later. 

#####See Also#####
#include common-link-configurewidget
- [Toolbar - Specify Item Type](/concepts/05%20UI%20Components/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/UI_Components/Toolbar/Specify_Item_Type')
- [Toolbar - Specify Item Location](/concepts/05%20UI%20Components/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/UI_Components/Toolbar/Specify_Item_Location')
- [Toolbar - Customize Item Appearance](/concepts/05%20UI%20Components/Toolbar/15%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/Toolbar/Customize_Item_Appearance')
- [Toolbar API Reference](/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/')

[tags]dxtolbar, toolbar, collection container, collection UI component, overview