Inheritance is a part of internal implementation. You should not rely on the knowledge of relationships between base classes and their descendants. For generalization, use a union to define your own type.

For example, if you need a type for properties of multiple editor components, define the following union:

---

##### jQuery

    <!-- tab: index.js -->
    type EditorProps = DxTextAreaTypes.Properties | DxTextBoxTypes.Properties | DxAutocompleteTypes.Properties | DxLookupTypes.Properties;

##### Angular

    <!-- tab: app.component.ts -->
    type EditorProps = DxTextAreaTypes.Properties | DxTextBoxTypes.Properties | DxAutocompleteTypes.Properties | DxLookupTypes.Properties;

##### Vue

    <!-- tab: App.vue -->
    type EditorProps = DxTextAreaTypes.Properties | DxTextBoxTypes.Properties | DxAutocompleteTypes.Properties | DxLookupTypes.Properties;

##### React

    <!-- tab: App.tsx -->
    type EditorProps = TextAreaTypes.Properties | TextBoxTypes.Properties | AutocompleteTypes.Properties | LookupTypes.Properties;

---