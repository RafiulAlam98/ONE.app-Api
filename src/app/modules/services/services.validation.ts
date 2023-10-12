import { z } from 'zod'

const createService = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
})

export const ServiceValidation = {
  createService,
}
