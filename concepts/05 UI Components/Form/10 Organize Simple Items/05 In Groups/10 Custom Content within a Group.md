The Form UI component allows you to place custom content, for example, an image, under the group caption.

---
##### jQuery

    <!--JavaScript-->
    $("#formContainer").dxForm({
        formData: {
            firstName: "John",
            lastName: "Heart",
            picture: "http://here/goes/the/picture.jpg"
        },
        colCount: 2,
        items: [{
            itemType: "group",
            caption: "Picture",
            template: function (data, itemElement) {
                $("<img>").attr("src", data.formData.picture)
                    .appendTo(itemElement)
            }
        }, {
            itemType: "group",
            caption: "Personal Data",
            items: ["firstName", "lastName"]
        }]
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item
            itemType="group"
            caption="Picture"
            [template]="'pictureTemplate'">
        </dxi-item>
        <dxi-item
            itemType="group"
            caption="Personal Data">
                <dxi-item dataField="firstName"></dxi-item>
                <dxi-item dataField="lastName"></dxi-item>
        </dxi-item>
        <div *dxTemplate="let data of 'pictureTemplate'">
            <img src="{{data.formData.picture}}">
        </div>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            picture: "http://here/goes/the/picture.jpg"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm :form-data="employee">
            <template #pictureTemplate="{ data }">
                <img :src="data.formData.picture"/>
            </template>
            <DxGroupItem
                caption="Picture"
                template="pictureTemplate" />
            <DxGroupItem caption="Personal Data">
                <DxSimpleItem data-field="firstName" />
                <DxSimpleItem data-field="lastName" />
            </DxGroupItem>
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        picture: 'http://here/goes/the/picture.jpg'
    };

    export default {
        components: {
            DxForm, DxGroupItem, DxSimpleItem
        },
        data() {
            return {
                employee
            };
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form, GroupItem, SimpleItem } from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        picture: 'http://here/goes/the/picture.jpg'
    };

    class App extends React.Component {
        render() {
            return (
                <Form formData={employee}>
                    <GroupItem
                        caption="Picture"
                        render={pictureRender} />
                    <GroupItem caption="Personal Data">
                        <SimpleItem dataField="firstName" />
                        <SimpleItem dataField="lastName" />
                    </GroupItem>
                </Form>
            );
        }
    }

    function pictureRender(data) {
        return (
            <img src={data.formData.picture}/>
        );
    }

    export default App;

---

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Columns/')
- [Form - Add an Empty Space Between Simple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')
