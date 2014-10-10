AWS = require('aws-sdk'),
config = require('config');

AWS.config.accessKeyId = config.get('aws.access_key_id');
AWS.config.secretAccessKey = config.get('aws.secret_access_key');
AWS.config.region = 'us-west-1';

var s3 = new AWS.S3();

// s3.listBuckets(function(err, data) {
//     console.log(err, data);
// });

var OBJ_KEY = 'beginner_1_4.mp4';

// s3.listObjects({Bucket: 'esl-videos-alice'}, function(err, data) {
//     console.log(err, data);
// });

s3.getSignedUrl('getObject', {Bucket: 'esl-videos-alice', Key: OBJ_KEY}, function(err, data) {
    console.log(err, data);
});
