
const divimain = document.getElementById("divMain");
const productName = document.getElementById("pname");
const productDesc = document.getElementById("pdesc");
const productQty = document.getElementById("pqty");
const productPrice = document.getElementById("pprice");
const pImg = document.getElementById("pimg");

const submitButton = document.querySelector("button");
// const list = document.getElementById("List");
// const listItems = document.getElementById("productList");
// const productImg = document.getElementById("productImage");

    submitButton.addEventListener('click',function(){

    const newdiv = document.createElement("div");
    newdiv.setAttribute("class","row justify-content-between");
    newdiv.setAttribute("id","ndiv");
    //div for image//
    const divimg = document.createElement("div");
    divimg.setAttribute("class","col-4");

    const divi2 = document.createElement("div");
    divi2.setAttribute("class","container");

    const divi3 = document.createElement("div");
    divi3.setAttribute("class","row justify-content-between");

    const divproductImg = document.createElement("div");
    divproductImg.setAttribute("class","col-12");

    //div for content//
    const divcontent = document.createElement("div");
    divcontent.setAttribute("class","col-8");

    const divright = document.createElement("div");
    divright.setAttribute("class","row justify-content-between");

    const divlist = document.createElement("div");
    divlist.setAttribute("class","col-6");

    const divproductList = document.createElement("div");
    divproductList.setAttribute("class","col-6");

    //div for button
     const divbutton1 = document.createElement("div");
     divbutton1.setAttribute("class","text-center");

     const divbutton2 = document.createElement("div");
     divbutton2.setAttribute("class","form-row");

     const divbutton3 = document.createElement("div");
     divbutton3.setAttribute("class","offset-1 col-lg-10");

     const btn = document.createElement("button");
     btn.setAttribute("class","btn1");
     btn.type = 'submitbutton';
     btn.innerHTML = "Add to Cart";

    const pimg = document.createElement("img");
    var tempPath = window.URL.createObjectURL(pImg.files[0]);
    pimg.setAttribute("src",tempPath);
    pimg.setAttribute("width","140");
    pimg.setAttribute("height","100");
    divproductImg.appendChild(pimg);

    const lblName = document.createElement("label");
    lblName.innerText = "Product Name :";
    //lblName.classList.add("disp");
    divlist.appendChild(lblName);

    const pNamelbl = document.createElement("label");
   // pNamelbl.setAttribute("disply","inline");
    pNamelbl.innerText = productName.value;
    divproductList.appendChild(pNamelbl);

    const brk = document.createElement("br");
    divproductList.appendChild(brk);

    const lblDesc = document.createElement("label");
    lblDesc.innerText = "Product Description :";
    divlist.appendChild(lblDesc);

    const pDesclbl = document.createElement("label");
    pDesclbl.innerText = productDesc.value;
    divproductList.appendChild(pDesclbl);


    const brk2 = document.createElement("br");
    divproductList.appendChild(brk2);

    const lblQty = document.createElement("label");
    lblQty.innerText = "Product Quantity :";
    divlist.appendChild(lblQty);

    const pQtylbl = document.createElement("label");
    pQtylbl.innerText = productQty.value;
    divproductList.appendChild(pQtylbl);


    const brk3 = document.createElement("br");
    divproductList.appendChild(brk3);

    const lblPrice = document.createElement("label");
    lblPrice.innerText = "Product Price :";
    divlist.appendChild(lblPrice);

    const pPricelbl = document.createElement("label");
    pPricelbl.innerText = productPrice.value;
    divproductList.appendChild(pPricelbl);

    divi3.appendChild(divproductImg);
    divi2.appendChild(divi3);
    divimg.appendChild(divi2);
    divright.appendChild(divlist);
    divright.appendChild(divproductList);
    divcontent.appendChild(divright);
   newdiv.appendChild(divimg);
    newdiv.appendChild(divcontent);
    divbutton3.appendChild(btn);
    divbutton2.appendChild(divbutton3);
    divbutton1.appendChild(divbutton2);
    newdiv.appendChild(divbutton1);
    divimain.appendChild(newdiv);

  });            