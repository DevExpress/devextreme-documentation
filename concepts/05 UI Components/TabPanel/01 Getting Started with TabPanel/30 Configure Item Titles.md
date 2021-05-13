To configure titles for individual items, specify the image for a tab in the **items[]**.[icon](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#icon) property. Refer to this property's description to see the available icons. You can also use the [badge](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#badge) property to create a badge with custom text as shown in code below. This code produces the following output:

![DevExtreme TabPanel: Customized Tabs](/images/UiWidgets/tab-panel-getting-started-customized-tabs.png)

---
##### jQuery  
    <!-- tab: index.js -->
    $(function(){   
        $("#tab-panel").dxTabPanel({
            items: [{ 
                title: "Employee",
                icon: "floppy",
                // ...
            }, {
                title: "Notes",
                icon: "comment",
                // ...
            }, {
                title: "Role",
                icon: "isnotblank",
                badge: "new",
                // ...
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tab-panel>
        <dxi-item title="Employee" icon="floppy">
            <!-- ... -->
        </dxi-item>
        <dxi-item title="Notes" icon="comment">
            <!-- ... -->
        </dxi-item>
        <dxi-item title="Role" icon="isnotblank" badge="new">
            <!-- ... -->
        </dxi-item>
    </dx-tab-panel>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTabPanelModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTabPanelModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTabPanel>
            <DxItem title="Employee" icon="floppy">
                <!-- ... -->
            </DxItem>
            <DxItem title="Notes" icon="comment">
                <!-- ... -->
            </DxItem>
            <DxItem title="Role" icon="isnotblank" badge="new">
                <!-- ... -->
            </DxItem>
        </DxTabPanel>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel, { DxItem } from "devextreme-vue/tab-panel";

    export default {
        components: {
            DxTabPanel,
            DxItem
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TabPanel, { Item } from "devextreme-react/tab-panel";

    const App = () => {
        return (
            <TabPanel>
                <Item title="Employee" icon="floppy">
                    {/* ... */}
                </Item>
                <Item title="Notes" icon="comment">
                    {/* ... */}
                </Item>
                <Item title="Role" icon="isnotblank" badge="new">
                    {/* ... */}
                </Item>
            </TabPanel>
        );
    }

    export default App;

---

You can also use the [itemTitleTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTitleTemplate) property to specify a custom template for titles of all items. The **items**.[tabTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#tabTemplate) property allows you to specify a template for a separate item's title. This approach is not shown in this tutorial but you can refer to this property's description for details.






































