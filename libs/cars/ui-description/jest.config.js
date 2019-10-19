module.exports = {
  name: 'cars-ui-description',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cars/ui-description',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
