---
id: GridBaseColumn.dataType
acceptValues: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'
type: String
default: undefined
---
---
##### shortDescription
Casts column values to a specific data type.

---
If a data field provides values of one data type, but the widget should cast them to another, specify the proper type in this option. In the following code, values of the `ID` and `hireDate` fields are cast to numeric and date data types, respectively.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            dataSource: [{
                ID: "1",
                hireDate: 1491821760000
            }, // ...
            ],
            columns: [{
                dataField: "ID",
                dataType: "number"
            }, {
                dataField: "hireDate",
                dataType: "date"
            }]
        });
    })

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        [dataSource]="employees">
        <dxi-column
            dataField="ID"
            dataType="number">
        </dxi-column>
        <dxi-column 
            dataField="hireDate"
            dataType="date">
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employees = [{
            ID: "1",
            hireDate: 1491821760000
        }, // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module 
        ],
        // ...
    })

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        .DataSource(new JS("employees"))
        .Columns(c => {
            c.Add()
                .DataField("ID")
                .DataType(GridColumnDataType.Number);
            c.Add()
                .DataField("hireDate")
                .DataType(GridColumnDataType.Date);
        })
    )
    <script>
        var employees = [{
            ID: "1",
            hireDate: 1491821760000
        }, // ...
        ];
    </script>

#####Vue

    <template>
        <dx-{widget-name} ...
            :data-source="employees">
        <dx-column
            data-field="ID"
            data-type="number"
        />
        <dx-column
            data-field="hireDate"
            data-type="date"
        />
        </dx-{widget-name}>
    </template>
    <script>
    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    const employees = [{
        ID: '1',
        hireDate: 1491821760000
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

#####React

    import React from 'react';
    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

    const employees = [{
        ID: '1',
        hireDate: 1491821760000
    }, // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    dataSource={employees}>
                    <Column dataField="ID" dataType="number" />
                    <Column dataField="hireDate" dataType="date" />
                </{WidgetName}>
            );
        }
    }
    export default App;

---

[note] Date-time values stored as strings should have one of the following formats: `"yyyy/MM/dd"`, `"yyyy/MM/dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`. 

#include common-ref-enum with {
    enum: "`GridColumnDataType`",
    values: "`String`, `Number`, `Date`, `DateTime`, `Boolean`, and `Object`"
}

#####See Also#####
- [Data Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Data_Columns/')
