function downLoad(url) {
    if (document.getElementById('downloadiframe')) {
        document.body.removeChild(document.getElementById('downloadiframe'));
    }
    let inputElement = setUrlParamToInput(url);

    let iframe = document.createElement('iframe');
    iframe.id = 'downloadiframe';
    iframe.src = 'about:blank';
    iframe.display = 'hidden';
    document.body.appendChild(iframe);

    let iframeDoc = iframe.contentDocument;
    iframeDoc.write(`<html><head><head><body><form method='Get' id='myform'>
    <div>download</div>
    ${inputElement}
    </form></body></html>`)
    //let form = iframeDoc.getElementsByTagName('form')[0];
    let myform = iframeDoc.getElementById('myform');
    myform.action = url;
    myform.submit();
}


function setUrlParamToInput(url) {
    let formInnerHtml = '';
    if (url) {
        let params = url.substring(url.indexOf('?') + 1).replace(/\+/g, '').split('&');
        params.forEach((item) => {
            let param = item.split('=');
            let name = param[0];
            let value = param[1];
            formInnerHtml += `<input type='hidden' name='${name}' value='${value}'/>`
        })
    }
    return formInnerHtml;
}

function downloadFile(url) {
    let downloadiframe = document.getElementById('downloadiframe');
    downloadiframe.parentNode.removeNode(downloadiframe);

    //let iframe = document.createElement('iframe');

    let iframe = `<iframe id='downloadiframe' style='display:none' src='about:blank'>
    </iframe>`

    let body = document.getElementsByTagName('body')[0];
    body.appendChild(iframe);

    let iframeDoc = iframe[0].contentWindow || iframe[0].contentDocument;
    if (iframeDoc) { iframeDoc = iframeDoc.document; }

    iframeDoc.write(`<html>
    <head><head>
    <body>
    <form method='Get'>
    <div>download</div>
    ${formInnerHtml}
    </form>
    </body>
    </html>`)

    let form = iframeDoc.find('form');
    form[0].action = url;
    form.submit();
}