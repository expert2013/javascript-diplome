// slider skin
function Slider1(settings){
    let slideIndex = 1,
      slides =document.getElementsByClassName(settings.slides),
      prev = document.getElementsByClassName("prev"),
      next = document.getElementsByClassName("next")
    
  showSlides(slideIndex);


  function showSlides(n) {
   
      if(n > slides.length) {
          slideIndex = 1;
      };
      if (n < 1) {
          slideIndex = slides.length;
      };

      for ( let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      };

      slides[slideIndex - 1].style.display = 'block';
      
    }

  function plusSlides(n) {
      showSlides(slideIndex += n)
  }

  function currentSlide(n) {
      showSlides(slideIndex = n)
  }

  prev[0].addEventListener('click', function(){
      plusSlides(-1);


        if (getGender() == 'Женский') {
           personSkin.style.cssText = getBackGround(imgSkins , slideIndex + 3);    
      } else {
          personSkin.style.cssText = getBackGround(imgSkins , slideIndex);    
      };

  } );

  next[0].addEventListener('click', function(){
      plusSlides(1);

        if (getGender() == 'Женский') {
           personSkin.style.cssText = getBackGround(imgSkins , slideIndex + 3);    
      } else {
          personSkin.style.cssText = getBackGround(imgSkins , slideIndex);    
      };    
  } );
};


// slider hair
function Slider2(settings){
   
    let slideIndex = 1,
      slides =document.getElementsByClassName(settings.slides),
      prev = document.getElementsByClassName("prev"),
      next = document.getElementsByClassName("next"),
     
      arr = []; 
      for (i = 0; i < slides.length; i++){
          arr.push(slides[i]);
      }
   
  showSlides(slideIndex);

  function showSlides(n) {
 
if (getGender() == 'Женский') {
      slides = arr.slice(3);
   }else{
       slides = arr.slice(0, 3);
   }; 

      if(n > slides.length) {
          slideIndex = 1;
      };
      if (n < 1) {
          slideIndex = slides.length;
      };

      let slidesAll = document.getElementsByClassName(settings.slides) 
      
      for ( let i = 0; i < slidesAll.length; i++) {
        if (getGender() == 'Женский'){
             slidesAll[i].style.display = 'none';
        } else {
            slidesAll[i].style.display = 'none';
        } 

      };
       
      if (getGender() == 'Женский'){
          slidesAll[slideIndex - 1 + 3].style.display = 'block';
     
     } else {
          slidesAll[slideIndex - 1 ].style.display = 'block';
  }

 }
  
  function plusSlides(n) {
      showSlides(slideIndex += n)
  }

  function currentSlide(n) {
      showSlides(slideIndex = n)
  }

  prev[1].addEventListener('click', function(){
      plusSlides(-1);
    
      if (getGender() == 'Женский') {
           personHair.style.cssText = getBackGround(imgHairs , slideIndex + 3);
      } else {
          personHair.style.cssText = getBackGround(imgHairs , slideIndex);     
      };    
    
  } );

  next[1].addEventListener('click', function(){
      plusSlides(1);
   

        
      if (getGender() == 'Женский') {
           personHair.style.cssText = getBackGround(imgHairs , slideIndex + 3);
      } else {
          personHair.style.cssText = getBackGround(imgHairs , slideIndex);     
      };    
  } );
};


// slider clothes
function Slider3(settings){
     let slideIndex = 1,
      slides =document.getElementsByClassName(settings.slides),
      prev = document.getElementsByClassName("prev"),
      next = document.getElementsByClassName("next"),
     
      arr = []; 
      for (i = 0; i < slides.length; i++){
          arr.push(slides[i]);
      }
   
  showSlides(slideIndex);

  function showSlides(n) {
 
if (getGender() == 'Женский') {
     slides = arr.slice(3);
   }else{
       slides = arr.slice(0, 3);
   }; 

      if(n > slides.length) {
          slideIndex = 1;
      };
      if (n < 1) {
          slideIndex = slides.length;
      };

      let slidesAll = document.getElementsByClassName(settings.slides) 
      
      for ( let i = 0; i < slidesAll.length; i++) {
        if (getGender() == 'Женский'){
             slidesAll[i].style.display = 'none';
        } else {
            slidesAll[i].style.display = 'none';
        } 

      };
       
      if (getGender() == 'Женский'){
          slidesAll[slideIndex - 1 + 3].style.display = 'block';
     
     } else {
          slidesAll[slideIndex - 1 ].style.display = 'block';
  }

 }
  
  function plusSlides(n) {
      showSlides(slideIndex += n)
  }

  function currentSlide(n) {
      showSlides(slideIndex = n)
  }

  prev[2].addEventListener('click', function(){
      plusSlides(-1);
    
      if (getGender() == 'Женский') {
           personClothes.style.cssText = getBackGround(imgClothes , slideIndex + 3);
      } else {
          personClothes.style.cssText = getBackGround(imgClothes , slideIndex);    
      };    
    
  } );

  next[2].addEventListener('click', function(){
      plusSlides(1);
   

        
      if (getGender() == 'Женский') {
           personClothes.style.cssText = getBackGround(imgClothes , slideIndex + 3);
      } else {
           personClothes.style.cssText = getBackGround(imgClothes , slideIndex);     
      };    
  } );
};