The template implementation depends on the used framework or library. Examples of jQuery, Angular, and ASP.NET MVC are presented below. They show how to create a template consisting of static (text) and dynamic (the [Switch](/concepts/05%20Widgets/Switch/00%20Overview.md '/Documentation/Guide/Widgets/Switch/Overview/') widget) content. 

---
##### jQuery 

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <div id="popoverContainer"></div>

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Static Content"),
                    $("<div />").attr("id", "switchContainer").dxSwitch({
                        // The "Switch" widget is configured here
                    })
                )
            }
        });
    });

##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        contentTemplate="popoverContent">
        <div *dxTemplate="let data of 'popoverContent'">
            <p>Static content</p>
            <dx-switch>
                <!-- The "Switch" widget is configured here -->
            </dx-switch>
        </div>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule, DxSwitchModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule,
            DxSwitchModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <img id="image" src="https://url/to/an/image" />
            <DxPopover 
                target="#image"
                show-event="dxhoverstart">
                <template>
                    <p>Static content</p>
                    <dx-switch>
                        <!-- The "Switch" widget is configured here -->
                    </dx-switch>
                </template>
            </DxPopover>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopover } from 'devextreme-vue/popover';
    import { DxSwitch } from 'devextreme-vue/switch';

    export default {
        components: {
            DxPopover,
            DxSwitch
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popover } from 'devextreme-react/popover';
    import { Switch } from 'devextreme-react/switch';

    const renderContent = () => {
        return (
            <p>Static content</p>
            <Switch>
                {/* The "Switch" widget is configured here */}
            </Switch>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Popover
                        target="#image"
                        showEvent="dxhoverstart"
                        contentRender={renderContent}
                    />
                </div>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .ContentTemplate(@<text>
            <p>Static content</p>
            @(Html.DevExtreme().Switch()
                // The "Switch" widget is configured here
            )
        </text>)
    )
    <img id="image" src="https://url/to/an/image" />

---
