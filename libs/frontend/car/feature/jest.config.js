module.exports = {
  name: 'frontend-car-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/car/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
