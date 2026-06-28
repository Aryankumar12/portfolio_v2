import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactFormData, contactSchema } from "./contactSchema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTheme } from "../../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ContactForm = () => {
  const { isDark } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error with backend");
    reset();
    toast.success("Form submitted successfully");
    return response.json();
  };

  const onError = () => toast.error("Check errors before submitting");

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className={`max-w-2xl mx-auto flex flex-col border gap-6 p-8 rounded-xl shadow-sm transition-colors duration-300
        ${isDark ? "bg-zinc-900 border-zinc-700" : "bg-gray-50 border-zinc-200"}`}
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={`text-sm font-semibold text-left ${isDark ? "text-zinc-300" : "text-gray-700"}`}>
          Name
        </label>
        <input
          type="text"
          id="name"
          className={`border w-full px-4 rounded-lg py-2.5 outline-none transition-colors
            ${isDark ? "bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500 focus:border-violet-500" : "bg-white border-zinc-300 text-zinc-900 focus:border-zinc-800"}`}
          placeholder="Aryan"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={`text-sm font-semibold text-left ${isDark ? "text-zinc-300" : "text-gray-700"}`}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`border px-4 py-2.5 rounded-lg w-full outline-none transition-colors
            ${isDark ? "bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500 focus:border-violet-500" : "bg-white border-zinc-300 text-zinc-900 focus:border-zinc-800"}`}
          placeholder="aryandot1@gmail.com"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={`text-sm font-semibold text-left ${isDark ? "text-zinc-300" : "text-gray-700"}`}>
          Message
        </label>
        <textarea
          id="message"
          className={`resize-none border rounded-lg px-4 py-2.5 w-full outline-none transition-colors
            ${isDark ? "bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-500 focus:border-violet-500" : "bg-white border-zinc-300 text-zinc-900 focus:border-zinc-800"}`}
          placeholder="Type your message..."
          {...register("message")}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <div className="flex justify-start mt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex gap-2 items-center">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </span>
          ) : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;