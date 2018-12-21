const attrs = document.getElementById('attrs');
const anchor = document.querySelector('a');
const showAttrBtn = document.getElementById('showAttr');
const removeResultBtn = document.getElementById('removeResult');

showAttrBtn.addEventListener('click', function () {
    const href = anchor.getAttribute('href');
    const target = anchor.getAttribute('target');
    const id = anchor.getAttribute('id');
    attrs.textContent = `
        Href: ${href}, 
        target: ${target}, 
        ID: ${id}
    `;
});

removeResultBtn.addEventListener('click', function () {
 attrs.textContent = '';
});