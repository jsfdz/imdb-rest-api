import path from 'path'

export const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/
  const mimetype = fileTypes.test(file.mimetype)
  const extname = fileTypes.test(path.extname(file.originalname))
  if (mimetype && extname) {
    cb(null, true)
  } else {
    console.log('Only this extensions are accepted: .JPG, .JPEG , .PNG or .GIF')
    cb(null, false)
  }
}
