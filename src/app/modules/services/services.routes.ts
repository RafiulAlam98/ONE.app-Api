import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { ServiceValidation } from './services.validation'
import { AllServiceController } from './services.controller'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(ServiceValidation.createService),
  AllServiceController.createService,
)

export const AllServiceRoutes = {
  router,
}
