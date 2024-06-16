function solution(new_id) {
    new_id = new_id.toLowerCase()
    .replace(/[^\w-_.]+/g,'')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    new_id = new_id === '' ? 'a' : new_id;
    new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
    new_id = new_id.replace(/\.$/g, '');

    while (new_id.length < 3) {
        new_id += new_id.at(-1);
    }
    
    return new_id;
}
