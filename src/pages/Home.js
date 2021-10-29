import React from "react";
import './Home.css';

class Home extends React.Component{
    render(){
        return(
            <>

                <div class= "header">
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
                    <div class= "grid-1">
                        <a href="Classics"> <h2>CLASSICS</h2> </a>
                        <a href="TopPicks"> <h2>TOP PICKS</h2> </a>
                        <a href="NewReleases"> <h2>NEW RELEASES</h2> </a>
                    </div>


                    <div class="grid-2">
                        <a href="Gundam_Hathaway"> <img src="assets/GundamHathaway.png" alt="Gundam_Hathaway" class="trailer1" /> </a>
                        <a href="The_Matrix"> <img src="assets/TheMatrix.png" alt="The_Matrix" class="trailer2" /> </a>
                        <a href="These_Final_Hours"> <img src="assets/TheseFinalHours.png" alt="These-Final_Hours" class="trailer3" /> </a>
                    </div>

                    <img src="assets/Stars.png" alt="Stars" class="rating" />

                    <div class="grid-3">
                        <a href="Samurai_Champloo"> <img src="assets/SamuraiChamploo.png" alt="Samurai_Champloo" class="trailer4" /> </a>
                        <a href="Code_Geass"> <img src="assets/CodeGeass.png" alt="Code_Geass" class="trailer5" /> </a>
                        <a href="Ghost_In_The_Shell"> <img src="assets/GhostInTheShell.png" alt="Ghost-In_The-Shell" class="trailer6" /> </a>
                    </div>

                </div>



                <div class= "footer">
                    <nav class="footer-1">
                        <a href='Terms & Conditions'>Terms & Conditions</a>
                        <p>© 2021 Moviekey, All Rights Reserved.</p>
                    </nav>
                </div>


            </>
        )

    }
}


export default Home;
