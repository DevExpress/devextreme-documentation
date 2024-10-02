An **aggregated export** is a DevExtreme entity used to import [component-specific types](/Documentation/Guide/Common/TypeScript_Guides/Scopes_of_Types/#Component-Specific_Types).

---
##### Angular

Our codebase includes the following lines (for example, in DateBox source code):

    import type * as DxDateBoxTypes from "devextreme/ui/date_box_types";
    export { DxDateBoxTypes }; 

Here, `import type` is used to [import only types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) from a module, not the actual code that runs during runtime. `* as DxDateBoxTypes` means "import everything" from the module `"devextreme/ui/date_box_types"` and collect it under the name `DxDateBoxTypes`.

##### Vue

Our codebase includes the following lines (for example, in DateBox source code):

    import type * as DxDateBoxTypes from "devextreme/ui/date_box_types";
    export { DxDateBoxTypes }; 

Here, `import type` is used to [import only types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) from a module, not the actual code that runs during runtime. `* as DxDateBoxTypes` means "import everything" from the module `"devextreme/ui/date_box_types"` and collect it under the name `DxDateBoxTypes`.

##### React

Our codebase includes the following lines (for example, in DateBox source code):

    import type * as DateBoxTypes from "devextreme/ui/date_box_types";
    export { DateBoxTypes }; 

Here, `import type` is used to [import only types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) from a module, not the actual code that runs during runtime. `* as DateBoxTypes` means "import everything" from the module `"devextreme/ui/date_box_types"` and collect it under the name `DateBoxTypes`.

---

The result is then exported, and this is the *aggregated export* that you can import in your application for every DevExtreme component.

[tags] angular, react, vue