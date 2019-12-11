The **Button** widget provides five predefined appearances controlled by the [type](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type') option. The **type** can be *"normal"*, *"default"*, *"back"*, *"danger"* or *"success"*. Choose the proper type depending on the commands that the **Button** performs.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "default", // or "normal" | "back" | "danger" | "success"
            text: "Delete",
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Delete"
        (onClick)="foo($event)"
        type="default"> <!-- or "normal" | "back" | "danger" | "success" -->
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <dx-button
            text="Click me"
            @click="foo"
            type="default" /> <!-- or "normal" | "back" | "danger" | "success" -->
    </template>
    <script>
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxButton
        },
        methods: {
            foo: function(e) {
                // ...
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <Button
                    type="default"
                    text="Delete"
                    onClick={this.foo}
                />
            );
        }

        foo(e) {
            // ...
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/"
}

Apart from plain text, the **Button** can display an icon. DevExtreme provides [built-in icons](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library') that change their appearance depending on the platform. Alternatively, you can [use an external icon library](/concepts/60%20Themes%20and%20Styles/30%20Icons/50%20External%20Icon%20Libraries.md '/Documentation/Guide/Themes_and_Styles/Icons/#External_Icon_Libraries') or [standalone icons](/concepts/60%20Themes%20and%20Styles/30%20Icons/40%20Custom%20Images%20as%20Icons.md '/Documentation/Guide/Themes_and_Styles/Icons/#Custom_Images_as_Icons'). To specify the icon, set the [icon](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger",
            text: "Delete",
            icon: "remove",
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Delete"
        (onClick)="foo($event)"
        type="danger"
        icon="remove">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <dx-button
            text="Delete"
            @click="foo"
            type="danger"
            icon="remove" />
    </template>
    <script>
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxButton
        },
        methods: {
            foo: function(e) {
                // ...
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <Button
                    type="danger"
                    text="Delete"
                    icon="remove"
                    onClick={this.foo}
                />
            );
        }

        foo(e) {
            // ...
        }
    }

    export default App;


---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/"
}

If you need to define the **Button** content completely, implement a template for it using the [template](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template') option as shown in the following example.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            text: "Refresh",
            template: function (e) {
                return $("<i />").text(e.buttonData.text)
                                 .css("color", "green");
            },
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Refresh"
        (onClick)="foo($event)"
        [template]="'buttonTemplate'">
        <i *dxTemplate="let buttonData of 'buttonTemplate'" style="color:green">
            {{buttonData.text}}
        </i> 
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <dx-button
            text="Refresh"
            @click="foo"
            template="buttonTemplate">
            <i
                slot="buttonTemplate"
                slot-scope="{ data }"
                style="color: green">
                {{ data.text }}
            </i>
        </dx-button>
    </template>
    <script>
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxButton
        },
        methods: {
            foo: function(e) {
                // ...
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';

    const renderButton = (buttonData) => {
        return (
            <i style={{ color: 'green' }}>{buttonData.text}</i>
        );
    }

    class App extends React.PureComponent {
        render() {
            return (
                <Button
                    text="Refresh"
                    onClick={this.foo}
                    render={renderButton}
                />
            );
        }

        foo(e) {
            // ...
        }
    }

    export default App;


---
    
#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/')

[tags]button, appearance, customize, templates, type, icon