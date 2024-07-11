import { useForm } from "react-hook-form";
import { signUpSchema } from "../schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthProvider";

type SignUpProps = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    resolver: zodResolver(signUpSchema),
  });
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const onSubmitHandler = (data: SignUpProps) => {
    navigate("/");
    signIn(data);
  };

  return (
    <form
      className=" w-full mt-10 max-w-sm mx-auto px-4 shadow-lg dark:bg-gray-800 py-6  rounded-md"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <motion.h2
        initial={{ opacity: "0", y: 20 }}
        animate={{ opacity: "100%", y: 0 }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.3 }}
        className="text-2xl text-gray-900 dark:text-gray-200 font-semibold mb-8"
      >
        Sign Up
      </motion.h2>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.5 }}
          htmlFor="name"
          className="self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </motion.label>
        <input
          id="name"
          {...register("name")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.6 }}
          htmlFor="email"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </motion.label>
        <input
          id="email"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-5 flex flex-col justify-center items-center">
        <motion.label
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.7 }}
          htmlFor="password"
          className="block self-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </motion.label>
        <input
          id="password"
          {...register("password")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div className="flex justify-center ">
        <motion.button
          initial={{ opacity: "0", y: 20 }}
          animate={{ opacity: "100%", y: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.3, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="bg-blue-600 w-full text-white py-2 px-4 rounded mb-2"
        >
          Login
        </motion.button>
      </div>
    </form>
  );
}
