Usually, the data field that supplies Autocomplete with suggestions ([valueExpr](Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr)) is the same data field where users search text. If you use two different fields, do the following:

* Assign the field that supplies Autocomplete with suggestions to the [valueExpr](Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr) property.
* Assign the field for search queries to the [searchExpr](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchExpr) property.

Note that [searchExpr](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchExpr) also accepts arrays if you want to search by multiple fields.

The Autocomplete component can supply suggestions in two different modes: *'contains'* (default) and *'startswith'*. You can use the [searchMode](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchMode) property to change the mode.

When a user types the first character, Autocomplete displays suggestions. To increase the minimum number of typed characters, use the [minSearchLength](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#minSearchLength) property. To limit the maximum number of characters that a user can type in, use the [maxLength](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#maxLength) property. You can also specify the time interval before the Autocomplete component displays a suggestion after user input. Assign this time interval in milliseconds to the [searchTimeout](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchTimeout) property.

The following code example specifies the [searchTimeout](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchTimeout) and [maxLength](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#maxLength) properties:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#autocomplete").dxAutocomplete({
            // ...
            searchTimeout: 300,
            maxLength: 20
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-autocomplete ...
        [searchTimeout]="300"
        [maxLength]="20"
    >
    </dx-autocomplete>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAutocomplete ...
            :search-timeout="300"
            :max-length="20"
        >
        </DxAutocomplete>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        // ...
        return (
            <Autocomplete ...
                searchTimeout={300}
                maxLength={20}
            >
            </Autocomplete>
        );
    }

    export default App;

---