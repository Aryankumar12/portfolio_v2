import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactFormData, contactSchema } from "./contactSchema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch(`${API_URL}/api/contact`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    } )
    if(!response.ok){
      throw new Error("ERror with backend");
      
    }
    reset();
    toast.success("Form submitted successfully");
    return response.json();
  };

  const onError = ()=>{
    toast.error("Check error before submiting")
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="max-w-2xl mx-auto flex flex-col border-2 bg-gray-100 gap-6 p-8 rounded-xl shadow-sm "
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold text-left text-gray-700"
        >
          Name
        </label>{" "}
        <input
          type="text"
          id="name"
          className="border-2 w-full px-4 rounded-lg bg-white py-2.5 outline-none focus:border-zinc-800 transition-colors "
          placeholder="aryan"
          
          {...register("name")}
        />
        {errors.name  && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}
      </div>
      <div className="flex  flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-left text-gray-700"
        >
          Email
        </label>{" "}
        <input
          type="email"
          id="email"
          className="border-2 px-4 py-2.5 rounded-lg w-full  outline-none bg-white focus:border-zinc-800 transition-colors"
          placeholder="aryandot1@gmail.com"
          
          {...register("email")}
        />
              {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}

      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-left text-gray-700"
        >
          Message
        </label>{" "}
        <textarea
          id="message"
          className="resize-none border-2 rounded-lg px-4 py-2.5 w-full outline-none bg-white focus:border-zinc-800 transition-colors "
          {...register("message")}
          placeholder="type message"
        ></textarea>
      </div>

      <div className="flex justify-start mt-2">
        <Button type="submit"  disabled = {isSubmitting}>{isSubmitting ? ( <span className="flex gap-2 items-center">
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        Sending...
      </span>) : "Submit"}</Button>
      </div>
    </form>
  );
};

export default ContactForm;
