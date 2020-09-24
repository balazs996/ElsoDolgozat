'use strict'

const diakok = [
    { name: 'Tóth Balázs', class: '14SZF' },
    { name: 'Börcsök Dávid', class: '14SZF' },
    { name: 'Kucsera Kinga', class: '14SZF' },
    { name: 'Pásztor Krisztián', class: '14SZF' },
    { name: 'Szabó Levente', class: '14SZF' },
    { name: 'Visnyei Ádám', class: '14SZF' },
    { name: 'Kiss László Márk', class: '14SZF'},
];

/*function osztaly() {
        let output = '';
        let output2 = '';
        diakok.forEach((student) => {
            output += `<table><tr><td>${student.name} <td>${student.class}</table>`;
        });
        document.body.innerHTML = output;
    };
*/



function classListing(){

    let text = '<table>';
    text += '<tr><th>Osztály</th><th>Név</th></tr>';

    diakok.forEach((student) => {

        text += `<tr><td>${student.name}</td><td>${student.class}</td></tr>`;

    })
    text += '</table>';
    document.getElementById('tablazat').innerHTML = text
}

//classListing();

function feltolt() {
    let nev = document.getElementById('nev').value;
    let osztaly = document.getElementById('osztaly').value;
    console.log(nev + ' ' + osztaly);
    diakok.push({ 'osztaly': `${nev}`, 'nev': `${osztaly}`});

}

classListing();
