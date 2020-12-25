The **ScrollView** is a UI component that enables a user to scroll its content.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ScrollView/Overview/"
}

The following code adds a simple **ScrollView** to your page. The [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#width') and [height](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#height') options specify the UI component size. By default, the **ScrollView** allows a user to scroll its content vertically. To change this behavior, use the [direction](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#direction') option. Note that horizontal scrolling appears only if the content is wider than the **ScrollView**. Otherwise, the content adapts to the width of the **ScrollView**.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            width: 500,
            direction: 'both' // or 'horizontal' | 'vertical'
        });
    });

    <!--HTML-->
    <div id="scrollViewContainer">
        <!-- Here goes long content -->
    </div>

##### Angular

    <!--HTML-->
    <dx-scroll-view
        [height]="500"
        [width]="500"
        direction="both">  <!-- or 'horizontal' | 'vertical' -->
        <!-- Here goes long content -->
    </dx-scroll-view>

    <!--TypeScript-->
    import { DxScrollViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScrollView
            :height="500"
            :width="500"
            direction="both">  <!-- or 'horizontal' | 'vertical' -->
            <!-- Here goes long content -->
        </DxScrollView>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScrollView } from 'devextreme-vue/scroll-view';

    export default {
        components: {
            DxScrollView
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ScrollView } from 'devextreme-react/scroll-view';

    class App extends React.Component {
        render() {
            return (
                <ScrollView
                    height={500}
                    width={500}
                    direction="vertical">  {/* or 'horizontal' | 'vertical' */}
                    {/* Here goes long content */}
                </ScrollView>
            );
        }
    }

    export default App;

---

The **ScrollView** employs native scrolling on most platforms, except desktops. To employ it on all platforms without exception, assign **true** to the [useNative](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/useNative.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#useNative') option. Note that if you assign **false** to this option, the **ScrollView** will simulate scrolling on all platforms.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            useNative: true
        });
    });

    <!--HTML-->
    <div id="scrollViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-scroll-view
        [useNative]="true">
    </dx-scroll-view>

    <!--TypeScript-->
    import { DxScrollViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScrollView
            :use-native="true"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScrollView } from 'devextreme-vue/scroll-view';

    export default {
        components: {
            DxScrollView
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ScrollView } from 'devextreme-react/scroll-view';

    class App extends React.Component {
        render() {
            return (
                <ScrollView
                    useNative={true}
                />
            );
        }
    }

    export default App;

---

If simulated scrolling is used, you can specify when to show the scrollbar. For this purpose, use the [showScrollbar](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/showScrollbar.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#showScrollbar') option.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            useNative: false,
            showScrollbar: 'always' // or 'onScroll' | 'onHover' | 'never'
        });
    });

    <!--HTML-->
    <div id="scrollViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-scroll-view
        [useNative]="false"
        [showScrollbar]="always">  <!-- or 'onScroll' | 'onHover' | 'never' -->
    </dx-scroll-view>

    <!--TypeScript-->
    import { DxScrollViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScrollView
            :use-native="false"
            show-scrollbar="always"  <!-- or 'onScroll' | 'onHover' | 'never' -->
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScrollView } from 'devextreme-vue/scroll-view';

    export default {
        components: {
            DxScrollView
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ScrollView } from 'devextreme-react/scroll-view';

    class App extends React.Component {
        render() {
            return (
                <ScrollView
                    useNative={false}
                    showScrollbar="always" {/* or 'onScroll' | 'onHover' | 'never' */}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
#include common-link-configurewidget
- [ScrollView - Handle Scroll Gestures](/concepts/05%20Widgets/ScrollView/10%20Handle%20Scroll%20Gestures.md '/Documentation/Guide/Widgets/ScrollView/Handle_Scroll_Gestures/')
- [ScrollView - Scroll the Content](/concepts/05%20Widgets/ScrollView/05%20Scroll%20the%20Content '/Documentation/Guide/Widgets/ScrollView/Scroll_the_Content/')
- [ScrollView API Reference](/api-reference/10%20UI%20Widgets/dxScrollView '/Documentation/ApiReference/UI_Widgets/dxScrollView/')

[tags]dxscrollview, scrollView, scroll view, overview, scrolling direction, native scrolling, simulated scrolling, scrollbar
