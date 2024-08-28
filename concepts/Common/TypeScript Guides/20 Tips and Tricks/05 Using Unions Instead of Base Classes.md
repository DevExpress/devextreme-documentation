Inheritance is part of internal implementation. You should not rely on the knowledge which component derives from which base. For generalization, use a union to define your own type.

For example, if you need a type for properties of multiple editor components, define the following union:

    type EditorProps = TextAreaTypes.Properties | TextBoxTypes.Properties | AutocompleteTypes.Properties | LookupTypes.Properties;