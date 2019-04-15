function main() {
  console.log("Empezamos");

  video1 = document.getElementById('video1');
  video1.width = 300;
  video1.height = 200;

  video2 = document.getElementById('video2');
  video2.width = 300;
  video2.height = 200;

  video3 = document.getElementById('video3');
  video3.width = 300;
  video3.height = 200;

  principal = document.getElementById('principal')
  principal.width = 500;
  principal.height = 400;

  // IDEA: botones de play

  ver1 = document.getElementById('play1');
  ver2 = document.getElementById('play2');
  ver3 = document.getElementById('play3');

  video1.load();

// IDEA: Pantalla principal

  ver1.onclick = () => {
    console.log("repoduciendo video1");

    principal.src = "Video1.mp4";
    principal.currentTime = video1.currentTime
    principal.play();
  }

  ver2.onclick = () => {
    console.log("repoduciendo video2");

    principal.src = "Video2.mp4";
    principal.currentTime = video2.currentTime
    principal.play();
  }

  ver3.onclick = () => {
    console.log("repoduciendo video3");

    principal.src = "Video3.mp4";
    principal.currentTime = video3.currentTime
    principal.play();
  }

  // IDEA: Sonido On/Off

  video1.onmouseover = () => {
      console.log("Audio 1 On")
    video1.muted= false;
  }
  video1.onmouseout = () => {
    console.log("Audio 1 Off")
    video1.muted= true;
  }

  video2.onmouseover = () => {
    console.log("Audio 2 On")
    video2.muted= false;
  }
  video2.onmouseout = () => {
    console.log("Audio 2 Off")
    video2.muted= true;
  }

  video3.onmouseover = () => {
    console.log("Audio 3 On")
    video3.muted= false;
  }
  video3.onmouseout = () => {
    console.log("Audio 3 Off")
    video3.muted= true;
  }

// IDEA: Loop

  bucle = document.getElementById("bucle");

  bucle.onclick = () => {
    if (principal.loop == true) {
      principal.loop = false;
      alert("Loop Desactivado");
      console.log("loop off");
    } else {
      principal.loop = true;
      alert("Loop Activado");
      console.log("loop on");
    }

  }

}
