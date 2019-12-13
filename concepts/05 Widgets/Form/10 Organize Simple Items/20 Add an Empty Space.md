If you need to add an empty space between neighboring items, use an [empty item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/'). To create it, assign *"empty"* to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/#itemType') option. To define how many columns the empty item must span, specify the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem/colSpan.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/#colSpan') option. For the full list of available options, visit the [Empty Item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/EmptyItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/') section.

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

---

#####See Also#####
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form - Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/')
- [Form - Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/')
- [Form - Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/GroupedFields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, empty item, empty space, colSpan