Buttons are configured by objects that can contain custom and [predefined fields](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/items/'). For instance, the `fontStyles` array in the following code has four data objects with one predefined field ([`icon`](/api-reference/_hidden/dxButtonGroupItem/icon.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/items/#icon')) and one custom field (`style`) each.

Assign the array to the [items](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/items/') option and use the [keyExpr](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#keyExpr') to specify `style` as the key field. We log the field's values into the console at a later step.

---
##### jQuery

    <!-- tab: index.js -->
    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    $(function() {
        $("#myButtonGroup").dxButtonGroup({
            items: fontStyles,
            keyExpr: "style",
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group
        [items]="fontStyles"
        keyExpr="style">
    </dx-button-group>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fontStyles: Array<{ icon: string, style: string }> = [{
            icon: "bold",
            style: "bold"
        }, {
            icon: "italic",
            style: "italic"
        }, {
            icon: "underline",
            style: "underline"
        }, {
            icon: "strike",
            style: "strike"
        }];
    }

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <dx-button-group
            :items="fontStyles"
            key-expr="style"
        />
    </template>

    <script>
    // ...
    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    export default {
        // ...
        data() {
            return {
                fontStyles
            }
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    class App extends React.Component {
        render() {
            return (
                <ButtonGroup
                    items={fontStyles}
                    keyExpr="style"
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().ButtonGroup()
        .KeyExpr("style")
        .Items(items => {
            items.Add().Icon("bold").Option("style", "bold");
            items.Add().Icon("italic").Option("style", "italic");
            items.Add().Icon("underline").Option("style", "underline");
            items.Add().Icon("strike").Option("style", "strike");
        })
    )

---

If you run the code, you should see a **ButtonGroup** that contains four buttons but nothing happens when you click any of them.