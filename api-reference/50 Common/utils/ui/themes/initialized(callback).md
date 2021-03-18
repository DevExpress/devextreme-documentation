---
id: ui.themes.initialized(callback)
---
---
##### shortDescription
Specifies a function to be executed after a theme is loaded.

##### param(callback): function()
The function.

---
In some situations, UI components may apply their configuration or calculate their sizes before a theme is loaded. If you encounter issues with component appearance, use **initialized(callback)** to ensure that all styles are applied:

---
##### Angular

    <!-- tab: main.ts -->
    import themes from 'devextreme/ui/themes';
    // ...
    themes.initialized(() => {
        platformBrowserDynamic().bootstrapModule(AppModule)
            .catch(err => console.error(err));
    });

##### Vue

    <!-- tab: index.js -->
    import { createApp } from "vue";
    import App from "./App.vue";

    import themes from "devextreme/ui/themes";

    themes.initialized(() => createApp(App).mount("#app"));

##### React

    <!-- tab: index.js -->
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App.js";

    import themes from "devextreme/ui/themes";

    themes.initialized(() =>
        ReactDOM.render(<App />, document.getElementById("app"))
    );

---
