---
id: GridBase.Options.onInitNewRow
type: function(e)
default: null
EventForAction: GridBase.initNewRow
---
---
##### shortDescription
A function that is executed before a new row is added to the UI component.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The data of the inserted row; initially empty.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.promise): Promise<void>
Assign a Promise to this field to perform an asynchronous operation, such as a request to a server.

---
You can use this function to populate a new row with data. Add fields to the **data** object that correspond to the [data source](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') object's fields. Note that the **data** object can omit some fields from the data source object. Add only those fields that should initialize specific cells of a new row.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowEditingAndEditingEvents/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/RowEditing/",
    name: "TreeList"
}

In the following code, the **onInitNewRow** function is used to provide default values for the new row's `ID`, `hireDate`, and `position` cells. The **promise** parameter is used to obtain values for the `ID` and `position` cell values asynchronously:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: [{
                ID: 1,
                hireDate: 1491821760000,
                position: "CTO"
            }, // ...
            ],
            columns: [ "ID", {
                dataField: "hireDate",
                dataType: "date"
            }, "position" ],
            onInitNewRow: function(e) {
                e.data.hireDate = new Date();
                e.promise = getDefaultData().done(function(data) {
                    e.data.ID = data.ID;
                    e.data.position = data.Position;
                });
            }
        });
        function getDefaultData() {
            var promise = $.ajax({
                // The URL returns { ID: 100, Position: "Programmer" }
                url: "https://www.mywebsite.com/api/getDefaultData", 
                dataType: "json"
            });
            return promise;
        } 
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [dataSource]="employees"
        (onInitNewRow)="onInitNewRow($event)">
        <dxi-column dataField="ID"></dxi-column>
        <dxi-column dataField="hireDate" dataType="date"></dxi-column>
        <dxi-column dataField="position"></dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        employees = [{
            ID: 1,
            hireDate: 1491821760000,
            position: "CTO"
        }, // ...
        ];
        onInitNewRow(e) {
            e.data.hireDate = new Date();
            e.promise = this.getDefaultData().then((data: any) => {
                e.data.ID = data.ID;
                e.data.position = data.Position;
            });
        }
        getDefaultData() {
            return this.httpClient.get("https://www.mywebsite.com/api/getDefaultData")
                .toPromise()
                .then(data => {
                    // "data" is { ID: 100, Position: "Programmer" }
                    return data;
                }) 
                .catch(error => { throw 'Data Loading Error' });
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :data-source="employees"
            @init-new-row="initNewRow">
            <DxColumn data-field="ID" />
            <DxColumn data-field="hireDate" data-type="date" />
            <DxColumn data-field="position" />
        </Dx{WidgetName}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';
    import 'whatwg-fetch';

    const employees = [{
        ID: 1,
        hireDate: 1491821760000,
        position: "CTO"
    }, // ...
    ];

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        data() {
            employees
        },
        methods: {
            initNewRow(e) {
                e.data.hireDate = new Date();
                e.promise = this.getDefaultData().then(data => {
                    e.data.ID = data.ID;
                    e.data.position = data.Position;
                });
            }
            getDefaultData() {
                return fetch("https://www.mywebsite.com/api/getDefaultData")
                    .then(response => response.json())
                    .then((data) => {
                        // "data" is { ID: 100, Position: "Programmer" }
                        return data;
                    })
                    .catch(() => { throw 'Data Loading Error' });
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';
    import 'whatwg-fetch';

    const employees = [{
        ID: 1,
        hireDate: 1491821760000,
        position: "CTO"
    }, // ...
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.onInitNewRow = this.onInitNewRow.bind(this);
            this.getDefaultData = this.getDefaultData.bind(this);
        }

        onInitNewRow(e) {
            e.promise = this.getDefaultData().then(data => {
                e.data.ID = data.ID;
                e.data.position = data.Position;
            });
            e.data.hireDate = new Date();
        }

        getDefaultData() {
            return fetch("https://www.mywebsite.com/api/getDefaultData")
                .then(response => response.json())
                .then((data) => {
                    // "data" is { ID: 100, Position: "Programmer" }
                    return data;
                }) 
                .catch(() => { throw 'Data Loading Error' });
        }

        render() {
            return (
                <{WidgetName} ...
                    dataSource={employees}
                    onInitNewRow={this.onInitNewRow}>
                    <Column dataField="ID" />
                    <Column dataField="hireDate" dataType="date" />
                    <Column dataField="position" />
                </{WidgetName}>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .DataSource(new JS("employees"))
        .Columns(c => {
            c.Add().DataField("ID");
            c.Add().DataField("hireDate")
                .DataType(GridColumnDataType.Date);
            c.Add().DataField("position");
        })
        .OnInitNewRow("onInitNewRow")
    )
    <script type="text/javascript">
        var employees = [{
            ID: 1,
            hireDate: 1491821760000,
            position: "CTO"
        }, // ...
        ];
        function onInitNewRow(e) {
            e.data.hireDate = new Date();
            e.promise = getDefaultData().done(data => {
                e.data.ID = data.ID;
                e.data.position = data.Position;
            });
        }
        function getDefaultData() {
            let promise = $.ajax({
                // The URL returns { ID: 100, Position: "Programmer" }
                url: "https://www.mywebsite.com/api/getDefaultData",
                dataType: "json",
            });
            return promise;
        }
    </script>

---
