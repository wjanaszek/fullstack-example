module.exports = {
  name: 'ride-or-die',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ride-or-die',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
