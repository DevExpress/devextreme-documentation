$(function() {
    let form = $("#form").dxForm({
        id: "form",
        formData: employee,
        labelLocation: "top",
        showColonAfterLabel: "false",
        items: [{
            itemType: "group",
            colCount: 2,
            items: [{
                itemType: "group",
                caption: "Employee",
                items: [{
                    dataField: "name",
                    isRequired: true,
                }, "position", "hireDate", {
                    dataField: "officeNumber",
                    validationRules: [{
                        type: "numeric",
                        message: "This field should contain a number"
                    }]
                }]
            }, {
                itemType: "group",
                caption: "Personal Information",
                items: [{
                    itemType: "tabbed",
                    tabPanelOptions: {
                        height: 320
                    },
                    tabs: [{
                        title: "Contacts",
                        items: ["skype", "phone", {
                            dataField: "email",
                            validationRules: [{
                                type: "email",
                                message: "This is not a valid Email"
                            }]
                        }]
                    }, {
                        title: "Note",
                        items: [{
                            dataField: "notes",
                            editorType: "dxTextArea"
                        }]
                    }]
                }]
            }]
        }, {
            itemType: "button",
            horizontalAlignment: "center",
            buttonOptions: {
                text: "Submit the Form",
                useSubmitBehavior: true
            }
        }]
    }).dxForm("instance");

    $("#check-box").dxCheckBox({
        id: "check-box",
        text: "Enable read-only mode",
        onValueChanged: function(e) {
            form.option("readOnly", e.value);
        }
    });

    $("#form-container").on("submit", function(e) {
        setTimeout(() => { 
            alert("Submitted");          
        }, 1000);
        
        e.preventDefault();
    });
});

const employee = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    phone: '+1(213) 555-9392',
    skype: 'jheart_DX_skype',
    email: 'jheart@dx-email.com',
    notes: 'John has been in the Audio/Video industry since 1990.'
};