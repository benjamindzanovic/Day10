function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold:true
        },
        002: {
            artist: "Maya Berovic",
            title: "Sama",
            release_year: 2018,
            id: 2,
            formats: {
                1:"CD",
                2:"Spotify",
                3:"Deezer",
                4:"Ploce"
            }
        }
    };
    
}
myFunction()[2];
module.exports = myFunction;