---
type: function
---
---
##### shortDescription
Specifies the function called if the ODataContext causes an error.

---
The function passed to this option takes on the JavaScript **Error** object as a parameter.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        errorHandler: function(error) {
            alert(error.message);
        },
        entities: {
            Categories: {
                key: "CategoryID",
                keyType: "Int32"
            },
            MyCustomers: {
                name: "Customers",
                key: "CustomerID",
                keyType: "String"
            }
        }
    });