import { useAuth } from "../context/AuthProvider";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  return (
    <div className="w-full flex items-center justify-end h-20 gap-2  fixed  inset-y-0 z-50 bg-white dark:bg-gray-900">
      <button
        onClick={toggleTheme}
        className="  mr-4 mt-4 p-2 rounded bg-gray-800 dark:bg-gray-100 dark:text-gray-900 text-white font-medium"
      >
        {theme}
      </button>
      {user && (
        <button
          onClick={signOut}
          className="mr-4 mt-4 p-2 rounded bg-red-500 text-black font-medium"
        >
          Logout
        </button>
      )}
    </div>
  );
}
