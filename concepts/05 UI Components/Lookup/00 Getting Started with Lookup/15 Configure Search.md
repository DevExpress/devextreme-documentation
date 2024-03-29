Lookup allows users to search through the drop-down list. To configure the search, set the following properties:

- [searchMode](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchMode'): *"contains"* | *"startswith"*     
Specifies the comparison operation used to search Lookup items. 

- [searchExpr](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchExpr')    
Specifies data fields or an expression against which the component compares the search criteria.

- [minSearchLength](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#minSearchLength')    
Specifies the minimum number of characters that users should enter into the text box to begin a search.

- [showDataBeforeSearch](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/showDataBeforeSearch.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#showDataBeforeSearch')    
Specifies whether the UI component displays unfiltered values until users types the number of characters that exceed the **minSearchLength** property value.

To disable the search, set the [searchEnabled](/api-reference/10%20UI%20Components/dxLookup/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchEnabled') property to **false**.

In the following code, the **searchMode** property is set to *"contains"*. This mode allows users to find items that contain the search value. The **searchExpr** property is set to an array of two data fields to searches both fields. The **minSearchLength** property indicates that the search begins only when users type two or more characters. The **showDataBeforeSearch** property is set to **true**, and the component shows items before the search starts.

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
