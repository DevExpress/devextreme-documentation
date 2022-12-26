A user can select existing values and add new values to the SelectBox. To enable this feature, assign **true** to the [acceptCustomValue](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/acceptCustomValue.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#acceptCustomValue') property. 

Note that you should implement the [onCustomItemCreating](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/onCustomItemCreating.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#onCustomItemCreating') function to create a new data source entry. You can specify DOM events after which the component calls this function. Use the [customItemCreateEvent](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#customItemCreateEvent) property for this purpose. Besides the event passed to this property, the item can also be created when users press the **Enter** key.

---
##### jQuery

    <!--HTML-->
    <div id="selectBoxContainer"></div>

    <!--JavaScript-->const selectBoxData = new DevExpress.data.DataSource({
        store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ]
    });

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'firstName',
            acceptCustomValue: true,
            customItemCreateEvent: 'focusout',
            onCustomItemCreating: function(e) {
                // Generates a new 'id'
                let nextId;
                selectBoxData.store().totalCount().done(count => {nextId = count + 1}); 
                // Creates a new entry
                e.customItem = { id: nextId, firstName: e.text };
                // Adds the entry to the data source
                selectBoxData.store().insert(e.customItem);
                // Reloads the data source
                selectBoxData.reload();
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = new DataSource({
            store: [
                { id: 1, firstName: "Andrew" },
                { id: 2, firstName: "Nancy" },
                { id: 3, firstName: "Steven" }
            ]
        });
        onCustomItemCreating (e) {
            // Generates a new 'id'
            let nextId;
            selectBoxData.store().totalCount().done(count => {nextId = count + 1});
            // Creates a new entry
            e.customItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            this.selectBoxData.store().insert(e.customItem);
            // Reloads the data source
            this.selectBoxData.reload();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="firstName"
        [acceptCustomValue]="true"
        customItemCreateEvent="focusout"
        (onCustomItemCreating)="onCustomItemCreating($event)">
    </dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            :accept-custom-value="true"
            display-expr="firstName"
            value-expr="id"
            custom-item-create-event="focusout"
            @custom-item-creating="customItemCreating"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';
    import DataSource from "devextreme/data/data_source";

    const selectBoxData = new DataSource({
        store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ],
        key: "id"
    }); 

    export default {
        components: {
            DxSelectBox
        },
        data() {
            return {
                selectBoxData
            }
        }
        methods: {
            customItemCreating(e) {
                // Generates a new 'id'
                let nextId;
                selectBoxData.store().totalCount().done(count => {nextId = count + 1});
                // Creates a new entry
                e.customItem = { id: nextId, firstName: e.text };
                // Adds the entry to the data source
                selectBoxData.store().insert(e.customItem);
                // Reloads the data source
                selectBoxData.reload();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';
    import DataSource from "devextreme/data/data_source";

    const selectBoxData = new DataSource({
        store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ],
        key: "id"
    });

    class App extends React.Component {
        customItemCreating(e) {
            // Generates a new 'id'
            let nextId;
            selectBoxData.store().totalCount().done(count => {nextId = count + 1});
            // Creates a new entry
            e.customItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            selectBoxData.store().insert(e.customItem);
            // Reloads the data source
            selectBoxData.reload();
        }
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData}
                    valueExpr="id"
                    displayExpr="firstName"
                    acceptCustomValue={true}
                    customItemCreateEvent="focusout"
                    onCustomItemCreating={this.customItemCreating}
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/SearchAndEditing/"
}

#####See Also#####
- [SelectBox - Configure Search Parameters](/concepts/05%20UI%20Components/SelectBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/UI_Components/SelectBox/Configure_Search_Parameters/')
- [SelectBox - Handle the Value Change Event](/concepts/05%20UI%20Components/SelectBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/SelectBox/Handle_the_Value_Change_Event/')
- [SelectBox API Reference](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]selectBox, select box, editor, user-defined entry, user-defined item, custom entry, custom item, user-defined value, custom value
