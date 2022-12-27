To correctly substitute displayed values with required values in a DataGrid/TreeList lookup column, follow these steps:

1. Define the [lookup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/).[dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/#dataSource).

2. Specify the [lookup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/).[valueExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/#valueExpr). It should match the [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/).[dataField](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField). Refer to the following topic for detailed explanation: [lookup - API Section](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/).

3. Use the [displayExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/#displayExpr) property to specify displayed values.

In the example below, `StateID` and `ID` store the same keys.

---
##### jQuery

    $('#gridContainer').dxDataGrid({
        // ...
        columns: [
            {
                dataField: 'StateID',
                lookup: {
                    dataSource: sampleData,
                    valueExpr: 'ID',
                    displayExpr: 'State'
                }
            }
        ]
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column 
            dataField="StateID"
        >
            <dxo-lookup 
                [dataSource]="sampleData" 
                valueExpr="ID"
                displayExpr="State"
            >
            </dxo-lookup>
        </dxi-column>
     </dx-data-grid>

##### Vue

    <!-- tab: App.vue-->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="StateID"
            >
                <DxLookup
                    :data-source="sampleData"
                    value-expr="ID"
                    display-expr="State"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        render (
            <React.Fragment>
                <DataGrid ... >
                    <Column
                        dataField="StateID"
                    >
                        <Lookup 
                            dataSource={sampleData}
                            valueExpr="ID" 
                            displayExpr="State"
                        />
                    </Column>
                </DataGrid>
            </React.Fragment>
        );
    }

    export default App;

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/WebAPIService/jQuery/Light/",
    name: "DataGrid Web API Service Demo"
}

#####See Also#####
- DataGrid/TreeList [lookup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/)