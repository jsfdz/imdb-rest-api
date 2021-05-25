import { Router } from 'express'
import multer from 'multer'
import { fileFilter } from '../utils/fileFilter.utils'
import { getAllDirectors, getDirector, createDirector, updateDirector, deleteDirector } from '../controllers/directors.controllers'

const router = Router()
const storage = multer.diskStorage({
  destination: 'uploads/directors',
  filename: (req, file, cb) => cb(null, new Date().getTime() + '-' + file.originalname)
})
const upload = multer({ storage, fileFilter })

router
  .get('/', getAllDirectors)
  .get('/:id', getDirector)
  .post('/', upload.single('image'), createDirector)
  .put('/:id', upload.single('image'), updateDirector)
  .delete('/:id', deleteDirector)

export default router
