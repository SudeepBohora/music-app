import { v4 as uuidv4} from "uuid";

function chillHop(){
    return[
        {
            name: "Dreaming",
            cover: "https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&w=600",
            artist: "Misha, Jussi Halme, El Train, goodie bags",
            id: uuidv4(),
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49425",
            active: true,
        },
        {
            name: "Kaleidoscope",
            cover: "https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&w=600",
            artist: "El Train",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49426",
            id: uuidv4(),
            active: false,
        },{
            name: "lavender",
            cover: "https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&w=600",
            artist: "El Train",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49428",
            id: uuidv4(),
            active: false,
        },{
            name: "Snap Back",
            cover: "https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&w=600",
            artist: "El Train, Marc Mathias",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49429",
            id: uuidv4(),
            active: false,
        },
    ]
}

export default chillHop;