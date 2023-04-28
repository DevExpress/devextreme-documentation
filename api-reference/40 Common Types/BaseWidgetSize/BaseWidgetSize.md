---
uid: viz/core/base_widget:BaseWidgetSize
isType: 
module: viz/core/base_widget
export: BaseWidgetSize
---
---
##### shortDescription
Specifies the UI component's size in pixels.

---
<!--
You can specify a custom width and height for the component:

&lt;table class="dx-table"&gt;
    &lt;tr&gt;
        &lt;th&gt;Fixed&lt;/th&gt;
        &lt;th&gt;Relative&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Assign values to the &lt;b&gt;size&lt;/b&gt; object's &lt;b&gt;height&lt;/b&gt; and &lt;b&gt;width&lt;/b&gt; properties or specify a container for the component.&lt;/td&gt;
        &lt;td&gt;Specify a container for the component. The component occupies the container area.&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

[note] The **size** object has priority over the container.

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            size: {
                height: 300,
                width: 600
            }
        });
    });

##### Angular

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-{widget-name} ... &gt;
        &lt;dxo-size
            [height]="300"
            [width]="600"&gt;
        &lt;/dxo-size&gt;
    &lt;/dx-{widget-name}&gt;

    &lt;!-- tab: app.component.ts --&gt;
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;Dx{WidgetName} ... &gt;
            &lt;DxSize
                :height="300"
                :width="600"
            /&gt;
        &lt;/Dx{WidgetName}&gt;
    &lt;/template&gt;

    &lt;script&gt;

    import Dx{WidgetName}, {
        DxSize
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxSize
        },
        // ...
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import {WidgetName}, {
        Size
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                &lt;{WidgetName} ... &gt;
                    &lt;Size
                        height={300}
                        width={600}
                    /&gt;
                &lt;/{WidgetName}&gt;
            );
        }
    }
    export default App;

---

Alternatively, you can use CSS to style the UI component's container:

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
        });
    });

    &lt;!-- tab: styles.css --&gt;
    #{widgetName} {
        width: 85%;
        height: 70%;
    }

##### Angular

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-{widget-name} ...
        id="{widgetName}"&gt;
    &lt;/dx-{widget-name}&gt;

    &lt;!-- tab: app.styles.css --&gt;
    #{widgetName} {
        width: 85%;
        height: 70%;
    }

##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;Dx{WidgetName} ...
            id="{widgetName}"&gt;
        &lt;/Dx{WidgetName}&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        // ...
    }
    &lt;/script&gt;

    &lt;style&gt;
    #{widgetName} {
        width: 85%;
        height: 70%;
    }
    &lt;/style&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                &lt;{WidgetName} ...
                    id="{widgetName}"&gt;
                &lt;/{WidgetName}&gt;
            );
        }
    }
    export default App;

    &lt;!-- tab: styles.css --&gt;
    #{widgetName} {
        width: 85%;
        height: 70%;
    }

---

-->