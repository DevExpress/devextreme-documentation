employeeData = {
    FirstName: "John",
    LastName: "Heart",
    Position: "CEO",
    BirthDate: "1964/03/16",
    HireDate: "1995/01/15",
    City: "Los Angeles",
    Email: "jheart@dx-email.com",
    Phone: "+1 (213) 555-9392"
};
customizeItem = function (item) {
    item.label = {
        location: "top"
    };
    if (item.dataField === "Email" || item.dataField === "Phone")
        item.colSpan = 3;
    if (item.dataField === "Phone")
        item.helpText = "Example: +1 (111) 111-1111";
};