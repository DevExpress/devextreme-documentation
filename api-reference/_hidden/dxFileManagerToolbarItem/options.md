**options** should contain the properties of the DevExtreme UI component specified in the [widget](/api-reference/_hidden/dxFileManagerToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/items/#widget') property. Because of this dependency, **options** cannot be typed and are not implemented as nested configuration components in Angular, Vue, and React. In these frameworks, specify **options** with an object. We recommend that you declare the object outside the configuration component in Vue and React to prevent possible issues caused by unnecessary re-rendering.

Default toolbar items support the following options:

- **accessKey**
- **elementAttr**
- **height**
- **hint**
- **icon**
- **stylingMode**
- **tabIndex**
- **text**
- **width**

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            toolbar: {
                items: [
                    // Specifies a predefined item's name and optional settings
                    {
                        widget: "dxCheckBox",
                        options: { 
                            text: "Show IDs", 
                        }                        
                    },
                ]
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager ... >
        <dxo-toolbar>
            <dxi-item 
                widget="dxCheckBox"
                [options]="{ text: 'Show IDs' }">
            </dxi-item>
        </dxo-toolbar>
        ...
    </dx-file-manager>    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFileManagerModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFileManagerModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager ... >
            <DxToolbar>
                <DxItem ...
                    widget="dxCheckBox"
                    :options="checkBoxOptions"
                />
            </DxToolbar>
        </DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFileManager, {
        DxToolbar
    } from 'devextreme-vue/file-manager';

    export default {
        components: {
            DxFileManager,
            DxToolbar
        },
        data() {
            return {
                checkBoxOptions: { text: 'Show IDs' }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileManager, {
        Toolbar
    } from 'devextreme-react/file-manager';

    const App = () => {
        checkBoxOptions = { text: 'Show IDs' };

        return (
            <FileManager ... >
                <Toolbar>
                    <Item
                        widget="dxCheckBox"
                        options={this.checkBoxOptions}
                    />
                </Toolbar>
            </FileManager>
        );
    };

    export default App;

---

[note]If you use the Menu UI component as a toolbar item, the [adaptivityEnabled](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#adaptivityEnabled') property does not apply.