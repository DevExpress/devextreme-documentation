---
##### jQuery

    <!-- tab: index.js -->
    function getDataSource() {
        return $("#{widgetName}Container").dx{WidgetName}("getDataSource");
    }

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
        @ViewChild(Dx{WidgetName}Component, { static: false }) {widgetName}: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;
        getDataSource() {
            return this.{widgetName}.instance.getDataSource();
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :ref="{widgetName}RefKey">
            <!-- ... -->
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    const {widgetName}RefKey = "my-{widget-name}";

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                {widgetName}RefKey
            }
        },
        methods: {
            getDataSource: function() {
                return this.{widgetName}.getDataSource();
            }
        },
        computed: {
            {widgetName}: function() {
                return this.$refs[{widgetName}RefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import { useRef } from 'react';
    import {WidgetName} from 'devextreme-react/{widget-name}';

    export default function App() {
        const {widgetName} = useRef(null);
        const getDataSource = () => {
            return {widgetName}.current.instance.getDataSource();
        }

        return (
            <{WidgetName} ref={{widgetName}}>
                {/* ... */}
            </{WidgetName}>
        );
    }
    
---