
let inputAge = document.getElementById('age'),
    select = document.getElementById('select'),
    bio = document.getElementById('bio'),
   
    votingBtn = document.getElementById('voting'),
    mainCardsItem = document.getElementsByClassName('main-cards-item'),
    radioBtn = document.getElementsByClassName('radio')[0],
    personConstruct = document.getElementsByClassName('person construct')[0],
    indexGender = 0
    
let popupBtn = document.getElementById('popup-btn'), 
      overlay = document.getElementsByClassName('overlay')[0],
      main = document.getElementsByClassName('main')[0],
      custom = document.getElementsByClassName('custom')[0],
      customInfo = document.getElementsByClassName('custom-info')[0],
      customChar = document.getElementsByClassName('custom-char')[0],
      customStyle = document.getElementsByClassName('custom-style')[0],
      label = customInfo.getElementsByTagName('label')[0],
      inputName = customInfo.getElementsByTagName('input')[0],
      mainButtons = document.getElementsByClassName('main-buttons')[0],
      crimeBtn = document.getElementById('crime')
      //photos = document.getElementsByClassName('photo')

    // console.log(label);
    

    customInfo.insertBefore(label, inputName);
    mainButtons.appendChild(crimeBtn);

    popupBtn.addEventListener('click', function() {
        overlay.style.display = "none";
        main.style.display = "none";
        custom.style.display = "flex";
        customInfo.style.display = "block";
        customChar.style.display = "block";
        customStyle.style.display = "block";  

});

// hide image
   
function getGender() {
    let radio = document.querySelectorAll('.radio input[name=sex]');
    for ( let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;   
        };
    };
};
  
function defaultSlide(index, typeStyle){
   for (let i = 0; i < typeStyle.length; i++){
      if (i == index) {
         typeStyle[i].style.display ="block";
      } else {
         typeStyle[i].style.display ="none"; 
      };
     
   } 
}

function randomValue(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };


function genRandom(iloop, sumEqual){
let arrResult = [0, 0, 0];
for (let a = 0; a < iloop; a++) {

  for (i = 0; i < arrResult.length; i++) {
      arrResult[i] = randomValue(1, 50);
  };
  
  let sum = (arraySum(arrResult));
    if (sum == sumEqual) {
      return arrResult;
      break;
      }; 
    };
 };

function getchempion(ReplaceClass) {
    for (i = 0; i < mainCardsItem.length; i++) {
        mainCardsItem[i].classList.remove(ReplaceClass);
    };

let result = document.getElementsByClassName('result'); 
       let array = [];
       let arrayTemp = [];
       let sortArray = [];

     for (let i = 0; i < result.length; i++) {
         let heightValue =  parseInt(result[i].childNodes[3].childNodes[1].style.height);
           sortArray[i] = heightValue; 
           array.push(heightValue);
      };     
   
sortArray = array.sort(sortNumber);
maxValue = sortArray[sortArray.length-1];

for (let a = 0; a < result.length; a++) {
         let heightValue =  parseInt(result[a].childNodes[3].childNodes[1].style.height);
           if (heightValue == maxValue) {
             mainCardsItem[a].classList.add(ReplaceClass);;

           };               
      };   
};


 
// function clearInput(input) {
//     for ( let i = 0; i < input; i++) {
//         input[i].value ='';
//     }
//  }; 

  let personSkin = personConstruct.children[0],
      personClothes = personConstruct.children[1],
      personHair = personConstruct.children[2],
      personShoes = personConstruct.children[3]

 let imgSkins = 'background: url("img/skin/skin-1.png") center no-repeat; background-size: cover',
     imgClothes = 'background: url("img/clothes/construct/clothes-1.png") center no-repeat; background-size: cover',
     imgHairs = 'background: url("img/hair/construct/hair-1.png") center no-repeat; background-size: cover',
     imgShoes =' background: url("img/clothes/construct/shoes-1.png") center no-repeat; background-size: cover'
    
  personSkin.style.cssText = getBackGround(imgSkins , 1); // slideIndex
  personClothes.style.cssText = getBackGround(imgClothes , 1);
  personHair.style.cssText = getBackGround(imgHairs , 1);
  personShoes.style.cssText = getBackGround(imgShoes , 1);

