const btn = document.querySelector('#addbtns');
const apply = document.querySelector('.apply');
const container = document.querySelector('.container');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const number = document.querySelector('#number');
const select = document.querySelector('#select');
const addMember = document.querySelector('#addMember');
const close = document.querySelector('#close');
const tableBody = document.querySelector('.tableBody');

let arr= [];

function displayCart(){
    arr.sort((a,b)=>{
        return b.score - a.score;
    });

    console.log(arr);
    let val="";
    arr.forEach((ele , index)=>{
        val += `
            <tr>
                <td>1</td>
                <td>${ele.Fname}</td>
                <td>${ele.score}</td>
                <td>${ele.countrys}</td>
                <td class="update">
                    <span class="span1" data-index=${index} >+5</span>
                    <span class="span2" ><img src="./icon/del.svg" alt=""></span>
                    <span class="span3" >-5</span>
                </td>
            </tr>
        `
        tableBody.innerHTML=val;
        // let tbody = document.createElement('tbody');
        //     tbody.className = "tbody"
        // let tr = document.createElement('tr');

        // let td1 = document.createElement('td');
        //     td1.innerText=ele.rank;
        //     tr.append(td1)

        // let td2 = document.createElement('td')
        //     td2.innerText = ele.Fname;
        //     tr.append(td2);

        // let td3 = document.createElement('td');
        //     td3.innerText = ele.score;
        //     tr.append(td3);

        //     let td4 = document.createElement('td');
        //     td4.innerText = ele.countrys;
        //     tr.append(td4);

        // let td5 = document.createElement('td');

        //     td5.className = "update";

        //     let span1 = document.createElement('span');
        //     span1.className = "span1"
        //     span1.innerText="+5"
        //     td5.append(span1)

        //     let span2 = document.createElement('span');
        //     span2.className= "span2"
        //     let img = document.createElement('img');
        //         img.src="./icon/del.svg"
        //         span2.append(img);
        //         td5.append(span2)

        // let span3 = document.createElement('span');
        // span3.className="spam3"
        //     span3.innerText = "-5";
        //     td5.append(span3);
        //     tr.append(td5)
        // tbody.append(tr);
        // table.append(tbody)
    })
    
}
function activeBtn(){
    
    document.querySelectorAll('.tableBody').
    forEach((item , index)=>{
        
        item.addEventListener('click',(e)=>{

             console.log(e.target.getE)
            
            if(e.target.classList.contains("span1")){
                
            console.log(index);
                let datas = Number(arr[index].score);
                datas += 5;
                arr[index].score= datas
                displayCart()
            }
            
        })
    })
}

btn.addEventListener('click',()=>{
    container.style.opacity="10%";
    apply.style.display="flex";
    
})

function invoke(e){
        e.preventDefault();
        console.log("hellow");
        console.log(select.value);
        
        if(!fname.value || !lname.value || !number.value){
            apply.animate([
                {transform: 'translateX(4px)'},
                {transform: 'translateX(0)'},
                {transform: 'translateX(4px)'},
                {transform: 'translateX(0)'}
            ], {
                duration: 200,
                easing: 'ease-in-out',
                iterations: 4
            });
            return;
        }
        else {
            let student = {
                rank : 1,
                Fname:`${fname.value} ${lname.value}`,
                score: number.value,
                countrys:select.value,
            }

            arr.push(student);
            displayCart();
        }
        fname.value=""
        lname.value=""
        select.value=""
        select.value=""
        number.value="";
        apply.style.display="none"
        activeBtn();
        
        container.style.opacity="1";

    
}
close.addEventListener('click',()=>{
    apply.style.display="none"
    container.style.opacity="1";
    // displayCart();
})
document.getElementById('myForm').addEventListener('submit',invoke)


