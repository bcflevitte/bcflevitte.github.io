var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("tombol").click();
  }
});
var button = document.getElementById("tombol");
button.addEventListener("click", result);
function result() {
  document.getElementById("output").innerHTML = "";
  console.log(" ");
  var isian = document.getElementById("input").value;
  fetch("https://mangamint.kaedenoki.net/api/search/" + isian)
    .then((response) => response.json())
    .then((data) => {
      if (data.manga_list.length === 0) {
        Swal.fire({
          icon: "error",
          title: "KOMIK TIDAK TERSEDIA",
          text: "Cek Kembali Pencarian Anda",
        });
      } else {
        for (var i = 0; i < 20; i++) {
          document.getElementById("output").innerHTML += `
          <div class="col-md-3 mb-4">  
          <div class="card" style="width: 20rem;">
          <img src="${data.manga_list[i].thumb}" class="card-img-top" alt="...">
          <div class="card-body">
          </div>
          <h3 class='tes-1'>${data.manga_list[i].title}</h3>
          <p class="card-text">Type :${data.manga_list[i].type}</p>
          <p class="card-text">${data.manga_list[i].updated_on}</p>
          <a href="detail.html?id=${data.manga_list[i].endpoint}" >Comics Detail</a>
          </div>
          </div>
        `;
        }
      }
    });
}

function picture() {
  console.log("");
  fetch("https://mangamint.kaedenoki.net/api/manga/popular/1")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 10; i++) {
        document.getElementById("gambar").innerHTML += `
        <div class="card">
        <img src="${data.manga_list[i].thumb}" class="w-100 d-block"alt="haloo">
        </div>
      `;
      }
    });
}

function preview() {
  console.log(" ");
  fetch("https://mangamint.kaedenoki.net/api/manga/popular/1")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 20; i++) {
        document.getElementById("output").innerHTML += `
        <div class="col-md-3 mb-4">
        <div class="col-md-3 mb-4">  
        <div class="card" style="width: 21rem;">
        <img src="${data.manga_list[i].thumb}" class="card-img-top" alt="...">
        <div class="card-body">
        </div>
        <h3 class='tes-1'>${data.manga_list[i].title}</h3>
        <p class="card-text">Type :${data.manga_list[i].type}</p>
        <p class="card-text">${data.manga_list[i].upload_on}</p> 
        <a href="detail.html?id=${data.manga_list[i].endpoint}" >Comics Detail</a>
        </div>
        </div>
        </div>
      `;
      }
    });
}
var pilihan;
function keluar(pilihan) {
  document.getElementById("output").innerHTML = "";
  console.log(" ");
  fetch("https://mangamint.kaedenoki.net/api/genres/" + pilihan + "/1")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 20; i++) {
        document.getElementById("output").innerHTML += `
          <div class="col-md-3 mb-4">  
          <div class="card" style="width: 21rem;">
          <img src="${data.manga_list[i].thumb}" class="card-img-top" alt="...">
          <div class="card-body">
          </div>
          <h3 class='tes-1'>${data.manga_list[i].title}</h3>
          <p class="card-text">Type :${data.manga_list[i].type}</p>
          <a href="detail.html?id=${data.manga_list[i].endpoint}" >Comics Detail</a>
          </div>
          </div>
        `;
      }
    });
}

function recommended() {
  console.log(" ");
  fetch("https://mangamint.kaedenoki.net/api/recommended")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 20; i++) {
        document.getElementById("output").innerHTML += `
        <div class="col-md-3 mb-4">
        <div class="col-md-3 mb-4">  
        <div class="card" style="width: 21rem;">
        <img src="${data.manga_list[i].thumb}" class="card-img-top" alt="...">
        <div class="card-body">
        </div>
        <h3 class='tes-1'>${data.manga_list[i].title}</h3>
        <a href="detail.html?id=${data.manga_list[i].endpoint}" >Comics Detail</a>
        </div>
        </div>
        </div>
      `;
      }
    });
}
function manhua() {
  console.log(" ");
  fetch("https://mangamint.kaedenoki.net/api/manhua/1")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 20; i++) {
        document.getElementById("output").innerHTML += `
        <div class="col-md-3 mb-4">
        <div class="col-md-3 mb-4">  
        <div class="card" style="width: 21rem;">
        <img src="${data.manga_list[i].thumb}" class="card-img-top" alt="...">
        <div class="card-body">
        </div>
        <h3 class="tes-1'>${data.manga_list[i].title}</h3>
        <p class="card-text">Type :${data.manga_list[i].type}</p>
        <p class="card-text">${data.manga_list[i].updated_on}</p>
        <p class="card-text">${data.manga_list[i].chapter}</p>
        <a href="detail.html?id=${data.manga_list[i].endpoint}" >Comics Detail</a>
        </div>
        </div>
        </div>
      `;
      }
    });
}
function manhwa() {
  console.log(" ");
  fetch("https://mangamint.kaedenoki.net/api/manhwa/1")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 20; i++) {
        document.getElementById("output").innerHTML += `
        <div class="col-md-3 mb-4">
        <div class="col-md-3 mb-4">  
        <div class="card" style="width: 20rem;">
        <img src="${data.manga_list[i].thumb}" class="card-img-top" alt="...">
        <div class="card-body">
        </div>
        <h3 class="tes-1">${data.manga_list[i].title}</h3>
        <p class="card-text">Type :${data.manga_list[i].type}</p>
        <p class="card-text">${data.manga_list[i].updated_on}</p>
        <p class="card-text">${data.manga_list[i].chapter}</p>
        <a href="detail.html?id=${data.manga_list[i].endpoint}">Comic Details</a>
        </div>
        </div>
        </div>
      `;
      }
    });
}
