---
id: GridBaseColumn.cssClass
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies a <a href="http://www.w3schools.com/cssref/sel_class.asp" target="_blank">CSS class</a> to be applied to the column.

---
In the following code, this property is assigned a `cell-highlighted` CSS class that customizes the `position` column's cell and header styles:

---
#####jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: [{
                ID: 1,
                position: "CTO"
            }, // ...
            ],
            columns: [ "ID", {
                dataField: "position",
                cssClass: "cell-highlighted"
            } ],
        });
    })
    <!-- tab: styles.css -->
    .dx-data-row .cell-highlighted {
        background-color: #e6e6e6;
    }

    .dx-header-row .cell-highlighted {
        color: gray;
        font-style: italic;
    }


#####Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [dataSource]="employees">
        <dxi-column dataField="ID"></dxi-column>
        <dxi-column dataField="position" cssClass="cell-highlighted"></dxi-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employees = [{
            ID: 1,
            position: "CTO"
        }, // ...
        ];
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
    
    <!-- tab: app.component.css -->
    ::ng-deep .dx-data-row .cell-highlighted {
        background-color: #e6e6e6;
    }

    ::ng-deep .dx-header-row .cell-highlighted {
        color: gray;
        font-style: italic;
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :data-source="employees">
            <DxColumn data-field="ID" />
            <DxColumn data-field="position" css-class="cell-highlighted" />
        </Dx{WidgetName}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    const employees = [{
        ID: 1,
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
        }
    };
    </script>
    <style>
    .dx-data-row .cell-highlighted {
        background-color: #e6e6e6;
    }

    .dx-header-row .cell-highlighted {
        color: gray;
        font-style: italic;
    }
    </style>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

    const employees = [{
        ID: 1,
        position: "CTO"
    }, // ...
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <{WidgetName} ...
                    dataSource={employees}>
                    <Column dataField="ID" />
                    <Column dataField="position" cssClass="cell-highlighted" />
                </{WidgetName}>
            );
        }
    }
    export default App;

    <!-- tab: styles.css -->
    .dx-data-row .cell-highlighted {
        background-color: #e6e6e6;
    }

    .dx-header-row .cell-highlighted {
        color: gray;
        font-style: italic;
    }


#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .DataSource(new JS("employees"))
        .Columns(c => {
            c.Add().DataField("ID");
            c.Add().DataField("position").CssClass("cell-highlighted");
        })
    )
    <script type="text/javascript">
        var employees = [{
            ID: 1,
            position: "CTO"
        }, // ...
        ];
    </script>

    <!-- tab: styles.css -->
    .dx-data-row .cell-highlighted {
        background-color: #e6e6e6;
    }

    .dx-header-row .cell-highlighted {
        color: gray;
        font-style: italic;
    }

---