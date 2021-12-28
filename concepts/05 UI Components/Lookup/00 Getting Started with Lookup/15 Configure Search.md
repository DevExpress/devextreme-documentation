The Lookup allows users to search through the drop-down list items. To configure the search, set the following properties:

- [searchMode]()    
This property uses one of the two search modes: "contains" or "startswith".  

- [searchExpr]()    
You can specify the data source item field or several field values in an array to define the search criteria.

- [minSearchLength]()    
Specify the minimal search length with this property.

To disable the search, set the [searchEnabled]() property to **false**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            searchMode: "startswith",
            searchExpr: ['Assigned', 'Subject'],
            minSearchValue: 2
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        searchMode="startswith"
        [searchExpr]="['Assigned', 'Subject']"
        minSearchValue="2">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            search-mode="startswith"
            :searchExpr="['Assigned', 'Subject']"
            min-search-value="2"
        />
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const searchExpression = ['Assigned', 'Subject'];
    
    function App() {
        return (
            <{WidgetName} ...
                searchMode="startswith"
                searchExpr={searchExpression}
                minSearchValue="2"
            />
        );
    }
    export default App;

---
