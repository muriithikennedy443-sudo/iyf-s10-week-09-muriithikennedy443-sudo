function Sidebar() {
  const tags = ["React", "JavaScript", "CSS", "Node.js", "WebDev"];
  const popular = ["React Hooks Guide", "JS Best Practices", "CSS Tips"];

  return (
    <aside className="w-64 shrink-0">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="font-bold text-lg mb-2">About</h3>
        <p className="text-gray-600 text-sm">Welcome to CommunityHub — share and connect!</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="font-bold text-lg mb-2">Popular Posts</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          {popular.map((p, i) => <li key={i}>📄 {p}</li>)}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-bold text-lg mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">#{tag}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;