document.getElementById('increase_selection').addEventListener('change', function() {
    var selectedValue = this.value;
    
    document.getElementById('biology').style.display = 'none';
    document.getElementById('books').style.display = 'none';
    document.getElementById('videogames').style.display = 'none';
    document.getElementById('internetculture').style.display = 'none';
    document.getElementById('histandgov').style.display = 'none';

    if (selectedValue === 'map1') {
        document.getElementById('biology').style.display = 'block';
    } else if (selectedValue === 'map2') {
        document.getElementById('books').style.display = 'block';
    } else if (selectedValue === 'map3') {
        document.getElementById('videogames').style.display = 'block';
    }else if (selectedValue === 'map4') {
        document.getElementById('internetculture').style.display = 'block';
    }else if (selectedValue === 'map5') {
        document.getElementById('histandgov').style.display = 'block';
    }
});
