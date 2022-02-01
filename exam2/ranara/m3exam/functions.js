

//DAYGLOW CAN I CALL YOU TONIGHT
function dayglow(){
    fetch("https://api.lyrics.ovh/v1/Dayglow/Can I Call You Tonight")
    .then(
        function(response){
            console.log(response);
            
            if(response.status !== 200){
                console.log("There was a problem. Status code: " + response.status);
                return;
            }

            response.json().then( 
                function(data){
                    let lyrics = data['lyrics'].replace(/(\r\n|\r|\n)/g, '<br>')
                    //setting custom design and text
                    document.getElementById("lyrics").innerHTML = lyrics
                    document.getElementById("lyrics_background").style.height = "300vh"
                    document.getElementById("lyrics_background").style.backgroundColor = "rgba(2,113,124,255)"
                    document.getElementById("dayglow").style.backgroundColor = "rgb(181, 146, 51)"
                    document.getElementById("dayglow_lyrics").style.color = "black"

                    //resetting other element's design to normal
                    document.getElementById("kal_world").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("kal_world_lyrics").style.color = "white"
                    document.getElementById("paramore").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("paramore_lyrics").style.color = "white"
                    document.getElementById("rivermaya").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("rivermaya_lyrics").style.color = "white"
                    document.getElementById("beachfossils").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("beachfossils_lyrics").style.color = "white"
                }
            )
        }
    )
    .catch(
        function(err){
            console.log(err+'404');
        }
        )


}


//KALEIDOSCOPE WORLD
function kal_world(){
    fetch("https://api.lyrics.ovh/v1/Francis Magalona/Kaleidoscope World")
    .then(
        function(response){
            console.log(response);
            
            if(response.status !== 200){
                console.log("There was a problem. Status code: " + response.status);
                return;
            }

            response.json().then( 
                function(data){
                    let lyrics = data['lyrics'].replace(/(\r\n|\r|\n)/g, '<br>')
                    
                    //setting custom design and text
                    document.getElementById("lyrics").innerHTML = lyrics
                    document.getElementById("lyrics_background").style.height = "250vh"
                    document.getElementById("lyrics_background").style.backgroundColor = "rgba(199, 104, 46)"
                    document.getElementById("kal_world").style.backgroundColor = "rgb(181, 146, 51)"
                    document.getElementById("kal_world_lyrics").style.color = "black"

                    //resetting other element's design to normal
                    document.getElementById("dayglow").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("dayglow_lyrics").style.color = "white"
                    document.getElementById("paramore").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("paramore_lyrics").style.color = "white"
                    document.getElementById("rivermaya").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("rivermaya_lyrics").style.color = "white"
                    document.getElementById("beachfossils").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("beachfossils_lyrics").style.color = "white"
                }
            )
        }
    )
    .catch(
        function(err){
            console.log(err+'404');
        }
        )


}


//THATS WHAT YOU GET PARAMORE
function paramore(){
    fetch("https://api.lyrics.ovh/v1/Paramore/That's What You Get")
    .then(
        function(response){
            console.log(response);
            
            if(response.status !== 200){
                console.log("There was a problem. Status code: " + response.status);
                return;
            }

            response.json().then( 
                function(data){
                    let lyrics = data['lyrics'].replace(/(\r\n|\r|\n)/g, '<br>')
                    
                    //setting custom design and text
                    document.getElementById("lyrics").innerHTML = lyrics
                    document.getElementById("lyrics_background").style.height = "200vh"
                    document.getElementById("lyrics_background").style.backgroundColor = "rgba(156, 42, 42)"
                    document.getElementById("paramore").style.backgroundColor = "rgb(181, 146, 51)"
                    document.getElementById("paramore_lyrics").style.color = "black"

                    //resetting other element's design to normal
                    document.getElementById("dayglow").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("dayglow_lyrics").style.color = "white"
                    document.getElementById("kal_world").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("kal_world_lyrics").style.color = "white"
                    document.getElementById("rivermaya").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("rivermaya_lyrics").style.color = "white"
                    document.getElementById("beachfossils").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("beachfossils_lyrics").style.color = "white"
                }
            )
        }
    )
    .catch(
        function(err){
            console.log(err+'404');
        }
        )


}


//RIVERMAYA 214
function rivermaya(){
    fetch("https://api.lyrics.ovh/v1/Rivermaya/214")
    .then(
        function(response){
            console.log(response);
            
            if(response.status !== 200){
                console.log("There was a problem. Status code: " + response.status);
                return;
            }

            response.json().then( 
                function(data){
                    let lyrics = data['lyrics'].replace(/(\r\n|\r|\n)/g, '<br>')
                    
                    //setting custom design and text
                    document.getElementById("lyrics").innerHTML = lyrics
                    document.getElementById("lyrics_background").style.height = "220vh"
                    document.getElementById("lyrics_background").style.backgroundColor = "rgba(130,136,76,255)"
                    document.getElementById("rivermaya").style.backgroundColor = "rgb(181, 146, 51)"
                    document.getElementById("rivermaya_lyrics").style.color = "black"

                    //resetting other element's design to normal
                    document.getElementById("dayglow").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("dayglow_lyrics").style.color = "white"
                    document.getElementById("paramore").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("paramore_lyrics").style.color = "white"
                    document.getElementById("kal_world").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("kal_world_lyrics").style.color = "white"
                    document.getElementById("beachfossils").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("beachfossils_lyrics").style.color = "white"
                }
            )
        }
    )
    .catch(
        function(err){
            console.log(err+'404');
        }
        )


}


//BEACHFOSSILS DOWN THE LINE
function beachfossils(){
    fetch("https://api.lyrics.ovh/v1/Beach Fossils/Down the Line")
    .then(
        function(response){
            console.log(response);
            
            if(response.status !== 200){
                console.log("There was a problem. Status code: " + response.status);
                return;
            }

            response.json().then( 
                function(data){
                    let lyrics = data['lyrics'].replace(/(\r\n|\r|\n)/g, '<br>')
                    
                    //setting custom design and text
                    document.getElementById("lyrics").innerHTML = lyrics
                    document.getElementById("lyrics_background").style.height = "130vh"
                    document.getElementById("lyrics_background").style.backgroundColor = "rgba(145, 51, 141)"
                    document.getElementById("beachfossils").style.backgroundColor = "rgb(181, 146, 51)"
                    document.getElementById("beachfossils_lyrics").style.color = "black"

                    //resetting other element's design to normal
                    document.getElementById("dayglow").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("dayglow_lyrics").style.color = "white"
                    document.getElementById("paramore").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("paramore_lyrics").style.color = "white"
                    document.getElementById("rivermaya").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("rivermaya_lyrics").style.color = "white"
                    document.getElementById("kal_world").style.backgroundColor = "rgb(37, 36, 36)"
                    document.getElementById("kal_world_lyrics").style.color = "white"
                }
            )
        }
    )
    .catch(
        function(err){
            console.log(err+'404');
        }
        )


}