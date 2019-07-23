const config = require("config");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: config.get("awsSecretAccessKey"),
  accessKeyId: config.get("awsAccessKey"),
  region: "sa-east-1"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "comunacrespo",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "META_DATA" });
    },
    key: function(req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now().toString());
    }
  })
});

module.exports = upload;
