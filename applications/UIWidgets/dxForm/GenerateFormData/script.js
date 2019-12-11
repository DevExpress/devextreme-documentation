myFormItems = [
    {
        dataField: "firstName",
        editorType: "dxTextBox"
    },
    {
        dataField: "lastName",
        editorType: "dxTextBox"
    },
    {
        dataField: "position",
        editorType: "dxTextBox"
    },
    {
        dataField: "birthDate",
        editorType: "dxDateBox"
    },
    {
        dataField: "hireDate",
        editorType: "dxDateBox"
    },
    {
        dataField: "city",
        editorType: "dxTextBox"
    },
    {
        dataField: "email",
        editorType: "dxTextBox"
    },
    {
        dataField: "phone",
        editorType: "dxTextBox"
    }
];
updateFormData = function (e) {
    var fData = e.component.option("formData");
    formDataStructure($.map(fData, function (value, key) {
        return {
            propertyKey: key,
            propertyValue: (value instanceof Date) ? value.toDateString() : value
        }
    }));
}
formDataStructure = ko.observable([]);