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
        $("#treeListContainer").dxTreeList({
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
    import { DxTreeListModule } from 'devextreme-angular';
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
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="fieldName"
            [sortingMethod]="sortStringsConsideringCulture">
        </dxi-column>
    </dx-tree-list>

---

When implementing the **sortingMethod** function, you can access the [column's configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') using the **this** keyword.

[note]The **sortingMethod**'s *value1* and *value2* are the values returned from the [calculateSortValue](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateSortValue') function if the latter is specified.