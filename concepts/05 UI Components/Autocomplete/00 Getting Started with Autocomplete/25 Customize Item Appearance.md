To customize the appearance of all Autocomplete suggestions, define an [item template](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#itemTemplate'). In React, implement the [itemRender](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/itemRender.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#itemRender') or [itemComponent](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/itemComponent.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#itemComponent') function. To customize an individual suggestion, specify the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#template') property of the item. Note that Angular and Vue use [custom templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') instead of the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#template') property. In React, specify the [render](/api-reference/_hidden/CollectionWidgetItem/render.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#render') or [component](/api-reference/_hidden/CollectionWidgetItem/component.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#component') property.

If your data is grouped, you may want to customize the group headings. Define a [group template](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#groupTemplate') for that purpose. In React, implement the [groupRender](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/groupRender.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#groupRender') or [groupComponent](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/groupComponent.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#groupComponent') function.

You can also enable [wrapItemText](/api-reference/10%20UI%20Components/dxDropDownList/1%20Configuration/wrapItemText.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#wrapItemText') if item text exceeds the drop-down list width to wrap the text.

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