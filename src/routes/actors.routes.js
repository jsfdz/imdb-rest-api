import { Router } from 'express'
import multer from 'multer'
import { fileFilter } from '../utils/fileFilter.utils'
import { getAllActors, getActor, createActor, updateActor, deleteActor } from '../controllers/actors.controllers'

const router = Router()
const storage = multer.diskStorage({
  destination: 'uploads/actors',
  filename: (req, file, cb) => cb(null, new Date().getTime() + '-' + file.originalname)
})
const upload = multer({ storage, fileFilter })

router
  .get('/', getAllActors)
  .get('/:id', getActor)
  .post('/', upload.single('image'), createActor)
  .put('/:id', upload.single('image'), updateActor)
  .delete('/:id', deleteActor)

export default router
