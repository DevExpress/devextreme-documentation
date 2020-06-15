If you need to render different templates depending on a specific condition, define them inside the **Tooltip** container using the DevExtreme [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. You can switch the templates on the fly by changing the [contentTemplate](/api-reference/10%20UI%20Widgets/dxTooltip/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#contentTemplate') option's value.

---
##### jQuery

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <div id="buttonContainer"></div>
    <div id="tooltipContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

    <!--JavaScript-->$(function() {
        const tooltip = $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: 'template1'
        }).dxTooltip("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                const currentTemplate = tooltip.option("contentTemplate");
                tooltip.option("contentTemplate", currentTemplate == "template1" ? "template2" : "template1");
            } 
        });
    });

    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

##### Angular

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <dx-button
        id="buttonContainer"
        text="Change the Template"
        (onClick)="changeTemplate()">
    </dx-button>
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [contentTemplate]="currentTemplate">
        <div *dxTemplate="let data of 'template1'">
            <p>First template</p>
        </div>
        <div *dxTemplate="let data of 'template2'">
            <p>Second template</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        currentTemplate: string = "template1";
        changeTemplate () {
            this.currentTemplate = (this.currentTemplate == 'template1' ? 'template2' : 'template1')
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule,
            DxButtonModule
        ],
        // ...
    })
    
    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <img id="image" src="https://url/to/an/image" />
            <DxTooltip
                target="#image"
                show-event="dxhoverstart"
                hide-event="dxhoverend"
                :contentTemplate="currentTemplate">
                <template #template1>
                    <p>First template</p>
                </template>
                <template #template2>
                    <p>Second template</p>
                </template>
            </DxTooltip>
            <DxButton
                id="buttonContainer"
                text="Change the Template"
                @click="changeTemplate"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTooltip } from 'devextreme-vue/tooltip';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxTooltip,
            DxButton
        },
        data() {
            return {
                currentTemplate: "template1"
            };
        },
        methods: {
            changeTemplate () {
                this.currentTemplate = (this.currentTemplate === 'template1' ? 'template2' : 'template1');
            }
        }
    }
    </script>

    <style>
        #buttonContainer {
            display: block;
            width: 200px
        }
    </style>

##### React

    <!--tab: App.js-->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { Tooltip } from 'devextreme-react/tooltip';
    import { Button } from 'devextreme-react/button';

    const firstTemplate = () => {
        return (
            <p>First template</p>
        );
    }
    const secondTemplate = () => {
        return (
            <p>Second template</p>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                renderContent: firstTemplate
            };
            
            this.changeTemplate = this.changeTemplate.bind(this);
        }

        changeTemplate() {
            this.setState({
                renderContent: this.state.renderContent === firstTemplate ? secondTemplate : firstTemplate
            });
        }

        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Tooltip
                        target="#image"
                        showEvent="dxhoverstart"
                        hideEvent="dxhoverend"
                        contentRender={this.state.renderContent}
                    />
                    <Button
                        id="buttonContainer"
                        text="Change the Template"
                        onClick={this.changeTemplate}
                    />
                </div>
            );
        }
    }

    export default App;

    <!-- tab: styles.css -->
    #buttonContainer {
        display: block;
        width: 200px
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .ID("tooltip")
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(new TemplateName("template1"))
    )

    @using (Html.DevExtreme().NamedTemplate("template1")) {
        <p>First template</p>
    }
    @using (Html.DevExtreme().NamedTemplate("template2")) {
        <p>Second template</p>
    }

    <img id="image" src="https://url/to/an/image" />

    @(Html.DevExtreme().Button()
        .ID("changeTemplateButton")
        .Text("Change the Template")
        .OnClick("changeTemplateButton_click")
    )

    <script type="text/javascript">
        function changeTemplateButton_click() {
            var tooltip = $("#tooltip").dxTooltip("instance");
            var currentTemplate = tooltip.option("contentTemplate");
            tooltip.option("contentTemplate", currentTemplate.selector == "#template1" ? $("#template2") : $("#template1"));
        }
    </script>

    <!--CSS-->#changeTemplateButton {
        display: block;
        width: 200px
    }

---

#####See Also#####
- <a href="https://docs.devexpress.com/AspNetCore/401029/devextreme-based-controls/concepts/templates" target="_blank">ASP.NET MVC Controls - Templates</a>
- [Tooltip - Resize and Relocate](/concepts/05%20Widgets/Tooltip/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/')
- [Tooltip Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tooltip/Overview)
- [Tooltip API Reference](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Widgets/dxTooltip/')