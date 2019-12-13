In the context of the **Form** widget, a group is called ["group item"](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/'). A group item can contain [simple items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/'), other groups, [tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/') or [empty items](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/'). To create a group item, assign *"group"* to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#itemType') option. Items nested in the group are configured in the [items](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#items') array. To add a caption to the group, specify the [caption](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/caption.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#caption') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: [{
                itemType: "group",
                caption: "Personal Data",
                items: ["firstName", "lastName", "position"]
            }, {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item
            itemType="group"
            caption="Personal Data">
                <dxi-item dataField="firstName"></dxi-item>
                <dxi-item dataField="lastName"></dxi-item>
                <dxi-item dataField="position"></dxi-item>
        </dxi-item>
        <dxi-item
            itemType="group"
            caption="Contacts">
                <dxi-item dataField="phone"></dxi-item>
                <dxi-item dataField="email"></dxi-item>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields/"
}
