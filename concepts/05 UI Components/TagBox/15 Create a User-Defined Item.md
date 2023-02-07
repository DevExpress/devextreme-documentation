A user can select existing values and add new values to the TagBox. To enable this feature, assign **true** to the [acceptCustomValue](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/acceptCustomValue.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#acceptCustomValue') property. 

Note that you need to implement the [onCustomItemCreating](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/onCustomItemCreating.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#onCustomItemCreating') function to create a new data source entry. You can specify DOM events after which the component calls this function. Use the [customItemCreateEvent](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/customItemCreateEvent.md '/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#customItemCreateEvent') property for this purpose. In addition to the event passed to this property, the item can also be created when users press the **Enter** key.

---
##### jQuery

    <!--HTML-->
    <div id="tagBoxContainer"></div>

    <!--JavaScript-->
    const tagBoxData = new DevExpress.data.DataSource({
    	store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ]
    });

    $("#tagBoxContainer").dxTagBox({
        dataSource: tagBoxData,
        valueExpr: 'id',
        displayExpr: 'firstName',
        acceptCustomValue: true,
        customItemCreateEvent: 'focusout',
        onCustomItemCreating: function(e){
            // Generates a new 'id'
            let nextId;
            tagBoxData.store().totalCount().done(count => {nextId = count + 1});
            // Creates a new entry
            e.customItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            tagBoxData.store().insert(e.customItem);
            // Reloads the data source
            tagBoxData.reload();
        }
    });

##### Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="firstName"
        [acceptCustomValue]="true"
        customItemCreateEvent="focusout"
        (onCustomItemCreating)="onCustomItemCreating($event)">
    </dx-tag-box>

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData: DataSource = new DataSource({
            store: [
                { id: 1, firstName: "Andrew" },
                { id: 2, firstName: "Nancy" },
                { id: 3, firstName: "Steven" }
            ]
        });
        onCustomItemCreating (e) {
            // Generates a new 'id'
            let nextId;
            tagBoxData.store().totalCount().done(count => {nextId = count + 1});
            // Creates a new entry
            e.customItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            this.tagBoxData.store().insert(e.customItem);
            // Reloads the data source
            this.tagBoxData.reload();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxTagBox
            :data-source="tagBoxData"
            :accept-custom-value="true"
            value-expr="id"
            display-expr="firstName"
            custom-item-create-event="focusout"
            @custom-item-creating="onCustomItemCreating"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTagBox } from 'devextreme-vue/tag-box';
    import DataSource from "devextreme/data/data_source";

    export default {
        components: {
            DxTagBox
        },
        data() {
            return {
                tagBoxData: new DataSource({
                    store: [
                        { id: 1, firstName: "Andrew" },
                        { id: 2, firstName: "Nancy" },
                        { id: 3, firstName: "Steven" }
                    ]
                });
            };
        },
        methods: {
            onCustomItemCreating(e) {
                // Generates a new 'id'
                let nextId;
                tagBoxData.store().totalCount().done(count => {nextId = count + 1});
                // Creates a new entry
                e.customItem = {
                    id: nextId,
                    firstName: e.text
                };
                // Adds the entry to the data source
                this.tagBoxData.store().insert(e.customItem);
                // Reloads the data source
                this.tagBoxData.reload();
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { TagBox } from 'devextreme-react/tag-box';
    import DataSource from "devextreme/data/data_source";

    const tagBoxData = new DataSource({
        store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ]
    });

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.onCustomItemCreating = this.onCustomItemCreating.bind(this);
        }

        onCustomItemCreating(e) {
            // Generates a new 'id'
            let nextId;
            tagBoxData.store().totalCount().done(count => {nextId = count + 1});
            // Creates a new entry
            e.customItem = {
                id: nextId,
                firstName: e.text
            };
            // Adds the entry to the data source
            tagBoxData.store().insert(e.customItem);
            // Reloads the data source
            tagBoxData.reload();
        }

        render() {
            return (
                <TagBox
                    dataSource={tagBoxData}
                    acceptCustomValue={true}
                    valueExpr="id"
                    displayExpr="firstName"
                    customItemCreateEvent="focusout"
                    onCustomItemCreating={this.onCustomItemCreating}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TagBox - Handle the Value Change Event](/Documentation/Guide/UI_Components/TagBox/Getting_Started_with_TagBox/#Handle_the_Value_Change_Event)
- [TagBox - Configure Search Parameters](/concepts/05%20UI%20Components/TagBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/UI_Components/TagBox/Configure_Search_Parameters/')
- [TagBox - Control the Behavior](/concepts/05%20UI%20Components/TagBox/03%20Control%20the%20Behavior.md '/Documentation/Guide/UI_Components/TagBox/Control_the_Behavior/')
- [TagBox API Reference](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview)

[tags]tagBox, tag box, editor, user-defined entry, user-defined item, custom entry, custom item, user-defined value, custom value
