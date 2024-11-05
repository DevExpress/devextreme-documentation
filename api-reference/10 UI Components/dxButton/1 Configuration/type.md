---
id: dxButton.Options.type
type: Enums.ButtonType | String
default: 'normal'
---
---
##### shortDescription
Specifies the button type.

---
DevExtreme supplies the following button types:

![Button Types](/images/UiWidgets/Button_Types.png) 

You can also specify your own button type and define its CSS rules as shown in the example:

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        $("#button").dxButton({
            // ...
            type: "warning"
        });
    });

    <!--tab: index.css-->
    .dx-button.dx-button-warning {
        background-color: #ffc107;
    }

##### Angular

    <!--tab: app.component.html-->
    <dx-button ...
        type="warning"
    />

    <!--tab: app.component.css-->
    ::ng-deep .dx-button.dx-button-warning {
        background-color: #ffc107;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton ...
            type="warning"
        />
    </template>

    <script>
        // ...
    </script>

    <style>
        .dx-button.dx-button-warning {
            background-color: #ffc107;
        }
    </style>

##### React

    <!-- tab: App.js -->
    function App() {
        return (
            <Button ...
                type="warning" 
            />
        );
    };

    export default App;

    <!--tab: index.css-->
    .dx-button.dx-button-warning {
        background-color: #ffc107;
    }

---

Note that buttons have a white background when you move them to the [Toolbar](/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/'). We recommend that you use the *'normal'* type for such buttons, otherwise the button text is not visible. You can also define custom CSS rules to override the initial styles.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/"
}

#####See Also#####
- [stylingMode](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/stylingMode.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#stylingMode')