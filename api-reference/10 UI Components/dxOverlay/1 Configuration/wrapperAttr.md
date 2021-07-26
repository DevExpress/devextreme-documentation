---
id: dxOverlay.Options.wrapperAttr
type: any
default: {}
---
---
##### shortDescription
Specifies the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes" target="_blank">global attributes</a> for the UI component's wrapper element. 

---
---
##### jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            wrapperAttr: {
                id: "elementId",
                class: "class-name"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html-->
    <dx-{widget-name} ...
        [wrapperAttr]="{ id: 'elementId', class: 'class-name' }">
    </dx-{widget-name}>

    <!--tab: app.component.ts -->
    import { Component } from '@angular/core';
    // ...
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :wrapper-attr="{widgetName}Attributes">
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                {widgetName}Attributes: {
                    id: 'elementId',
                    class: 'class-name'
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useMemo } from 'react';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    function App() {
        const {widgetName}Attributes = useMemo(() => {
            return {
                id: 'elementId',
                class: 'class-name'
            }
        }, []);

        return (
            <{WidgetName} ...
                wrapperAttr={{widgetName}Attributes}>
            </{WidgetName}>
        );
    }
    export default App;


---

The code above produces the markup similar to this:

    <!--HTML--><body>
        <div id="elementId" class="dx-overlay-wrapper dx-{widgetname}-wrapper class-name" ... > 
        <!-- This is the wrapper element. This element belongs to an element defined by the `container` property. -->
            <div class="dx-overlay-content">
            <!-- This element contains toolbars and component content. -->
                <div class="dx-{widgetname}-content" ... >
                <!-- This is the content element. It displays the component's content specified in the `contentTemplate` property. -->
                    <!-- ... -->
                </div>
            </div>
        </div>
    </body>
