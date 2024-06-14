


 // Easier data manipulation 
const albumMapping = {
    1:{ name:  "Pablo Honey",image:"radiohead/pictures/pablohoney.jpg" },
    2:{ name:  "The Bends",image: "radiohead/pictures/thebends.jpg"},
    3:{ name: "OK Computer",image: "radiohead/pictures/okcomputer.jpg"},
    4:{ name: "KID A",image: "radiohead/pictures/KIDA.jpg"},
    5:{ name: "Amnesiac",image: "radiohead/pictures/amnesiac.jpg"},
    6:{ name: "Hail To The Thief",image: "radiohead/pictures/hailtothethief.jpg"}, 
    7:{ name: "In Rainbows",image: "radiohead/pictures/inrainbows.jpg"},
    8:{ name:"The King Of Limbs",image: "radiohead/pictures/thekingoflimbs.jpg"},
    9:{ name:"A Moon Shaped Pool",image: "radiohead/pictures/amoonshapedpool.jpg"}
}; 

const songs = [
    // Pablo Honey
    { title: "You", album: 1, track: 1, length: "3:28" },
    { title: "Creep", album: 1, track: 2, length: "3:58" },
    { title: "How Do You?", album: 1, track: 3, length: "2:12" },
    { title: "Stop Whispering", album: 1, track: 4, length: "5:25" },
    { title: "Thinking About You", album: 1, track: 5, length: "2:41" },
    { title: "Anyone Can Play Guitar", album: 1, track: 6, length: "3:37" },
    { title: "Ripcord", album: 1, track: 7, length: "3:09" },
    { title: "Vegetable", album: 1, track: 8, length: "3:12" },
    { title: "Prove Yourself", album: 1, track: 9, length: "2:25" },
    { title: "I Can't", album: 1, track: 10, length: "4:13" },
    { title: "Lurgee", album: 1, track: 11, length: "3:07" },
    { title: "Blow Out", album: 1, track: 12, length: "4:42" },

    // The Bends
    { title: "Planet Telex", album: 2, track: 1, length: "4:19" },
    { title: "The Bends", album: 2, track: 2, length: "4:06" },
    { title: "High and Dry", album: 2, track: 3, length: "4:17" },
    { title: "Fake Plastic Trees", album: 2, track: 4, length: "4:50" },
    { title: "Bones", album: 2, track: 5, length: "3:09" },
    { title: "(Nice Dream)", album: 2, track: 6, length: "3:53" },
    { title: "Just", album: 2, track: 7, length: "3:54" },
    { title: "My Iron Lung", album: 2, track: 8, length: "4:36" },
    { title: "Bullet Proof ... I Wish I Was", album: 2, track: 9, length: "3:28" },
    { title: "Black Star", album: 2, track: 10, length: "4:07" },
    { title: "Sulk", album: 2, track: 11, length: "3:42" },
    { title: "Street Spirit (Fade Out)", album: 2, track: 12, length: "4:13" },

    // OK Computer
    { title: "Airbag", album: 3, track: 1, length: "4:47" },
    { title: "Paranoid Android", album: 3, track: 2, length: "6:27" },
    { title: "Subterranean Homesick Alien", album: 3, track: 3, length: "4:27" },
    { title: "Exit Music (For A Film)", album: 3, track: 4, length: "4:27" },
    { title: "Let Down", album: 3, track: 5, length: "4:59" },
    { title: "Karma Police", album: 3, track: 6, length: "4:24" },
    { title: "Fitter Happier", album: 3, track: 7, length: "1:57" },
    { title: "Electioneering", album: 3, track: 8, length: "3:50" },
    { title: "Climbing Up the Walls", album: 3, track: 9, length: "4:45" },
    { title: "No Surprises", album: 3, track: 10, length: "3:49" },
    { title: "Lucky", album: 3, track: 11, length: "4:18" },
    { title: "The Tourist", album: 3, track: 12, length: "5:26" },

    // Kid A
    { title: "Everything In Its Right Place", album: 4, track: 1, length: "4:11" },
    { title: "Kid A", album: 4, track: 2, length: "4:44" },
    { title: "The National Anthem", album: 4, track: 3, length: "5:51" },
    { title: "How to Disappear Completely", album: 4, track: 4, length: "5:56" },
    { title: "Treefingers", album: 4, track: 5, length: "3:42" },
    { title: "Optimistic", album: 4, track: 6, length: "5:15" },
    { title: "In Limbo", album: 4, track: 7, length: "3:31" },
    { title: "Idioteque", album: 4, track: 8, length: "5:09" },
    { title: "Morning Bell", album: 4, track: 9, length: "4:35" },
    { title: "Motion Picture Soundtrack", album: 4, track: 10, length: "3:20" },
    { title: "Untitled", album: 4, track: 11, length: "0:52" },

    // Amnesiac
    { title: "Packt Like Sardines In a Crushd Tin Box", album: 5, track: 1, length: "4:00" },
    { title: "Pyramid Song", album: 5, track: 2, length: "4:48" },
    { title: "Pulk/Pull Revolving Doors", album: 5, track: 3, length: "4:07" },
    { title: "You And Whose Army?", album: 5, track: 4, length: "3:11" },
    { title: "I Might Be Wrong", album: 5, track: 5, length: "4:53" },
    { title: "Knives Out", album: 5, track: 6, length: "4:14" },
    { title: "Morning Bell/Amnesiac", album: 5, track: 7, length: "3:14" },
    { title: "Dollars and Cents", album: 5, track: 8, length: "4:51" },
    { title: "Hunting Bears", album: 5, track: 9, length: "2:01" },
    { title: "Like Spinning Plates", album: 5, track: 10, length: "3:57" },
    { title: "Life In a Glasshouse", album: 5, track: 11, length: "4:36" },

    // Hail to the Thief
    { title: "2 + 2 = 5", album: 6, track: 1, length: "3:19" },
    { title: "Sit Down. Stand Up", album: 6, track: 2, length: "4:19" },
    { title: "Sail To The Moon", album: 6, track: 3, length: "4:18" },
    { title: "Backdrifts", album: 6, track: 4, length: "5:22" },
    { title: "Go To Sleep", album: 6, track: 5, length: "3:21" },
    { title: "Where I End and You Begin", album: 6, track: 6, length: "4:29" },
    { title: "We Suck Young Blood", album: 6, track: 7, length: "4:56" },
    { title: "The Gloaming", album: 6, track: 8, length: "3:32" },
    { title: "There, There", album: 6, track: 9, length: "5:23" },
    { title: "I Will", album: 6, track: 10, length: "1:59" },
    { title: "A Punch Up at a Wedding", album: 6, track: 11, length: "4:57" },
    { title: "Myxomatosis", album: 6, track: 12, length: "3:52" },
    { title: "Scatterbrain", album: 6, track: 13, length: "3:21" },
    { title: "A Wolf At the Door", album: 6, track: 14, length: "3:21" },

    // In Rainbows
    { title: "15 Step", album: 7, track: 1, length: "3:57" },
    { title: "Bodysnatchers", album: 7, track: 2, length: "4:02" },
    { title: "Nude", album: 7, track: 3, length: "4:15" },
    { title: "Weird Fishes/Arpeggi", album: 7, track: 4, length: "5:18" },
    { title: "All I Need", album: 7, track: 5, length: "3:48" },
    { title: "Faust Arp", album: 7, track: 6, length: "2:09" },
    { title: "Reckoner", album: 7, track: 7, length: "4:50" },
    { title: "House Of Cards", album: 7, track: 8, length: "5:28" },
    { title: "Jigsaw Falling Into Place", album: 7, track: 9, length: "4:08" },
    { title: "Videotape", album: 7, track: 10, length: "4:39" },

    // The King of Limbs
    { title: "Bloom", album: 8, track: 1, length: "5:13" },
    { title: "Morning Mr Magpie", album: 8, track: 2, length: "4:40" },
    { title: "Little By Little", album: 8, track: 3, length: "4:27" },
    { title: "Feral", album: 8, track: 4, length: "3:12" },
    { title: "Lotus Flower", album: 8, track: 5, length: "5:00" },
    { title: "Codex", album: 8, track: 6, length: "4:47" },
    { title: "Give Up The Ghost", album: 8, track: 7, length: "4:50" },
    { title: "Separator", album: 8, track: 8, length: "5:19" },

    // A Moon Shaped Pool
    { title: "Burn the Witch", album: 9, track: 1, length: "3:40" },
    { title: "Daydreaming", album: 9, track: 2, length: "6:24" },
    { title: "Decks Dark", album: 9, track: 3, length: "4:41" },
    { title: "Desert Island Disk", album: 9, track: 4, length: "3:44" },
    { title: "Ful Stop", album: 9, track: 5, length: "6:07" },
    { title: "Glass Eyes", album: 9, track: 6, length: "2:52" },
    { title: "Identikit", album: 9, track: 7, length: "4:26" },
    { title: "The Numbers", album: 9, track: 8, length: "5:45" },
    { title: "Present Tense", album: 9, track: 9, length: "5:06" },
    { title: "Tinker Tailor Soldier Sailor Rich Man Poor Man Beggar Man Thief", album: 9, track: 10, length: "5:03" },
    { title: "True Love Waits", album: 9, track: 11, length: "4:43" }
];


 
function getRandomSong(){
    const randomSong = Math.floor(Math.random() * songs.length); 
    for(const [key, value] of Object.entries(songs[randomSong])){
        console.log(key, value);
    }        
    return songs[randomSong];
} 

