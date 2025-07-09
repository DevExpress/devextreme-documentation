DevExtreme includes methods used to create a getter and setter for the property specified as a string.

    <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter("firstName");
    const setter = DevExpress.data.utils.compileSetter("firstName");

[note] This section uses [compileGetter](/api-reference/30%20Data%20Layer/Utils/compileGetter(expr).md '/Documentation/ApiReference/Data_Layer/Utils/#compileGetterexpr') and [compileSetter](/api-reference/30%20Data%20Layer/Utils/compileSetter(expr).md '/Documentation/ApiReference/Data_Layer/Utils/#compileSetterexpr') for getters and setters. In practice, you do not need to use them when specifying sorting, filtering, etc. Use only the values passed to these methods, and name them "getter" and "setter".

To get a value of the **person.firstName** property, call the created getter and pass the **person** object to it.

    <!--JavaScript-->// the getter returns "John" and assigns it to the 'name' variable
    const name = getter(person); 

To assign a new value to the **person.firstName** property, call the created setter and pass the **person** object and the new value to it.

    <!--JavaScript-->// assigns "Michael" to 'person.firstName'
    setter(person, "Michael"); 

Specify the property for creating a getter or setter as a string passed to the **compileGetter** or **compileSetter** method. The property string can be in one of the following formats:

- **A property name**  
    Specifies a top-level property.

        <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter("firstName");
        const setter = DevExpress.data.utils.compileSetter("firstName");
        // the getter returns "John" and assigns it to the 'name' variable
        const name = getter(person);
        // assigns "Michael" to 'person.firstName'
        setter(person, "Michael");

- **A second and higher level property**  
    Specifies a second and higher level property.

        <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter("address.city");
        const setter = DevExpress.data.utils.compileSetter("address.city");
        // the getter returns "Los Angeles" and assigns it to the 'city' variable
        const city = getter(person); 
        // assigns "San Francisco" to 'person.address.city'
        setter(person, "San Francisco"); 

- **A method name**  
    Specifies the method whose value should be returned by the getter.

        <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter("getBirthYear");
        // the getter returns 1985 and assigns it to the 'year' variable
        const year = getter(person); 

- **An array of property and method names**  
    If you pass an array of strings to the **compileGetter** function, the compiled getter will return an object with the specified properties. For second or higher level properties in the array, the getter creates the necessary subobjects within the returned object.

        <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter(["firstName", "lastName", "address.city", "getBirthYear"]);
        const personData = getter(person); 

 The specified getter called for the **person** object will return the following object.

        {
            firstName: "John",
            lastName: "Smith",
            getBirthYear: 1985,
            address: {
                city: "Los Angeles"
            }
        }
    Note that the returned object contains the **getBirthYear** property that holds the value returned by the method with the same name.

- **A function**  
    If you pass a function to **compileGetter**, this function will be executed each time the getter is called. The function should have a parameter that takes on an object passed to the getter.

        <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter(function(dataItem) {
          return dataItem.firstName + " " + dataItem.lastName;
        });
        // the getter returns "John Smith" and assigns it to the 'fullName' variable
        const fullName = getter(person); 

- **"this"**  
    In this case, the getter returns the object itself. This getter is used to sort or group an array of items containing a simple value.

        <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter("this");
        // the getter returns "A text" and assigns it to the 'text' variable
        const text = getter("A text"); 

