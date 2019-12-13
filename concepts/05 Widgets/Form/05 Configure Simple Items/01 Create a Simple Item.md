By default, the **Form** generates a simple item for each field of the [formData](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData') object. In case you need to create items for specific fields only, add the names of these fields to the [items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') array. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                officeNo: 901
            },
            items: ["firstName", "lastName", "position"]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [items]="['firstName', 'lastName', 'position']">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            officeNo: 901
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

A simple form item is a label-editor pair. The label is the field name that undergoes a slight conversion, for example, the field name *"firstName"* becomes the *"First Name"* label. For more information on configuring labels, visit the [Configure Item Labels](/concepts/05%20Widgets/Form/15%20Configure%20Item%20Labels/05%20Location%20and%20Alignment '/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/') section.

The editor that will be used in a particular simple item depends on the type of data that its field contains. However, you can force an item to use an editor of your choice. For this purpose, specify the item's [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType') option. To configure the editor, use the [editorOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions') object. Note that you also need to specify the [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField') option to bind the item to a **formData** field.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                hireDate: new Date(2012, 4, 13),
                notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
            },
            items: [ "name", {
                dataField: "hireDate",
                editorType: "dxCalendar",
                editorOptions: {
                    value: new Date()
                }
            }, {
                dataField: "notes",
                editorType: "dxTextArea",
                editorOptions: {
                    placeholder: "Add notes..."
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item dataField="hireDate"
            editorType="dxCalendar"
            [editorOptions]="{ value: new Date() }">
        </dxi-item>
        <dxi-item dataField="notes"
            editorType="dxTextArea"
            [editorOptions]="{ placeholder: 'Add notes...' }">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule, DxCalendarModule, DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            hireDate: new Date(2012, 4, 13),
            notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxCalendarModule,
            DxTextAreaModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}
