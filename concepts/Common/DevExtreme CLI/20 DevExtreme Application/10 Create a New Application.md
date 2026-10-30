
---

##### Angular

[note]

- If you experience issues when you create a new application with DevExtreme CLI, refer to the following troubleshooting topic: [DevExtreme CLI Issues - Create a New Application](/concepts/80%20Troubleshooting/03%20DevExtreme%20CLI%20Issues/00%20Create%20a%20New%20Application.md '/Documentation/Guide/Troubleshooting/DevExtreme_CLI_Issues/Create_a_New_Application/')
- DevExtreme CLI generates zoneless applications. Refer to the following help topic for more infomration about zoneless change detection: [DevExtreme Angular - Zoneless Change Detection](/Documentation/Guide/Angular_Components/Common_Features/Zoneless_Change_Detection/).

[/note]

Run the following command to create a new project using the [DevExtreme Angular Application Template](/concepts/40%20Angular%20Components/30%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Angular_Components/Application_Template/'):

    devextreme new angular-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx devextreme-cli new angular-app app-name [--layout][--empty]

This command supports the following arguments:

* `--layout`        
Specifies the DevExtreme layout. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    See the following topic to review both layouts: [Layouts](/concepts/40%20Angular%20Components/30%20Application%20Template/10%20Layouts.md '/Documentation/Guide/Angular_Components/Application_Template/#Layouts').

* `--empty`     
Specifies whether to skip sample view generation (default: `false`). 

##### Vue

[note] If you experience issues when you create a new application with DevExtreme CLI, refer to the following troubleshooting topic: [DevExtreme CLI Issues - Create a New Application](/concepts/80%20Troubleshooting/03%20DevExtreme%20CLI%20Issues/00%20Create%20a%20New%20Application.md '/Documentation/Guide/Troubleshooting/DevExtreme_CLI_Issues/Create_a_New_Application/')

Run the following command to create a new project using the [DevExtreme Vue Application Template](/concepts/55%20Vue%20Components/50%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Vue_Components/Application_Template/'):

    devextreme new vue-app app-name [--layout][--empty][--version]
    // ===== or without installing the DevExtreme CLI =====
    npx devextreme-cli new vue-app app-name [--layout][--empty][--version]

This command supports the following arguments:

* `--layout`        
Specifies the DevExtreme layout. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    See the following topic to review both layouts: [Layouts](/concepts/55%20Vue%20Components/50%20Application%20Template/10%20Layouts.md '/Documentation/Guide/Vue_Components/Application_Template/#Layouts').

* `--empty`     
Specifies whether to skip sample view generation (default: `false`).

* `--version`, `-v`      
Specifies whether to generate a Vue 2 or Vue 3 application. Available values: `2` and `3`. 

##### React

[note] If you experience issues when you create a new application with DevExtreme CLI, refer to the following troubleshooting topic: [DevExtreme CLI Issues - Create a New Application](/concepts/80%20Troubleshooting/03%20DevExtreme%20CLI%20Issues/00%20Create%20a%20New%20Application.md '/Documentation/Guide/Troubleshooting/DevExtreme_CLI_Issues/Create_a_New_Application/')

Run the following command to create a new project using the [DevExtreme React Application Template](/concepts/50%20React%20Components/50%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/React_Components/Application_Template/'):

    devextreme new react-app app-name [--layout][--empty][--template][--app-type][--transpiler]
    // ===== or without installing the DevExtreme CLI =====
    npx devextreme-cli new react-app app-name [--layout][--empty][--template][--app-type][--transpiler]

This command supports the following arguments:

* `--layout`        
Specifies the DevExtreme layout. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    See the following topic to review both layouts: [Layouts](/concepts/50%20React%20Components/50%20Application%20Template/10%20Layouts.md '/Documentation/Guide/React_Components/Application_Template/#Layouts').

* `--empty`     
Specifies whether to skip sample data generation. Available values:
    * `false` (default)
    * `true` 

* `--template`
Specifies the language you can use in the application. Available values:
    * `javascript`
    * `typescript`

* `--app-type`
Specifies the framework used in the application: [Next.js](https://nextjs.org/) or [Vite](https://vite.dev/). Available values:
    * `nextjs`
    * `vite`

* `--transpiler`
Specifies the transpiler: [Babel](https://babeljs.io/) or [SWC](https://swc.rs/). Used only when `--app-type` is `vite`. Available values:
    * `babel`
    * `swc`

---

[tags] angular, vue, react