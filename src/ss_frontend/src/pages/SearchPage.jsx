import React from "react";
import { useLocation } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";

export default function SearchPage() {
  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search).get("query");

  return (
    <MainTemplate>
      <div>{searchQuery}</div>
    </MainTemplate>
  );
}
