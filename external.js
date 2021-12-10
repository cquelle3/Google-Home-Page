function google_search(){
    var search = document.getElementById("bar").value;
    if(search && search.trim()){
        window.location.href = "https://www.google.com/search?q="+search;
    }
}

document.getElementById("bar").addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        google_search();
    }
});