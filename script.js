function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        email_sender: document.getElementById("emailSender").value,
        subject_sender: document.getElementById("subjectSender").value,
        message_sender: document.getElementById("message").value,
    };
    emailjs.send('{{SERVICE ID}}','{{TEMPLATE ID}}',tempParams)
     .then(function(res){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
     });
}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
<<<<<<< HEAD
        strings: ["Frontend Developer","Coder","FullStack MERN Developer"],
=======
        strings: ["Frontend Developer","Coder","Web Developer"],
>>>>>>> 06568a1615493ccd783b6460640bbcab40ff0a99
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
<<<<<<< HEAD
        strings: ["Web Developer","Coder","FullStack MERN Developer"],
=======
        strings: ["Web Developer","Coder","Web Developer"],
>>>>>>> 06568a1615493ccd783b6460640bbcab40ff0a99
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});


<<<<<<< HEAD
var myproj=[
    ['./img4.webp','Hotel Booking App','https://github.com/yashaswishahi31/Yashaswi-booking-app','https://yashaswi-booking-app.onrender.com/'] ,
    ['./img5.webp','Restaurant App','https://github.com/yashaswishahi31/SSv_Restaurant','https://s-sv-restaurant.vercel.app/'] ,
    ['./img6.webp','PDF Generator','https://github.com/yashaswishahi31/PDF_Generator','https://github.com/yashaswishahi31/PDF_Generator'],
    ['./img1.jpg','Tic Tak Toe','https://github.com/yashaswishahi31/tic_tak_toe','yashaswishahi31.github.io/tic_tak_toe/'] ,
 ['./img2.jpg','Quiz','https://github.com/yashaswishahi31/quiz','yashaswishahi31.github.io/quiz/'] ,
  ['./img3.jpg','TO DO LIST','https://github.com/yashaswishahi31/To-Do-List','https://github.com/yashaswishahi31/To-Do-List'],


=======
var myproj=[['./img1.jpg','Tic Tak Toe','https://github.com/yashaswishahi31/tic_tak_toe','yashaswishahi31.github.io/tic_tak_toe/'] ,
 ['./img2.jpg','Quiz','https://github.com/yashaswishahi31/quiz','yashaswishahi31.github.io/quiz/'] ,
  ['./img3.jpg','TO DO LIST','https://github.com/yashaswishahi31/To-Do-List','https://github.com/yashaswishahi31/To-Do-List'],
//   ['./images/proj1.png','Tic Tak Toe','https://github.com/yashaswishahi31/tic_tak_toe','yashaswishahi31.github.io/tic_tak_toe/'] ,
//   ['./images/proj2.png','Quiz','https://github.com/yashaswishahi31/quiz','yashaswishahi31.github.io/quiz/'] ,
//   ['./images/proj2.png','Quiz','https://github.com/yashaswishahi31/quiz','yashaswishahi31.github.io/quiz/']
>>>>>>> 06568a1615493ccd783b6460640bbcab40ff0a99
 ];
const projcon=document.getElementsByClassName("projcon")[0];

for(let i=0 ; i<myproj.length;i++){
    const proj=document.createElement("div");
    proj.setAttribute('class','projc');
    proj.setAttribute('data-aos','fade-up');
    const img=document.createElement("img");
    img.setAttribute('src',myproj[i][0]);
    img.addEventListener('click' , ()=>{
        window.open(myproj[i][3]);
    })
    proj.appendChild(img);
    const text=document.createElement("a");
    text.setAttribute('class','projname');
    text.setAttribute('href',myproj[i][2]);
    text.innerHTML=myproj[i][1];
    proj.appendChild(text);
    projcon.appendChild(proj);
}

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });