# Day 1 JS


# CSS
- Your CSS is SUPER important. Having the ability to make the visual look just like the mockup is super important in a job setting. I would work on that more to make is look like what the project asked for.


# HTML && Javascript

## If you want to use id I would make them more descriptive to what the element is used for.
* example: id="sound_boom" 
* example: id="sound_wav" 
```html
<audio id='01' src="./assets/boom.wav"></audio>
<audio id='02' src="./assets/clap.wav"></audio>
```


### Something to think about 
- I personally would not use a id here, i would us a data attribute so I can be more flexible in my javascipt code, 
- I can than make the data attribute more descriptive to what i am adding: example: data-key-code="65" data-sound="boom"
- Now we can query selector and get every and use javascript to do our checking what we are looking for

https://stackoverflow.com/questions/7084557/select-all-elements-with-a-data-xxx-attribute-without-using-jquery
https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll#dataset_selector_attribute_selectors

```js
document.querySelectorAll('[data-key]');
```

* How I would do this: first I would set these of with a data attribute because they are related to each other
- https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

* Next I would associate the key coe for each sound (example: key code "a" is 65, b is "83")
- https://keycode.info/
- https://css-tricks.com/snippets/javascript/javascript-keycodes/

```html
<audio data-key-code="65" data-sound="boom" src="./assets/boom.wav"></audio>
<audio data-key-code="83" data-sound="clap"  src="./assets/clap.wav"></audio>
```

## Change your 
* example: class="key" 
```html
<div class="btn0 key"><button onclick="boom()">A</button></div>
<div class="btn1 key"><button onclick="clap()">S</button></div>
```

* example: class="key key_boom" 
```html
<div data-key-container="65"><button class="btn" data-key="65">A</button></div>
<div data-key-container="83"><button class="btn" data-key="83">S</button></div>
```



## Setup to get all element and use a query selector instead of doing each indivdually

- This can be setup to use the one function instead of creating a function for each element
- each audio tag could be setup with the keycode that you are pressing

```js

const boom = function(){document.getElementById("01").play()}
const clap = function(){document.getElementById("02").play()}
const hiHat = function(){document.getElementById("03").play()}
const kick = function(){document.getElementById("04").play()}
const openHat = function(){document.getElementById("05").play()}
const ride = function(){document.getElementById("06").play()}
const snare = function(){document.getElementById("07").play()}
const tink = function(){document.getElementById("08").play()}


```


```js
window.addEventListener("keypress", (e) => {
    document.querySelector('audio[data-key-code="'+e.keyCode+'"]').play()
    var buttonPressed = document.querySelector('div[data-key-container="'+e.keyCode+'"]')
    hoverMimic(buttonPressed);
})

```

## If a data attribute or a similar class is used you can get all the element with a querySelectorAll()
```js

const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");


document.querySelectorAll('.btn__container');
```

