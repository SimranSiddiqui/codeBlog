import React from "react"
import '../App.css';

function Home(){
return(
<body>
    <header>
    <div class="navbar__brand">Microblog</div>
    <ul class="navbar__navigation">
        <li class="navbar__navigation-item"><a href="#" class="navbar__link">Recent</a></li>
        <li class="navbar__navigation-item"><a href="#" class="navbar__link">Calendar</a></li>
    </ul>
    </header>
    <main class="content">
        <section className="new-entry">
            <h1>Add new entry</h1>
            <form method="post">
                <textarea rows="10" cols="58">What did you code today???</textarea><br/>
                <button type="submit">Add</button>
            </form>
        </section>
        <section className="old-entry">
            <h1>Recent Posts</h1>
            <article>
                <div>
                    <h2>A bit of a chill day today&#8226;</h2>
                    <time datetime="24-10-2019">Oct 24</time>
                </div>
                <p>
                    Today I couldn’t do much programming, but that’s OK!
                    Can’t be too awesome every day now!
                </p>
            </article>
            <article>
                <div>
                    <h2>A bit of a chill day today&#8226;</h2>
                    <time datetime="24-10-2019">Oct 24</time>
                </div>
                <p>
                    Today I couldn’t do much programming, but that’s OK!
                    Can’t be too awesome every day now!
                </p>
            </article>
        </section>
    </main>
    <footer className="footer">
    <div class="footer__content">
        <section class="left">
            <a class="footer__item">Made by Simran Siddiqui</a>
        </section>
        <section class="right">
            <div class="footer__column">
                <a class="footer__item">Recent</a>
                <a class="footer__item">Calendar</a>
            </div>
            <div class="footer__column">
                <a class="footer__item">About</a>
                <a class="footer__item">How this was made</a>
            </div>
        </section>
    </div>
    </footer>
    </body>
    
);
}

export default Home;