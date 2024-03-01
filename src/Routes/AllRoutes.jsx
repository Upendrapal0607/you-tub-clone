import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Componants/Feed";
import { VideoDetails } from "../Componants/VideoDetails";
import { SearchResult } from "../Componants/SearchResult";

export const AllRoutes = () => {
  return (
    <div className="flex flex-col h-full">
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
        <Route path="/video/:id" element={<VideoDetails />} />
      </Routes>
    </div>
  );
};
