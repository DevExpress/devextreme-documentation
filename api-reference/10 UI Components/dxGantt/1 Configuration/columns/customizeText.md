---
##### shortDescription
Customizes the text displayed in column cells.

##### param(cellInfo): Object
Information on the current cell.

##### field(cellInfo.groupInterval): String | Number
This parameter is not in effect for the Gantt.

##### field(cellInfo.target): String
The UI element where the **customizeText** function was called: *"row"*, *"filterRow"*, or *"headerFilter"*.

##### field(cellInfo.value): String | Number | Date
The cell's raw value.

##### field(cellInfo.valueText): String
The [formatted](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#format) value converted to a string.

##### return: String
The text the cell should display.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#ganttContainer").dxGantt({
            // ...
            columns: [{
                dataField: "Miles",
                customizeText: function(cellInfo) {
                    return cellInfo.value + " mi";
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
    <dxi-column
        dataField="Miles"
        [customizeText]="customizeText"
    ></dxi-column>
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customizeText(cellInfo) {
            return cellInfo.value + " mi";
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    
    import { DxGanttModule } from 'devextreme-angular';
    
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxGanttModule
        ],
        providers: [
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxColumn
                data-field="Miles" 
                :customize-text="customizeText"
            />
        </DxGantt>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxGantt, DxColumn } from "devextreme-vue/gantt";
    
    export default {
        components: {
            DxGantt,
            DxColumn
        },
        methods: {
            customizeText(cellInfo) {
                return cellInfo.value + " mi";
            }
        }
    }
    </script>    

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';
    
    import Gantt, { Column } from "devextreme-react/gantt";
    
    class App extends React.Component {
        customizeText = (cellInfo) => {
            return cellInfo.value + " mi";
        }
        render() {
            return (
                <Gantt ... >
                    <Column dataField="Miles" customizeText={this.customizeText} />
                </Gantt>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        //...
        .Columns(columns => {
            columns.Add().DataField("Miles")
                .CustomizeText("customizeText");
        })
    )

    <script type="text/javascript">
        function customizeText(cellInfo) {
            return cellInfo.value + " mi";
        }
    </script>

---

[note]

- The specified text is not used to filter data. If it should be, specify the [calculateCellValue](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#calculateCellValue) function instead.

- The `this` keyword refers to the column's configuration.

[/note]

#####See Also#####
- **columns[]**.[calculateCellValue](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/columns/#calculateCellValue)