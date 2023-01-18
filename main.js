let cars_details=[
    {
        imagesrc:"image/black.jpg",
        text:"CAR",
        model:"Mercedez Benz c300 2022",
        mile:"Milleage:4,000 miles",
        fuel:"Fual:25mpg",
        safety:"Safety",
        rate:"$134,450"
    }
];
let row=document.querySelector(".row");
cars_details.forEach(e=>{
    let col=document.createElement("div");
    col.classList.add("card-col");
    row.appendChild(col);
    let card=document.createElement("div");
    card.classList.add("cards");
    col.appendChild(card);
    let img=document.createElement("img");
    img.src=e.imagesrc;
    card.appendChild(img);
    let card_content=document.createElement("div");
    card_content.setAttribute("class","card-content");
    card.appendChild(card_content);

    let car_btn=document.createElement("div");
    car_btn.setAttribute("class","car-btn");
    car_btn.innerText=e.text;
    card_content.appendChild(car_btn);
    
    let car_model=document.createElement("h2");
    card_content.appendChild(car_model);
    car_model.innerText=e.model;

    let ulist=document.createElement("ul");
    card_content.appendChild(ulist);
    let list1=document.createElement("li");
    ulist.appendChild(list1);
    let icon1=document.createElement("i");
    list1.appendChild(icon1);
    icon1.setAttribute("class","fa fa-car");
    let text1=document.createElement("span")
    list1.appendChild(text1);
    text1.innerText=e.mile;

    let list2=document.createElement("li");
    ulist.appendChild(list2);
    let icon2=document.createElement("i");
    list2.appendChild(icon2);
    icon2.setAttribute("class","fas fa-gas-pump");
    let text2=document.createElement("span")
    list2.appendChild(text2);
    text2.innerText=e.fuel;
    let list3=document.createElement("li");
    ulist.appendChild(list3);
    let icon3=document.createElement("i");
    list3.appendChild(icon3);
    icon3.setAttribute("class","fa fa-shield");
    let text3=document.createElement("span")
    list3.appendChild(text3);
    text3.innerText=e.safety;

    let para=document.createElement("p");
    card_content.appendChild(para);
    para.innerText="Pick a color :"

    let rate_cont=document.createElement("div");
    rate_cont.setAttribute("class","rate-cont");
    card_content.appendChild(rate_cont);

    let btns=document.createElement("div");
    btns.setAttribute("class","btns");
    rate_cont.appendChild(btns);

    red_btn=document.createElement("button");
    red_btn.style.backgroundColor="red";
    btns.appendChild(red_btn);
    red_btn.addEventListener("click",()=>
    {
        img.src="image/red.jpg";
        car_btn.style.backgroundColor="red";
        car_btn.style.color="white";
    })

    white_btn=document.createElement("button");
    btns.appendChild(white_btn);
    white_btn.addEventListener("click",()=>
    {
        img.src="image/white.jpg";
        car_btn.style.backgroundColor="white";
        car_btn.style.color="black";
    })

    black_btn=document.createElement("button");
    btns.appendChild(black_btn);
    black_btn.style.backgroundColor="black";
    black_btn.addEventListener("click",()=>
    {
        img.src="image/black.jpg";
        car_btn.style.backgroundColor="black";
        car_btn.style.color="white";
    })

    let rate=document.createElement("div");
    rate.innerText=e.rate;
    rate_cont.appendChild(rate);
    let s_rate=document.createElement("div");
    rate_cont.appendChild(s_rate);
    let strike=document.createElement("del");
    s_rate.appendChild(strike);
    strike.innerText=e.rate;

    let add_card=document.createElement("div");
    add_card.setAttribute("class","add-card")
    card_content.appendChild(add_card);
    let add_icon=document.createElement("i");
    add_icon.setAttribute("class","fa fa-shopping-cart");
    add_card.appendChild(add_icon);

    let add_text=document.createElement("span");
    add_text.innerText="ADD CART"
    add_card.appendChild(add_text);
});