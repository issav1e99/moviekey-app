import React from "react";
import './SearchPage.css';

class SearchPage extends React.Component{
    render(){
        return(
            <>

            <div class="header">
                <nav class="nav-1">
                    <a href= "Home">Home</a> &nbsp; &nbsp;
                    <a href= "Genre">Genre</a> &nbsp; &nbsp;
                    <a href= "Shows">Shows</a> &nbsp; &nbsp;
                    <a href= "Movies">Movies</a> &nbsp; &nbsp;
                    <a href= "TopPicks">Top Picks</a> &nbsp; &nbsp;
                    <a href= "Classics">Classics</a> &nbsp; &nbsp;
                    <a href= "NewReleases">New Releases</a>
                </nav>

                <a href="Home"> <img class="logo" src="assets/MOVIEKEY.png" alt="Moviekey_Logo"/> </a>
                    
            </div>

            <div class="body">
                <h1 class="page-title">Search Page</h1>
                <nav class="nav-2">
                    <a href="All">All</a> | &nbsp;
                    <a href="A">A</a> | &nbsp;
                    <a href="B">B</a> | &nbsp;
                    <a href="C">C</a> | &nbsp;
                    <a href="D">D</a> | &nbsp;
                    <a href="E">E</a> | &nbsp;
                    <a href="F">F</a> | &nbsp;
                    <a href="G">G</a> | &nbsp;
                    <a href="H">H</a> | &nbsp;
                    <a href="I">I</a> | &nbsp;
                    <a href="J">J</a> | &nbsp;
                    <a href="K">K</a> | &nbsp;
                    <a href="L">L</a> | &nbsp;
                    <a href="M">M</a> | &nbsp;
                    <a href="N">N</a> | &nbsp;
                    <a href="O">O</a> | &nbsp; <br/>
                    <a href="P">P</a> | &nbsp;
                    <a href="Q">Q</a> | &nbsp;
                    <a href="R">R</a> | &nbsp;
                    <a href="S">S</a> | &nbsp;
                    <a href="T">T</a> | &nbsp;
                    <a href="U">U</a> | &nbsp;
                    <a href="V">V</a> | &nbsp;
                    <a href="W">W</a> | &nbsp;
                    <a href="X">X</a> | &nbsp;
                    <a href="Y">Y</a> | &nbsp;
                    <a href="Z">Z</a> | &nbsp;
                </nav>

                <div class="grid-1">
                    <h1>Shows</h1>
                    <h1>Movies</h1>
                </div>

                <br/>

                <div class="grid-2">
                    <img src="assets/CodeGeass.png" alt="Code_Geass" class="CodeGeass-Cover" />
                    <a href="/"> <h4>Code Geass</h4> </a>

                    <img src="assets/GundamHathaway.png" alt="Gundam_Hathaway" class="GundamHathaway-Cover" />
                    <a href="/"> <h4>Mobile Suit Gundam: Hathaway</h4> </a> 
                </div>

            <div class="grid-3">
                <img src="assets/GhostInTheShell.png" alt="Ghost_In_The_Shell" class="GhostInTheShell-Cover" />
                <a href="/"> <h4>Ghost In The Shell</h4> </a>

                <img src="assets/TheMatrix.png" alt="The_Matrix" class="TheMatrix-Cover" />
                <a href="/"> <h4>The Matrix</h4> </a>
            </div>

            <div class="grid-4">
                <img src="assets/SamuraiChamploo.png" alt="Samurai_Champloo" class="SamuraiChamploo-Cover" />
                <a href= "/"> <h4>Samurai Champloo</h4> </a>

                <img src="assets/TheseFinalHours.png" alt="These_Final_Hours" class="TheseFinalHours-Cover" />
                <a href="/"> <h4>These Final Hours</h4> </a>
            </div>
                

            </div>

            <div class= "footer">
                <nav class="footer-1">
                    <a href='Terms & Conditions'>Terms & Conditions</a>
                </nav>
                
                <p class="footer-1">© 2021 Moviekey, All Rights Reserved.</p>
            </div>

            </>
        )

    }
}


export default SearchPage;
