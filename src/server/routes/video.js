var express = require('express'),
    router = express.Router(),
    models = require('../../../models');

router.get('/', function(req, res, next) {
    var AWS = require('aws-sdk'),
        config = require('config'),
        s3;

    AWS.config.accessKeyId = config.get('aws.access_key_id');
    AWS.config.secretAccessKey = config.get('aws.secret_access_key');
    AWS.config.region = 'us-west-1';

    var OBJ_KEY = 'beginner_1_4.mp4';

    s3 = new AWS.S3();

    s3.getSignedUrl('getObject', {Bucket: 'esl-videos-alice', Key: OBJ_KEY}, function(err, data) {
        res.send({
            link: data
        });
    });
});

module.exports = router;
