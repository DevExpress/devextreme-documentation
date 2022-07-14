Usually, the data field that supplies Autocomplete with suggestions ([valueExpr](Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr)) is the same data field that is searched for the typed text. If you use two different fields, assign the field that supplies Autocomplete with suggestions to the [valueExpr](Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr) property and the field to be searched to the [searchExpr](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchExpr) property. Note that [searchExpr](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchExpr) also accepts arrays if you want to search multiple fields.

The Autocomplete can supply suggestions in two different modes: *'contains'* (default) and *'startswith'*. You can use the [searchMode](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchMode) property to change the mode.

When a user types the first character, Autocomplete displays suggestions. To increase the number of characters that triggers suggestions, use the [minSearchLength](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#minSearchLength) property. To limit the number of characters that user can type in, use the [maxLength](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#maxLength) property. You can also specify the time interval Autocomplete should wait before it displays suggestions. Assign this time interval in milliseconds to the [searchTimeout](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchTimeout) property.

The following code specifies two search settings properties: [searchTimeout](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchTimeout) and [maxLength](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#maxLength).

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