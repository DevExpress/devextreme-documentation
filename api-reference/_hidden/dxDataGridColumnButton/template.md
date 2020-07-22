---
id: dxDataGridColumnButton.template
type: template
---
---
##### shortDescription
Specifies a custom button template.

##### param(cellElement): dxElement
The container of the cell that should display the button. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxDataGridColumn
The column's properties.

##### field(cellInfo.columnIndex): Number
The index of the cell's column. <br/> Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(cellInfo.component): dxDataGrid
The widget's instance.

##### field(cellInfo.data): Object
The data of the cell's row.

##### field(cellInfo.key): any
The row's key.

##### field(cellInfo.row): dxDataGridRowObject
The row's properties.

##### field(cellInfo.rowIndex): Number
The index of the cell's row. Begins with 0 on each page. Group rows are included. <br/> Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(cellInfo.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### return: String | Element | jQuery
A template name or container.

---

[important]

When you use a custom button template, the [onClick](/api-reference/_hidden/dxDataGridColumnButton/onClick.md '{basewidgetpath}/Configuration/columns/buttons/#onClick') function is ignored. Instead, handle the `click` event of the element placed inside the template:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [
                // ...    
                {
                    type: "buttons",
                    buttons: [{
                        template: function() {
                            var link = $("<a>").text("My command")
                                            .attr("href", "#");
                            link.on("click", function() {
                                console.log("My command was clicked");
                            });
                            return link;
                        }
                    }]
                }
            ]
            
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <!-- ... -->
        <dxi-column type="buttons">
            <dxi-button template="myCommand">
                <div *dxTemplate="let data of 'myCommand'">
                    <a href="#" (click)="logMyCommandClick()">My command</a>
                </div>
            </dxi-button>
        </dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        logMyCommandClick() {
            console.log('My command was clicked');
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <!-- ... -->
            <DxColumn type="buttons">
                <DxButton #default>
                    <a href="#" @click="logMyCommandClick">My command</a>
                </DxButton>
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn,
        DxButton
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxButton
        },
        methods: {
            logMyCommandClick() {
                console.log('My command was clicked');
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        Button
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.renderMyCommand = this.renderMyCommand.bind(this);
        }
        logMyCommandClick() {
            console.log('My command was clicked');
        }
        renderMyCommand() {
            return <a href="#" onClick={this.logMyCommandClick}>My command</a>
        }

        render() {
            return (
                <{WidgetName} ... >
                    {/* ... */}
                    <Column type="buttons">
                        <Button
                            render={this.renderMyCommand}
                        />
                    </Column>
                </{WidgetName}>
            );
        }
    }
    export default App;

---

[/important]

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')