import { useUpdateUser } from "@/features/authentication/useUpateUser";
import PageLoader from "@/features/Shared/PageLoader";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface resetProps {
  email: string;
  password: string;
  confirm_password: string;
}

function ResetPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm<resetProps>();

  const { updatePassword, isUpdating } = useUpdateUser();

  function handleReset(data: resetProps) {
    updatePassword(data.password, { onSuccess: () => reset() });
  }

  useEffect(() => {
    document.title = `Update-Password | Movie Night`;
  }, []);

  return (
    <>
      <PageLoader message="Loading reset password Page" />
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-4 py-4 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/60 blur-[120px]" />
        </div>

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

          <form
            onSubmit={handleSubmit(handleReset)}
            className="mt-6 flex flex-col gap-4"
          >
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

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirm_password"
                className="font-roboto text-sm font-medium text-neutral-300"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="confirm_password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("confirm_password", {
                    required: "Please enter a valid Password",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Must match with password",
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
              {errors.confirm_password?.message && (
                <p className="text-xs pt-0.5 text-red-500">
                  {errors.confirm_password.message as string}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isUpdating}
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
              Update
            </button>
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

export default ResetPage;
