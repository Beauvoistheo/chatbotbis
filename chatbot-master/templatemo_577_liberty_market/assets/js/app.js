const choice=document.querySelector("#choice")
const inputQuestion= document.querySelector("#question")
const answer=document.querySelector(".answer")

let contentWelcome = document.querySelector("#welcome")
const word = contentWelcome.textContent;
const length = word.length;
let count = 0;
contentWelcome.textContent = "";

const write = setInterval(() => {
    contentWelcome.textContent += word[count]
    count += 1;
    if(count > length -1){
        clearInterval(write)
    }
    console.log(count);
}, 100);

console.log("couucou from apijs")

const fetchUrl = async (url)=>{
    const result = await fetch(url)
    const data = await result.json()
    return data
}

// fetch("https://api-chatbot-lw0x.onrender.com/api/v1/dialogs")
// .then(response=>response.json())
fetchUrl("https://api-chatbot-lw0x.onrender.com/api/v1/dialogs")
.then(data=>{

    //  console.log(data.message)
    data.message.forEach(dialog => {
        
    // console.log(dialog)
    choice.innerHTML += `<option value="${dialog.question}">`
   
    });

    inputQuestion.addEventListener("change", e=>{
        console.log(e.target.value)
        data.message.forEach(dialog=>{
            if(e.target.value === dialog.question){
                console.log(dialog.answer)
                answer.innerHTML = ` <p>${dialog.answer}</p>`
            }
        })
    })
})
.catch(error=>console.log(error))

const chuck=document.getElementById("chuck")
// fetch("https://api.chucknorris.io/jokes/random")
// .then(response=>response.json())
// // .then(data=>console.log(data.value))
// .then(data=>chuck.innerHTML = data.value)
// .catch(error=>console.log(error))
fetchUrl("https://api.chucknorris.io/jokes/random")
.then(data => chuck.innerHTML = data.value)

