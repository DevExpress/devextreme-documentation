---
id: GridBaseColumn.dataType
type: Enums.DataType | undefined
default: undefined
---
---
##### shortDescription
Casts column values to a specific data type.

---
If a data field provides values of one data type, but the UI component should cast them to another, specify the proper type in this property. In the following code, values of the `ID` and `hireDate` fields are cast to numeric and date data types, respectively.

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
        <Dx{WidgetName} ...
            :data-source="employees">
            <DxColumn
                data-field="ID"
                data-type="number"
            />
            <DxColumn
                data-field="hireDate"
                data-type="date"
            />
        </Dx{WidgetName}>
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

#####See Also#####
- [Troubleshooting - Date String Handling Issues](/concepts/80%20Troubleshooting/10%20Date%20String%20Handling%20Issues/00%20Date%20String%20Handling%20Issues.md '/Documentation/Guide/Troubleshooting/Date_String_Handling_Issues/')
- [Data Columns](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_Types/Data_Columns/')
