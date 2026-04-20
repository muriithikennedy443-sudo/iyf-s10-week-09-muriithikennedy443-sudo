import useLocalStorage from '../hooks/useLocalStorage';

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    <div>
      <h3>Settings</h3>
      <label>Theme: </label>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <br />
      <label>Font Size: {fontSize}px </label>
      <input
        type="range"
        value={fontSize}
        onChange={e => setFontSize(Number(e.target.value))}
        min="12"
        max="24"
      />
    </div>
  );
}

export default Settings;