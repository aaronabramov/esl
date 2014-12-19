var express = require('express'),
    router = express.Router(),
    S3Client = require('../s3_client.js');

router.use('/*', function(req, res, next) {
    var id = req.params[0];

    S3Client.getSignedUrl(id, function(err, link) {
        if (err) {
            return next(err);
        };

        res.send({
            link: link
        });
    });
});

module.exports = router;
