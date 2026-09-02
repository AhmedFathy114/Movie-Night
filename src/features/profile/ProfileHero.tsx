import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateProfile } from "../authentication/useUpdateProfile";
import { UserRound } from "lucide-react";
import { MdDelete } from "react-icons/md";

interface Profile {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string;
}

function ProfileHero({ profile }: { profile: Profile }) {
  const { updateProfile, isUpdateProfile } = useUpdateProfile();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: profile.full_name,
    },
  });

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedImage(file);
  }

  function onSubmit(data: { full_name: string }) {
    updateProfile({
      full_name: data.full_name,
      image: selectedImage,
      userId: profile.id,
    });
    setTimeout(() => {
      setSelectedImage(null);
    }, 1000);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="relative">
              {profile.avatar_url ? (
                <img
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : profile.avatar_url
                  }
                  alt={profile.full_name}
                  className="size-40 rounded-full object-cover ring-2 ring-white/10"
                />
              ) : selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt={profile.full_name}
                  className="size-40 rounded-full object-cover ring-2 ring-white/10"
                />
              ) : (
                <UserRound className="size-30" />
              )}

              <label
                htmlFor="avatar"
                className="
                absolute bottom-1 right-1
                flex size-10 cursor-pointer items-center justify-center
                rounded-full bg-red-600
                text-white
                transition-colors hover:bg-red-700
              "
              >
                ✎
              </label>

              <input
                id="avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />
            </div>

            {selectedImage && (
              <div className="text-center -mb-3 -mt-2.5">
                <p className="text-xs text-neutral-500">Selected image</p>

                <p className="mt-1 max-w-60 truncate text-sm text-red-500 flex item-center justify-center gap-2 flex-wrap">
                  <span className="line-clamp-1">{selectedImage.name} </span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="cursor-pointer pt-1.25"
                  >
                    <MdDelete size={16}/>
                  </button>
                </p>
              </div>
            )}

            <div className="text-center">
              <h2 className="text-xl font-bold text-white font-roboto">
                {profile.full_name}
              </h2>

              <p className="mt-1 text-sm text-gray-400 font-roboto">
                {profile.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/3 p-6">
            <h2 className="text-2xl font-bold text-white font-roboto">
              Profile Information
            </h2>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Full Name
              </label>

              <input
                type="text"
                defaultValue={profile.full_name}
                {...register("full_name", {
                  required: "Full name is required",
                })}
                className="
                w-full rounded-xl border border-white/10
                bg-black/30 px-4 py-3
                text-white outline-none
                  focus:border-red-500
                  "
              />

              {errors.full_name?.message && (
                <p className="text-xs pt-0.5 text-red-500">
                  {errors.full_name.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Email</label>

              <input
                type="email"
                value={profile.email}
                disabled
                className="
                    w-full cursor-not-allowed rounded-xl
                    border border-white/10
                    bg-black/20 px-4 py-3
                    text-gray-500 outline-none
                  "
              />
            </div>

            <button
              type="submit"
              disabled={isUpdateProfile}
              className="
                mt-2 rounded-xl bg-red-600 px-6 py-3
                font-semibold text-white
                  transition-colors hover:bg-red-700
                "
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProfileHero;
