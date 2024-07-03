import { useState } from "react";
import { searchForShow } from "./../api/tvmaze";

const Home = () => {
  const [seacrhStr, setSeacrhStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchInputChange = (ev) => {
    setSeacrhStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    try {
      setApiDataError(null);

      const result = await searchForShow(seacrhStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured : {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={seacrhStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
