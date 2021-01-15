A **Toolbar** item may be plain text or a UI component. Text items should have the [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/'Configuration/items/#text') field specified.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                text: 'Delete',
                location: 'before'
            }, {
                text: 'Products',
                location: 'center'
            }, {
                text: 'Add',
                location: 'after'
            }]
        });
    });

    <!--HTML-->
    <div id="toolbarContainer"></div>

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item text="Delete" location="before"></dxi-item>
        <dxi-item text="Products" location="center"></dxi-item>
        <dxi-item text="Add" location="after"></dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxToolbar>
            <DxItem text="Delete" location="before"/>
            <DxItem text="Products" location="center"/>
            <DxItem text="Add" location="after"/>
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
                    <Item text="Delete" location="before"/>
                    <Item text="Products" location="center"/>
                    <Item text="Add" location="after"/>
                </Toolbar>
            );
        }
    }

    export default App;

---

Items that contain a UI component should have the [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/'Configuration/items/#widget') field specified. In addition, you need to declare the [options](/api-reference/_hidden/dxToolbarItem/options.md '/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/'Configuration/items/#options') object that will configure the UI component. For a full list of fields this object has, refer to the API reference of the UI component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back',
                    onClick: function() {
                        // ...
                    }
                },
                location: 'before'
            }, {
                widget: 'dxSelectBox',
                options: {
                    width: 140,
                    items: ['All', 'Family', 'Favorites'],
                    onItemClick: function(e) {
                        // ...
                    }
                },
                location: 'after'
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
            [options]="buttonOptions"
            location="before">
        </dxi-item>
        <dxi-item
            widget="dxSelectBox"
            [options]="selectBoxOptions"
            location="after">
        </dxi-item>
    </dx-toolbar>
    
    <!--TypeScript-->
    import { DxToolbarModule, DxButtonModule, DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonOptions = {
            type: 'back',
            text: 'Back',
            onClick: function() {
                // ...
            }
        };
        selectBoxOptions = {
            width: 140,
            items: ['All', 'Family', 'Favorites'],
            onItemClick: function(e) {
                // ...
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule,
            DxButtonModule,
            DxSelectBoxModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxToolbar>
            <DxItem
                widget="dxButton"
                :options="buttonOptions"
                location="before"
            />
            <DxItem
                widget="dxSelectBox"
                :options="selectBoxOptions"
                location="after"
            />
        </DxToolbar>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
    import 'devextreme-vue/select-box';

    export default {
        components: {
            DxToolbar,
            DxItem
        },
        data() {
            return {
                buttonOptions: {
                    type: 'back',
                    text: 'Back',
                    onClick: function() {
                        // ...
                    }
                },
                selectBoxOptions: {
                    width: 140,
                    items: ['All', 'Family', 'Favorites'],
                    onItemClick: function(e) {
                        // ...
                    }
                }
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Toolbar, Item } from 'devextreme-react/toolbar';
    import { SelectBox } from 'devextreme-react/select-box';

    const buttonOptions = {
        type: 'back',
        text: 'Back',
        onClick: function() {
            // ...
        } 
    }

    const selectBoxOptions = {
        width: 140,
        items: ['All', 'Family', 'Favorites'],
        onItemClick: function(e) {
            // ...
        }
    }

    class App extends React.Component {
        render() {
            return (
                <Toolbar>
                    <Item
                        widget="dxButton"
                        options={buttonOptions}
                        location="before"
                    />
                    <Item
                        widget="dxSelectBox"
                        options={selectBoxOptions}
                        location="after"
                    />
                </Toolbar>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Toolbar - Specify Item Location](/concepts/05%20UI%20Components/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/UI_Components/Toolbar/Specify_Item_Location')
- [Toolbar - Customize Item Appearance](/concepts/05%20UI%20Components/Toolbar/15%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/Toolbar/Customize_Item_Appearance')
- [Toolbar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview)
- [Toolbar API Reference](/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/')

[tags]toolbar, type, item type, UI component item
