window.onload=function hafiz(){
    var txt_2 = 'I am a';
    var txt_4=" develper"
    var txt_3 = "I love to"
    var txt_5=" code"
    var speed = 300;
    let content_3;
    let myElm;
    let content_2=document.querySelector(".content_2");
    const timer = ms => new Promise(res => setTimeout(res, ms))
    typeWriter_2();
    async function typeWriter_2 (){

       
        content_2.innerHTML=" ";
        
        for (var i = 0; i < txt_2.length; i++) {
            content_2.innerHTML+=txt_2.charAt(i);
            await timer(speed);
        }//i am a

        createElement();

        for (var i = 0; i < txt_4.length; i++) {
            content_3.innerHTML+=txt_4.charAt(i);
            await timer(speed);
        }//developer

        content_2.innerHTML=" ";//vanishing now
        
        for (var i = 0; i < txt_3.length; i++) {
            content_2.innerHTML+=txt_3.charAt(i);
            await timer(speed);
        }//i love

        createElement();

        for (var i = 0; i < txt_5.length; i++) {
            content_3.innerHTML+=txt_5.charAt(i);
            await timer(speed);
        }//code


        //loop the animation for infinite
        setTimeout(typeWriter_2,1000);
}
    function createElement()
    {
        myElm = document.createElement("span");	
        content_2.appendChild(myElm);
        myElm.className = "span_inside_animation";
        content_3=document.querySelector(".content_2 span");
    }
}