import { useState } from "react";
const Home = () => {
  const [seacrhStr, setSeacrhStr] = useState("");

  const onSearchInputChange = (ev) => {
    setSeacrhStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${seacrhStr}`
    );
    const body = await response.json();

    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={seacrhStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
