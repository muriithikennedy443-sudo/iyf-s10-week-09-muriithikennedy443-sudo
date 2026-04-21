function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold mb-4">About CommunityHub</h1>
      <p className="text-gray-600 mb-4">
        CommunityHub is a React-based community platform built by muriithikennedy443-sudo
        as part of IYF Academy Week 09 advanced React course.
      </p>
      <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>React 18</li>
        <li>React Router v6</li>
        <li>Tailwind CSS</li>
        <li>Custom Hooks</li>
        <li>JSONPlaceholder API</li>
      </ul>
    </div>
  );
}

export default About;