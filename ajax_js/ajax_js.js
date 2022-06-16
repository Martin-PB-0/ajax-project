function resolveData(data) {
    let arr = [];
    for (let k in data) {
        arr.push(k + '=' + data[k])
    }
    return arr.join('&')
}

function ajax_js(options) {
    var xhr = new XMLHttpRequest();
    var qs = resolveData(options.data);
    if (options.type.toUpperCase() == 'GET') {
        xhr.open('GET', options.url + '?' + qs);
        xhr.send();
    } else if (options.type.toUpperCase() == 'POST') {
        xhr.open('POST', options.url);
        xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
        xhr.send(qs)
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 & xhr.status == 200) {
            let result = JSON.parse(xhr.responseText);
            options.success(result);
        }
    }
}