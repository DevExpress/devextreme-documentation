The previous topic shows how to embed the List component into the DropDownBox' drop-down field. To implement a scenario where selected in the List values appear in the DropDownBox' text field, do the following:

1. Bind the same data source to the List and DropDownBox. This tutorial uses a basic array as a data source.

2. Specify the [selectionMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode) property in the List that enables selection.

3. Implement the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxList/Configuration/#onSelectionChanged) event handler. In this handler, pass the selected value to the DropDownBox [value](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#value) option.

If you want to implement different scenarios, like bind the DropDownBox and the embedded element to different data sources, or more complex data sources, or select the initial value, refer to the following article: [Synchronize with the Embedded Element](/Documentation/Guide/UI_Components/DropDownBox/Synchronize_with_the_Embedded_Element/)

---
##### jQuery

    <!-- tab: index.js -->
    // ...
    $(function() {
        $("#drop-down-box").dxDropDownBox({
            dataSource,
            contentTemplate: function(e) {
                const $list = $("<div>").dxList({
                    // ...
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                        e.component.close();
                    },
                });
                // ...
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-box
        [dataSource]="dataSource" 
        [(value)]="selectedFruit" 
        [(opened)]="isDropDownBoxOpened"
    >
        <dx-list ...
            selectionMode="single" 
            (onSelectionChanged)="changeDropDownBoxValue($event)"
        >
        </dx-list>
    </dx-drop-down-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        selectedFruit = '';
        isDropDownBoxOpened = false;
        
        changeDropDownBoxValue (args: { addedItems: string[]; }) {
            this.selectedFruit = args.addedItems[0];
            this.isDropDownBoxOpened = false;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownBox
            :data-source="dataSource"
            v-model:value="selectedFruit"
            v-model:opened="isDropDownBoxOpened"
        >
            <DxList ...
                selection-mode="single"
                @selection-changed="changeDropDownBoxValue($event)"
            >
            </DxList>
        </DxDropDownBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDropDownBox } from 'devextreme-vue/drop-down-box';
    import DxList from "devextreme-vue/list";

    export default {
        components: {
            DxDropDownBox,
            DxList
        },
        data() {
            // ...
            return {
                // ...
                isDropDownBoxOpened: false,
                selectedFruit: '',
            }
        },
        methods: {
            // ...
            changeDropDownBoxValue(e) {
                this.selectedFruit = e.addedItems[0];
                this.isDropDownBoxOpened = false;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useRef, useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DropDownBox } from 'devextreme-react/drop-down-box';
    import { List } from "devextreme-react/list";

    // ...
    
    function App() {
        // ...
        const [selectedFruit, setSelectedFruit] = useState('');
        const dropDownBoxRef = useRef(null);
        const changeDropDownBoxValue = useCallback((arg) => {
            setSelectedFruit(arg.addedItems[0]);
            dropDownBoxRef.current.instance.close();
        }, []);
        const onValueChanged = useCallback((e) => {
            setSelectedFruit(e.value);
        }, []);
        return (
            <DropDownBox
                dataSource={dataSource}
                value={selectedFruit}
                ref={dropDownBoxRef}
                onValueChanged={onValueChanged}
            >
                <List ...
                    selectionMode="single"
                    onSelectionChanged={changeDropDownBoxValue}
                />
            </DropDownBox>
        );
    }

    export default App;

---
