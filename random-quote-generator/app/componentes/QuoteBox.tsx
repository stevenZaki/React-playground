"use client";
import React from "react";
import styles from "./QuoteBox.module.css"


export interface QuoteBoxProps {
    quoteText: string;
    quoteAuthor: string;
    isLoading: boolean;
    error?: string|null;
    onNewQuote: ()=>void;
}

export default function QuoteBox ({quoteText, quoteAuthor, isLoading, error, onNewQuote}:QuoteBoxProps) {
    
    function handleClick(){
        onNewQuote();
    }

    return(
        
        <>
    <div className={styles.container} role="region" aria-busy={isLoading}>

        {error ? <p className={styles.error}>{error}</p> : null}

        

        <p className={styles.quote}>  

            {isLoading? "loading..." : quoteText || "No Quote Yet"}
        
        </p>

        {isLoading && quoteAuthor && (
            <p className={styles.author}>- {quoteAuthor} </p>
        )}

        <button className={styles.button} onClick={handleClick} disabled={isLoading} >

            {isLoading ? "Fetching..." : "New Quote"}
                
        </button>

    </div>    
        </>
        
    )
} 

