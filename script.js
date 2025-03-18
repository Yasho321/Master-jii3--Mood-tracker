let date;
let year;
let month;
date = new Date();
year = date.getFullYear();
month = date.getMonth() ;
let dateoftd= date.getDate();


let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekdys= ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]


function getcalender(year,month,date){
    console.log(year,month,date)
    
    let firstDay = new Date(year, month, 1).getDay();
    console.log(firstDay);
    let lastDate = new Date(year, month + 1, 0).getDate();
    let tr=document.createElement("tr");
    for(let i=0;i<=6;i++){
        let th=document.createElement("th");
        th.textContent=weekdys[i];
        tr.appendChild(th);
        

    }
    document.getElementById("table").appendChild(tr);
    let datedate=1;
    for(let i=0;i<=5;i++){
        let row=document.createElement("tr");
        for(let j=0;j<=6;j++){
            let cell = document.createElement("td");
            if(i==0 && j<firstDay){
                cell.innerText=" ";
            }else{
                if(datedate<=lastDate){
                    cell.innerText=datedate;
                    cell.classList.add("active");
                    cell.classList.add("cell");
                    if(datedate==date){
                        cell.style.backgroundColor="lightpink";
                    }
                    datedate++;
                }else{
                    cell.innerText=" ";
                }
            }
            row.appendChild(cell);
        }

        
        document.getElementById("table").appendChild(row);
        
        

    

    }
    loadfromlocal();
    let celll;
        document.querySelectorAll(".active").forEach((elem)=>{
            elem.addEventListener("click",(e)=>{
                let x = e.pageX;
                let y = e.pageY;
                
                celll=elem;
                let but= document.getElementById("buttons");
                if(but.style.visibility==="hidden"){
                    but.style.visibility="visible";
                    
                    but.style.left=x+"px";
                    but.style.top=y+"px";
                }else{
                    but.style.visibility="hidden";
                }
                


        })})
        document.querySelectorAll(".button").forEach((elem)=>{
            elem.addEventListener("click",(e)=>{
                let but= document.getElementById("buttons");
                
                if(celll.innerText.includes("😊")||celll.innerText.includes("😔")||celll.innerText.includes("🤩")||celll.innerText.includes("😐")){
                    celll.innerText=celll.innerText.replace("😊","")
                    celll.innerText=celll.innerText.replace("😔","")
                    celll.innerText=celll.innerText.replace("🤩","")
                    celll.innerText=celll.innerText.replace("😐","")
                        
                    
                }
                let temp=celll.innerText;

                celll.innerText=temp+elem.id;
                celll=null;
                but.style.visibility="hidden";
                savetolocal();

                
                

        })})
   

}
function savetolocal(){
    let cells = document.querySelectorAll(".cell");
    let data = Array.from(cells).map((cell) => cell.innerText);
    localStorage.setItem("data", JSON.stringify(data));

}
function loadfromlocal(){
    let data = localStorage.getItem("data");
    if (data) {
        let cells = document.querySelectorAll(".cell");
        data = JSON.parse(data);
        Array.from(cells).forEach((cell, index) => {
            cell.innerText = data[index];
        });
    }
}
getcalender(year,month,dateoftd);