Lookup allows users to search through the drop-down list items. To configure the search, set the following properties:

- [searchMode](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchMode): *"contains"* | *"startswith"*     
Specifies a comparison operation used to search Lookup's items. 

- [searchExpr](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchExpr)    
Specifies the name of a data source item field or an expression whose value is compared to the search criteria.

- [minSearchLength](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#minSearchLength)    
Specifies the minimal number of characters that must be entered into the text box to begin a search.

- [showDataBeforeSearch](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#showDataBeforeSearch)    
Specifies whether or not the UI component displays unfiltered values until users types a number of characters exceeding the **minSearchLength** property value.

To disable the search, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchEnabled) property to **false**.

In the following code, the **searchMode** property is set to *"contains"*. This mode allows users to find items that contain the search value. The **searchExpr** property is set to an array of two data fields, and the component searches them both. The **minSearchLength** property indicates that the search begins only when users type in two or more characters. The **showDataBeforeSearch** property is set to **true**, and the component shows items before the search starts.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            // ...
            searchMode: "contains",
            searchExpr: ['Assignee', 'Subject'],
            minSearchLength: 2,
            showDataBeforeSearch: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-lookup ...
        searchMode="contains"
        [searchExpr]="['Assignee', 'Subject']"
        [minSearchLength]="2"
        [showDataBeforeSearch]="true">
    </dx-lookup>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup ...
            search-mode="contains"
            :search-expr="['Assignee', 'Subject']"
            :min-search-length="2"
            :show-data-before-search="true"
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
                minSearchLength={2}
                showDataBeforeSearch={true}
            />
        );
    }
    export default App;

---
