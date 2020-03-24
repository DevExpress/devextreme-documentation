---
id: LoadOptions.filter
type: Object
---
---
##### shortDescription
A filter expression.

---
Defines filtering parameters. Possible variants:

* Binary filter

        [ "field", "=", 3 ]

* Unary filter

        [ "!", [ "field", "=", 3 ] ]

* Complex filter

        [
            [ "field", "=", 10 ],
            "and",
            [
                [ "otherField", "<", 3 ],
                "or",
                [ "otherField", ">", 11 ]
            ]
        ]

#####See Also#####
- [DataLayer - Filtering](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering')