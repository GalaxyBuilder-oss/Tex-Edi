let angka = [];

function showByIndex(){
    console.log(angka);
}

function showBySort(){
    console.log(angka.sort())
}

function firstAdd(){
    let example = prompt("Masukan Data Baru")
    console.log("Data Berhasil Di Tambahkan")
    angka.unshift(example)
}

function lastAdd(){
    let example = prompt("Masukan Data Baru")
    console.log("Data Berhasil Di Tambahkan")
    angka.push(example)
}

function updateByIndex(){
    cek=false;
    let example = prompt("Masukan index :")
    for(let i=0; i < angka.length; i++ ){
        if(example == i){
            cek = true;
        }
    }
    if(cek == true){
        let tamp = prompt("Masukan Data")
        console.log("Data Telah Di Perbarui")
        angka[example] = tamp;
    }
    

}

function updateByName(){
    cek=false;
    let idx;
    let example = prompt("Data Yang Ingin Diubah :")
    for(let a=0; a<angka.length; a++){
        if(example == angka[a]){
            cek=true;
            idx=a;
        }
    }
    if(cek==true){
        let tamp = prompt("Masukan Data Baru")
        console.log("Data Telah Di Perbarui")
        angka[idx] = tamp;
    }
}

function firstDelete(){
    console.log(angka.shift())
}

function lastDelete(){
    console.log(angka.pop())
}