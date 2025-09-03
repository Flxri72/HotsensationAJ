const retos = {
    1: {
        nombre: "Tibio",
        emoji: "🌡️",
        color: "#4CAF50",
        retos: [
            "Dile 3 cosas que te gustan de su personalidad",
            "Dale un masaje en los hombros por 2 minutos",
            "Cuéntale tu recuerdo favorito juntos",
            "Bailen una canción lenta abrazados",
            "Dile qué fue lo primero que notaste de él/ella",
            "Compartan un postre alimentándose mutuamente",
            "Cuéntale un secreto que nunca le habías dicho",
            "Hagan contacto visual por 30 segundos sin hablar"
        ]
    },
    2: {
        nombre: "Caliente",
        emoji: "🔥",
        color: "#FF9800",
        retos: [
            "Bésense apasionadamente por 10 segundos",
            "Dale un masaje sensual en el cuello",
            "Susúrrale al oído algo que te gusta de él/ella",
            "Quítale una prenda de ropa lentamente",
            "Bésale el cuello suavemente",
            "Acaricia su rostro mientras lo/la miras a los ojos",
            "Dale besos pequeños en diferentes partes del rostro",
            "Abraza a tu pareja por detrás por 30 segundos"
        ]
    },
    3: {
    nombre: "Ardiente",
    emoji: "🌋",
    color: "#F44336",
    retos: [
        "Graben un video intenso de besos y caricias (solo para ustedes)",
        "Recorran todo el cuerpo del otro con la lengua, prohibido usar manos",
        "Uno se queda quieto mientras el otro lo explora con la boca y el cuerpo",
        "Hagan un striptease mutuo, pero sin quitar toda la ropa de inmediato",
        "Jueguen a excitarse lentamente con caricias suaves sin llegar a más por 5 minutos",
        "Intercambien fantasías sexuales en voz alta mientras se acarician",
        "Besos y mordidas en todo el cuerpo hasta que uno diga 'para'",
        "Actúen una escena en la que uno 'seduce' al otro como si no fueran pareja",
        "Usen un objeto cotidiano (pañuelo, corbata, cojín, etc.) como parte del juego",
        "Elijan una zona prohibida y excítense sin tocarla hasta el final",
        "Acaríciense solo con la respiración y el aliento cerca de la piel",
        "Uno dirige cada movimiento y el otro debe obedecer en silencio",
        "Pónganse una canción lenta y conviértanla en un baile erótico improvisado",
        "Elijan una fantasía pendiente y hagan una versión ligera ahora mismo",
        "Besos prolongados en lugares poco comunes (espalda, manos, rodillas, etc.)",
        "Susúrrense frases sucias sin parar durante 2 minutos mientras se acarician"
    ]
},
4: {
    nombre: "Volcánico",
    emoji: "🌋💥",
    color: "#9C27B0",
    retos: [
        "Uno se venda los ojos, el otro tiene control TOTAL del juego por 20 minutos",
        "Usen hielo, aceites calientes, plumas y hasta vibraciones en distintas partes del cuerpo",
        "Hagan un reto de dominación extrema: uno manda, el otro obedece sin hablar",
        "Actúen un rol muy atrevido (jefe/secretaria, doctor/paciente, policía/detenido…) hasta el final",
        "Jueguen frente a un espejo, mirándose mientras lo hacen sin apartar la vista",
        "Aten suavemente a su pareja y tómenla como quieran durante 10 minutos",
        "Usen un juguete o improvisen uno con lo que tengan en casa",
        "Elijan una fantasía sexual y recréenla lo más real posible",
        "Graben un video teniendo sexo intenso (solo para ustedes)",
        "Graben un video provocador con striptease y contacto intenso (solo para ustedes)",
        "Hagan un desafío de resistencia: excítense sin llegar al clímax por 10 minutos",
        "Uno controla TODO el ritmo y el otro debe dejarse llevar sin intervenir",
        "Escriban frases provocativas en el cuerpo del otro con marcador lavable y luego bésenlas",
        "Hagan un juego de castigos eróticos: quien se detenga o se ría, recibe uno",
        "Prohíban hablar: durante 5 minutos solo pueden comunicarse con el cuerpo",
        "Elijan un lugar prohibido de la casa y háganlo allí inmediatamente",
        "Prueben hacerlo frente a un espejo en una posición extrema",
        "Grabe un video haciendole sexo oral a su pareja",
        "has venir al otro y prueba sus fluidos",
        "Experimenten con la temperatura: hielo en un lado del cuerpo, calor en el otro",
        "Elijan una palabra de 'poder': si alguien la dice, el otro debe detenerse y cambiar el juego",
        "Prueben un desafío de tiempo: 3 minutos en cada parte del cuerpo sin excepción",
        "Exploren al máximo: prueben algo que nunca antes hayan imaginado juntos"
    ]
}
};

