---
id: ColumnProperties.calculateDisplayValue
type: function(cardData)
---
---
##### shortDescription
Calculates custom display values for column fields. Requires specifying the [dataField](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') or [calculateFieldValue](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/calculateFieldValue.md '{basewidgetpath}/Configuration/columns/#calculateFieldValue') property.

##### param(cardData): Object
The data of the card to which the field belongs.

##### return: any
The value for the field to display.

##### context: Column
The `this` keyword refers to the column's configuration.

---
This property accepts the name of the [data source field](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') that supplies display values or a function that combines display values. Specify this function only if all data processing operations are [executed on the client](/api-reference/10%20UI%20Components/dxCardView/9%20Types/RemoteOperations '{basewidgetpath}/Configuration/remoteOperations/').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "countryID", // supplies values for editing
                calculateDisplayValue: function (rowData) { // combines display values
                    return rowData.capital + " (" + rowData.country + ")";
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-column
            dataField="countryID" <!-- supplies values for editing -->
            [calculateDisplayValue]="getCountryWithCapital"> <!-- combines display values -->
        </dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    
##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn       
                data-field="countryID" <!-- supplies values for editing -->
                :calculate-display-value="getCountryWithCapital" <!-- combines display values -->
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn 
        },
        methods: {
            getCountryWithCapital(rowData) {
                return rowData.capital + " (" + rowData.country + ")";
            }
        }
    }
    </script>  

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        // ...

        render() {
            return (
                <{WidgetName}>
                    <Column
                        dataField="countryID" <!-- supplies values for editing -->                 
                        calculateDisplayValue={this.getCountryWithCapital} <!-- combines display values -->
                    />
                </{WidgetName}>
            );
        }
        
        getCountryWithCapital(rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }
    }
    export default App;

---

The UI component utilizes the specified display values in sorting and searching.

Do not use this property to format text in cells. Instead, use the [format](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/format.md '{basewidgetpath}/Configuration/columns/#format'), [customizeText](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/customizeText.md '{basewidgetpath}/Configuration/columns/#customizeText'), or [fieldTemplate](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/fieldTemplate.md '{basewidgetpath}/Configuration/columns/#fieldTemplate') property.