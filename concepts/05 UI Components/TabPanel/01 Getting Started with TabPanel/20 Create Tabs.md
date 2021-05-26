To create tabs, specify the [items[]](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/) array. TabPanel generates a tab with a view for each item in this array. 

To configure an individual tab, specify a tab's [title](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#title). Use the [icon](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#icon) property to specify an image for a tab. The code below uses icons from the [DevExtreme icon library](/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library). You can also use the [badge](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#badge) property to create a badge with custom text:


---
##### jQuery  
    <!-- tab: index.js -->
    $(function(){   
        $("#tabPanel").dxTabPanel({
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

The code above produces the following output:

![DevExtreme TabPanel: Customized Tabs](/images/UiWidgets/tab-panel-getting-started-customized-tabs.png)

You can also use the [itemTitleTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTitleTemplate) property to specify a custom template for all tabs. **items**.[tabTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#tabTemplate) overrides the **itemTitleTemplate** property and allows you to specify a template for an individual tab. This approach is not shown in this tutorial but you can refer to the property descriptions for details.
