const persiapan = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Menyiapkan Bahan...");
        }, 3000)
    });
};

const rebusAir = () => {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Merebus Air...");
        }, 7000)
    });
};

const masak = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Masak Mie...");
        }, 5000)
    });
};

//Consume Promise
const main = () => {
persiapan()
    .then((result) => {
        console.log(result);
        return rebusAir()
    })
    .then((result) => {
        console.log(result);
        return masak()
    })
    .then((result) => {
        console.log(result);
    })
};

main();

const second = async () => {
    const hasilPersiapan = await persiapan();
    console.log(hasilPersiapan);
    const hasilRebusAir = await rebusAir();
    console.log(hasilRebusAir);
    const hasilMasak = await masak();
    console.log(hasilMasak);
}

second();