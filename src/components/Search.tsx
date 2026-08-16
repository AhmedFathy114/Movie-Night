
function Search() {
  return (
    <div className="relative w-100">
      <input
        type="text"
        placeholder="Search movies, tv shows..."
        className={`
          w-full
          rounded-lg
          border
          border-neutral-400
          px-4
          py-2
          pr-12
          text-neutral-200
          placeholder:text-neutral-400
          outline-none
          transition-colors
          duration-200
          focus:border-red-700
          focus:ring-0
          md:block
          hidden
          bg-neutral-900/10
          backdrop-blur-2xl
          hover:backdrop-blur-xl
          hover:bg-neutral-600/50
          `}
          />

      <svg
        className="
        sm:pointer-events-none
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        sm:text-neutral-400
        text-neutral-200
        cursor-pointer
        "
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
      </svg>
    </div>
  );
}

export default Search;