function findSong(songName){
    for( var index in songs){
        if(songs[index]["title"]=== songName){
            return songs[index];
        }
        
    }
} 
function getAlbumImage(albumNumber){
    return albumMapping[albumNumber].image;
}
    
// display song info 
// TODO add guess limit + hints i call the hint function??
function displaySongInfo(){ 
    const guessInput = document.getElementById("guess");
    const songName = guessInput.value;
    const song = findSong(songName);
    const tbody = document.getElementById("info").getElementsByTagName("tbody")[0]; 
    
    

    if (song) {
        const row = tbody.insertRow();
        const titleCell = row.insertCell(0);
        const albumCell = row.insertCell(1);
        const trackCell = row.insertCell(2);
        const lengthCell = row.insertCell(3);
        
        titleCell.textContent = song.title; 
        trackCell.textContent = song.track; 
        lengthCell.textContent = song.length; 
        albumCell.textContent = song.album;
        
        
        
            
       // compare titles 
        if(song.title === randomSong.title){
            titleCell.classList.add("green");
        } 
        // hints for correct track 
        if(song.track === randomSong.track){ 
            trackCell.textContent = song.track;
                trackCell.classList.add("green");

        }else if(song.track > randomSong.track){
            trackCell.classList.add("up-arrow");

        }else if(song.track < randomSong.track){
            trackCell.classList.add("down-arrow")
    }
    if(Math.abs(song.track - randomSong.track) <= 2){
        trackCell.classList.add("yellow")
    }
    if(Math.abs(song.album - randomSong.album) <= 2){
        trackCell.classList.add("yellow")
    }
}
}

// main 
const  randomSong = getRandomSong(); 
console.log(randomSong.title);




// reading user input from guess
document.getElementById("userGuess").addEventListener("submit",function(e)
{ 
    e.preventDefault(); 
    var x = document.getElementById("guess").value;
    console.log(x);
    console.log(findSong(x));

});

