Inheritance is for internal implementation. Use unions to generalize types:

    type EditorProps = TextAreaTypes.Properties | TextBoxTypes.Properties | AutocompleteTypes.Properties | LookupTypes.Properties;