import { generateServerAvatar } from "@/lib/streamData";

function StreamButton({
  name,
  setStreamUrl,
  active,
}: {
  name: string;
  setStreamUrl: () => void;
  full_url: string;
  active: boolean;
}) {
  return (
    <button
      type="button"
      onClick={setStreamUrl}
      className={`
        flex w-38 md:w-40 items-center gap-3 rounded-xl px-2 md:px-3 py-1.5
        cursor-pointer transition-all duration-200
        ${
          active
            ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
            : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
        }
      `}
    >
      <div
        className={`
          flex items-center justify-center rounded-full p-0.5
          ${active ? "bg-red-300" : "bg-stone-500"}
        `}
      >
        <img
          src={generateServerAvatar(name)}
          alt={name}
          className="h-6 w-7  rounded-full"
        />
      </div>

      <p className="truncate font-roboto text-[15px] capitalize">{name}</p>
    </button>
  );
}

export default StreamButton;
