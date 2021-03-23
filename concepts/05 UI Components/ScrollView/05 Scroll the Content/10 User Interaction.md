An end user can scroll the ScrollView content with the swipe gesture or with the scrollbar. The swipe gesture is default for touch devices, the scrollbar is default for desktops. However, you can unify the behavior of the ScrollView on all platforms. To control the swipe gesture scrolling, use the [scrollByContent](/api-reference/10%20UI%20Components/dxScrollable/1%20Configuration/scrollByContent.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#scrollByContent') property. To control the scrollbar scrolling, use the [scrollByThumb](/api-reference/10%20UI%20Components/dxScrollable/1%20Configuration/scrollByThumb.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#scrollByThumb') property.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#scrollViewContainer").dxScrollView({
            scrollByContent: true, // enables the swipe gesture on all platforms
            scrollByThumb: true // makes the scrollbar active on all platforms
        });
    });

    <!--HTML-->
    <div id="scrollViewContainer"></div>

##### Angular

    <!--HTML-->
    <dx-scroll-view
        [scrollByContent]="true"  <!-- enables the swipe gesture on all platforms -->
        [scrollByThumb]="true">   <!-- makes the scrollbar active on all platforms -->
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
            :scroll-by-content="true"  <!-- enables the swipe gesture on all platforms -->
            :scroll-by-thumb="true"   <!-- makes the scrollbar active on all platforms -->
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
                    scrollByContent={true}  {/* enables the swipe gesture on all platforms */}
                    scrollByThumb={true}   {/* makes the scrollbar active on all platforms */}
                />
            );
        }
    }

    export default App;

---

