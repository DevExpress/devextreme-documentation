Usually, the data field that supplies Autocomplete with suggestions ([valueExpr](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/valueExpr.md 'Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr')) is the same data field where users search text. If you use two different fields, do the following:

* Assign the field that supplies Autocomplete with suggestions to the [valueExpr](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/valueExpr.md 'Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr') property.
* Assign the field for search queries to the [searchExpr](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchExpr') property.

Note that [searchExpr](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchExpr.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchExpr') also accepts arrays if you want to search by multiple fields.

The Autocomplete component can supply suggestions in two different modes: *'contains'* (default) and *'startswith'*. You can use the [searchMode](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchMode.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchMode') property to change the mode.

When a user types the first character, Autocomplete displays suggestions. To increase the minimum number of typed characters, use the [minSearchLength](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/minSearchLength.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#minSearchLength') property. To limit the maximum number of characters that a user can type in, use the [maxLength](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/maxLength.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#maxLength') property. You can also specify the time interval before the Autocomplete component displays a suggestion after user input. Assign this time interval in milliseconds to the [searchTimeout](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchTimeout') property.

The following code example specifies the [searchTimeout](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/searchTimeout.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#searchTimeout') and [maxLength](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/maxLength.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#maxLength') properties:

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