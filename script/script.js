fetch("./script/data.json")
    .then(response=>{
        return response.json()
    })
    .then(data=>{


const dailyBtn = document.querySelector("#dailyBtn")
const weeklyBtn = document.querySelector("#weeklyBtn")
const monthlyBtn = document.querySelector("#monthlyBtn")

const titles = document.querySelectorAll(".main__container .main__chart .main__chart__title .title")
const currentTime = document.querySelectorAll(".main__container .main__chart .main__chart__currentTime .currentTime")
const previousTime = document.querySelectorAll(".main__container .main__chart .main__chart__previousTime .previousTime")


for(x=0,y=0; x < titles.length && y < data.length; x++,y++) {
    titles[x].textContent = data[y].title
}
weekly()


function daily() {
    dailyBtn.classList.add("activeBtn")
    weeklyBtn.classList.remove("activeBtn")
    monthlyBtn.classList.remove("activeBtn")

    for(x=0,y=0; x < currentTime.length && y < data.length; x++,y++) {
        currentTime[x].textContent =data[y].timeframes.daily.current + "hrs"
    }

    for(x=0,y=0; x < previousTime.length && y < data.length; x++,y++) {
        previousTime[x].textContent =  "Last Day-" + data[y].timeframes.daily.previous + "hrs"
    }
}

function weekly() {
    weeklyBtn.classList.add("activeBtn")
    dailyBtn.classList.remove("activeBtn")
    monthlyBtn.classList.remove("activeBtn")

    for(x=0,y=0; x < currentTime.length && y < data.length; x++,y++) {
        currentTime[x].textContent =data[y].timeframes.weekly.current + "hrs"
    }

    for(x=0,y=0; x < previousTime.length && y < data.length; x++,y++) {
        previousTime[x].textContent =  "Last Week-" + data[y].timeframes.weekly.previous + "hrs"
    }
}

function monthly() {
    monthlyBtn.classList.add("activeBtn")
    dailyBtn.classList.remove("activeBtn")
    weeklyBtn.classList.remove("activeBtn")

    for(x=0,y=0; x < currentTime.length && y < data.length; x++,y++) {
        currentTime[x].textContent =data[y].timeframes.monthly.current + "hrs"
    }

    for(x=0,y=0; x < previousTime.length && y < data.length; x++,y++) {
        previousTime[x].textContent =  "Last Month-" + data[y].timeframes.monthly.previous + "hrs"
    }
}


dailyBtn.addEventListener("click", function() {

    daily()
})

weeklyBtn.addEventListener("click", function() {

    weekly()
})

monthlyBtn.addEventListener("click", function() {

    monthly()
})

})


    