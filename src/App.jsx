// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar setCategory={setCategory} setSearchTerm={handleSearch} />
      <div className="container my-4">
        <NewsBoard category={category} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default App;
