module.exports = {
  name: 'cars-ui-comment',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cars/ui-comment',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
