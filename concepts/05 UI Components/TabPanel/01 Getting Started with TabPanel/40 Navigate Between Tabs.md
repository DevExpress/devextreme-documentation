Specify the following properties to configure navigation between tabs:

- [swipeEnabled](/api-reference/10%20UI%20Components/dxTabPanel/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled')      
Specifies whether users can switch between views with the swipe gesture.

- [loop](/api-reference/10%20UI%20Components/dxMultiView/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop')      
Specifies whether to loop views.

- [animationEnabled](/api-reference/10%20UI%20Components/dxTabPanel/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled')      
Specifies whether to animate the change of the current view.

- [selectedIndex](/api-reference/10%20UI%20Components/dxMultiView/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#selectedIndex')     
Specifies the index of the currently selected tab. Use this property to switch between tabs programmatically. In this tutorial, this property's value depends on the the RadioGroup's selected item (see `tabSwitcherRadioGroup`). 

---
##### jQuery  

    <!-- tab: index.js -->
    $(function(){   
        let tabPanel = $("#tabPanel").dxTabPanel({
            loop: true,
            animationEnabled: true,
            swipeEnabled: true,
            selectedIndex: 0,
            onSelectionChanged: function(e) {
                const selectedTab = e.addedItems[0].title;
                tabSwitcherRadioGroup.option("value", selectedTab);
            },
            // ...
        }).dxTabPanel("instance");

        let tabSwitcherRadioGroup = $("#radioGroup").dxRadioGroup({
            items: tabNames,
            value: tabNames[0],
            layout: "horizontal",
            onValueChanged: function(e) {
                const selectedTabIndex = tabNames.indexOf(e.value);
                tabPanel.option("selectedIndex", selectedTabIndex);
            }
        }).dxRadioGroup("instance");
    });

    const tabNames = ["Employee", "Notes", "Role"];
 

##### Angular

    <!-- tab: app.component.html -->
    <dx-tab-panel
        [loop]="true"
        [animationEnabled]="true"
        [swipeEnabled]="true"
        [(selectedIndex)]="selectedTabIndex">   
        <!-- ... -->
    </dx-tab-panel>

    <dx-radio-group
        [items]="tabNames"
        [value]="tabNames[selectedTabIndex]"
        layout="horizontal"
        (onValueChanged)="onValueChanged($event)">
    </dx-radio-group>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        // ...

        tabNames = ["Employee", "Notes", "Role"]

        selectedTabIndex = 0;

        onValueChanged(e){
            this.selectedTabIndex = this.tabNames.indexOf(e.value);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxTabPanel
                :loop="true"
                :animation-enabled="true" 
                :swipe-enabled="true"
                v-model:selected-index="selectedTabIndex">
                <!-- ... -->
            </DxTabPanel>

            <DxRadioGroup 
                :items="tabNames"
                :value="tabNames[selectedTabIndex]"
                layout="horizontal"
                @value-changed="onValueChanged"
            />
        </div>
    </template>

    <script>
        // ...
    export default {
        data() {
            // ...
            const tabNames = ['Employee', 'Notes', 'Role'];

            return {
                selectedTabIndex: 0,
                tabNames
            };
        },
        methods: {
            onValueChanged(e){
                this.selectedTabIndex = this.tabNames.indexOf(e.value);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from 'react';
    // ...

    const tabNames = ['Employee', 'Notes', 'Role'];

    const App = () => {
        const [selectedTabIndex, setSelectedTabIndex] = useState(0);
 
        const onRadioGroupValueChanged = useCallback((e) => {
            setSelectedTabIndex(tabNames.indexOf(e.value));
        }, []);

        const onTabSelectionChanged = useCallback((e) => {
            setSelectedTabIndex(tabNames.indexOf(e.addedItems[0].title));
        }, []);
        return (
            <div>
                <TabPanel
                    loop={true}
                    animationEnabled={true} 
                    swipeEnabled={true}
                    selectedIndex={selectedTabIndex}
                    onSelectionChanged={onTabSelectionChanged}>
                    {/* ... */}
                </TabPanel>

                <RadioGroup 
                    items={tabNames}
                    value={tabNames[selectedTabIndex]}
                    layout="horizontal"
                    onValueChanged={onRadioGroupValueChanged}
                />
            </div>
        );
    }

    export default App;

---

For further information on the TabPanel UI component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/)
* [API Reference](/api-reference/10%20UI%20Components/dxTabPanel '/Documentation/ApiReference/UI_Components/dxTabPanel/')
