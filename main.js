
const url = 'https://api.themoviedb.org/3/movie/now_playing';
const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjljYjA2ODMzNzVhYjdmY2I3MDAzY2QyNGE0Nzg2YiIsInN1YiI6IjY0Yjc4YzFjNWFhZGM0MDBjNThhOTRiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1YY99Xc81YuoQqHtvxLUA6w3pQWXj6-00O0wzMp48o'
    }
};

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

fetch(url, options)
// memembuat parameter untuk menampung JSON dari fetch REST API di atas
.then((response) => response.json()).then((movies) => {
    console.log(movies.results[0].original_title)
    for(let i=0; i < 4; i++) {
        let list = `
        <div class='satu'>
        <div class='title2'>${movies.results[i].title}</div>
        <img src='https://image.tmdb.org/t/p/w500/${movies.results[i].poster_path}'>
        <div class='title'>${movies.results[i].overview.length>150 ? movies.results[i].overview.replace(movies.results[i].overview.substring(70),' ...'):movies.results[i].overview}</div>
        </div>`;
        // console.log(res.parts)
        document.querySelector('.container').innerHTML+=list
    }
})
// // mengambil elemen berdasarkan id
// const flag = document.getElementById("country-flag");
// // membuat elemen baru untuk dijadikan child dari elemen yang diambil
// const imageElement = document.createElement(`img`);
// // mengakses value dari properti flags
// imageElement.src = "https://image.tmdb.org/t/p/w500/" +res.parts[1].poster_path;
// // menjadikan elemen baru tsb sebagai child dari elemen yang diambil
// flag.appendChild(imageElement);
// // mengambil elemen berdasarkan id Modul Pelatihan Pemrograman WEB 181
// const name = document.getElementById("country-name");
// // membuat elemen baru untuk dijadikan child dari elemen yang diambil
// const nameElement = document.createElement("div");
// // mengakses value dari properti name
// nameElement.innerHTML = res.parts[1].title;
// // menjadikan elemen baru tsb sebagai child dari elemen yang diambil
// name.appendChild(nameElement);
// // mengambil elemen berdasarkan id
// const capital = document.getElementById("country-capital");
// // membuat elemen baru untuk dijadikan child dari elemen yang diambil
// const capitalElement = document.createElement("p");
// // mengakses value dari properti capital
// capitalElement.innerHTML = res.parts[1].overview;
// // menjadikan elemen baru tsb sebagai child dari elemen yang diambil p
// capital.append(capitalElement)
// });