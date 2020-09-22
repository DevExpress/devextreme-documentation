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
                (onClick)="buttonClick($event)">
            </dx-button>
        </div>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
        buttonClick (e) {
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

##### Vue

    <template>
        <DxPopup
            v-model:visible="isPopupVisible"
            title="Popup Title">
            <template>
                <p>Static content</p>
                <DxButton
                    text="Click me"
                    @click="buttonClick"
                />
            </template>
        </DxPopup>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup } from 'devextreme-vue/popup';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxButton
        },
        data() {
            return {
                isPopupVisible: true
            };
        },
        methods: {
            buttonClick() {
                // ...
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popup } from 'devextreme-react/popup';
    import { Button } from 'devextreme-react/button';

    const renderContent = () => {
        return (
            <p>Static content</p>
            <Button
                text="Click me"
                onClick={buttonClick}
            />
        );
    }

    const buttonClick = () => {
        // ...
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isPopupVisible: true
            };

            this.onHiding = this.onHiding.bind(this);
        }

        onHiding() {
            this.setState({
                isPopupVisible: false
            });
        }

        render() {
            return (
                <Popup
                    visible={this.state.isPopupVisible}
                    title="Popup Title"
                    contentRender={renderContent}
                    onHiding={this.onHiding}
                />
            );
        }
    }

    export default App;

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
