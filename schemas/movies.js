const z = require('zod')
const movieSchema = z.object({
  title: z.string({
    required_error: 'title is required',
    invalid_type_error: 'title must be a string'
  }),
  year: z.number().int().positive().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  genre: z.array(z.enum(['action', 'comedy', 'drama', 'horror', 'romance']))
})

function validateMovie (objeto) {
  return movieSchema.safeParse(objeto)
}

function validatePartialMovie (input) {
  return movieSchema.partial().safeParse(input)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
