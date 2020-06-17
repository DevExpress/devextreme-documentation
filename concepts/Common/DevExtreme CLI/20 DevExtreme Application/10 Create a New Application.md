---

##### Angular

Create a new <a href="https://devexpress.github.io/devextreme-angular-template" target="_blank">DevExtreme Angular application</a> that uses the [DevExtreme layout template](/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/):

    devextreme new angular-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new angular-app app-name [--layout][--empty]

##### Vue

Create a new <a href="https://devexpress.github.io/devextreme-vue-template" target="_blank">DevExtreme Vue application</a> that uses the [DevExtreme layout template](/Documentation/Guide/Vue_Components/Create_a_DevExtreme_Application/):

    devextreme new vue-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new vue-app app-name [--layout][--empty]


##### React

Create a new <a href="https://devexpress.github.io/devextreme-react-template" target="_blank">DevExtreme React application</a> that uses the [DevExtreme layout template](/Documentation/Guide/React_Components/Create_a_DevExtreme_Application/):

    devextreme new react-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new react-app app-name [--layout][--empty]

---

Arguments:

* `--layout`        
Specifies the DevExtreme layout to add. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    Both layouts are illustrated in the [Layouts](/Documentation/Guide/Angular_Components/Getting_Started/Create_a_DevExtreme_Application/#Layouts) article.

* `--empty`     
Specifies whether to skip sample views generation (default: `false`).