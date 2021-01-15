---
id: dxFormButtonItem.buttonOptions
type: dxButton_Options
default: undefined
---
---
##### shortDescription
Configures the button.

---
See the [Button configuration](/api-reference/10%20UI%20Components/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Components/dxButton/Configuration/') for options that you can specify in this object.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "button",
                buttonOptions: {
                    text: "Do Something",
                    type: "success",
                    onClick: function () {
                        // Implement your logic here
                    }
                }
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-form ...>
        <dxi-item
            itemType="button"
            [buttonOptions]="buttonOptions">
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonOptions = {
            text: "Do Something",
            type: "success",
            onClick: function () {
                // Implement your logic here
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

#include widgets-config-object-option-note with {
    optionName: "buttonOptions"
}