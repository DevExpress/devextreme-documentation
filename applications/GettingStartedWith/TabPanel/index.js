$(function () {
    const tabPanel = $("#tabPanel")
        .dxTabPanel({
            loop: true,
            animationEnabled: true,
            swipeEnabled: true,
            selectedIndex: 0,
            onSelectionChanged: function (e) {
                const selectedTab = e.addedItems[0].title;
                tabSwitcherRadioGroup.option("value", selectedTab);
            },
            items: [
                {
                    title: "Employee",
                    icon: "floppy",
                    template: function () {
                        return $("<div id='form'>").dxForm({
                            formData: employeeData,
                            items: [
                                {
                                    dataField: "name",
                                    label: {
                                        template: labelTemplate("user"),
                                    },
                                },
                                {
                                    dataField: "position",
                                    label: {
                                        template: labelTemplate("group"),
                                    },
                                },
                                "hireDate",
                                {
                                    dataField: "officeNumber",
                                    label: {
                                        template: labelTemplate("info"),
                                    },
                                },
                            ],
                        });
                    },
                },
                {
                    title: "Notes",
                    icon: "comment",
                    template: function () {
                        return $("<div id='textArea'>").dxTextArea({
                            value: employeeData.notes,
                        });
                    },
                },
                {
                    title: "Role",
                    icon: "isnotblank",
                    badge: "new",
                    template: function () {
                        return $("<div id='radioGroup'>").dxRadioGroup({
                            items: employeeData.roles,
                            value: employeeData.roles[0],
                        });
                    },
                },
            ],
        })
        .dxTabPanel("instance");

    const tabSwitcherRadioGroup = $("#radioGroupSwitcher")
        .dxRadioGroup({
            items: tabNames,
            value: tabNames[0],
            layout: "horizontal",
            onValueChanged: function (e) {
                const selectedTabIndex = tabNames.indexOf(e.value);
                tabPanel.option("selectedIndex", selectedTabIndex);
            },
        })
        .dxRadioGroup("instance");

    function labelTemplate(iconName) {
        return (data) =>
            $(`<div><i class='dx-icon dx-icon-${iconName}'></i>${data.text}</div>`);
    }
});

const employeeData = {
    name: "John Heart",
    position: "CEO",
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes: "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.",
    roles: ["Chief Officer", "Administrator", "Manager"],
};

const tabNames = ["Employee", "Notes", "Role"];
