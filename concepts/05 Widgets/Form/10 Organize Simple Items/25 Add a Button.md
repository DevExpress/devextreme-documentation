You can add a button that performs a custom action using a [button item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/ButtonItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/') by setting the [itemType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/ButtonItem/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/#itemType') option to *"button"*. Then, configure the button using the [buttonOptions](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/ButtonItem/buttonOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/#buttonOptions') object which can contain any [**Button** widget option](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/').

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

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Organize Simple Items in Groups](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/')
- [Organize Simple Items in Tabs](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/')
- [Organize Simple Items in Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/')
- [Add an Empty Space](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/20%20Add%20an%20Empty%20Space.md '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/')
