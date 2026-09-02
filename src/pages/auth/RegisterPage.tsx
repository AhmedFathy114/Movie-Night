import { useSignUp } from "@/features/authentication/useSignUp";
import PageLoader from "@/features/Shared/PageLoader";
import { loginWithGoogle } from "@/services/supabase/auth/apiAuth";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SignUpProps = {
  email: string;
  password: string;
  fullName: string;
};

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SignUpProps>();

  const { signUp, isSigning } = useSignUp();

  const navigate = useNavigate();

  function handleLogin(data: SignUpProps) {
    signUp(
      {
        fullName: data.fullName,
        password: data.password,
        email: data.email,
      },
      {
        onSuccess: () => {
          reset();
          navigate("/login");
        },
      },
    );
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Register | Movie Night";
  }, []);

  return (
    <>
      <PageLoader message="Loading Register Page" />
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-4 py-4 text-white">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/60 blur-[120px]" />
        </div>

        {/* Login Card */}
        <div
          className="
          relative z-10
          flex w-full max-w-md flex-col
          rounded-4xl
          border border-white/10
          bg-neutral-950/80
          px-5 py-6
          shadow-2xl
          backdrop-blur-xl

          sm:px-8 sm:py-7
        "
        >
          {/* Header */}
          <div className="flex flex-col items-center">
            <img
              src="/favicon.png"
              alt="Movie Night"
              className="h-16 w-16 object-contain sm:h-18 sm:w-18"
            />

            <h2 className="mt-3 text-center font-roboto text-lg font-semibold capitalize text-neutral-200 sm:text-xl">
              Welcome to Movie Night
            </h2>

            <p className="mt-1 text-center font-roboto text-xs text-neutral-500 sm:text-sm">
              Login to continue watching
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="mt-6 flex flex-col gap-4"
          >
            {/* full name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fullName"
                className="font-roboto text-sm font-medium text-neutral-300"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                placeholder="Ahmed"
                {...register("fullName", {
                  required: "fullName is required",
                })}
                className="
                h-10
                w-full
                rounded-lg
                border-neutral-700
                bg-neutral-900/60
                px-4
                font-roboto
                text-sm
                font-medium
                tracking-wide
                text-neutral-200
                placeholder:text-neutral-600
                outline-none
                focus:border-red-600
                focus:ring-1
                focus:ring-red-500
              "
              />

              {errors.fullName?.message && (
                <p className="text-xs pt-0.5 text-red-500">
                  {errors.fullName.message as string}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-roboto text-sm font-medium text-neutral-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="
                h-10
                w-full
                rounded-lg
                border-neutral-700
                bg-neutral-900/60
                px-4
                font-roboto
                text-sm
                font-medium
                tracking-wide
                text-neutral-200
                placeholder:text-neutral-600
                outline-none
                focus:border-red-600
                focus:ring-1
                focus:ring-red-500
              "
              />

              {errors.email?.message && (
                <p className="text-xs pt-0.5 text-red-500">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="font-roboto text-sm font-medium text-neutral-300"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Please enter a valid Password",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className="
                  h-10
                  w-full
                  rounded-lg
                  border-neutral-700
                  bg-neutral-900/60
                  px-4
                  pr-11
                  font-roboto
                  text-sm
                  text-neutral-200
                  placeholder:text-neutral-600
                  outline-none
                  focus:border-red-600
                  focus:ring-1
                  focus:ring-red-500
                "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="
                absolute right-2.5 top-1/2
                flex size-7
                -translate-y-1/2
                  items-center justify-center
                  rounded-md
                  text-neutral-500
                  transition-colors
                  hover:bg-white/5
                  hover:text-red-500
                  "
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.password?.message && (
                <p className="text-xs pt-0.5 text-red-500">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSigning}
              className="
              h-10
              w-full
              rounded-lg
              bg-red-600
              font-roboto
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-red-700
              hover:shadow-lg
              hover:shadow-red-600/20
              active:scale-[0.98]
              cursor-pointer
            "
            >
              Register
            </button>

            {/* Google Login */}
            <div>
              {/* OR */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-neutral-800" />

                <span className="font-roboto text-[11px] font-medium text-neutral-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-neutral-800" />
              </div>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="
                mt-3
                flex h-10 w-full
                items-center justify-center gap-3
                rounded-lg
                border border-neutral-700
                bg-white
                font-roboto
                text-sm
                font-semibold
                text-neutral-900
                transition-all
                duration-300
                hover:bg-neutral-100
                hover:shadow-lg
                hover:shadow-white/20
                active:scale-[0.98]
                cursor-pointer
              "
              >
                <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M21.35 12.23c0-.79-.07-1.55-.23-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.95 2.94v2.45h3.15c1.85-1.7 2.91-4.21 2.91-7.42Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 21.66c2.64 0 4.86-.87 6.48-2.35l-3.15-2.45c-.87.58-1.98.92-3.33.92-2.56 0-4.73-1.73-5.51-4.06H3.23v2.53A9.79 9.79 0 0 0 12 21.66Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.49 13.72a5.89 5.89 0 0 1 0-3.44V7.75H3.23a9.8 9.8 0 0 0 0 8.5l3.26-2.53Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.22c1.44 0 2.73.5 3.75 1.49l2.81-2.81C16.85 3.35 14.63 2.34 12 2.34a9.79 9.79 0 0 0-8.77 5.41l3.26 2.53C7.27 7.95 9.44 6.22 12 6.22Z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>
          </form>

          <p className="mt-5 text-center font-roboto text-xs text-neutral-500 sm:text-sm">
            You have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-semibold text-red-500 transition-colors hover:text-red-400 cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
