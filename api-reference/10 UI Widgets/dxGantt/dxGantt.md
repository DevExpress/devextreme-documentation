---
id: dxGantt
module: ui/gantt
export: default
inherits: Widget
---
---
##### shortDescription
[tags] ctp

The **Gantt** is a widget that displays the task flow and dependencies between tasks.

#include common-ctp-note with {
    component: "Gantt"
}

##### widgettree
tasks: {
    dataSource: [{
        "id": 1,
        "title": "Market Analysis",
        "start": "2019-01-05",
        "end": "2019-01-13",
        "progress": 100
    }, {
        "id": 2,
        "title": "Feature Planning",
        "start": "2019-01-13",
        "end": "2019-02-02",
        "progress": 100
    }, {
        "id": 3,
        "title": "Implementation",
        "start": "2019-02-02",
        "end": "2019-03-21",
        "progress": 35
    }, {
        "id": 4,
        "title": "Demos",
        "start": "2019-02-28",
        "end": "2019-03-21",
        "progress": 0
    }, {
        "id": 5,
        "title": "Docs",
        "start": "2019-02-28",
        "end": "2019-03-21",
        "progress": 0
    }, {
        "id": 6,
        "title": "Testing",
        "start": "2019-03-21",
        "end": "2019-04-05",
        "progress": 0
    }, {
        "id": 7,
        "title": "Bug Fixing",
        "start": "2019-03-21",
        "end": "2019-04-15",
        "progress": 0
    }, {
        "id": 8,
        "title": "Feature Release",
        "start": "2019-04-15",
        "end": "2019-04-15"
    }]
},
columns: ["title"],
taskListWidth: 140

##### lib
dx-gantt.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
