// import data
const fruits = require('./data.js');

//menampilkan semua data
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
}


// menambahkan data
const store = (name) => {
    fruits.push(name)

    console.log(`Menambahkan Data ${name}`)
    index()
}

const update = (position, name) => {
    fruits[position] = name;

    console.log(`Method update - Update data ${position} menjadi ${name}`);
    index();
}

const destroy = (position) => {
    fruits.splice(position, 1);

    console.log(`Method destroy - Menghapus data ${position}`);
    index();
}

//store('Alpukat')

// export method
module.exports = {index, store, update, destroy}
