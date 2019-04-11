function main() {
  console.log("video1 prueba");

  video1 = document.getElementById('video1');

  video1.width = 300;
  video1.height = 200;

  ver = document.getElementById('ver');

  ver.onclick = () => {
    console.log("Ver!")

    //-- Indicar la fuente del vídeo
    video1.src ="Video1.mp4"
  }
}
