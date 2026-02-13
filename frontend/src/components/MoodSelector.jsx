const moods = ["Happy", "Sad", "Motivated", "Lazy"];

const MoodSelector = ({ setMood }) => {
  return (
    <select
      className="dropdown"
      onChange={(e) => setMood(e.target.value)}
    >
      <option>Select Mood</option>
      {moods.map((m) => (
        <option key={m}>{m}</option>
      ))}
    </select>
  );
};

export default MoodSelector;