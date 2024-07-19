function createCard(title, cName, views, monthsOld, duration, thumbnail)
{

    let html =  `<div class="card">
                <object class="image">
                <img src="${thumbnail} alt="">
                </object>
                <object class="content">
                <h5>${title}</h5>
                <div class="metadata">
                <p class="data">${cName}</p>
                <p class="data">${views}</p>
                <p class="data">${monthsOld}months</p>
                </div>
                </object>
            </div>`
    
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}



createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560+'k', 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")