---
id: Editor.Options.isDirty
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the component's current value differs from the initial value.

---
This property is a read-only flag. You can use it to check if the editor value changed.

---
##### jQuery

    <!--tab: index.js -->
    $(() => {
        const {widgetName} = $('#{widgetName}').dx{WidgetName}({
            // ...
        }).dx{WidgetName}('instance');

        $('#button').dxButton({
            // ...
            onClick () {
                if ({widgetName}.option('isDirty')) {
                    DevExpress.ui.notify("Do not forget to save changes", "warning", 500);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { Dx{WidgetName}Component, DxButtonModule } from 'devextreme-angular';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('{widgetName}Ref', { static: false }) {widgetName}: Dx{WidgetName}Component;

        onClick () {
            if (this.{widgetName}.instance.option('isDirty')) {
                notify("Do not forget to save changes", "warning", 500);
            }
        }
    }

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... 
        #{widgetName}Ref
    >
    </dx-{widget-name}>
    <dx-button ...
        (onClick)="onClick($event)"
    >
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :ref="{widgetName}Ref"
        >
        </Dx{WidgetName}>
        <DxButton ...
            @click="onClick"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';
    import DxButton from 'devextreme-vue/button';
    import notify from 'devextreme/ui/notify';

    export default {
        components: {
            Dx{WidgetName},
            DxButton
        },

        data() {
            return {
                {widgetName}Ref
            }
        },

        methods: {
            onClick () {
                if (this.{widgetName}.option('isDirty')) {
                    notify("Do not forget to save changes", "warning", 500);
                }
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
    import React, { useRef } from 'react';
    import {WidgetName} from 'devextreme-react/{widget-name}';
    import Button from 'devextreme-react/button';
    import 'devextreme/dist/css/dx.light.css';

    const App = () => {
        const {widgetName}Ref = useRef(null);

        const onClick = () => {
            if (this.{widgetName}Ref.current.instance().option('isDirty')) {
                notify("Do not forget to save changes", "warning", 500);
            }
        };

        return (
            <{WidgetName} ...
                ref={{widgetName}Ref}
            >
            </{WidgetName}>
            <Button ...
                onClick={onClick}
            />
        );
    };

    export default App;

---

#####See Also#####
- [reset](/api-reference/10%20UI%20Components/Editor/3%20Methods/reset().md '{basewidgetpath}/Methods/#reset')