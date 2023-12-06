// import method dalam controller
const {index, store, update, destroy} = require('./FruitController')

const main = () => {
    console.log(`Menampilkan data buah-buahan:`);
    index()

    console.log('\n');
    store('Alpukat')

    update(0, "Kelapa")

    destroy(0)
}

main()