The **Button** widget is a simple button that performs specified commands when a user clicks it.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/"
}

The following code adds a simple **Button** to your page.

---
##### jQuery

    <!--HTML--><div id="buttonContainer"></div>

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "OK",
            onClick: function (e) { 
                DevExpress.ui.notify("The OK button was clicked");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="OK"
        (onClick)="okClicked($event)">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    import notify from "devextreme/ui/notify";
    // ...
    export class AppComponent {
        okClicked (e) {
            notify("The OK button was clicked")
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
            @click="okClicked" />
    </template>
    <script>
    import DxButton from "devextreme-vue/button";
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxButton
        },
        methods: {
            okClicked: function(e) {
                notify("The OK button was clicked");
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';
    import notify from 'devextreme/ui/notify';

    class App extends React.Component {
        render() {
            return (
                <Button
                    text="OK"
                    onClick={this.okClicked}
                />
            );
        }

        okClicked(e) {
            notify('The OK button was clicked');
        }
    }

    export default App;


---

In the previous code, the [click](/api-reference/10%20UI%20Widgets/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click') event is handled using the [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') option. Alternatively, you can attach one or several handlers to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxButton/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var clickHandler1 = function (e) {
        // First handler of the "click" event
    };

    var clickHandler2 = function (e) {
        // Second handler of the "click" event
    };

    $("#buttonContainer").dxButton("instance")
        .on("click", clickHandler1)
        .on("click", clickHandler2);

The appearance of the **Button** is predefined by its [type](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type'). Find more on this and other properties that impact the widget appearance in the [Customize the Appearance](/concepts/05%20Widgets/Button/05%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/Button/Customize_the_Appearance/') article.

#####See Also#####
#include common-link-configurewidget
- [Button - Customize the Appearance](/concepts/05%20Widgets/Button/05%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/Button/Customize_the_Appearance/')
- [Button - Validate and Submit an HTML form](/concepts/05%20Widgets/Button/10%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/Widgets/Button/Validate_and_Submit_an_HTML_Form/')
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/')

[tags]button, overview, click