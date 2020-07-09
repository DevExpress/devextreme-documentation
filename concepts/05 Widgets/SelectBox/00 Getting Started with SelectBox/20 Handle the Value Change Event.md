Implement the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onValueChanged) function to handle the **SelectBox**'s value change. In this tutorial, the **onValueChanged** function logs the chosen value's *ID* and *Name*.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#selectBox").dxSelectBox({
            $("#selectBox").dxSelectBox({
                // ...
                onValueChanged: function(e) {
                    const item = data.filter(i => i.ID === e.value)[0];
                    console.log(item.ID + ": " + item.Name);
                }
            });
        });
    });

##### Angular

 <!-- tab: app.component.html -->
    <dx-select-box ...
        (onValueChanged)="handleValueChange($event)"
    >
    </dx-select-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import {Service} from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...

        onValueChanged(e){
            const item = this.data.filter(i => i.ID === e.value)[0];
            console.log(item.ID + ": " + item.Name);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox ...
            @value-changed="onValueChanged"            
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { DxSelectBox } from 'devextreme-vue/select-box';

    // ...

    export default {
        // ...
        methods: {
            onValueChanged(e){
                const item = data.filter(i => i.ID === e.value)[0];
                console.log(item.ID + ": " + item.Name);
            }
        },

    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { SelectBox } from 'devextreme-react/select-box';

    // ...

    class App extends React.Component {
        onValueChanged(e){
            const item = data.filter(i => i.ID === e.value)[0];
            console.log(item.ID + ": " + item.Name);
        }

        render() {
            return (
                <SelectBox ...
                    onValueChanged={this.onValueChanged}                   
                />
            );
        }
    }
    export default App;

---

Next, we will group the **SelectBox** items.