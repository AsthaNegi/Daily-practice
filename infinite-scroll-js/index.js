document.addEventListener("click",()=>{
   let page = 1;
    let isLoading = false;

    window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !isLoading
    ) {
        loadMore();
    }
    });

    function loadMore() {
    isLoading = true;
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        .then(res => res.json())
        .then(data => {
        appendData(data);
        page++;
        isLoading = false;
        });
    }
    

});

