Items within a group can be organized in several columns. To specify the number of columns, use the [colCount](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#colCount') option. Note that the entire **Form** layout can also be organized in columns if the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount') option is declared on the root level. In this case, use the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/colSpan.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#colSpan') option to define how many general columns the group must span. 

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
            // Splits the Form layout in two columns
            colCount: 2,
            items: [{
                itemType: "group",
                caption: "Personal Data",
                // Makes this group span both general columns
                colSpan: 2,
                // Organizes items inside this group in three columns
                colCount: 3,
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
        [(formData)]="employee"
        [colCount]="2"> <!-- Splits the Form layout in two columns -->
        <dxi-item
            itemType="group"
            caption="Personal Data"
            [colSpan]="2" <!-- Makes this group span both general columns -->
            [colCount]="3"> <!-- Organizes items inside this group in three columns -->
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