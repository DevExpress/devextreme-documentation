---
id: dxFormButtonItem.buttonOptions
type: dxButton_Options
default: undefined
---
---
##### shortDescription
Configures the button.

---
See the [Button configuration](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/') for options that you can specify in this object.

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
                :buttonOptions="buttonOptions"
                itemType="button"
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
                        // Implement your logic here
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
            // Implement your logic here
        }
    };

    class App extends React.Component {
        render() {
            return (
                <Form>
                    <Item itemType="button" buttonOptions={buttonOptions} />
                </Form>
            );
        }
    }

    export default App;

---

#include widgets-config-object-option-note with {
    optionName: "buttonOptions"
}