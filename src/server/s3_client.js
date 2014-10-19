var AWS = require('aws-sdk'),
    config = require('config'),
    BUCKET_NAME = 'els-videos-alice';

AWS.config.accessKeyId = config.get('aws.access_key_id');
AWS.config.secretAccessKey = config.get('aws.secret_access_key');
AWS.config.region = 'us-west-1';


module.exports = {
    /**
     * Return signed temporary url for the given object
     *
     * @param {String} obj S3 object name or filename
     * @param {Function} cb callback that will take error and url as arguments
     */
    getSignedUrl: function(obj, cb) {
        var s3 = new AWS.S3();
        s3.getSignedUrl('getObject', {
            Bucket: BUCKET_NAME,
            Key: obj
        }, function(err, data) {
            if (err) {
                return cb(err);
            }
            return cb(null, data);
        });
    }
};
