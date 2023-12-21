$(() => {
    $('#gantt').dxGantt({
        height: 250,
        width: 800,
        rootValue: -1,
        tasks: {
            dataSource: tasks,
        },
        dependencies: {
            dataSource: dependencies,
        },
        resources: {
            dataSource: resources,
        },
        resourceAssignments: {
            dataSource: resourceAssignments,
        },
        columns: [{
            dataField: 'title',
            caption: 'Subject',
            width: 300,
        }, {
            dataField: 'start',
            caption: 'Start Date',
        }, {
            dataField: 'end',
            caption: 'End Date',
        }],
    });
});

const tasks = [{
    id: 1,
    parentId: -1,
    title: 'Software Development',
    start: new Date('2019-02-21T05:00:00.000Z'),
    end: new Date('2019-07-04T12:00:00.000Z'),
    progress: 31,
}, {
    id: 2,
    parentId: 1,
    title: 'Scope',
    start: new Date('2019-02-21T05:00:00.000Z'),
    end: new Date('2019-02-26T09:00:00.000Z'),
    progress: 60,
}, {
    id: 3,
    parentId: 2,
    title: 'Determine project scope',
    start: new Date('2019-02-21T05:00:00.000Z'),
    end: new Date('2019-02-21T09:00:00.000Z'),
    progress: 100,
}];

const dependencies = [{
    id: 1,
    predecessorId: 1,
    successorId: 2,
    type: 0,
}, {
    id: 2,
    predecessorId: 2,
    successorId: 3,
    type: 0,
}];

const resources = [{
    id: 1,
    text: 'Management',
}];

const resourceAssignments = [{
    id: 0,
    taskId: 3,
    resourceId: 1,
}];
