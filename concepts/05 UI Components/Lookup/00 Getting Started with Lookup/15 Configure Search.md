Lookup allows users to search through the drop-down list items. To configure the search, set the following properties:

- [searchMode](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchMode): *"contains"* | *"startswith"*     
Specifies a comparison operation used to search Lookup's items. 

- [searchExpr](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchExpr)    
Specifies the name of a data source item field or an expression whose value is compared to the search criteria.

- [minSearchLength](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#minSearchLength)    
Specifies the minimal number of characters that must be entered into the text box to begin a search.

To disable the search, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchEnabled) property to **false**.

In the following code, the **searchMode** property is set to *"contains"*. This mode allows users to find items that contain the search value. The **searchExpr** property is set to an array of two data fields, and users can search through both. The **minSearchValue** property indicates that the search begins only when users type in two or more characters.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            // ...
            searchMode: "contains",
            searchExpr: ['Assignee', 'Subject'],
            minSearchValue: 2
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup ...
        searchMode="contains"
        [searchExpr]="['Assignee', 'Subject']"
        [minSearchValue]="2">
    </dx-lookup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            search-mode="contains"
            :searchExpr="['Assignee', 'Subject']"
            :min-search-value="2"
        />
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const searchExpression = ['Assignee', 'Subject'];
    
    function App() {
        return (
            <Lookup ...
                searchMode="contains"
                searchExpr={searchExpression}
                minSearchValue={2}
            />
        );
    }
    export default App;

---
