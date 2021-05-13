To create tabs, specify the [items[]](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/) property. TabPanel generates a tab for each item in this array. The following code creates three tabs with [titles](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#title) and empty views:

![DevExtreme TabPanel: Empty Tabs](/images/UiWidgets/tab-panel-getting-started-empty-tabs.png)

---

##### jQuery  
    <!-- tab: index.js -->
    $(function(){   
        $("#tab-panel").dxTabPanel({
            items: [{ 
                title: "Employee",
                // ...
            }, {
                title: "Notes",
                // ...
            }, {
                title: "Role",
                // ...
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tab-panel>
        <dxi-item title="Employee">
            <!-- ... -->
        </dxi-item>
        <dxi-item title="Notes">
            <!-- ... -->
        </dxi-item>
        <dxi-item title="Role">
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
            <DxItem title="Employee">
                <!-- ... -->
            </DxItem>
            <DxItem title="Notes">
                <!-- ... -->
            </DxItem>
            <DxItem title="Role">
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
                <Item title="Employee">
                    {/* ... */}
                </Item>
                <Item title="Notes">
                    {/* ... */}
                </Item>
                <Item title="Role">
                    {/* ... */}
                </Item>
            </TabPanel>
        );
    }

    export default App;

---
