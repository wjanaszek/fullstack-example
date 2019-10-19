module.exports = {
  name: 'shared-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
