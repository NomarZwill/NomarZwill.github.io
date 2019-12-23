'use strict';

document.querySelector('.but-a').addEventListener('click', goForward);
document.querySelector('.but-b').addEventListener('click', goBack);
document.querySelector('.but-c').addEventListener('click', goLeft);
document.querySelector('.but-d').addEventListener('click', goRight);

function changeText (text) {
    document.querySelector('.quest-text').innerHTML = text;
}

function blockNavButtons () {
    document.querySelector('.but-a').disabled = 1;
    document.querySelector('.but-b').disabled = 1;
    document.querySelector('.but-c').disabled = 1;
    document.querySelector('.but-d').disabled = 1;
}

function Node (x, y) {
    this.x = x;
    this.y = y;
}

function compareNode (nodeA, nodeB) {
    if (nodeA.x == nodeB.x && nodeA.y == nodeB.y) {
        return true;
    }
    return false;
}

function goLeft () {
    let startPosition = hero.currentPosition
    let step = new Node( hero.currentPosition.x - 1, hero.currentPosition.y )
    for (let node of maze) {
        if ( compareNode(node, step) ) {
            hero.currentPosition = step;
            drawStep(startPosition, step);
            return finishCheck() ? changeText('Вы нашли выход, поздравляем!') : changeText("Вы свернули налево");
        }
    }
    return changeText("Нет пути");
}

function goRight () {
    let startPosition = hero.currentPosition
    let step = new Node( hero.currentPosition.x + 1, hero.currentPosition.y )
    for (let node of maze) {
        if ( compareNode(node, step) ) {
            hero.currentPosition = step;
            drawStep(startPosition, step);
            return finishCheck() ? changeText('Вы нашли выход, поздравляем!') : changeText("Вы свернули направо");
        }
    }
    return changeText("Нет пути");
}

function goForward () {
    let startPosition = hero.currentPosition
    let step = new Node( hero.currentPosition.x, hero.currentPosition.y + 1 )
    for (let node of maze) {
        if ( compareNode(node, step) ) {
            hero.currentPosition = step;
            drawStep(startPosition, step);
            return finishCheck() ? changeText('Вы нашли выход, поздравляем!') : changeText("Вы прошли вперёд");
        }
    }
    return changeText("Нет пути");
}

function goBack () {
    let startPosition = hero.currentPosition
    let step = new Node( hero.currentPosition.x, hero.currentPosition.y - 1 )
    for (let node of maze) {
        if ( compareNode(node, step) ) {
            hero.currentPosition = step;
            drawStep(startPosition, step);
            return finishCheck() ? changeText('Вы нашли выход, поздравляем!') : changeText("Вы вернулись назад");
        }
    }
    return changeText("Нет пути");
}

function finishCheck () {
    let finishNode = new Node(9, 10);
    if ( compareNode(hero.currentPosition, finishNode) ) {
        blockNavButtons();
        return true;
    }
    return false;
}

let maze = [new Node(3, 0),
            new Node(3, 1),
            new Node(3, 2),
            new Node(3, 3),
            new Node(1, 3),
            new Node(2, 3),
            new Node(4, 3),
            new Node(5, 3),
            new Node(1, 4),
            new Node(5, 4),
            new Node(1, 5),
            new Node(3, 5),
            new Node(4, 5),
            new Node(5, 5),
            new Node(6, 5),
            new Node(7, 5),
            new Node(3, 6),
            new Node(7, 6),
            new Node(3, 7),
            new Node(5, 7),
            new Node(6, 7),
            new Node(7, 7),
            new Node(8, 7),
            new Node(9, 7),
            new Node(5, 8),
            new Node(9, 8),
            new Node(5, 9),
            new Node(9, 9),
            new Node(9, 10)];

let hero = {
    currentPosition: new Node(3, 0),
    currentMaze: getMazeInTableForm()
}

/* Получаем массив строк таблицы, где строка - это объект NodeList.
   Нумерация строк - с первой по последнюю, нумерация ячеек - с первой по последнюю */
   function getMazeInTableForm() {
    let tableRef = document.querySelector(".map-of-maze");
    let rowsRef = tableRef.querySelectorAll('tr');

    let mazeInTableForm = [];

    for (let i = 0; i < rowsRef.length; i++) {
        mazeInTableForm[rowsRef.length - i - 1] = rowsRef.item(i).querySelectorAll('td');
    }
    
    return mazeInTableForm;
}

function setMainWalls () {
    let maze = hero.currentMaze;

    for (let i = 0; i < maze.length; i++) {
        maze[i].item(0).classList.add('black-cell');
        maze[i].item(maze.length - 1).classList.add('black-cell');
    }

    for (let i = 0; i < maze[0].length; i++) {
        maze[0].item(i).classList.add('black-cell');
        maze[maze.length - 1].item(i).classList.add('black-cell');
    }
}

function drawCurrentPosition (currentNode) {
    hero.currentMaze[currentNode.y].item(currentNode.x).classList.add('current-cell');
}

function drawWall (Node) {
    hero.currentMaze[Node.y].item(Node.x).classList.add('black-cell');
}

function drawPass (Node) {
    hero.currentMaze[Node.y].item(Node.x).classList.remove('current-cell', 'black-cell');
    hero.currentMaze[Node.y].item(Node.x).classList.add('white-cell');
}

function drawStep (currentNode, step) {
    drawPass(currentNode);
    drawCurrentPosition(step);

    for (let i = -1; i < 2; i++) {                      // i - изменение x
        for (let j = -1; j < 2; j++) {                  // j - изменение у
            let tmp = new Node(step.x + i, step.y + j);   
            if ( compareNode(step, tmp) )  {
                continue;
            }   
            for (let node of maze) {
                if ( compareNode(node, tmp) ) {
                    drawPass(tmp);
                }
            }
        }
    }
}