function getBackGround(str, index){
  let num = parseInt(str.replace(/\D+/g,""));
  if (index > 0) { 
      return str.replace(num, index); 
  }; 
  
}; 

 function progressValue(value) {
    let result = document.getElementsByClassName('result'); 
     for (let i = 0; i < result.length; i++) {
      result[i].childNodes[3].childNodes[1].style.height = value + "%";
      result[i].childNodes[1].textContent = value + "%";    
    };
 };

 function progressColumnValue(value,index) {
    let result = document.getElementsByClassName('result'); 
     for (let i = 0; i < result.length; i++) {
      if (i == index) {  
          result[i].childNodes[3].childNodes[1].style.height = value + "%";
          result[i].childNodes[1].textContent = value + "%"; 
        };
        
    };
 };

    function clearForm() {
      let customInfoAll = document.querySelectorAll('.custom-info');  
         customInfoAll[0].childNodes[3].value = '';
         customInfoAll[0].childNodes[3].classList.remove('input[type="text"]:focus');
         customInfoAll[0].childNodes[7].value ='';
         customInfoAll[0].childNodes[11].selectedIndex = 0;
         customInfoAll[0].childNodes[15].value ='';
  };


 //  function addPercentValue(value,index) {
 //    let result = document.getElementsByClassName('result'); 
 //     for (let i = 0; i < result.length; i++) {
 //      if (i == index) {  
 //         let heightValue =  parseInt(result[i].childNodes[3].childNodes[1].style.height);
 //         value = value + heightValue;
 //           if (value <= 100){ 
 //            result[i].childNodes[3].childNodes[1].style.height = value + "%";
 //            result[i].childNodes[1].textContent = value + "%"; 
 //          };
 //        };
        
 //    };
 // };

function capitalFio(fio) {
  let string = fio;
  let strFio = '';   
    if (string.length > 0){
    strFio = string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    } else {
      fio;
    }; 
return strFio;
};




 let skinColor = document.getElementsByClassName('skin-color'), 
    hairStyle = document.getElementsByClassName('hair-style'),
    clothesStyle = document.getElementsByClassName('clothes-style') 

// Вмешаться в выборы добавить кандидату 25%
crimeBtn.addEventListener('click', function() {
    let arr = genRandom(1000,75);
     arr[2] = arr[2] + 25;
    
      for (i = 0; i < arr.length; i++){
      progressColumnValue(arr[i],i);   
  }
    //addPercentValue(25,2); 
    getchempion('main-cards-item-active'); 
}); 



// Получение данных из первой формы  

