The ScrollView raises the [pullDown](/api-reference/10%20UI%20Widgets/dxScrollView/4%20Events/pullDown.md '/Documentation/ApiReference/UI_Components/dxScrollView/Events/#pullDown') event when a user performs the <a href="https://en.wikipedia.org/wiki/Pull-to-refresh" target="_blank">pull-to-refresh gesture</a>. [Handle this event](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/15%20Handle%20Events/00%20Handle%20Events.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Handle_Events') to refresh the content of the ScrollView. Note that the handling function should end with a call of the [release()](/api-reference/10%20UI%20Widgets/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#releasepreventScrollBottom') method to release the ScrollView.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            bounceEnabled: true,
            onPullDown: function (e) {
                // Commands that refresh the content go here
                e.component.release();
            }
        });
    });

    <!--HTML-->
    <div id="scrollViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-scroll-view
        [height]="500"
        [bounceEnabled]="true"
        (onPullDown)="updateContent($event)">
    </dx-scroll-view>

    <!--TypeScript-->
    import { DxScrollViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        updateContent(e) {
            // Commands that refresh the content go here
            e.component.release();
        }
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
            :bounce-enabled="true"
            @pull-down="updateContent"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScrollView } from 'devextreme-vue/scroll-view';

    export default {
        components: {
            DxScrollView
        },
        methods: {
            updateContent(e) {
                // Commands that refresh the content go here
                e.component.release();
            }
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
                    bounceEnabled={true}
                    onPullDown={this.updateContent}
                />
            );
        }

        updateContent = (e) => {
            // Commands that refresh the content go here
            e.component.release();
        }
    }

    export default App;

---

[note]To enable the pull-to-refresh gesture on desktops, set the [bounceEnabled](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/bounceEnabled.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#bounceEnabled') property to **true**.

If an end user scrolls the content down to the bottom, the ScrollView raises the [reachBottom](/api-reference/10%20UI%20Widgets/dxScrollView/4%20Events/reachBottom.md '/Documentation/ApiReference/UI_Components/dxScrollView/Events/#reachBottom') event. You can handle it using the [onReachButtom](/api-reference/10%20UI%20Widgets/dxScrollView/1%20Configuration/onReachBottom.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#onReachBottom') function. Note that this function should also contain a call of the [release()](/api-reference/10%20UI%20Widgets/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#releasepreventScrollBottom') method. 

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            onReachBottom: function (e) {
                // Commands that refresh the content go here
                e.component.release();
            }
        });
    });

    <!--HTML-->
    <div id="scrollViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-scroll-view
        [height]="500"
        (onReachBottom)="updateContent($event)">
    </dx-scroll-view>

    <!--TypeScript-->
    import { DxScrollViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        updateContent(e) {
            // Commands that refresh the content go here
            e.component.release();
        }
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
            @reach-bottom="updateContent"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScrollView } from 'devextreme-vue/scroll-view';

    export default {
        components: {
            DxScrollView
        },
        methods: {
            updateContent(e) {
                // Commands that refresh the content go here
                e.component.release();
            }
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
                    onReachBottom={this.updateContent}>
                </ScrollView>
            );
        }

        updateContent = (e) => {
            // Commands that refresh the content go here
            e.component.release();
        }
    }

    export default App;

---

If you want to process each scroll gesture performed by a user, handle the [scroll](/api-reference/10%20UI%20Widgets/dxScrollable/4%20Events/scroll.md '/Documentation/ApiReference/UI_Components/dxScrollView/Events/#scroll') event. The object passed to the handling function contains the **reachedTop**, **reachedBottom**, **reachedLeft** or **reachedRight** properties. Use them to check if scrolling has reached any of the content boundaries. Note that availability of these properties depends on the allowed [scrolling direction](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#direction').

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#scrollViewContainer").dxScrollView({
            height: 500,
            onScroll: function(e) {
                if(e.reachedBottom) {
                    // Here go the commands to be executed when the bottom is reached
                }
                // ...
            }
        });
    });

    <!--HTML-->
    <div id="scrollViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-scroll-view
        [height]="500"
        (onScroll)="scroll($event)">
    </dx-scroll-view>

    <!--TypeScript-->
    import { DxScrollViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        scroll(e) {
            if(e.reachedBottom) {
                // Here go the commands to be executed when the bottom is reached
            }
            // ...
        }
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
            @scroll="scroll">
        </DxScrollView>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScrollView } from 'devextreme-vue/scroll-view';

    export default {
        components: {
            DxScrollView
        },
        methods: {
            scroll(e) {
                if(e.reachedBottom) {
                    // Here go the commands to be executed when the bottom is reached
                }
                // ...
            }
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
                    onScroll={this.scroll}
                />
            );
        }

        scroll = (e) => {
            if(e.reachedBottom) {
                // Here go the commands to be executed when the bottom is reached
            }
            // ...
        }
    }

    export default App;

---

#####See Also#####
#include common-link-handleevents
- [ScrollView - Scroll the Content](/concepts/05%20Widgets/ScrollView/05%20Scroll%20the%20Content '/Documentation/Guide/UI_Components/ScrollView/Scroll_the_Content/')
- [ScrollView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ScrollView/Overview)
- [ScrollView API Reference](/api-reference/10%20UI%20Widgets/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/')

[tags]scrollView, scroll view, pull down, pull-to-refresh, refresh, reach bottom, boundaries