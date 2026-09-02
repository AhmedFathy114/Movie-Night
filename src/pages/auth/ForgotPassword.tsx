import { useResetPassword } from "@/features/authentication/useResetPassword";
import PageLoader from "@/features/Shared/PageLoader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();
  const { Reset, isResetting } = useResetPassword();

  function handleForget({ email }: { email: string }) {
    Reset(email, { onSuccess: () => reset() });
  }
  return (
    <>
      <PageLoader message="Loading Forget password Page" />
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

          <form
            onSubmit={handleSubmit(handleForget)}
            className="mt-6 flex flex-col gap-4"
          >
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

            <button
              type="submit"
              disabled={isResetting}
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
              Forget
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-neutral-800" />
            </div>
          </form>

          {/* Register */}
          <p className="mt-5 text-center font-roboto text-xs text-neutral-500 sm:text-sm">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="font-semibold text-red-500 transition-colors hover:text-red-400 cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
