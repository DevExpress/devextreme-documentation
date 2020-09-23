If none of the available editors suit your requirements, you can define a custom one or even place anything you find useful instead. For this purpose, implement a custom template and pass it to the [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                picture: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
            },
            items: ["name", { 
                dataField: "notes",
                template: function (data, itemElement) {
                    itemElement.append("<div id='textAreaContainer'>")
                               .dxTextArea({
                                   value: data.component.option('formData')[data.dataField],
                                   onValueChanged: function(e) {
                                       data.component.updateData(data.dataField, e.value);
                                   }
                               });
                }
            }, {
                dataField: "picture",
                template: function (data, itemElement) {
                    itemElement.append("<img src='" + data.editorOptions.value + "'>");
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item 
            dataField="notes"
            [template]="'notesTemplate'">
        </dxi-item>
        <dxi-item 
            dataField="picture" 
            [template]="'pictureTemplate'">
        </dxi-item>
        <div *dxTemplate="let data of 'notesTemplate'">
            <dx-text-area [(value)]="employee.notes"></dx-text-area>
        </div>
        <div *dxTemplate="let data of 'pictureTemplate'">
            <img src="{{data.editorOptions.value}}">
        </div>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule, DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            picture: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
            notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxTextAreaModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm
            :form-data="employee">
            <DxSimpleItem
                data-field="name"
            />
            <DxSimpleItem
                data-field="notes"
                template="notes"
            />
            <DxSimpleItem
                data-field="picture"
                template="picture"
            />
            <template #notes>
                <DxTextArea
                    v-model:value="employee.notes"
                />
            </template>
            <template #picture="{ data }">
                <img :src="data.editorOptions.value">
            </template>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxSimpleItem
    } from 'devextreme-vue/form';
    import DxTextArea from 'devextreme-vue/text-area';

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxTextArea
        },
        data() {
            return {
                employee: {
                    name: "John Heart",
                    picture: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                    notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
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

    import Form, {
        SimpleItem
    } from 'devextreme-react/form';
    import TextArea from 'devextreme-react/text-area';

    const renderPicture = (data) => <img src={data.editorOptions.value} />

    class App extends React.Component {     
        constructor(props) {
            super(props);
            this.state = {
                 employee: {
                    name: "John Heart",
                    picture: "https://js.devexpress.com/Content/images/doc/20_2/PhoneJS/person2.png",
                    notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
                }       
            };
        }

        setNotes = (e) => {
            this.setState(prevState => ({
                employee: {
                    ...prevState.employee,
                    notes: e.value
                }
            }))
        }
        
        renderNotes = (data) => {
            return (
                <TextArea
                    value={this.state.employee.notes}
                    onValueChanged={this.setNotes}
                />
            );
        }

        render() {
            return (
                <Form
                    formData={this.state.employee}>
                    <SimpleItem dataField="name" />
                    <SimpleItem
                        dataField="notes"
                        render={this.renderNotes}
                    />
                    <SimpleItem
                        dataField="picture"
                        render={renderPicture}
                    />
                </Form>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/FormsAndMultiPurposeOverview/"
}
#include common-githubbutton with {
    url: "https://github.com/DevExpress-Examples/Form-Custom-items"
}

A simple item can be accompanied by a line of text that gives a hint, for example, of the values that this item accepts. To specify this text, use the [helpText](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/helpText.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#helpText') option. If filling an item is required, assign **true** to its [isRequired](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/isRequired.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired') option. In this case, a special mark appears near the item. For more information, see the [Additional Marks](/concepts/05%20Widgets/Form/15%20Configure%20Item%20Labels/10%20Additional%20Marks.md '/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Additional_Marks/') topic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                phone: "+1(360)684-1334"
            },
            items: [{ 
                dataField: "name",
                isRequired: true
            }, {
                dataField: "phone",
                helpText: "Example: +1(111)111-1111"
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name" [isRequired]="true"></dxi-item>
        <dxi-item dataField="phone" helpText="Example: +1(111)111-1111"></dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            phone: "+1(360)684-1334"
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
            :form-data="employee">
            <DxSimpleItem
                data-field="name"
                :is-required="true"
            />
            <DxSimpleItem
                data-field="phone"
                help-text="Example: +1(111)111-1111"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxSimpleItem
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxSimpleItem
        },
        data() {
            return {
                employee: {
                    name: "John Heart",
                    phone: "+1(360)684-1334"
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

    import Form, {
        SimpleItem
    } from 'devextreme-react/form';

    class App extends React.Component {     
        employee = {
            name: "John Heart",
            phone: "+1(360)684-1334"
        }  

        render() {
            return (
                <Form
                    formData={this.employee}>
                    <SimpleItem
                        dataField="name"
                        isRequired={true}
                    />
                    <SimpleItem
                        dataField="phone"
                        helpText="Example: +1(111)111-1111"
                    />
                </Form>
            );
        }
    }
    export default App;

---

You can modify automatically generated items using the [customizeItem](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/customizeItem.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#customizeItem') function. This function is called for each item before it is rendered. To access the item, use the function's parameter. Its structure mirrors the [Simple Item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/') structure, therefore, you can modify any option available for a simple item.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                email: "jheart@dx-email.com",
                phone: "+1(213) 555-9392"
            },
            customizeItem: function (item) {
                if(item.itemType == "simple") {
                    item.label = {
                        location: "top"
                    };
                    if(item.dataField === "email" || item.dataField === "phone") {
                        item.colSpan = 3;
                    }
                    if(item.dataField === "phone") {
                        item.helpText = "Example: +1 (111) 111-1111";
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [customizeItem]="form_customizeItem">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            email: "jheart@dx-email.com",
            phone: "+1(213) 555-9392"
        }
        form_customizeItem(item) {
            if(item.itemType == "simple") {
                item.label = {
                    location: "top"
                };
                if(item.dataField === "email" || item.dataField === "phone") {
                    item.colSpan = 3;
                }
                if(item.dataField === "phone") {
                    item.helpText = "Example: +1 (111) 111-1111";
                }
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
            :customize-item="customizeItem">
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm from 'devextreme-vue/form';

    export default {
        components: {
            DxForm
        },
        data() {
            return {
                employee: {
                    firstName: "John",
                    lastName: "Heart",
                    email: "jheart@dx-email.com",
                    phone: "+1(213) 555-9392"
                }
            }
        },
        methods: {
            customizeItem(item) {
                if(item.itemType == "simple") {
                    item.label = {
                        location: "top"
                    }
                    if(item.dataField === "email" || item.dataField === "phone") {
                        item.colSpan = 3;
                    }
                    if(item.dataField === "phone") {
                        item.helpText = "Example: +1 (111) 111-1111";
                    }
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

    import Form from 'devextreme-react/form';

    class App extends React.Component {     
        employee = {
            firstName: "John",
            lastName: "Heart",
            email: "jheart@dx-email.com",
            phone: "+1(213) 555-9392"
        }

        customizeItem(item) {
            if(item.itemType == "simple") {
                item.label = {
                    location: "top"
                }
                if(item.dataField === "email" || item.dataField === "phone") {
                    item.colSpan = 3;
                }
                if(item.dataField === "phone") {
                    item.helpText = "Example: +1 (111) 111-1111";
                }
            }
        }

        render() {
            return (
                <Form
                    formData={this.employee}
                    customizeItem={this.customizeItem}>
                </Form>
            );
        }
    }
    export default App;

---

[note]The **customizeItem** function is called for each item including [group](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/'), [tabbed](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/') and [empty](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/') items, although such items can be declared only in the [items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') array, and there is no need to customize them afterwards. Therefore, we recommend you to check the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#itemType') option to ensure that the item you are going to customize is indeed a simple item.

#####See Also#####
- [Form - Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/')
- [Form - Add an Empty Space Between Simple Items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/')
- [Form - Configure Item Labels](/concepts/05%20Widgets/Form/15%20Configure%20Item%20Labels/05%20Location%20and%20Alignment '/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')
