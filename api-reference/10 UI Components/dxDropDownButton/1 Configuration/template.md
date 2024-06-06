---
id: dxDropDownButton.Options.template
type: template
---
---
##### shortDescription
Specifies a custom template for the base button in DropDownButton.

##### param(data): Object
The button's data.

##### field(data.icon): String
The button's icon.

##### field(data.text): String
The button's text.

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "button content" }

##### return: String | Element | jQuery
The template name or the template's container element.

---
The following code sample creates a DropDownButton with multiline text in the base button.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
             height: "auto",
            width: "auto",
            icon: 'todo',
            text: 'Done',
            template: (data, $element) => {
                $(`<span class="dx-icon-${data.icon} dx-icon"></span>`).appendTo($element);
                const $textContainer = $('<div class="text-container">').appendTo($element);
                $(`<div class='status'>${data.text}</div>`).appendTo($textContainer);
                $(`<div class='additional-status'>Or not done</div>`).appendTo($textContainer);
                $(`<span class="dx-icon-spindown dx-icon"></span>`).appendTo($element);
            },
        });
    });

    <!-- tab: index.css -->
    .text-container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1;
    }

    .additional-status {
        color: lightgray;
    }

    .dx-icon-spindown:before {
        padding-left: 32px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button
        icon="todo"
        text="Done"
        height="auto"
        width="auto"
        template="button-template"
    >
        <div *dxTemplate="let data of 'button-template'">
            <span class="dx-icon-{{ data.icon }} dx-icon"></span>
            <div class="text-container">
            <div class="status">{{ data.text }}</div>
            <div class="additional-status">Or not done</div>
            </div>
            <span class="dx-icon-spindown dx-icon"></span>
        </div>
    </dx-drop-down-button>

    <!-- tab: app.component.css -->
    .text-container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1;
    }

    .additional-status {
        color: lightgray;
    }

    .dx-icon-spindown:before {
        padding-left: 32px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownButton
            icon="todo"
            text="Done"
            height="auto"
            width="auto"
            template="button-template"
        >
            <template #button-template="{ data }">
                <span :class="'dx-icon-' + data.icon + ' dx-icon'"></span>
                <div class="text-container">
                    <div class="status">{{ data.text }}</div>
                    <div class="additional-status">Or not done</div>
                </div>
                <span class="dx-icon-spindown dx-icon"></span>
            </template>
        </DxDropDownButton>
    </template>

    <script>
    // ...
    </script>

    <style>
    .text-container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1;
    }

    .additional-status {
        color: lightgray;
    }

    .dx-icon-spindown:before {
        padding-left: 32px;
    }
    </style>

##### React

    <!-- tab: App.js -->
    // ...
    const renderButton = (data) => {
        return (
            <React.Fragment>
                <span className={"dx-icon-" + data.icon + " dx-icon"}></span>
                <div className="text-container">
                    <div className="status">{data.text}</div>
                    <div className="additional-status">Or not done</div>
                </div>
                <span className="dx-icon-spindown dx-icon"></span>
            </React.Fragment>
        );
    };

    export default function App() {
        return (
            <Button
                icon="todo"
                text="Done"
                height="auto"
                width="auto"
                render={renderButton}
            />
        );
    }

    <!-- tab: styles.css -->
    .text-container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1;
    }

    .additional-status {
        color: lightgray;
    }

    .dx-icon-spindown:before {
        padding-left: 32px;
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownButton/Overview/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')