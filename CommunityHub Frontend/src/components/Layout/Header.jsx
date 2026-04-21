import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌐 CommunityHub</h1>
        <nav className="flex gap-4">
          <NavLink to="/" className={({isActive}) => isActive ? "font-bold underline" : "hover:underline"}>Home</NavLink>
          <NavLink to="/posts" className={({isActive}) => isActive ? "font-bold underline" : "hover:underline"}>Posts</NavLink>
          <NavLink to="/create" className={({isActive}) => isActive ? "font-bold underline" : "hover:underline"}>Create</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "font-bold underline" : "hover:underline"}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;