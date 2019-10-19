module.exports = {
  name: 'cars-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/cars/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
