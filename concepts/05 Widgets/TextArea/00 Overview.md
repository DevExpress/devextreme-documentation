The **TextArea** is a widget that enables a user to enter and edit a multi-line text.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TextArea/Overview/"
}

The following code adds a simple **TextArea** with a [placeholder](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxTextArea/Configuration/#placeholder') to your page.

---
#####jQuery

    <!--HTML--><div id="textAreaContainer"></div>

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            placeholder: "Type a text here..."
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        placeholder="Type a text here...">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

By default, the **TextArea** checks the entered text for spelling errors. To disable this feature, assign **false** to the **spellcheck** option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            spellcheck: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        [spellcheck]="false">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

If an end user should _not_ be able to edit the text in the **TextArea**, assign **true** to the **readOnly** option. In this case, make sure to set the **value** option too.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            value: "The text that should not be edited",
            readOnly: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        value="The text that should not be edited"
        [readOnly]="true">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

#####See Also#####
#include common-link-configurewidget
- [TextArea - Adapt the Size of the Text Area](/concepts/05%20Widgets/TextArea/05%20Adapt%20the%20Size%20of%20the%20Text%20Area.md '/Documentation/Guide/Widgets/TextArea/Adapt_the_Size_of_the_Text_Area/')
- [TextArea - Handle the Value Change Event](/concepts/05%20Widgets/TextArea/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TextArea/Handle_the_Value_Change_Event/')
- [TextArea - Handle the Keyboard Events](/concepts/05%20Widgets/TextArea/13%20Handle%20the%20Keyboard%20Events.md '/Documentation/Guide/Widgets/TextArea/Handle_the_Keyboard_Events/')
- [TextArea - Limit the Text Length](/concepts/05%20Widgets/TextArea/15%20Limit%20the%20Text%20Length.md '/Documentation/Guide/Widgets/TextArea/Limit_the_Text_Length/')
- [TextArea API Reference](/api-reference/10%20UI%20Widgets/dxTextArea '/Documentation/ApiReference/UI_Widgets/dxTextArea/')
- [TextBox](/concepts/05%20Widgets/TextBox/00%20Overview.md '/Documentation/Guide/Widgets/TextBox/Overview/')

[tags]textArea, text area, editor, overview, spellcheck, read-only