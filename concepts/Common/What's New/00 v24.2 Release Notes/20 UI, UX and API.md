### Tabs/TabPanel/List - onSelectionChanging Event

DevExtreme Tabs, TabPanel, and List share a common feature: selectable items.

Currently, these components include an [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanged) event that triggers once selections are finalized and the [selectedItems](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#selectedItems) option updates.

v24.2 includes a new [onSelectionChanging](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanging) event for the aforementioned UI components. The event helps track selection changes more effectively and includes a `cancel` property (Boolean or JS Promise).

![A "Change tab?" dialog appears when you switch between Tabs](/images/whats-new/24-2-js-selection-changing.gif)

The primary purpose of the [onSelectionChanging](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanging) event is to enable tab/item switching under specific usage conditions. If a condition is not met, you can prevent the switch using the `cancel` property. Common conditions include:

- The user confirms the switch to another tab/item via a pop-up dialog.
- The result of running validation on the current tab.
- Switching to another item follows a specified order. For example, when a user switches between tabs/items sequentially.
- Other custom conditions unrelated to the current component.

---
##### jQuery

#include btn-open-codepen with {
    href: "https://codepen.io/EugeniyKiyashko/pen/NWQJbVK?editors=1010"
}

##### Angular

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/sandbox/devextreme-beta-24-2-tabs-onselectionchanging-event-angular-hlch8k?file=%2Fsrc%2Fapp%2Fapp.component.html"
}

##### Vue

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/sandbox/devextreme-beta-24-2-tabs-onselectionchanging-event-vue-lzqg84?file=%2FApp.vue"
}

##### React

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/sandbox/devextreme-beta-24-2-tabs-onselectionchanging-event-react-h28s5v?file=%2FApp.tsx"
}

---

### TabPanel/MultiView - Item Visibility Option

The DevExtreme TabPanel and MultiView include a new [visible](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#visible) property for individual items. This feature allows you to manage whether an item is visible at runtime.

---
##### jQuery

    <!-- tab: index.js -->
    const tabPanel = $('#tabpanel').dxTabPanel({ 
        items: [{ visible: false, }], 
    }).dxTabPanel('instance');

##### Angular

    <!-- tab: app.component.html -->
    <dx-tab-panel> 
        <dxi-item [visible]="false"></dxi-item> 
    </dx-tab-panel>

##### Vue

    <!-- tab: App.vue -->
    <DxTabPanel> 
        <DxItem :visible="false" /> 
    </DxTabPanel>

##### React

    <!-- tab: App.js -->
    export default function App() { 
        return ( 
            <TabPanel> 
                <Item visible={false} /> 
            </TabPanel> 
        ); 
    }

---

### DataSource - Case Sensitive Filtering

[In v23.1](https://www.devexpress.com/subscriptions/new-2023-1.xml#js-data-layer), we released [langParams](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/langParam) for DataSource. This property can be used to include language-specific parameters for sorting and filtering operations performed on a client.

This update includes case sensitivity for the `langParams` options. As you can see in the image below, you can now introduce case-aware filtering when using DevExtreme UI components with DataSource support (such as DataGrid).

![Case-aware filtering in DevExtreme List bound to DataSource](/images/whats-new/24-2-js-sensitivity-case.gif)

---
##### jQuery

#include btn-open-codepen with {
    href: "https://codepen.io/gooddayforsurf/pen/wvVORyr"
}

##### Angular

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/devbox/devextreme-24-2-beta-case-sensitivity-filtering-jkw8xn?file=%2Fsrc%2Fapp%2Fapp.component.ts"
}

##### Vue

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/devbox/devextreme-24-2-beta-case-sensitivity-filtering-ndpg9h?file=%2Fsrc%2FApp.vue"
}

##### React

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/sandbox/devextreme-24-2-beta-case-sensitivity-filtering-t89jzw?file=%2Fsrc%2FApp.tsx"
}

---

### HTML Editor - Advanced Format Conversion

Previously, the DevExtreme HTML Editor included basic HTML & Markdown conversion support (via [showdown](https://github.com/showdownjs/showdown)/[turndown](https://github.com/mixmark-io/turndown) dependencies).

With v24.2, we removed this capability and added a converter option for custom conversions. For instance, Markdown lacks strikethrough support (as you expect, HTML Editor with `valueType="markdown"` did not offer this option). You can now use the [unified](https://github.com/unifiedjs/unified) [remark-gfm](https://github.com/remarkjs/remark-gfm) plugin to introduce this capability to your DevExtreme-powered app. Unified offers [numerous plugins](https://unifiedjs.com/explore/) for flexible and enhanced formatting.

This update allows greater control/options for HTML Editor-related formatting operations. You can even add support for other formats such as [YAML](https://unifiedjs.com/explore/package/remark-frontmatter/). You will only need a converter from and to HTML.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/MarkdownSupport/"
}