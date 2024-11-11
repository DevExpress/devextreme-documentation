---
id: dxFormButtonItem.buttonOptions
type: dxButton_Options | undefined
default: undefined
---
---
##### shortDescription
Configures the button.

---
See the [Button configuration](/api-reference/10%20UI%20Components/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Components/dxButton/Configuration/') for properties that you can specify in this object.

---
##### jQuery

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

##### Angular

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...>
            <DxItem
                :button-options="buttonOptions"
                item-type="button"
            />
        </DxForm>
    </template>
    <script>
    import DxForm, { DxItem } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxItem
        },
        data() {
            return {
                buttonOptions: {
                    text: "Do Something",
                    type: "success",
                    onClick: function () {
                        // Handle the button click here
                    }
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Form, { Item } from 'devextreme-react/form';

    const buttonOptions = {
        text: "Do Something",
        type: "success",
        onClick: function () {
            // Handle the button click here
        }
    };

    const App = () => {
        return (
            <Form>
                <Item itemType="button" buttonOptions={buttonOptions} />
            </Form>
        );
    };    

    export default App;

---

#include widgets-config-object-option-note with {
    optionName: "buttonOptions"
}

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/",
    name: "Validation"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/UpdateItemsDynamically/",
    name: "Customize Fields at Runtime"
}
