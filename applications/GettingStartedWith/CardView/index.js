$(() => {
  $('#card-view').dxCardView({
    dataSource: employees,
    width: 1000,
    columns: [
      {
        dataField: 'FullName',
        allowHiding: false,
      },
      'Position',
      'Email',
    ],
    keyExpr: 'ID',
    allowColumnReordering: true,
    cardsPerRow: 'auto',
    cardMinWidth: 200,
    paging: {
      pageSize: 3,
    },
    pager: {
      showInfo: true,
      showNavigationButtons: true,
      showPageSizeSelector: true,
    },
    selection: {
      mode: 'multiple',
    },
    headerFilter: {
      visible: true,
    },
    searchPanel: {
      visible: true,
    },
    columnChooser: {
      enabled: true,
      height: 340,
      mode: 'select',
      position: {
        my: 'right top',
        at: 'right bottom',
        of: '.dx-cardview-column-chooser-button',
      },
      selection: {
        selectByClick: true,
      },
    },
  });
});

const employees = [
  {
    ID: 1,
    FullName: 'John Heart',
    Position: 'CEO',
    Picture: 'images/employees/01.png',
    Department: 'Management',
    Phone: '+1 (213) 555-9392',
    Email: 'jheart@dx-email.com',
  },
  {
    ID: 2,
    FullName: 'Samantha Bright',
    Position: 'COO',
    Picture: 'images/employees/30.png',
    Department: 'Management',
    Phone: '+1 (213) 555-2858',
    Email: 'samanthab@dx-email.com',
  },
  {
    ID: 3,
    FullName: 'Arthur Miller',
    Position: 'CTO',
    Picture: 'images/employees/10.png',
    Department: 'Management',
    Phone: '+1 (310) 555-8583',
    Email: 'arthurm@dx-email.com',
  },
  {
    ID: 4,
    FullName: 'Robert Reagan',
    Position: 'CMO',
    Picture: 'images/employees/03.png',
    Department: 'Management',
    Phone: '+1 (818) 555-2387',
    Email: 'robertr@dx-email.com',
  },
  {
    ID: 5,
    FullName: 'Greta Sims',
    Position: 'HR Manager',
    Picture: 'images/employees/04.png',
    Department: 'Human Resources',
    Phone: '+1 (818) 555-6546',
    Email: 'gretas@dx-email.com',
  },
  {
    ID: 6,
    FullName: 'Brett Wade',
    Position: 'IT Manager',
    Picture: 'images/employees/05.png',
    Department: 'IT',
    Phone: '+1 (626) 555-0358',
    Email: 'brettw@dx-email.com',
  },
];
