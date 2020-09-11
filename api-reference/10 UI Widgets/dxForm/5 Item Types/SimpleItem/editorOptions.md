---
id: dxFormSimpleItem.editorOptions
type: Object
default: undefined
---
---
##### shortDescription
Configures the form item's editor.

---
**editorOptions** should contain the options of the DevExtreme editor specified in the [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType'). Because of this dependency, **editorOptions** cannot be typed and are not implemented as nested configuration components in Angular, Vue, and React. In these frameworks, specify **editorOptions** with an object. We recommend that you declare the object outside the configuration component in Vue and React to prevent possible issues caused by unnecessary re-rendering. Alternatively, you can configure a custom editor in a [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template').

---
##### Angular

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
    import 'devextreme/dist/css/dx.common.css';
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

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
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

When using <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Controls</a> or <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Controls</a>, configure **editorOptions** as follows:

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(items => {
            items.AddSimple().DataField("EmployeeID")
                // Instead of TextBox here can be any other supported editor
                .Editor(e => e.TextBox()
                    .Placeholder("Type a text here...")
                    // ...
                    // other editor options go here
                )
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Form() _
        .FormData(Model.Data) _
        .Items(Sub(items)
            items.AddSimple().DataField("EmployeeID") _
                .Editor(Function(e)
                    ' Instead of TextBox here can be any other supported editor
                    Return e.TextBox() _
                        .Placeholder("Type a text here...") _
                        ' ...
                        ' other editor options go here
                End Function)
        End Sub)
    )

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/FormsAndMultiPurposeOverview/Mvc/Light/"
}

[note] If you set the `id` and `name` attributes using the [inputAttr](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/inputAttr.md '/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#inputAttr') option, they will be overwritten. The **Form** generates these attributes automatically and uses them for addressing the DOM elements.

#####See Also#####
- [Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
