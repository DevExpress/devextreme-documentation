$(function () {
    $("#diagram").dxDiagram({
        height: 400,
        simpleView: true,
        toolbox: {
            showSearch: false,
            groups: [{
                category: 'general',
                shapes: ['text', 'rectangle'],
            }]
        },
        pageColor: "#f0f0f0",
        nodes: {
            dataSource: new DevExpress.data.ArrayStore({
                key: 'ID',
                data: projectTasks,
            }),
            keyExpr: "ID",
            parentKeyExpr: "Parent_ID",
            textExpr: "Task_Name",
        },
        propertiesPanel: {
            tabs: [
                {
                    groups: [{ title: 'Object Properties', commands: ['lineStyle', 'lineColor', 'fillColor'] }],
                },
            ],
        },
        defaultItemProperties: {
            textStyle: "font-family: 'Courier New', monospace;"
        }
    });


});

const projectTasks = [
    {
        "ID": 1,
        "Task_Name": "Project Planning",
        "Description": "Define project scope and goals",
    },
    {
        "ID": 2,
        "Parent_ID": 1,
        "Task_Name": "Requirement Analysis",
        "Description": "Gather and document requirements",
    },
    {
        "ID": 3,
        "Parent_ID": 1,
        "Task_Name": "Resource Allocation",
        "Description": "Assign team and resources",
    },
    {
        "ID": 4,
        "Parent_ID": 2,
        "Task_Name": "Design Specifications",
        "Description": "Outline system design",
    },
    {
        "ID": 5,
        "Parent_ID": 3,
        "Task_Name": "Task Scheduling",
        "Description": "Develop project timeline",
    },
    {
        "ID": 6,
        "Parent_ID": 2,
        "Task_Name": "Risk Assessment",
        "Description": "Identify potential risks",
    },
    {
        "ID": 7,
        "Parent_ID": 1,
        "Task_Name": "Kick-off Meeting",
        "Description": "Launch project with stakeholders",
    }
];
