[note] Before starting the tutorial, make sure that you have installed DevExtreme in your application as described in the [Installation](/concepts/00%20Getting%20Started/01%20Installation '/Documentation/Guide/Getting_Started/Installation/') section (for JavaScript libraries) or the [Prerequisites and Installation](/concepts/35%20ASP.NET%20MVC%20Controls/10%20Prerequisites%20and%20Installation '/Documentation/Guide/ASP.NET_MVC_Controls/Prerequisites_and_Installation/') section (for ASP.NET MVC framework).

The **ButtonGroup** is a set of toggle buttons that can be used as a mode switcher.

This tutorial describes how to configure basic **ButtonGroup** features. We create a **ButtonGroup** that logs the names of the selected buttons into the browser's console (open the console to see them):

<div class="simulator-desktop-container" data-view="/Content/Applications/18_2/GettingStartedWith/ButtonGroup/index.html, /Content/Applications/18_2/GettingStartedWith/ButtonGroup/index.js, /Content/Applications/18_2/GettingStartedWith/ButtonGroup/index.css"></div>

Refer to the subtopics for details on every configuration step. You can also see the full code below:

---
##### jQuery

    <!-- tab: index.js -->
    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    $(function() {
        $("#myButtonGroup").dxButtonGroup({
            items: fontStyles,
            keyExpr: "style",
            selectionMode: "multiple",
            selectedItemKeys: [ "italic" ],
            onSelectionChanged: function (e) {
                const selectedItemKeys = e.component.option("selectedItemKeys");
                let message;
                if(selectedItemKeys.length > 0) {
                    message = "The following styles are selected: " + selectedItemKeys.join(", ");
                } else {
                    message = "There are no selected styles"
                }
                console.log(message);
            }
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="myButtonGroup"></div>
        </body>
    </html>

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group
        [items]="fontStyles"
        keyExpr="style"
        selectionMode="multiple"
        [(selectedItemKeys)]="selectedFontStyleNames"
        (onSelectionChanged)="logSelectionChanged($event)">
    </dx-button-group>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fontStyles: Array<{ icon: string, style: string }> = [{
            icon: "bold",
            style: "bold"
        }, {
            icon: "italic",
            style: "italic"
        }, {
            icon: "underline",
            style: "underline"
        }, {
            icon: "strike",
            style: "strike"
        }];

        selectedFontStyleNames: string[] = [ "italic" ];

        constructor() {
            this.logSelectionChanged = this.logSelectionChanged.bind(this);
        }

        logSelectionChanged() {
            let message;
            if(this.selectedFontStyleNames.length > 0) {
                message = "The following styles are selected: " + this.selectedFontStyleNames.join(", ");
            } else {
                message = "There are no selected styles";
            }
            console.log(message);
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxButtonGroupModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxButtonGroupModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: DxComponent.vue -->
    <template> 
        <dx-button-group
            :items="fontStyles"
            key-expr="style"
            selection-mode="multiple"
            :selected-item-keys.sync="selectedFontStyleNames"
            @selection-changed="logSelectionChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxButtonGroup } from 'devextreme-vue/button-group';

    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    export default {
        components: {
            DxButtonGroup
        },
        data() {
            return {
                fontStyles,
                selectedFontStyleNames: [ 'italic' ]
            }
        },
        methods: {
            logSelectionChanged() {
                let message;
                if(this.selectedFontStyleNames.length > 0) {
                    message = "The following styles are selected: " + this.selectedFontStyleNames.join(", ");
                } else {
                    message = "There are no selected styles";
                }
                console.log(message);
            }
        }
    }
    </script>


    <!-- tab: App.vue -->
    <template>
        <dx-component />
    </template>

    <script>
    import DxComponent from './components/DxComponent';

    export default {
        components: {
            DxComponent
        }
    }
    </script>

##### React

    <!-- tab: DxComponent.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ButtonGroup } from 'devextreme-react/button-group';

    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    class DxComponent extends React.Component {
        render() {
            return (
                <ButtonGroup
                    items={fontStyles}
                    keyExpr="style"
                    selectionMode="multiple"
                    defaultSelectedItemKeys={[ 'italic' ]}
                    onSelectionChanged={this.logSelectionChanged}
                />
            );
        }

        logSelectionChanged(e) {
            const selectedItemKeys = e.component.option("selectedItemKeys");
            let message;
            if(selectedItemKeys.length > 0) {
                message = "The following styles are selected: " + selectedItemKeys.join(", ");
            } else {
                message = "There are no selected styles"
            }
            console.log(message);
        }
    }

    export default DxComponent;

    <!-- tab: App.js -->
    import React, { Component } from 'react';
    import './App.css';

    import DxComponent from './DxComponent';

    class App extends Component {
        render() {
            return (
                <div>
                    <DxComponent />
                </div>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().ButtonGroup()
        .KeyExpr("style")
        .SelectionMode(ButtonGroupSelectionMode.Multiple)
        .Items(items => {
            items.Add().Icon("bold").Option("style", "bold");
            items.Add().Icon("italic").Option("style", "italic");
            items.Add().Icon("underline").Option("style", "underline");
            items.Add().Icon("strike").Option("style", "strike");
        })
        .SelectedItemKeys(new string[] { "italic" })
        .OnSelectionChanged("logSelectionChanged")
    )

    <script type="text/javascript">
        function logSelectionChanged (e) {
            const selectedItemKeys = e.component.option("selectedItemKeys");
            let message;
            if(selectedItemKeys.length > 0) {
                message = "The following styles are selected: " + selectedItemKeys.join(", ");
            } else {
                message = "There are no selected styles"
            }
            console.log(message);
        }
    </script>

---