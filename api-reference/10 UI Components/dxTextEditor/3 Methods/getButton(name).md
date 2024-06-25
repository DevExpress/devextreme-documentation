---
id: dxTextEditor.getButton(name)
---
---
##### shortDescription
Gets an instance of a [custom action button](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/buttons '{basewidgetpath}/Configuration/buttons/').

##### return: dxButton | undefined
The [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') UI component's instance.

##### param(name): String
The button's [name](/api-reference/_hidden/TextEditorButton/name.md '{basewidgetpath}/Configuration/buttons/#name').

---
Use the returned button instance to call the [Button UI component's methods](/api-reference/10%20UI%20Components/Widget/3%20Methods '/Documentation/ApiReference/UI_Components/dxButton/Methods/'), for example, [focus()](/api-reference/10%20UI%20Components/Widget/3%20Methods/focus().md '/Documentation/ApiReference/UI_Components/dxButton/Methods/#focus'):

---
##### jQuery

    <!-- tab: index.js -->
    const myCustomButton = $("#{widgetName}Container").dx{WidgetName}("getButton", "myCustomButton");
    myCustomButton.focus();

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { Dx{WidgetName}Component } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('{widgetName}Ref', { static: false }) {widgetName}: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild('{widgetName}Ref') {widgetName}: Dx{WidgetName}Component;

        setFocus() {
            this.{widgetName}.instance.getButton('myCustomButton').focus();
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} #{widgetName}Ref ... >
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :ref="{widgetName}Ref">
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },

        data() {
            return {
                {widgetName}Ref
            }
        },

        methods: {
            setFocus() {
                this.{widgetName}.getButton('myCustomButton').focus();
            }
        },

        computed: {
            {widgetName}: function() {
                return this.$refs[{widgetName}Ref].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);
    
            this.{widgetName}Ref = React.createRef();
    
            this.setFocus = () => {
                this.{widgetName}.getButton('myCustomButton').focus();
            };
        }

        get {widgetName}() {
            return this.{widgetName}Ref.current.instance();
        }

        render() {
            return (
                <{WidgetName} ...
                    ref={this.{widgetName}Ref}>
                </{WidgetName}>
            );
        }
    }
    export default App;

---