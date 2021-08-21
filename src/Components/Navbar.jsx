export const Navbar = () => {
  return (
    <div className="flex justify-between space-x-2 items-center py-12 px-4 sm:px-12 shadow-md max-h-20 w-full">
      <div>
        <img className="h-16 w-auto" src="/assets/logo.png" alt="logo" />
      </div>
      <div className="hidden md:flex md:flex-wrap space-x-6 text-xl text-gray-700">
        <h2 className="cursor-pointer hover:underline">Order</h2>
        <h2 className="cursor-pointer hover:underline">Support a Cause</h2>
        <h2 className="cursor-pointer hover:underline">Partner With Us</h2>
        <h2 className="cursor-pointer hover:underline">Gallery</h2>
        <h2 className="cursor-pointer hover:underline">Blog</h2>
        <h2 className="cursor-pointer hover:underline">Our Story</h2>
      </div>
      <div className="flex space-x-2 sm:space-x-6 text-gray-700">
        <svg
          className="w-8 h-8 cursor-pointer hover:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          className="w-8 h-8 cursor-pointer hover:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <svg
          className="w-8 h-8 cursor-pointer hover:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
    </div>
  );
};
