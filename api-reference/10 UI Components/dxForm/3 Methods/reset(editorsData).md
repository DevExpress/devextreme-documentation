---
id: dxForm.reset(editorsData)
---
---
##### shortDescription
Resets editor values. Every editor attempts to obtain its new value from the argument list. If an editor is not included in the list, that editor resets to its initial value.

##### param(editorsData): Object
New values for editors.

---
This method sets the [isDirty](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/isDirty.md '{basewidgetpath}/Configuration/#isDirty') flag to `false`. You can use this method without arguments to reset the Form component to initial values.

---
##### jQuery

    <!--tab: index.js -->
    $(() => {
        const form = $('#form').dxForm({
            // ...
            items: [
                // ...
                {
                    itemType: 'button',
                    buttonOptions: {
                        // ...
                        onClick: () => {
                            form.reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
                        },
                    }
                }
            ]
        }).dxForm('instance');
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxFormComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('formRef', { static: false }) form: DxFormComponent;

        resetButtonOptions = {
            // ...
            onClick: () => {
                this.form.instance.reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
            },
        };
    }

    <!-- tab: app.component.html -->
    <dx-form ... 
        #formRef
    >
        <dxi-item
          itemType="button"
          [buttonOptions]="resetButtonOptions"
        >
        </dxi-item>
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...
            :ref="formRef"
        >
            <DxButtonItem ...
                :button-options="resetButtonOptions"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxForm, { DxButtonItem }from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxButtonItem
        },

        data() {
            return {
                formRef,
                resetButtonOptions: {
                    // ...
                    onClick: () => {
                        this.form.reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
                    },
                }
            }
        },

        computed: {
            form: function() {
                return this.$refs[formRef].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import Form, { ButtonItem } from 'devextreme-react/form';
    import 'devextreme/dist/css/dx.light.css';

    const App = () => {
        const formRef = useRef(null);

        const resetButtonOptions = {
            // ...
            onClick: () => {
                this.formRef.current.instance().reset({'name': 'John Smith', 'email': 'johnsmith@example.com'});
            },
        };

        return (
            <Form ...
                ref={formRef}
            >
                <ButtonItem ...
                    buttonOptions={resetButtonOptions}
                />
            </Form>
        );
    };

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

##### See Also #####
- [clear()](/api-reference/10%20UI%20Components/dxForm/3%20Methods/clear().md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#clear')