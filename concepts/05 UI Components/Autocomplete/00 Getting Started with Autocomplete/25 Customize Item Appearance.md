To customize appearance of all Autocomplete suggestions, define an [itemTemplate](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#itemTemplate). To customize an individual suggestion, specify the [template](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#template) property of the item. Note that Angular and Vue use [custom templates](/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates) instead of the [template](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#template) property. In React, specify the [render](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#render) or [component](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#component) property.

If your data is grouped, you may want to customize the group headings. Define a [groupTemplate](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#groupTemplate) for that purpose.

You can also enable [wrapItemText](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#wrapItemText) if item text exceeds the drop-down list width to wrap the text.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#autocomplete").dxAutocomplete({
            // ...
            groupTemplate ({ key }) {
                return "Assigned to " + key;
            },
            itemTemplate ({ Subject }, index) {
                return index + 1 + '. ' + Subject;
            },
            wrapItemText: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-autocomplete ...
        groupTemplate="group"
        itemTemplate="item"
        [wrapItemText]="true"
    >
        <div *dxTemplate="let data of 'group'">
            {{ "Assigned to " + data.key }}
        </div>
        <div *dxTemplate="let item of 'item', let index=index">
            {{ index + 1 + ". " + item.Subject }}
        </div>
    </dx-autocomplete>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAutocomplete ...
            :wrap-item-text="true"
            group-template="group"
            item-template="item"
        >
            <template #group="{data}">
                {{ "Assigned to " + data.key }}
            </template>
            <template #item="{data, index}">
                {{ index + 1 + ". " + data.Subject }}
            </template>
        </DxAutocomplete>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    
    const groupRender = (e) => {
        return "Assigned to " + e.key;
    }

    const itemRender = (e, index) => {
        return index + 1 + ". " + e.Subject;
    }

    function App() { 
        // ...

        return (
            <Autocomplete ...
                groupRender={groupRender}
                itemRender={itemRender}
                wrapItemText={true}
            />
        );
    }

    export default App;

---