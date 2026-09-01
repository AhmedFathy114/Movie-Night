import { useProfile } from "@/features/authentication/useProfile";
import { useUser } from "@/features/authentication/useUser";
import ProfileHero from "@/features/profile/ProfileHero";
import PageLoader from "@/features/Shared/PageLoader";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { isAuthenticated, user, isPending: isPending2 } = useUser();
  const { profile, isPending } = useProfile(user?.id ?? "");

  if (isPending || isPending2) return <PageLoader message="Loading Profile" />;

  if (!isAuthenticated) {
    navigate("/home", { replace: true });
  }

  return (
    <>
      <PageLoader message="Loading Profile" />
      <section
        id="AlooyTv"
        className="
        relative
        mx-3
        mt-20
        py-4
        sm:mx-4
        sm:py-6
        md:mx-8
        md:py-8
        lg:mx-40
      "
      >
        <div className="mb-4 flex items-center justify-between gap-3 md:mb-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className="
              h-8
              w-1
              rounded-full
              bg-red-700
              shadow-lg
              shadow-red-700/50
              md:h-15
              md:w-1.5
            "
            />

            <h2
              className="
              text-3xl
              font-bold
              tracking-wide
              text-white
              drop-shadow-lg
              md:text-4xl
              lg:text-5xl
              lg:tracking-widest
            "
            >
              profile
            </h2>
          </div>
        </div>

        <div
          className="
          -mt-2
          ml-3
          h-1
          w-30
          rounded-full
          bg-linear-to-r
          from-red-700
          to-transparent
          lg:ml-7
        "
        />

        <ProfileHero profile={profile} />
      </section>
    </>
  );
}

export default Profile;
