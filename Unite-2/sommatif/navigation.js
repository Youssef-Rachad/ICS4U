document.getElementById('navi-petit').onclick = () => {
    document.getElementById('navi-petit').style.display = 'none';
    document.getElementById('navi-grand').style.display = 'block';
}
document.getElementById('navi-quitter').onclick = () => {
    document.getElementById('navi-grand').style.display = 'none';
    document.getElementById('navi-petit').style.display = 'block';
}
