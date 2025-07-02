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

If you want to define multiple editors and avoid inline declarations, combine all editor types into a [union](/Documentation/Guide/Common/TypeScript_Guides/Best_Practices/#Using_Unions_Instead_of_Base_Classes). Next, assign each of your **editorOptions** an object with this union type.

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDateBoxTypes } from 'devextreme-angular/ui/date-box';
    import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';

    type EditorProps = DxDateBoxTypes.Properties | DxTextBoxTypes.Properties;
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent {
        dateBoxOptions: EditorProps = { width: '100%', value: undefined };
        textBoxOptions: EditorProps = { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } };
    }

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item ...
            editorType="dxDateBox"
            [editorOptions]="dateBoxOptions">
        </dxi-item>
        <dxi-item ...
            editorType="dxTextBox"
            [editorOptions]="textBoxOptions">
        </dxi-item>
    </dx-form>

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

If you use TypeScript, want to define multiple editors, and avoid inline declarations, combine all editor types into a [union](/Documentation/Guide/Common/TypeScript_Guides/Best_Practices/#Using_Unions_Instead_of_Base_Classes). Next, assign each of your **editorOptions** an object with this union type.

    <!-- tab: App.vue -->
    <template>
    <DxForm>
        <DxItem editor-type="dxDateBox" :editor-options="dateBoxOptions" />
        <DxItem editor-type="dxTextBox" :editor-options="textBoxOptions" />
    </DxForm>
    </template>

    <script setup lang="ts">
    import DxForm, { DxItem } from "devextreme-vue/form";
    import type { DxDateBoxTypes } from "devextreme-vue/date-box";
    import type { DxTextBoxTypes } from "devextreme-vue/text-box";
    import 'devextreme/dist/css/dx.light.css';

    type EditorProps = DxDateBoxTypes.Properties | DxTextBoxTypes.Properties;

    const dateBoxOptions: EditorProps = { width: '100%', value: undefined };
    const textBoxOptions: EditorProps = { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } };
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

If you use TypeScript, want to define multiple editors, and avoid inline declarations, combine all editor types into a [union](/Documentation/Guide/Common/TypeScript_Guides/Best_Practices/#Using_Unions_Instead_of_Base_Classes). Next, assign each of your **editorOptions** an object with this union type.

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.light.css';
    import Form, { Item } from 'devextreme-react/form';
    import type { JSX } from 'react';
    import type { DateBoxTypes } from 'devextreme-react/date-box';
    import type { TextBoxTypes } from 'devextreme-react/text-box';

    type EditorProps = DateBoxTypes.Properties | TextBoxTypes.Properties;

    const dateBoxOptions: EditorProps = { width: '100%', value: undefined };
    const textBoxOptions: EditorProps = { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } }; 

    function App(): JSX.Element {
        return (
            <Form>
                <Item editorType="dxDateBox" editorOptions={dateBoxOptions} />
                <Item editorType="dxTextBox" editorOptions={textBoxOptions} />
            </Form>
        );
    }

    export default App;

---

[note] Some editor properties specified in **editorOptions** can be overwritten by Form settings - for instance, labels and placeholders. The `id` and `name` attributes of the [inputAttr](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/inputAttr.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#inputAttr') property are also overwritten. The Form generates these attributes automatically and uses them for addressing the DOM elements.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-display-htmleditor-in-form-editing-mode"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
