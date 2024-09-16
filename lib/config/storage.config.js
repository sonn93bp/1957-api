const multer = require("multer");
const DriveStorage = require("./googledrive.config");
const { google_drive_config } = require("./env.config");

const diskStorage = multer.diskStorage({
  destination: 'statics/images/',
  filename: (req, file, cb) => {
    // Generate your custom filename here
    cb(null, file.originalname);
  },
});

const uploadGoogleDrive = multer({
  storage: DriveStorage(google_drive_config),
  limits: { fileSize: 10 * 1024 * 1024 },
});


const uploadLocal = multer({
  storage: diskStorage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const remove = (req, google_file_id, cb) => {
  const storage = DriveStorage(google_drive_config);
  storage._removeFile(req, google_file_id, cb);
};

module.exports = {
  uploadGoogleDrive,
  remove,
  uploadLocal,
};
