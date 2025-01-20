If you assign a method name to **compileGetter**, the getter returns this method's return value. To get a reference to the method instead of its value, pass an object with `functionAsIs: true` to the getter as a second parameter.

    <!--JavaScript-->const getter = DevExpress.data.utils.compileGetter("address.getAddress");
    // the getter returns a reference to the 'person.address.getAddress' function and assigns it to the 'getAddressFunction' variable
    const getAddressFunction = getter(person, { functionsAsIs: true }); 

If the getter returns an object containing multiple functions, the **functionsAsIs** property affects all functions contained in this object.

    <!--JavaScript-->const setter = DevExpress.data.utils.compileSetter("address");
    setter(person, {
        city: "San Francisco",
        street: "Stanford Ave"
    });
    
In the example above, the object held in the **person.address** property will contain only the **city** and **street** properties after the setter will be called. Other members will be lost. 

If you need to merge the new object passed to the setter with the object held in the property, pass a properties object containing `merge: true` to the setter.

    <!--JavaScript-->const setter = DevExpress.data.utils.compileSetter("address");
    setter(
        person, 
        {
            city: "San Francisco",
            street: "Stanford Ave"
        }, 
        { merge: true }
    );

In this case, the address object contains the following properties:

    {
        zipCode: 90007,
        state: "CA",
        city: "San Francisco",
        street: "Stanford Ave",
        getAddress: function() {
          return this.zipCode + " " + this.state + " " + this.city;
        }
    }