let nivelActual = 1;
let puntosAndrea = 0;
let puntosJuan = 0;
let turnoActual = "Andrea";

const puntosAndreaLabel = document.getElementById("puntos-andrea");
const puntosJuanLabel = document.getElementById("puntos-juan");
const nivelLabel = document.getElementById("nivel");
const retoLabel = document.getElementById("reto");
const btnNuevoReto = document.getElementById("nuevo-reto");
const btnCompletado = document.getElementById("completado");
const btnSaltar = document.getElementById("saltar");
const btnTerminarJuego = document.getElementById("terminar-juego");
const nivelButtons = document.querySelectorAll(".nivel-btn");
const videoPreview = document.getElementById("video-preview");
const startRecordingButton = document.getElementById("start-recording");
let mediaRecorder;
let recordedChunks = [];

btnNuevoReto.addEventListener("click", () => {
    const retosNivel = retos[nivelActual].retos;
    const reto = retosNivel[Math.floor(Math.random() * retosNivel.length)];
    retoLabel.textContent = `${turnoActual}, tu reto es: ${reto}`;
    retoLabel.style.backgroundColor = retos[nivelActual].color;

    startRecordingButton.disabled = false;
    startRecordingButton.style.display = "inline-block";
    startVideoPreview();

    btnCompletado.disabled = false;
    btnSaltar.disabled = false;
});

btnCompletado.addEventListener("click", () => {
    if (turnoActual === "Andrea") {
        puntosAndrea += nivelActual * 10;
        puntosAndreaLabel.textContent = `Andrea: ${puntosAndrea} puntos`;
        turnoActual = "Juan";
    } else {
        puntosJuan += nivelActual * 10;
        puntosJuanLabel.textContent = `Juan: ${puntosJuan} puntos`;
        turnoActual = "Andrea";
    }
    retoLabel.textContent = "¡Reto completado! 🎉";
    retoLabel.style.backgroundColor = "#4CAF50";
    btnCompletado.disabled = true;
    btnSaltar.disabled = true;
});

btnSaltar.addEventListener("click", () => {
    retoLabel.textContent = "Reto saltado. ¡Intenta con otro! 😉";
    retoLabel.style.backgroundColor = "#4CAF50";
    turnoActual = turnoActual === "Andrea" ? "Juan" : "Andrea";
    btnCompletado.disabled = true;
    btnSaltar.disabled = true;
});

btnTerminarJuego.addEventListener("click", () => {
    let ganador, perdedor;
    if (puntosAndrea > puntosJuan) {
        ganador = "Andrea";
        perdedor = "Juan";
    } else if (puntosJuan > puntosAndrea) {
        ganador = "Juan";
        perdedor = "Andrea";
    } else {
        retoLabel.textContent = "¡Es un empate! Ambos ganan. 🎉";
        retoLabel.style.backgroundColor = "#FFD700";
        return;
    }
    retoLabel.textContent = `¡${ganador} gana con ${ganador === "Andrea" ? puntosAndrea : puntosJuan} puntos! ${perdedor} será sometid@. 🔥`;
    retoLabel.style.backgroundColor = "#FFD700";
});

nivelButtons.forEach(button => {
    button.addEventListener("click", () => {
        nivelActual = parseInt(button.dataset.nivel);
        nivelLabel.textContent = `Nivel: ${retos[nivelActual].emoji} ${retos[nivelActual].nombre}`;
        retoLabel.textContent = `Nivel ${retos[nivelActual].emoji} ${retos[nivelActual].nombre} seleccionado. ¡Presiona "Nuevo Reto"!`;
        retoLabel.style.backgroundColor = retos[nivelActual].color;
        btnCompletado.disabled = true;
        btnSaltar.disabled = true;
    });
});

startRecordingButton.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        startRecordingButton.textContent = "🎥 Comenzar Grabación";
    } else {
        recordedChunks = [];
        mediaRecorder.start();
        startRecordingButton.textContent = "⏹️ Detener Grabación";
    }
});

function startVideoPreview() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            videoPreview.srcObject = stream;
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };
            mediaRecorder.onstop = () => {
                const blob = new Blob(recordedChunks, { type: "video/webm" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "reto-video.webm";
                a.click();
            };
        })
        .catch(error => console.error("Error accessing media devices.", error));
}

function stopVideoPreview() {
    if (videoPreview.srcObject) {
        videoPreview.srcObject.getTracks().forEach(track => track.stop());
        videoPreview.srcObject = null;
    }
}
