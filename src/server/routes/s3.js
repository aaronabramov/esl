var express = require('express'),
    router = express.Router(),
    S3Client = require('../s3_client.js');

router.get('/:id', function(req, res, next) {
    S3Client.getSignedUrl(req.params.id, function(err, link) {
        if (err) {
            return next(err);
        };

        res.send({
            link: link
        });
    });
});

module.exports = router;
