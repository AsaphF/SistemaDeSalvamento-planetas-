"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Segundo exercício
let planetList = [];
// Salvando o planeta
const SaveButton = document.getElementById("savePlanet");
SaveButton === null || SaveButton === void 0 ? void 0 : SaveButton.addEventListener("click", salvePlanet);
function salvePlanet() {
    const namePrompt = prompt("Qual o nome do planeta?");
    let name = namePrompt === null ? " " : namePrompt;
    const validDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let coordinatesString = prompt("Quais são as coordenadas do planeta?\n OBS: 4 dígitos numéricos");
    let coordinates = coordinatesString == null ? " " : coordinatesString.split("");
    let digits = [];
    if (coordinates.length === 4) {
        for (let digito of coordinates) {
            validDigits.includes(digito) ? (digits.push(parseInt(digito, 10))) : alert("Dígito inválido detectado. Por favor, redigite");
        }
    }
    else {
        alert("Erro: Quantidade dos dígitos das coordenadas invalido!");
    }
    const situationPrompt = prompt("Qual a situaçao do planeta?\n - habitado\n - habitável\n - inabitável\n - inexplorado");
    let situation = namePrompt === null ? " " : situationPrompt;
    let salvedPlanet = {
        name: name,
        coordinates: digits,
        situation: situation,
        satelites: []
    };
    planetList.push(salvedPlanet);
    console.log(planetList);
}
// Atualizando a situação de um planeta 
const updateButton = document.getElementById("updatePlanet");
updateButton === null || updateButton === void 0 ? void 0 : updateButton.addEventListener("click", updatePlanet);
function updatePlanet() {
    if (planetList.length == 0) {
        alert("Banco de dados vazio no momento. Salve o planeta primeiro");
    }
    else {
        const namePrompt = prompt("Qual o nome do planeta que deseja atualizar?");
        let name = namePrompt === null ? " " : namePrompt;
        for (let planetObj of planetList) {
            if (planetObj.name === name) {
                const situationPrompt = prompt("Qual a situaçao do planeta?\n - habitado\n - habitável\n - inabitável\n - inexplorado");
                let situation = situationPrompt === null ? " " : situationPrompt;
                planetObj.situation = situation;
                console.log(planetObj);
            }
            else {
                alert("Nome do planeta não encontrado. Redigite");
            }
        }
    }
}
// add satelite planet
const addSateliteButton = document.getElementById("addSat");
addSateliteButton === null || addSateliteButton === void 0 ? void 0 : addSateliteButton.addEventListener("click", addSatelite);
function addSatelite() {
    if (planetList.length == 0) {
        alert("Banco de dados vazio no momento. Salve o planeta primeiro");
    }
    else {
        const namePrompt = prompt("Qual o nome do planeta que deseja atualizar?");
        let name = namePrompt === null ? " " : namePrompt;
        for (let planetObj of planetList) {
            if (planetObj.name === name) {
                const addSatelitePrompt = prompt("Qual o nome do satelite que deseja adcionar?");
                let addSatelite = addSatelitePrompt === null ? " " : addSatelitePrompt;
                planetObj.satelites.push(addSatelite);
                console.log(planetObj);
            }
            else {
                alert("Nome do planeta não encontrado. Redigite");
            }
        }
    }
}
// remove satelite planet
const removeSateliteButton = document.getElementById("removeSat");
removeSateliteButton === null || removeSateliteButton === void 0 ? void 0 : removeSateliteButton.addEventListener("click", removeSatelite);
function removeSatelite() {
    if (planetList.length == 0) {
        alert("Banco de dados vazio no momento. Salve o planeta primeiro");
    }
    else {
        const namePrompt = prompt("Qual o nome do planeta que deseja remove satelite?");
        let name = namePrompt === null ? " " : namePrompt;
        for (let planetObj of planetList) {
            if (planetObj.name === name) {
                const removeSatelitePrompt = prompt("Qual o nome do satelite que deseja remover?");
                let removeSatelite = removeSatelitePrompt === null ? " " : removeSatelitePrompt;
                let indexSatelite = planetObj.satelites.indexOf(removeSatelite);
                if (indexSatelite !== -1) {
                    planetObj.satelites.splice(indexSatelite, 1);
                    console.log(planetObj);
                }
            }
            else {
                alert("Nome do planeta não encontrado. Redigite");
            }
        }
    }
}
const planetListButton = document.getElementById("planetList");
planetListButton === null || planetListButton === void 0 ? void 0 : planetListButton.addEventListener("click", listOfPlanets);
function listOfPlanets() {
    if (planetList.length == 0) {
        alert("Banco de dados vazio no momento. Salve o planeta primeiro");
    }
    else {
        console.log(planetList);
    }
}
