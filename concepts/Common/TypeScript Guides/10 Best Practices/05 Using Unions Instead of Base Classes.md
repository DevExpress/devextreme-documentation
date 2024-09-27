Inheritance is a part of internal implementation. You should not rely on the knowledge of relationships between base classes and their descendants. For generalization, use a union to define your own type.

For example, if you need a type for properties of multiple editor components, define the following union:

    type EditorProps = TextAreaTypes.Properties | TextBoxTypes.Properties | AutocompleteTypes.Properties | LookupTypes.Properties;