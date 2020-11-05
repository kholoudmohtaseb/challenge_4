const e = require("express");

import React from 'react';
import Component1 from 'Component1';
import Component2 from 'Component2';
import Component3 from 'Component3';


var rowTable = document.getElementsByTagName('tr');
var colTable = document.getElementsByTagName('td');
var slots = document.getElementsByClassName('slot');
var playerTurn = document.getElementsByClassName('player-turn');
var button = document.getElementsByClassName('reset');

for (let i = 0; i < col.length; i++) {

    col[i].addEventListener('click', (e) => {
        document.body.appendChild(button);
    })
}
while (!player1) {
    player1 = prompt("Player 1: Enter your name, your color is red.");
}
player1Color = 'red';

while (!player2) {
    player2 = prompt("Player 2: Enter your name, your color is black.");
}
player2Color = 'black';

var currentPlayer = 1;

function changeColor() {

}

function colorMatch(one, two, three, four) {

}


function vertitalCheck() {
    for (let row = 0; row < rowTable.length; row++) {
        for (let col = 0; col < 4; col++) {
        }
    }
}

function horizontalCheck() {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
        }
    }
}

function daiagonalCheck() {
    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
        }
    }

}

function drawCheck() {

}

button.addEventListener('click', () => {
    slots.forEach(slot => {
        slot.style.backgrounColor = 'white';

    });
    playerTurn.style.color = 'yellow';
})

export default App;