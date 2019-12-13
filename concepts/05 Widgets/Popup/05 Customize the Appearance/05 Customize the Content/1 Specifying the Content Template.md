The template implementation depends on the used framework or library. Examples of jQuery, Angular, and ASP.NET MVC are presented below. They show how to create a template consisting of static (text) and dynamic (the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget) content. 

---
##### jQuery 

    <!--HTML-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Static Content"),
                    $("<div />").attr("id", "buttonContainer").dxButton({ 
                        text: "Click me",
                        onClick: function (e) {
                            // ...
                        }
                    });
                )
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        contentTemplate="popupContent">
        <div *dxTemplate="let data of 'popupContent'">
            <p>Static content</p>
            <dx-button
                text="Click me"
                (onClick)="button_click($event)">
            </dx-button>
        </div>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
        button_click (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule,
            DxButtonModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        .Title("Popup Title")
        .Visible(true)
        .ContentTemplate(@<text>
            <p>Static content</p>
            @(Html.DevExtreme().Button()
                .Text("Click me")
                .OnClick("button_click")
            )
        </text>)
    )

    <script type="text/javascript">
        function button_click(e) {
            // ...
        }
    </script>
    
---
