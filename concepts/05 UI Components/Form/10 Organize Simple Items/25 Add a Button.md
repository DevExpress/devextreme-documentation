You can add a button that performs a custom action using a [button item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/ButtonItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/') by setting the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/ButtonItem/itemType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/#itemType') property to *"button"*. Then, configure the button using the [buttonOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/ButtonItem/buttonOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/#buttonOptions') object which can contain any [**Button** UI component property](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Components/dxButton/Configuration/').

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                email: "jheart@dx-email.com"
            },
            colCount: 2,
            items: [
                "name", 
                { itemType: "empty" }, 
                "email", 
                {
                    itemType: "button",
                    alignment: "left",
                    buttonOptions: {
                        text: "Send an Email",
                        onClick: function () {
                            // ...
                        }
                    }
                }
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="empty"></dxi-item>
        <dxi-item dataField="email"></dxi-item>
        <dxi-item 
            itemType="button" 
            alignment="left"
            [buttonOptions]="buttonOptions">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            email: "jheart@dx-email.com"
        }
        buttonOptions = {
            text: "Send an Email",
            onClick: function () {
                // ...
            }
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
            <DxSimpleItem data-field="name" />
            <DxEmptyItem />
            <DxSimpleItem data-field="email" />
            <DxButtonItem alignment="left">
                <DxButtonOptions
                    text="Send an Email"
                    :on-click="buttonClick" />
            </DxButtonItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxEmptyItem, DxSimpleItem, DxButtonItem, DxButtonOptions } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm, DxEmptyItem, DxSimpleItem, DxButtonItem, DxButtonOptions
        },
        data() {
            return {
                employee: {
                    name: 'John Heart',
                    email: 'jheart@dx-email.com'
                }
            }
        },
        methods: {
            buttonClick(e) {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form, EmptyItem, SimpleItem, ButtonItem, ButtonOptions } from 'devextreme-react/form';


    class App extends React.Component {
        constructor() {
            super();
            this.buttonClick = this.buttonClick.bind(this);
        }

        employee = {
            name: 'John Heart',
            email: 'jheart@dx-email.com'
        }

        render() {
            return (
                <Form
                    formData={this.employee}
                    colCount={2}>
                    <SimpleItem dataField="name" />
                    <EmptyItem />
                    <SimpleItem dataField="email" />
                    <ButtonItem alignment="left">
                        <ButtonOptions
                            text="Send an Email"
                            onClick={this.buttonClick} />
                    </ButtonItem>
                </Form>
            );
        }

        buttonClick(e) {
            // ...
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
- [Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/')
- [Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/')
- [Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Columns/')
- [Add an Empty Space](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/Add_an_Empty_Space/')
