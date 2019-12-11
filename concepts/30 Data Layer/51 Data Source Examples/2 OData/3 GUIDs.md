GUID (Globally Unique Identifier) is another common data type you may encounter while working with OData services. The DevExtreme data layer includes the [Guid](/api-reference/30%20Data%20Layer/Guid '/Documentation/ApiReference/Data_Layer/Guid/') class, which enables you to generate new GUIDs and work with existing GUIDs.

To create a Guid instance, call the Guid constructor. If you pass a string value specifying a GUID to the [constructor](/api-reference/30%20Data%20Layer/Guid/3%20Methods/ctor(value).md '/Documentation/ApiReference/Data_Layer/Guid/Methods/#ctorvalue'), the created Guid instance will hold the specified value.

    <!--JavaScript-->
    var guid = new DevExpress.data.Guid("bd330029-8106-6d2d-5371-f27325155e99");

If you call the [constructor](/api-reference/30%20Data%20Layer/Guid/3%20Methods/ctor().md '/Documentation/ApiReference/Data_Layer/Guid/Methods/#ctor') without arguments, a new GUID will be generated.

    <!--JavaScript-->
    var guid = new DevExpress.data.Guid();
