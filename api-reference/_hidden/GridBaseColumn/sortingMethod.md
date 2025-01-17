---
id: GridBaseColumn.sortingMethod
type: function(value1, value2) | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom comparison function for sorting. Applies only when sorting is performed on the client.

##### param(value1): any
A value to be compared.

##### param(value2): any
A value to be compared.

##### return: Number
Specifies whether *value1* goes before *value2*.

##### context: GridBaseColumn
The `this` keyword refers to the column's configuration.

---
This function accepts two cell values and should return a number indicating their sort order:

- *Less than zero*     
*value1* goes before *value2*.
- *Zero*   
*value1* and *value2* remain unchanged relative to each other.
- *Greater than zero*   
*value1* goes after *value2*.

The string comparison is culture-insensitive by default. Use the following code to make it culture-sensitive:

---
#####jQuery 

    <!--JavaScript-->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "fieldName",
                sortingMethod: function (value1, value2) {
                    // Handling null values
                    if(!value1 && value2) return -1;
                    if(!value1 && !value2) return 0;
                    if(value1 && !value2) return 1;
                    // Determines whether two strings are equivalent in the current locale
                    return value1.localeCompare(value2);
                }
            }]
        });
    });

#####Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        sortStringsConsideringCulture (value1, value2) {
            // Handling null values
            if(!value1 && value2) return -1;
            if(!value1 && !value2) return 0;
            if(value1 && !value2) return 1;
            // Determines whether two strings are equivalent in the current locale
            return value1.localeCompare(value2);
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="fieldName"
            [sortingMethod]="sortStringsConsideringCulture">
        </dxi-column>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn
                data-field="fieldName"
                :sorting-method="sortStringsConsideringCulture"
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
        // ...
        methods: {
            sortStringsConsideringCulture (value1, value2) {
                // Handling null values
                if(!value1 && value2) return -1;
                if(!value1 && !value2) return 0;
                if(value1 && !value2) return 1;
                // Determines whether two strings are equivalent in the current locale
                return value1.localeCompare(value2);
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

    function sortStringsConsideringCulture (value1, value2) {
        // Handling null values
        if(!value1 && value2) return -1;
        if(!value1 && !value2) return 0;
        if(value1 && !value2) return 1;
        // Determines whether two strings are equivalent in the current locale
        return value1.localeCompare(value2);
    }

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column
                    dataField="fieldName"
                    sortingMethod={sortStringsConsideringCulture}
                />
            </{WidgetName}>
        );
    }

---

[note]The **sortingMethod**'s *value1* and *value2* are the values returned from the [calculateSortValue](/api-reference/_hidden/GridBaseColumn/calculateSortValue.md '{basewidgetpath}/Configuration/columns/#calculateSortValue') function if the latter is specified.
