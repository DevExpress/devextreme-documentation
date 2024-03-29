An end user can scroll the List with a swipe gesture and with the scrollbar. Although by default the swipe gesture is active for mobile devices and the scrollbar is active for desktops, you can force any or both of them to be used on all platforms. For this purpose, set the [scrollByContent](/api-reference/10%20UI%20Components/dxList/1%20Configuration/scrollByContent.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#scrollByContent') or [scrollByThumb](/api-reference/10%20UI%20Components/dxList/1%20Configuration/scrollByThumb.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#scrollByThumb') property to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            scrollByContent: true, // the swipe gesture on all platforms
            scrollByThumb: true // the scrollbar on all platforms
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        [scrollByContent]="true" <!-- the swipe gesture on all platforms -->
        [scrollByThumb]="true"> <!-- the scrollbar on all platforms -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            :scroll-by-content="true" <!-- the swipe gesture on all platforms -->
            :scroll-by-thumb="true" <!-- the scrollbar on all platforms -->
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                scrollByContent={true} {/* the swipe gesture on all platforms */}
                scrollByThumb={true} {/* the scrollbar on all platforms */}
            />
        );
    }

---

The List employs native scrolling on most platforms, except non-Mac desktops and devices. To employ native scrolling on all platforms without exception, assign **true** to the [useNativeScrolling](/api-reference/10%20UI%20Components/dxList/1%20Configuration/useNativeScrolling.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#useNativeScrolling') property. Note that if you assign **false** to this property, the List will simulate scrolling on all platforms.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            useNativeScrolling: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        [useNativeScrolling]="true">  
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            :use-native-scrolling="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                useNativeScrolling={true}
            />
        );
    }

---

If simulated scrolling is used, you can specify when to show the scrollbar. For this purpose, use the [showScrollbar](/api-reference/10%20UI%20Components/dxList/1%20Configuration/showScrollbar.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#showScrollbar') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            useNativeScrolling: false,
            showScrollbar: 'always' // or 'onScroll' | 'onHover' | 'never'
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        [useNativeScrolling]="false"
        showScrollbar="always"> <!-- or "onScroll" | "onHover" | "never" -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            :use-native-scrolling="false"
            show-scrollbar="always" <!-- or "onScroll" | "onHover" | "never" -->
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                useNativeScrolling={true}
                showScrollbar="always" {/* or "onScroll" | "onHover" | "never" */}
            />
        );
    }

---

On mobile devices, the user can pull the List to scroll it slightly further than its top or bottom boundary. Once the user releases the List, it bounces back to the boundary position. You can disable this effect using the [bounceEnabled](/api-reference/10%20UI%20Components/dxList/1%20Configuration/bounceEnabled.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#bounceEnabled') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            bounceEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        [bounceEnabled]="false">  
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            :bounce-enabled="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                bounceEnabled={false}
            />
        );
    }

---

If you want to disable scrolling completely, assign **false** to the [scrollingEnabled](/api-reference/10%20UI%20Components/dxList/1%20Configuration/scrollingEnabled.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#scrollingEnabled') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            scrollingEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        [scrollingEnabled]="false">  
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            :scrolling-enabled="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                scrollingEnabled={false}
            />
        );
    }

---

#####See Also#####
#include common-link-configurewidget