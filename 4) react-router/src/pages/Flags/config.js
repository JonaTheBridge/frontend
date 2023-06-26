export default [
  {
    id: 1,
    name: 'Spain',
    orientation: 'horizontal',
    lines: [
      { color: 'rgb(255, 0, 0)' },
      { color: 'rgb(255, 255, 0)' },
      { color: 'rgb(255, 255, 0)' },
      { color: 'rgb(255, 0, 0)' }
    ]
  },
  {
    id: 2,
    name: 'Germany',
    orientation: 'horizontal',
    lines: [
      { color: 'rgb(0, 0, 0)' },
      { color: 'rgb(255, 0, 0)' },
      { color: 'rgb(255, 255, 0)' },
    ]
  },
  {
    id: 3,
    name: 'France',
    orientation: 'vertical',
    lines: [
      { color: 'rgb(0, 0, 255)' },
      { color: 'rgb(255, 255, 255)' },
      { color: 'rgb(255, 0, 0)' },
    ]
  },
  {
    id: 4,
    name: 'Japan',
    orientation: 'vertical',
    lines: [
      { color: 'rgb(255, 255, 255)',
        circle: {
          horizontalPosition: 'center',
          verticalPosition: 'center',
          color: 'rgb(255, 0, 0)',
          size: '50px'
        }
      },
    ],
  },
  {
    id: 5,
    name: 'Argentina',
    orientation: 'horizontal',
    lines: [
      { color: 'rgb(117, 170, 219)' },
      { color: 'rgb(255, 255, 255)',
        circle: {
          horizontalPosition: 'center',
          verticalPosition: 'center',
          color: 'rgb(240, 240, 0)',
          size: '20px'
        }
      },
      { color: 'rgb(117, 170, 219)' },
    ],
  }
];
