module.exports = {
  name: 'frontend-car-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/car/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
