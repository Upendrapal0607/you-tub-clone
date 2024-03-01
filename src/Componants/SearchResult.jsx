import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextApi";
import { fetchDataFromApi } from "../utils/api";
import { SearchResultVideoCard } from "./SearchResultVideoCard";
import LeftNav from "./LeftNav";

export const SearchResult = () => {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();
  const { setLoading, setError } = useContext(Context);
  console.log({ searchResuls: result });
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchResults();
  }, [searchQuery]);

  const fetchResults = () => {
    try {
      setLoading(true);
      fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
        setResult(res?.contents || []);
        setLoading(false);
      });
    } catch (error) {
      setError(false);
      console.log({ error });
    }
  };
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow ml-0 md:ml-[240px] w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return <SearchResultVideoCard key={video.videoId} video={video} />;
          })}
        
        </div>
      </div>
    </div>
  );
};
