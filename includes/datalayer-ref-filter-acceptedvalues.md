* **Binary filter**     
    Supported operators: *"=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains"*.        
    Example:

        [ "dataField", "=", 3 ]

* **Unary filter**      
    Supported operators: binary operators, *"!"*.       
    Example: 

        [ "!", [ "dataField", "=", 3 ] ]

* **Complex filter**        
    Supported operators: binary and unary operators, *"and"*, *"or"*.       
    Example:

        [
            [ "dataField", "=", 10 ],
            "and",
            [
                [ "anotherDataField", "<", 3 ],
                "or",
                [ "anotherDataField", ">", 11 ]
            ]
        ]