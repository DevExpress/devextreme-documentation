If you assign the name of a method to a **compileGetter**, the getter normally returns the value returned by this method. If you need to get a reference to the method instead of its value, pass an object with the **functionAsIs** property set to **true** to the getter as a second parameter.

    <!--JavaScript-->var getter = DevExpress.data.utils.compileGetter("address.getAddress");
    // the getter returns a reference to the 'person.address.getAddress' function and assigns it to the 'getAddressFunction' variable
    var getAddressFunction = getter(person, { functionsAsIs: true }); 

If the getter returns an object containing several functions, the **functionsAsIs** option affects all functions contained in this object.

When you use a setter to assign a new value to a property containing an object, the object held in the property is replaced by the new one by default.

    <!--JavaScript-->var setter = DevExpress.data.utils.compileSetter("address");
    setter(person, {
        city: "San Francisco",
        street: "Stanford Ave"
    });
    
In the example above, the object held in the **person.address** property will contain only the **city** and **street** properties after the setter will be called. Other members will be lost. 

If you need to merge the new object passed to the setter with the object held in the property, pass an options object containing the **merge** property set to true to the setter.

    <!--JavaScript-->var setter = DevExpress.data.utils.compileSetter("address");
    setter(
        person, 
        {
            city: "San Francisco",
            street: "Stanford Ave"
        }, 
        { merge: true }
    );

In this case, the address object will contain the following properties.

    {
        zipCode: 90007,
        state: "CA",
        city: "San Francisco",
        street: "Stanford Ave",
        getAddress: function() {
          return this.zipCode + " " + this.state + " " + this.city;
        }
    }