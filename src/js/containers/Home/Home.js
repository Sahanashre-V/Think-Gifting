import React from "react"
import css from "./Home.scss"

function Home() {
    return (
        <div className={css.app}>
            <header className={css.appHeader}>
                <h1 className={css.heading}>Think Gifting</h1>
                <p>Take a time to gift others</p>
                <a
                    className={css.appLink}
                    href="https://catalyst.1mg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                   Think gifting
                </a>
            </header>
        </div>
    )
}

export default Home
