The **Button** widget is a simple button that performs specified commands when a user clicks it.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-button-predefined_types"
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
    import { DxButtonModule } from 'devextreme-angular';
    import notify from 'devextreme/ui/notify';
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
        .on('click', clickHandler1)
        .on('click', clickHandler2);

The appearance of the **Button** is predefined by its [type](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type'). Find more on this and other properties that impact the widget appearance in the [Customize the Appearance](/concepts/05%20Widgets/Button/05%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/Button/Customize_the_Appearance/') article.

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Button - Customize the Appearance](/concepts/05%20Widgets/Button/05%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/Button/Customize_the_Appearance/')
- [Button - Validate and Submit an HTML form](/concepts/05%20Widgets/Button/10%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/Widgets/Button/Validate_and_Submit_an_HTML_Form/')
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/')

[tags]button, overview, click