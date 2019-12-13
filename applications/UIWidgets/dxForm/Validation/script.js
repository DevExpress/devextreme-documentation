employeeData = {
    FirstName: "John1",
    LastName: "",
    Position: "",
    OfficeNo: "901",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    City: "Los Angeles",
    Phone: "+1(213) 555-9392",
    Email: "jheart@dx-email.com"
};
customizeItem = function (item) {
    switch (item.dataField) {
        case "FirstName":
            item.validationRules = [
                    {
                        type: "required",
                        message: "First Name is required"
                    },
                    {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "First Name should not contain digits"
                    }
            ]
            break;
        case "LastName":
            item.validationRules = [
                    {
                        type: "required",
                        message: "Last Name is required"
                    },
                    {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "Last Name should not contain digits"
                    }
            ]
            break;
        case "Position":
            item.validationRules = [
                {
                    type: "required",
                    message: "Position is required"
                }
            ]
            break;
    }
};
$(function () {
    $("#form").dxForm({
        formData: employeeData,
        colCount: 3,
        labelLocation: 'top',
        showValidationSummary: true,
        customizeItem: customizeItem
    });
    $("#form").dxForm("instance").validate();
});