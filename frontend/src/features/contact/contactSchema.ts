import * as z from 'zod';


const contactSchema = z.object({
    name: z.string().min(2, "Name must be atleast 2 character long"),
    email: z.string().email("Please enter a vlid email"),
    message: z.string()
})

export type ContactFormData  = z.infer<typeof contactSchema>;



export {contactSchema};