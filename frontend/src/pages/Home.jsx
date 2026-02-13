import "./Home.css";
import { useState } from "react";
import API from "../api";
import MoodSelector from "../components/MoodSelector";
import QuoteCard from "../components/QuoteCard";
import AddQuote from "../components/AddQuote";

const Home = () => {
  const [mood, setMood] = useState("");
  const [quote, setQuote] = useState(null);

  const fetchQuote = async (selectedMood) => {
    setMood(selectedMood);
    const res = await API.get(`/quotes/${selectedMood}`);
    setQuote(res.data);
  };

  return (
    <div className="container">
      <h1 className="title">Mood Quote Generator</h1>

      {/* Retrieve Section */}
      <div className="section">
        <h2>Get Quote By Mood</h2>
        <MoodSelector setMood={fetchQuote} />
        <QuoteCard quote={quote} />
      </div>

      {/* Add Section */}
      <div className="section">
        <h2>Add New Quote</h2>
        <AddQuote selectedMood={mood} />
      </div>
    </div>
  );
};

export default Home;