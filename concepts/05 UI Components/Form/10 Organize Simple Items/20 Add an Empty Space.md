If you need to add an empty space between neighboring items, use an [empty item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/'). To create it, assign *"empty"* to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem/itemType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/#itemType') property. To define how many columns the empty item must span, specify the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem/colSpan.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/#colSpan') property. For the full list of available properties, visit the [Empty Item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/EmptyItem/') section.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            colCount: 2,
            items: [{
                itemType: "empty"
            }, "firstName", {
                itemType: "empty",
                colSpan: 2
            }, "lastName", "position"]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2">
        <dxi-item itemType="empty"></dxi-item>
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item itemType="empty" [colSpan]="2"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="position"></dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO"
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
        <DxForm
            :form-data="employee"
            :col-count="2">
            <DxEmptyItem />
            <DxSimpleItem data-field="firstName" />
            <DxEmptyItem :col-span="2" />
            <DxSimpleItem data-field="lastName" />
            <DxSimpleItem data-field="position" />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxEmptyItem, DxSimpleItem } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm, DxSimpleItem, DxEmptyItem
        },
        data() {
            return {
                employee: {
                    firstName: 'John',
                    lastName: 'Heart',
                    position: 'CEO'
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form, EmptyItem, SimpleItem } from 'devextreme-react/form';

    class App extends React.Component {
        employee = {
            firstName: 'John',
            lastName: 'Heart',
            position: 'CEO'
        }

        render() {
            return (
                <Form
                    formData={this.employee}
                    colCount={2}>
                    <EmptyItem />
                    <SimpleItem dataField="firstName" />
                    <EmptyItem colSpan={2} />
                    <SimpleItem dataField="lastName" />
                    <SimpleItem dataField="position" />
                </Form>
            );
        }
    }
    export default App;

---

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Columns/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')

[tags]form, empty item, empty space, colSpan