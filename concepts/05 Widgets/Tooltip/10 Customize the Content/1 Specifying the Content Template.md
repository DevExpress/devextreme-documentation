The template implementation depends on the used framework or library. Examples of jQuery, Angular, and ASP.NET MVC are presented below. They show how to create a template consisting of static (text) and dynamic (the [Switch](/concepts/05%20Widgets/Switch/00%20Overview.md '/Documentation/Guide/Widgets/Switch/Overview/') widget) content. 

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Static content"),
                    $("<div />").attr("id", "switchContainer").dxSwitch({
                        // The "Switch" widget is configured here
                    })
                )
            }
        });
    });

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="tooltipContainer"></div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        contentTemplate="tooltipContent">
        <div *dxTemplate="let data of 'tooltipContent'">
            <p>Static content</p>
            <dx-switch>
                <!-- The "Switch" widget is configured here -->
            </dx-switch>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule, DxSwitchModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule,
            DxSwitchModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .ContentTemplate(@<text>
            <p>Static content</p>
            @(Html.DevExtreme().Switch()
                // The "Switch" widget is configured here
            )
        </text>)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---
