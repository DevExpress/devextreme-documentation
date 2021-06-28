To allow users to search through SelectBox values, set [searchEnabled](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchEnabled.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#searchEnabled') to **true**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#{widgetName}").dx{WidgetName}({
            // ...
            searchEnabled: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [searchEnabled]="true">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :search-enabled="true"
        />
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <{WidgetName} ...
                searchEnabled={true}
            />
        );
    }
    export default App;

---