/**
 * 
 */
import AWS = require('aws-sdk'); 

// Les noms de compartiments doivent être uniques pour tous les utilisateurs S3
var myBucket = 'hsbcinnovationlab4-data';
var myKey = 'test.txt';

var s3 = new AWS.S3();
s3.createBucket({
    Bucket: myBucket
}, function (err: any, data: any) {
    if (err) {
        console.log(err);
    } else {
        let params = {
            Bucket: myBucket,
            Key: myKey,
            Body: 'Hello!'
        };
        s3.putObject(params, function (err: any, data: any) {
            if (err) {
                console.log(err)
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    }
});