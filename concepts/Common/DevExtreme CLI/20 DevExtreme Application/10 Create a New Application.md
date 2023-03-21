---

##### Angular

Creates a new <a href="https://devexpress.github.io/devextreme-angular-template" target="_blank">DevExtreme Angular application</a> that uses the [DevExtreme layout template](/concepts/40%20Angular%20Components/30%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Angular_Components/Application_Template/'):

    devextreme new angular-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx devextreme-cli new angular-app app-name [--layout][--empty]

Arguments:

* `--layout`        
Specifies the DevExtreme layout. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    See the following topic to review both layouts: [Layouts](/concepts/40%20Angular%20Components/30%20Application%20Template/10%20Layouts.md '/Documentation/Guide/Angular_Components/Application_Template/#Layouts').

* `--empty`     
Specifies whether to skip sample view generation (default: `false`). 

##### Vue

Creates a new <a href="https://devexpress.github.io/devextreme-vue-template" target="_blank">DevExtreme Vue application</a> that uses the [DevExtreme layout template](/concepts/55%20Vue%20Components/50%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Vue_Components/Application_Template/'):

    devextreme new vue-app app-name [--layout][--empty][--version]
    // ===== or without installing the DevExtreme CLI =====
    npx devextreme-cli new vue-app app-name [--layout][--empty][--version]

Arguments:

* `--layout`        
Specifies the DevExtreme layout. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    See the following topic to review both layouts: [Layouts](/Documentation/Guide/Vue_Components/Application_Template/#Layouts).

* `--empty`     
Specifies whether to skip sample view generation (default: `false`).

* `--version`, `-v`      
Specifies whether to generate a Vue 2 or Vue 3 application. Available values: `2` and `3`. 

##### React

Creates a new <a href="https://devexpress.github.io/devextreme-react-template" target="_blank">DevExtreme React application</a> that uses the [DevExtreme layout template](/concepts/50%20React%20Components/50%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/React_Components/Application_Template/'):

    devextreme new react-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx devextreme-cli new react-app app-name [--layout][--empty]

Arguments:

* `--layout`        
Specifies the DevExtreme layout. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    See the following topic to review both layouts: [Layouts](/Documentation/Guide/React_Components/Application_Template/#Layouts).

* `--empty`     
Specifies whether to skip sample view generation (default: `false`). 

* `--template`
Specifies whether to create an application template with TypeScript support. Available values: `javascript` and `typescript`.

---

[tags] angular, vue, react