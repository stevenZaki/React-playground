"use client";
import React, { useState, useEffect } from "react";
import QuoteBox from "./componentes/QuoteBox";
import styles from "./page.module.css"



export default function Page() {

  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  async function fetchQuote() {
    
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://zenquotes.io/api/random", {cache: "no-store"}); 
      if(!res.ok) throw new Error("Failed to fetch");

      const data = await res.json()
      setQuoteText(data.content || "");
      setQuoteAuthor(data.author || "");

    }  catch {
      
      setError("Could not load a quote. Try again.");


  } finally {
    setIsLoading(false)
  }
  }

  useEffect(() => {fetchQuote(); }, [])

  return (
    <div className={styles.wrapper}>
      <QuoteBox
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        isLoading={isLoading}
        error={error}
        onNewQuote={fetchQuote}
      />
    </div>
  );
}
