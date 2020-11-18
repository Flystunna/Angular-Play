export interface Project {
    name: string;
    startDate: Date;
    dueDate: Date;
    unit: string;
    unitSim: string;
    manager: string;
    staff: string;
  }
  
  export const projects: Project[] = [
    {
      name: 'Fraud Assessment',
      startDate: new Date(2020, 7, 14),
      dueDate: new Date(2020, 8, 14),
      unitSim: 'AD',
      unit: 'Artificial Data',
      manager: 'Demi Madaro',
      staff: '4',
    },
    {
      name: 'Project Audit',
      startDate: new Date(2020, 7, 10),
      dueDate: new Date(2020, 8, 22),
      unitSim: 'BA',
      unit: 'Business Analytics',
      manager: 'Adele Olaluyi',
      staff: '3',
    },
    {
      name: 'Fintech Analytics',
      startDate: new Date(2020, 6, 4),
      dueDate: new Date(2020, 8, 28),
      unitSim: 'BA',
      unit: 'Business Analytics',
      manager: 'Adele Olaluyi',
      staff: '2',
    },
  
    {
      name: 'BC Website',
      startDate: new Date(2020, 7, 7),
      dueDate: new Date(2020, 9, 5),
      unitSim: 'DC',
      unit: 'Deep Consulting',
      manager: 'Bada Irine',
      staff: '1',
    },
    {
      name: 'Dump Workshop',
      startDate: new Date(2020, 6, 14),
      dueDate: new Date(2020, 9, 2),
      unitSim: 'DC',
      unit: 'Deep Consulting',
      manager: 'Bada Irine',
      staff: '6',
    },
    {
      name: 'Optimization Flow',
      startDate: new Date(2020, 7, 22),
      dueDate: new Date(2020, 8, 16),
      unitSim: 'BA',
      unit: 'Business Analytics',
      manager: 'Rachael Yemisi',
      staff: '3',
    },
  
    {
      name: 'Dump Workshop',
      startDate: new Date(2020, 6, 14),
      dueDate: new Date(2020, 8, 17),
      unitSim: 'DC',
      unit: 'Deep Consulting',
      manager: 'Bada Irine',
      staff: '5',
    },
  ];
  