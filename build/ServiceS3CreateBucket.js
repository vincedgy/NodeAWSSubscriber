"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var AWS = require("aws-sdk");
exports.serviceS3CreateBucket = function (callback) {
    // Les noms de compartiments doivent être uniques pour tous les utilisateurs S3
    var myBucket = 'hsbcinnovationlab4-data';
    var myKey = 'test.txt';
    function create(error, callback) {
        var s3 = new AWS.S3();
        s3.createBucket({
            Bucket: myBucket
        }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var params = {
                    Bucket: myBucket,
                    Key: myKey,
                    Body: 'Hello!'
                };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Successfully uploaded data to myBucket/myKey");
                    }
                });
            }
        });
    }
};
