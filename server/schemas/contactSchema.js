import z from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .email("Please enter a valid email")
    .max(254, "Email is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),

  phone: z.string().trim().max(30).optional(),

  subject: z.string().trim().max(150).optional(),
});

export default contactSchema;
