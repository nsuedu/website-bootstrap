export function createGuid() {
    let guid = '';
    for (let i = 0; i <= 32; i++) {
        let n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if (i == 8 || i == 12 || i == 16 || i == 20) {
            guid += '-';
        }
    }
    //return guid;

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function () {
        let r = Math.random * 16 | 0;
        let v = c == 'x' ? r : (r & 0x3 | 0x8);

        return v.toString();
    })
}
