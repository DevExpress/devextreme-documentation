To specify label text, set the [label](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#label) property. If you want to enable floating labels, set the [labelMode](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#labelMode) property to *"floating"*. In this case, the label acts as a placeholder, but when the editor gets focus, the label moves to the position above the input field.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            label: "${{label}}",
            labelMode: "floating",
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        label="${{label}}"
        labelMode="floating">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            label="${{label}}"
            label-mode="floating"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        // ...
        render() {
            return (
                <{WidgetName} ...
                    label="${{label}}"
                    labelMode="floating"
                />
            );
        }
    }
    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorAppearanceVariants/"
}