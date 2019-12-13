If an item should span more than one column, assign the required number to the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/colSpan.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#colSpan') option. Groups and tabs can also have individual **colSpan** values. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                notes: "John has been in the Audio/Video industry since 1990.",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            colCount: 2,
            items: ["firstName", "lastName", {
                dataField: "notes",
                colSpan: 2
            }, {
                itemType: "tabbed",
                colSpan: 2,
                tabs: [{
                    title: "Contacts",
                    items: ["phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="notes" [colSpan]="2"></dxi-item>
        <dxi-item itemType="tabbed" [colSpan]="2">
            <dxi-tab
                title="Contacts"
                [items]="['phone', 'email']">
            </dxi-tab>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            notes: "John has been in the Audio/Video industry since 1990.",
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