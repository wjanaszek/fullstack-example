module.exports = {
  name: 'frontend-car-ui-comment',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/car/ui-comment',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
