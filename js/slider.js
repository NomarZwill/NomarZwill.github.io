"use strict";

let news1 = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in posuere justo, ac fermentum arcu. Ut ac eros rutrum, pulvinar leo ac, commodo ipsum. Suspendisse potenti. Sed porttitor felis justo, eu semper enim commodo et. Fusce ante est, porttitor hendrerit molestie in, mattis id tellus. Aenean pulvinar pharetra ultrices. Donec vel metus egestas, congue massa vitae, mollis orci. Praesent aliquet orci semper, luctus urna at, congue lorem. Curabitur sed tortor ut tellus pellentesque malesuada quis eget est. Nunc mattis est cursus orci feugiat, vitae condimentum diam sagittis. Praesent tempus ligula tortor, non varius dolor egestas sed. Nullam lobortis, mi et euismod molestie, nulla velit porttitor felis, ac interdum mi tellus id sapien. Ut condimentum elit magna, eu dictum nisl iaculis ut.</p>`;
let news2 = `<p>Duis tristique euismod sem in fringilla. Nulla eget maximus magna. Nulla id sollicitudin enim. Nam a justo ac nunc accumsan sollicitudin. Nullam nibh risus, bibendum vitae rhoncus in, vestibulum vel lorem. Sed tincidunt, metus id blandit ultrices, arcu diam congue leo, et aliquam enim ante at mi. Cras et euismod risus. Phasellus mollis nunc non lacus volutpat laoreet. In id justo lectus. Fusce pharetra ac eros at malesuada. Proin congue risus lacus, et dapibus neque suscipit nec. Nam dignissim scelerisque elit a hendrerit. Nam dictum congue odio efficitur posuere. Proin vitae posuere lacus. Cras vel odio efficitur, scelerisque metus non, tristique velit. In sapien libero, iaculis id turpis vitae, maximus sollicitudin magna.</p>`;
let news3 = `<p>Aliquam odio nibh, bibendum id nibh eu, porttitor ullamcorper nisi. Nulla facilisi. Quisque congue nisl ut aliquam sollicitudin. Proin in massa leo. In venenatis sem ac diam lacinia ullamcorper. Ut vitae ex gravida, pellentesque velit sit amet, feugiat enim. Ut enim felis, feugiat vitae interdum dapibus, dictum eu nunc. Nulla eget nisi eu ex ultricies sodales. Donec pellentesque erat dui, at consequat magna elementum sed. Pellentesque porttitor diam ac mattis hendrerit.</p>`;
let news4 = `<p>Suspendisse tincidunt, sapien sed accumsan porta, justo tortor dictum dolor, ac aliquam neque purus ac felis. Phasellus ornare velit ut tellus blandit lobortis. In vitae auctor leo. Mauris ut massa eu purus hendrerit vulputate. Vivamus orci tortor, dignissim et magna vitae, elementum finibus diam. Aenean laoreet cursus magna, nec tincidunt nunc rutrum in. Praesent risus eros, accumsan in sem eu, consequat tristique mi. Duis vitae purus vestibulum, ultrices nisl non, efficitur tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eleifend vitae risus nec commodo.</p>`;
let news5 = `<p>Morbi euismod placerat pharetra. Ut scelerisque malesuada turpis, porta aliquam velit viverra eget. Maecenas placerat velit velit, vel volutpat urna egestas a. Sed vitae dolor a lorem condimentum elementum. Aenean bibendum odio vel pretium suscipit. Proin tincidunt, ligula ac interdum vulputate, nibh nulla semper dui, ut lacinia mauris orci in quam. Donec placerat facilisis ligula, luctus facilisis metus luctus ut.</p>`;

let newsList = [news1, news2, news3, news4, news5];

let currentNews = 0;

document.querySelector(".article-slider").innerHTML = newsList[currentNews];
document.querySelector(".slider-box__num-of-articles").innerHTML = `${currentNews + 1} из ${newsList.length}`

document.querySelector(".prev-button").addEventListener("click", getPreviousNews);
document.querySelector(".next-button").addEventListener("click", getNextNews);

function getNextNews () {
    if (currentNews + 1 < newsList.length) {
        currentNews++;
        document.querySelector(".article-slider").innerHTML = newsList[currentNews];
        document.querySelector(".slider-box__num-of-articles").innerHTML = `${currentNews + 1} из ${newsList.length}`;
    } else {
        currentNews = 0;
        document.querySelector(".article-slider").innerHTML = newsList[currentNews];
        document.querySelector(".slider-box__num-of-articles").innerHTML = `${currentNews + 1} из ${newsList.length}`;
    }
}

function getPreviousNews () {
    if (currentNews - 1 >= 0) {
        currentNews--;
        document.querySelector(".article-slider").innerHTML = newsList[currentNews];
        document.querySelector(".slider-box__num-of-articles").innerHTML = `${currentNews + 1} из ${newsList.length}`;
    } else {
        currentNews = newsList.length - 1;
        document.querySelector(".article-slider").innerHTML = newsList[currentNews];
        document.querySelector(".slider-box__num-of-articles").innerHTML = `${currentNews + 1} из ${newsList.length}`;
    }
}


let HOVERCOLOR = `#FF3754`;
