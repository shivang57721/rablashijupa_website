document.getElementById('increase_selection').addEventListener('change', function() {
    var selectedValue = this.value;
    
    document.getElementById('biology').style.display = 'none';
    document.getElementById('books').style.display = 'none';
    document.getElementById('videogames').style.display = 'none';
    document.getElementById('internetculture').style.display = 'none';
    document.getElementById('histandgov').style.display = 'none';

    if (selectedValue === 'map1') {
        document.getElementById('biology').style.display = 'block';
        document.getElementById('books').style.display = 'none';
        document.getElementById('videogames').style.display = 'none';
        document.getElementById('internetculture').style.display = 'none';
        document.getElementById('histandgov').style.display = 'none';
    } else if (selectedValue === 'map2') {
        document.getElementById('biology').style.display = 'none';
        document.getElementById('books').style.display = 'block';
        document.getElementById('videogames').style.display = 'none';
        document.getElementById('internetculture').style.display = 'none';
        document.getElementById('histandgov').style.display = 'none';
        
    } else if (selectedValue === 'map3') {
        document.getElementById('biology').style.display = 'none';
        document.getElementById('books').style.display = 'none';
        document.getElementById('videogames').style.display = 'block';
        document.getElementById('internetculture').style.display = 'none';
        document.getElementById('histandgov').style.display = 'none';
    }else if (selectedValue === 'map4') {
        document.getElementById('biology').style.display = 'none';
        document.getElementById('books').style.display = 'none';
        document.getElementById('videogames').style.display = 'none';
        document.getElementById('internetculture').style.display = 'block';
        document.getElementById('histandgov').style.display = 'none';
    }else if (selectedValue === 'map5') {
        document.getElementById('biology').style.display = 'none';
        document.getElementById('books').style.display = 'none';
        document.getElementById('videogames').style.display = 'none';
        document.getElementById('internetculture').style.display = 'none';
        document.getElementById('histandgov').style.display = 'block';
    }
});

document.getElementById('decrease_selection').addEventListener('change', function() {
    var selectedValue = this.value;
    
    document.getElementById('sports').style.display = 'none';
    document.getElementById('education').style.display = 'none';
    document.getElementById('engineering').style.display = 'none';
    document.getElementById('fashion').style.display = 'none';

    if (selectedValue === 'mp1') {
        document.getElementById('sports').style.display = 'block';
        document.getElementById('education').style.display = 'none';
        document.getElementById('engineering').style.display = 'none';
        document.getElementById('fashion').style.display = 'none';
    } else if (selectedValue === 'mp2') {
        document.getElementById('sports').style.display = 'none';
        document.getElementById('education').style.display = 'block';
        document.getElementById('engineering').style.display = 'none';
        document.getElementById('fashion').style.display = 'none';
        
    } else if (selectedValue === 'mp3') {
        document.getElementById('sports').style.display = 'none';
        document.getElementById('education').style.display = 'none';
        document.getElementById('engineering').style.display = 'block';
        document.getElementById('fashion').style.display = 'none';
    }else if (selectedValue === 'mp4') {
        document.getElementById('sports').style.display = 'none';
        document.getElementById('education').style.display = 'none';
        document.getElementById('engineering').style.display = 'none';
        document.getElementById('fashion').style.display = 'block';
    }
});
