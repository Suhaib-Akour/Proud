let country = document.getElementById("country");
let hodNum = document.getElementById("hodNum");
let price = document.getElementById("price");
let hodName = document.getElementById("hodName");
let plateNum = document.getElementById("plateNum");
let ownerName = document.getElementById("ownerName");
let peciesNum = document.getElementById("peciesNum");
let notice = document.getElementById("notice");
let phone = document.getElementById("phone");
let submit = document.getElementById("submit");

let mood = "create";
let temp;


//get totol

// function getTotal(){
//  if (price.value != ''){
//     let result = (+price.value + +taxes.value + +ads.value)-+discount.value;
//     total.innerHTML=result;
//     total.style.background='#040';
//  }
//  else{
//     total.innerHTML='';
//     total.style.background='#F10'
//  }

// }
//creat proudact
let dataPro;
if (localStorage.proudact != null) {
  dataPro = JSON.parse(localStorage.proudact);
} else {
  dataPro = [];
}

submit.onclick = function () {
  if (hodName.value === "" || country.value === "" || hodNum.value === "" || peciesNum.value === "" || phone.value === "") {
    confirm("الرجاء ملى البيانات كاملة");
  } else {
    let newPro = {
      country: country.value,
      hodNum: hodNum.value,
      hodName: hodName.value,
      plateNum: plateNum.value,
      peciesNum: peciesNum.value,
      price: price.value,
      ownerName: ownerName.value,
      phone: phone.value,
      notice: notice.value,
      //  title:title.value,
      //  price:price.value,
      //  taxes:taxes.value,
      //  ads:ads.value,
      //  discount:discount.value,
      //  total:total.innerHTML,
      //  Count:Count.value,value,
      //  ads:ads.value,
      //  Category:Category.value
    };
    if (mood === "create") {
      dataPro.push(newPro);
    } else {
      dataPro[temp] = newPro;
      mood = "create";
      submit.innerHTML = "Create";
    }

    // save localstorage
    localStorage.setItem("proudact", JSON.stringify(dataPro));
    console.log(dataPro);
    clearData();
    showData();
  }
};
//clear

function clearData() {
  country.value = "";
  hodNum.value = "";
  hodName.value = "";
  plateNum.value = "";
  peciesNum.value = "";
  price.value = "";
  ownerName.value = "";
  phone.value = "";
  notice.value = "";
}
//read
showData();
function showData() {
  let tabel = "";

  for (let i = 0; i < dataPro.length; i++) {
    tabel += `
    <tr>
                        <td>${i}</td>
                        <td>${dataPro[i].country}</td>
                        <td>${dataPro[i].hodNum}</td>
                        <td>${dataPro[i].hodName}</td>
                        <td>${dataPro[i].plateNum}</td>
                        <td>${dataPro[i].peciesNum}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].ownerName}</td>
                        <td>${dataPro[i].phone}</td>
                        <td>${dataPro[i].notice}</td>
                        <td><button onclick="updateData(${i})" id="update">Update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>

                    </tr>
    `;
  }

  document.getElementById("tbody").innerHTML = tabel;
}

//ubpdate

function updateData(i) {
  country.value = dataPro[i].country;
  hodNum.value = dataPro[i].hodNum;
  hodName.value = dataPro[i].hodName;
  plateNum.value = dataPro[i].plateNum;
  peciesNum.value = dataPro[i].peciesNum;
  price.value = dataPro[i].price;
  ownerName.value = dataPro[i].ownerName;
  phone.value = dataPro[i].phone;
  notice.value = dataPro[i].notice;

  submit.innerHTML = "Update";
  mood = "update";
  temp = i;
  scroll({ top: 0, behavior: "smooth" });
  // hodName.value='';
  // plateNum.value='';
  // peciesNum.value='';
  // price.value='';
  // ownerName.value='';
  // phone.value='';
  // notice.value=''
}

function serachData(value) {
  let tabel = "";
    for (let i = 0; i < dataPro.length; i++) {
      if (dataPro[i].country.includes(value)||dataPro[i].hodName.includes(value) ||
      dataPro[i].hodNum.includes(value)||dataPro[i].plateNum.includes(value)||
      dataPro[i].ownerName.includes(value)) {
        tabel += `
        <tr>
                            <td>${i}</td>
                            <td>${dataPro[i].country}</td>
                            <td>${dataPro[i].hodNum}</td>
                            <td>${dataPro[i].hodName}</td>
                            <td>${dataPro[i].plateNum}</td>
                            <td>${dataPro[i].peciesNum}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].ownerName}</td>
                            <td>${dataPro[i].phone}</td>
                            <td>${dataPro[i].notice}</td>
                            <td><button onclick="updateData(${i})" id="update">Update</button></td>
                            <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
    
                        </tr>
        `;
      }
    }
  

  document.getElementById("tbody").innerHTML = tabel;
}

function deleteData(i) {
  if (confirm('Are you sure you want to Delete')) {
  dataPro.splice(i, 1);
  localStorage.proudact = JSON.stringify(dataPro);
  showData();
    
  } else {
    // Do nothing!
    console.log('Thing was not saved to the database.');
  }
  
}
