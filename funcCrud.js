var id = 1;
const plans = [
    {
        id: id++,
        name: 'standard'
    },
    {
        id: id++,
        name: 'advanced'
    },
    {
        id: id++,
        name: 'medium'
    }
];


function getId(id) {
    const find = plans.find((element) => element.id == id);

    return find;
}

var getElement0 = getId(1);
var getElement1 = getId(2);
var getElement2 = getId(3);

console.log(plans)

function UpdateElement(element) {

    return element.name = 'Novo Nome';

}

console.log('=============== Update abaixo ====================')

UpdateElement(getElement0);
UpdateElement(getElement2);

console.log(plans)


console.log('================ Delete abaixo ===================')

function DeleteElement(ElId) {
    let index = plans.indexOf(ElId);
    // 1 significa que o programa deve apagar 1 elemento a partir do indice (index)
    return plans.splice(index, 1);
}
DeleteElement(getElement0);



console.log('================ Read Abaixo ================')
console.log(plans);


console.log('============ Listar todos os elemento ==========')

function List() {
    const names = [];

    for (let i = 0; i < plans.length; i++) {
        names.push(plans[i].name);
    }

    return names;
}

console.log(List());

