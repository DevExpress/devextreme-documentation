---
id: dxFormSimpleItem.editorOptions
type: any | undefined
default: undefined
---
---
##### shortDescription
Configures the form item's editor.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}

---
##### Angular

**editorOptions** should contain the properties of the DevExtreme editor specified in the [editorType](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType'). Because of this dependency, **editorOptions** cannot be typed and are not implemented as nested configuration components. Specify **editorOptions** with an object. Alternatively, you can configure a custom editor in a [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template').

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item ...
            editorType="dxDateBox"
            [editorOptions]="{ width: '100%' }">
        </dxi-item>
    </dx-form>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

**editorOptions** should contain the properties of the DevExtreme editor specified in the [editorType](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType'). Because of this dependency, **editorOptions** cannot be typed and are not implemented as nested configuration components. Specify **editorOptions** with an object. We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering. Alternatively, you can configure a custom editor in a [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template').

    <!-- tab: App.vue -->
    <template>
        <DxForm ... >
            <DxSimpleItem ...
                editor-type="dxDateBox"
                :editor-options="dateBoxOptions"
            />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxSimpleItem
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxSimpleItem
        },
        data() {
            return {
                dateBoxOptions: { width: '100%'}
            }
        }
    }
    </script>

##### React

**editorOptions** should contain the properties of the DevExtreme editor specified in the [editorType](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType'). Because of this dependency, **editorOptions** cannot be typed and are not implemented as nested configuration components. Specify **editorOptions** with an object. We recommend that you declare the object outside the configuration component to prevent possible issues caused by unnecessary re-rendering. Alternatively, you can configure a custom editor in a [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template').

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Form, {
        SimpleItem
    } from 'devextreme-react/form';

    class App extends React.Component {
        dateBoxOptions = { width: '100%' };

        render() {
            return (
                <Form ... >
                    <SimpleItem ...
                        editorType="dxDateBox"
                        editorOptions={this.dateBoxOptions}
                    />
                </Form>
            );
        }
    }
    export default App;

---

[note] If you set the `id` and `name` attributes using the [inputAttr](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/inputAttr.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#inputAttr') property, they will be overwritten. The Form generates these attributes automatically and uses them for addressing the DOM elements.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-display-htmleditor-in-form-editing-mode"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
