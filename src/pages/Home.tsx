import React from "react";
import Country from "../components/Country";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <div className="countries">
          {[...Array(8)].map((_, i) => (
            <Country key={i} />
          ))}
        </div>
      </main>
    </>
  );
}
