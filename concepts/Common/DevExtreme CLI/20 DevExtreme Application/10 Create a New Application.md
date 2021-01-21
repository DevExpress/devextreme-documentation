---

##### Angular

Create a new <a href="https://devexpress.github.io/devextreme-angular-template" target="_blank">DevExtreme Angular application</a> that uses the [DevExtreme layout template](/Documentation/Guide/Angular_Components/Application_Template/):

    devextreme new angular-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new angular-app app-name [--layout][--empty]

##### Vue

Create a new <a href="https://devexpress.github.io/devextreme-vue-template" target="_blank">DevExtreme Vue application</a> that uses the [DevExtreme layout template](/Documentation/Guide/Vue_Components/Application_Template/):

    devextreme new vue-app app-name [--layout][--empty][--version]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new vue-app app-name [--layout][--empty][--version]


##### React

Create a new <a href="https://devexpress.github.io/devextreme-react-template" target="_blank">DevExtreme React application</a> that uses the [DevExtreme layout template](/Documentation/Guide/React_Components/Application_Template/):

    devextreme new react-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new react-app app-name [--layout][--empty]

---

Arguments:

* `--layout`        
Specifies the DevExtreme layout to add. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    Both layouts are illustrated in the [Layouts](/Documentation/Guide/Angular_Components/Application_Template/#Layouts) article.

* `--empty`     
Specifies whether to skip sample views generation (default: `false`).

* `--version`, `-v` (Vue only)        
Specifies whether to generate a Vue 2 or Vue 3 application. Available values: 2 (default) and 3. 