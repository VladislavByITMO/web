let data_cookies = ''
function create_get(x,y,r){

    const xhr = new XMLHttpRequest();


    let url = new URL('http://localhost:8080/server.php');
    url.searchParams.set('x',value_X);
    url.searchParams.set('y',value_Y);
    url.searchParams.set('r',value_R);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
             data_cookies += xhr.responseText;
            Cookies.set("cookies_vlad", data_cookies);
           // addToTable();
            draw();
        }
    }
    xhr.open('GET', url);
    xhr.send();


}