
let searchText = document.querySelector('#searchText');
let searchNow = document.querySelector('#searchNow');
let searchResult = document.querySelector('.searchResult');

searchNow.addEventListener('click',()=>{
    if(searchText.value !== ""){
        let wikiurl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText.value}`
        fetch(wikiurl)
        .then(response => response.json())
        .then(data=>{console.log(data);
            searchResult.innerHTML=``;
            data.query.search.forEach(items =>{
                let finalurl = `https://en.wikipedia.org/?curid=${items.pageid}`;
                searchResult.insertAdjacentHTML('afterbegin',
                    ` <div class="searchResultContent">
                    <a href="${finalurl}" target="_blank" class="title">${items.title}</a>
                    <a href="${finalurl}" target="_blank" class="link">${finalurl}</a>
                    <p>${items.snippet}</p>
                    </div>`
                )
            })
        })
    }
})
