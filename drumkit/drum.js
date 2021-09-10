


function play_it(e)
{
  const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
  console.log(key);
  if(!audio)
  return;
  audio.currentTime=0;
  audio.play();
  key.classList.add("playing");
  setTimeout(function(){ key.classList.remove("playing") }, 70);
}


document.addEventListener("keydown",play_it);