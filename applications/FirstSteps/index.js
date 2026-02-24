$(() => {
  $("#progress").dxProgressBar({
    min: 0,
    max: 100,
    value: 50,
    showStatus: true,
    statusFormat: (v) => `Completed: ${v * 100}%`
  });

  const tasks = [
    { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
    { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
  ];

  const grid = $("#task-grid")
    .dxDataGrid({
      dataSource: tasks,
      keyExpr: "id",
      columns: [{
        dataField: "task",
        cellTemplate(element, data) {
          if (!data.value) {
            return $(element)
              .text('Enter a title...')
              .css('color', 'var(--dx-color-icon)');
          } else {
            return $(element).text(data.value);
          }
        }
      }, {
        dataField: "dueDate",
        cellTemplate(element, data) {
          if (!data.value) {
            return $(element)
              .text('Enter a date...')
              .css('color', 'var(--dx-color-icon)');
          } else {
            return $(element).text(DevExpress.localization.formatDate(data.value, 'shortDate'));
          }
        }
      }, {
        dataField: "done",
        dataType: 'boolean',
        calculateCellValue(row) {
          return !!row.done;
        }
      }, {
        type: 'buttons',
        headerCellTemplate(el, data) {
          return $('<div>').dxButton({
            icon: 'add',
            stylingMode: 'text',
            onClick() {
              data.component.addRow();
            }
          })
        }
      }],
      editing: {
        mode: "cell",
        allowUpdating: true,
        allowAdding: true,
        allowDeleting: true,
        newRowPosition: "last"
      },
      toolbar: {
        visible: false,
      },
      onRowUpdated: updateProgress,
      onRowInserted: updateProgress,
      onRowRemoved: updateProgress
    })
    .dxDataGrid("instance");

  function updateProgress() {
    const all = tasks.length;
    const completed = tasks.filter((t) => t.done).length;
    $("#progress")
      .dxProgressBar("instance")
      .option("value", Math.round((completed / all) * 100));
  }
});