let readyBtn = document.getElementById('ready')
  readyBtn.addEventListener('click', function() {
 
 // обнуление результатов
  progressValue(0);
 
//if ((typeof(emp)) === 'string' && (typeof(emp)) != null && emp != '' && emp.length < 50) 
  


// let string = inputName.value;
// let strFio = '';

// if (string.length > 0){
// strFio = string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
// } else {
//   inputName.value;
// }; 

  

       //  if ((typeof(emp)) === 'string' && (typeof(emp)) != null && emp != '' && emp.length < 50) 

    // if ((typeof(inputName.value)) === 'string' && (typeof(inputName)) != null && inputName.value != '' && inputName.value.length > 3) {
    //     alert('ok');
    // } else {
    //    alert ('no');
    // }; 
    

       let person = {
          fio: capitalFio(inputName.value),
          age: inputAge.value + ' лет',
          genderValue: getGender(),
          selectValue: select.value,
          bioValue: bio.value 
       };       
 
 main.style.display = "block";
 custom.style.display = "none";

 let mainCardsNew = mainCardsItem[indexGender].cloneNode(true);

    //mainCardsNew.style.border = "2px solid green"; //временный стиль
    document.body.appendChild(mainCardsNew);
    mainCardsItem[0].parentNode.insertBefore(mainCardsNew, mainCardsItem[1].nextSibling);

 let photo = mainCardsNew.childNodes[1].childNodes[1];
     mainCardsNew.childNodes[1].insertBefore(personConstruct,photo);
     //personConstruct.style.border = "1px solid green";
     photo.parentNode.removeChild(photo);
 
     
    mainCardsNew.children[1].textContent = person.fio;
    mainCardsNew.children[2].textContent = person.age;
    mainCardsNew.children[3].textContent = person.genderValue;
    mainCardsNew.children[4].textContent = person.selectValue;
    mainCardsNew.children[5].textContent = person.bioValue;

     
// Исправляем ФИО
     for (i = 0; i < mainCardsItem.length; i++){
        nameCardValue = mainCardsItem[i].childNodes[3].textContent;  
        mainCardsItem[i].childNodes[3].textContent = capitalFio(nameCardValue)
     };        
 
 }); 
 
 let btnReset = document.getElementById('reset');
     btnReset.addEventListener('click', function(){
  
    main.style.display = "none";
    custom.style.display = "flex";

    // personConstruct.style.display = "block";

       customChar.insertBefore(personConstruct, readyBtn);
       //console.log(mainCardsItem[2]);
      // mainCardsItem.removeChild(mainCardsItem[2]);
      let main2 = document.getElementsByClassName('main-cards')[0];
      //console.log(main2.childNodes[4]);
      main2.childNodes[4].parentElement.removeChild(main2.childNodes[4]); 
      //document.body.removeChild(mainCardsItem[2]);
        //main2.removeChild(childNodes);
      
       if (getGender() == 'Женский') {
    
     personSkin.style.cssText = getBackGround(imgSkins ,  5 ); //slideIndex
     personClothes.style.cssText = getBackGround(imgClothes , 5);
     personHair.style.cssText = getBackGround(imgHairs , 5);
     personShoes.style.cssText = getBackGround(imgShoes , 2);
       defaultSlide(1, skinColor);
       defaultSlide(4, hairStyle);
       defaultSlide(4, clothesStyle);
       //clearInput();
      indexGender = 1; 
  } else {
      personSkin.style.cssText = getBackGround(imgSkins , 1); // slideIndex
      personClothes.style.cssText = getBackGround(imgClothes , 1);
      personHair.style.cssText = getBackGround(imgHairs , 1);
      personShoes.style.cssText = getBackGround(imgShoes , 1);
       defaultSlide(0, skinColor);
       defaultSlide(0, hairStyle);
       defaultSlide(0, clothesStyle);
       //clearInput();
      indexGender = 0;
  }; 

 
 clearForm();

});   

    function arraySum(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += +array[i];
      }
      return sum;
    }

    //voting
    function sortNumber(a, b) {
    return a - b;
    }


let voting = document.getElementById('voting');
  
  voting.addEventListener('click', function() {
let arr = genRandom(1000,100);
  for (i = 0; i < arr.length; i++){
  progressColumnValue(arr[i],i);   
  }
// Первое место

getchempion('main-cards-item-active');

});


// radio

 radioBtn.addEventListener('click', function () {

     if (getGender() == 'Женский') {
     clearForm();
     personSkin.style.cssText = getBackGround(imgSkins ,  5 ); //slideIndex
     personClothes.style.cssText = getBackGround(imgClothes , 5);
     personHair.style.cssText = getBackGround(imgHairs , 5);
     personShoes.style.cssText = getBackGround(imgShoes , 2);
       defaultSlide(1, skinColor);
       defaultSlide(4, hairStyle);
       defaultSlide(4, clothesStyle);
       //clearInput();
      indexGender = 1; 
  } else {
      clearForm();
      personSkin.style.cssText = getBackGround(imgSkins , 1); // slideIndex
      personClothes.style.cssText = getBackGround(imgClothes , 1);
      personHair.style.cssText = getBackGround(imgHairs , 1);
      personShoes.style.cssText = getBackGround(imgShoes , 1);
       defaultSlide(0, skinColor);
       defaultSlide(0, hairStyle);
       defaultSlide(0, clothesStyle);
       //clearInput();
      indexGender = 0;
  }; 


}); 

//sliders

const s1 = new Slider1( {
    slides: 'skin-color'
});

const s2 = new Slider2( {
    slides: 'hair-style'
});

const s3 = new Slider3( {
    slides: 'clothes-style'
});
