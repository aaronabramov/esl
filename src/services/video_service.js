var VideoService = {
    getVideoLink: function(name) {
        // var AWS = require('aws-sdk'),
        //     config = require('config'),
        //     bucket = 'esl-videos-alice',
        //     s3;

        // AWS.config.accessKeyId = config.get('aws.access_key_id');
        // AWS.config.secretAccessKey = config.get('aws.secret_access_key');
        // AWS.config.region = 'us-west-1';

        // s3 = new AWS.S3();

        return new Promise(function(resolve, reject) {
            // s3.getSignedUrl('getObject', {Bucket: bucket, Key: name}, function(err, data) {
            //     if(err) {
            //         reject(err);
            //     }

            //     resolve(data);
            // });
                resolve('www.example.com/ajsdfasdfasdf');
        });
    }
};

module.exports = VideoService;
