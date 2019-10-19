module.exports = {
  name: 'cars-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cars/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
