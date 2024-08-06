const { remove } = require("./../../lib/config/storage.config");
const uploadMultiFile = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send("No files uploaded.");
    }
    res.status(200).json({ images: req.files });
  } catch (error) {
    return next(error);
  }
};

const deleteFileById = async (req, res, next) => {
  try {
    const fileId = req.params.id;
    remove(req, fileId, (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.status(200).send("File deleted successfully.");
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  uploadMultiFile,
  deleteFileById,
};
