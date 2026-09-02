import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { resetPassword } from "@/services/supabase/auth/apiAuth";

export function useResetPassword() {
  const {
    mutate: Reset,
    isPending: isResetting,
  } = useMutation({
    mutationFn: resetPassword,

    onSuccess: () => {
    toast.success(
      "If this email is registered with a password, you'll receive a reset link. If you signed up with Google, please continue with Google Sign In."
    );
  },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    Reset,
    isResetting,
  };
}