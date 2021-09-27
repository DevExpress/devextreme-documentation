Right-to-left (RTL) support allows the UI component to adapt its content to right-to-left locales.

RTL layout can be specified for an individual UI component using its **rtlEnabled** property:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            // ...
            rtlEnabled: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-slider ...
        [rtlEnabled]="true">
    </dx-slider>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxSliderModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSliderModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSlider ...
            :rtl-enabled="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxSlider from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider
        }
    }
    </script>
    
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Slider from 'devextreme-react/slider';

    class App extends React.Component {
        render() {
            return (
                <Slider ...
                    rtlEnabled={true}
                />
            );
        }
    }
    export default App;

---

To apply RTL to your entire application, set the same property globally using the [config()](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') function:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.config({ rtlEnabled: true });
        // ...
    });

#####Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import config from 'devextreme/core/config';

    #include angular-component-decorator
    export class AppComponent {
        constructor() {
            config({ rtlEnabled: true });      
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>

    <script>
    import config from 'devextreme/core/config';
    export default {
        // ...
        created() {
            config({ rtlEnabled: true });  
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import config from 'devextreme/core/config';

    class App extends React.Component {
        constructor(props) {
            super(props);
            config({ rtlEnabled: true });
        }

        render() {
            return (
                // ...
            );
        }
    }
    export default App;

---

#####See Also#####
- **RTL Support Demo**: [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RightToLeftSupport) | [Navigation Components](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/NavigationRightToLeftSupport) | [Editors](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorsRightToLeftSupport)
