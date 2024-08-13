const { google } = require("googleapis");
const { Status } = require("./../utils/enum/status.enum");
class DriveStorage {
  constructor(opts) {
    this.opts = opts;
    const oauth2Client = new google.auth.OAuth2(opts);
    oauth2Client.setCredentials({
      refresh_token: opts.credentials.refresh_token,
    });
    this.drive = google.drive({ version: "v3", auth: oauth2Client });
  }

  _handleFile(
    req,
    { mimetype: mimeType, originalname: name, stream: body },
    cb
  ) {
    this._getFolderByName().then((folderId) => {
      this.drive.files
        .create(
          {
            resource: {
              name: name,
              mimeType: mimeType,
              parents: [folderId],
            },
            media: {
              mimeType,
              body,
            },
          },
          { maxRedirects: 0 }
        )
        .then(({ data: { id: id, name: name } }) => {
          this.drive.permissions.create({
            fileId: id,
            resource: {
              type: "anyone",
              role: "reader",
            },
          });
          cb(null, {
            uid: id,
            name: name,
            status: "Done",
            url: `${this.opts.google_drive_url_prefix}${id}`,
          });
        })
        .catch((err) => cb(err, null));
    });
  }

  _removeFile(_, fileId, cb) {
    this.drive.files.delete(
      {
        fileId,
      },
      cb
    );
  }
  _getFolderByName = async () => {
    try {
      const response = await this.drive.files.list({
        q: `mimeType='application/vnd.google-apps.folder' and name='${this.opts.google_drive_storage_folder}'`,
        fields: "files(id, name)",
      });

      const folder = response.data.files[0];
      if (folder) {
        return folder.id;
      } else {
        const newFolder = await this.drive.files.create({
          resource: {
            name: this.opts.google_drive_storage_folder,
            mimeType: "application/vnd.google-apps.folder",
          },
          fields: "id, name",
        });
        return newFolder.data.id;
      }
    } catch (error) {
      const newFolder = await this.drive.files.create({
        resource: {
          name: this.opts.google_drive_storage_folder,
          mimeType: "application/vnd.google-apps.folder",
        },
        fields: "id, name",
      });
      return newFolder.data.id;
    }
  };
}
module.exports = (opts) => {
  return new DriveStorage(opts);
};
