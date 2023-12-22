document.getElementById('increase_selection').addEventListener('change', function() {
    var selectedValue = this.value;
    document.getElementById('biology').style.display = 'block';
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

document.getElementById('korea_selection').addEventListener('change', function() {
    var selectedValue = this.value;

    if (selectedValue === 'm1') {
        document.getElementById('entertainment').style.display = 'block';
        document.getElementById('films').style.display = 'none';
        document.getElementById('media').style.display = 'none';
    } else if (selectedValue === 'm2') {
        document.getElementById('entertainment').style.display = 'none';
        document.getElementById('films').style.display = 'block';
        document.getElementById('media').style.display = 'none';
        
    } else if (selectedValue === 'm3') {
        document.getElementById('entertainment').style.display = 'none';
        document.getElementById('films').style.display = 'none';
        document.getElementById('media').style.display = 'block';
    }
});

document.getElementById('cluster_bef_selection').addEventListener('change', function() {
    var selectedValue = this.value;

    if (selectedValue === 'mapp1') {
        document.getElementById('idv').style.display = 'block';
        document.getElementById('ivr').style.display = 'none';
        document.getElementById('ltowvs').style.display = 'none';
        document.getElementById('mas').style.display = 'none';
        document.getElementById('pdi').style.display = 'none';
        document.getElementById('uai').style.display = 'none';
    } else if (selectedValue === 'mapp2') {
        document.getElementById('idv').style.display = 'none';
        document.getElementById('ivr').style.display = 'block';
        document.getElementById('ltowvs').style.display = 'none';
        document.getElementById('mas').style.display = 'none';
        document.getElementById('pdi').style.display = 'none';
        document.getElementById('uai').style.display = 'none';
        
    } else if (selectedValue === 'mapp3') {
        document.getElementById('idv').style.display = 'none';
        document.getElementById('ivr').style.display = 'none';
        document.getElementById('ltowvs').style.display = 'block';
        document.getElementById('mas').style.display = 'none';
        document.getElementById('pdi').style.display = 'none';
        document.getElementById('uai').style.display = 'none';
    }else if (selectedValue === 'mapp4') {
        document.getElementById('idv').style.display = 'none';
        document.getElementById('ivr').style.display = 'none';
        document.getElementById('ltowvs').style.display = 'none';
        document.getElementById('mas').style.display = 'block';
        document.getElementById('pdi').style.display = 'none';
        document.getElementById('uai').style.display = 'none';
    }else if (selectedValue === 'mapp5') {
        document.getElementById('idv').style.display = 'none';
        document.getElementById('ivr').style.display = 'none';
        document.getElementById('ltowvs').style.display = 'none';
        document.getElementById('mas').style.display = 'none';
        document.getElementById('pdi').style.display = 'block';
        document.getElementById('uai').style.display = 'none';
    }else if (selectedValue === 'mapp6') {
        document.getElementById('idv').style.display = 'none';
        document.getElementById('ivr').style.display = 'none';
        document.getElementById('ltowvs').style.display = 'none';
        document.getElementById('mas').style.display = 'none';
        document.getElementById('pdi').style.display = 'none';
        document.getElementById('uai').style.display = 'block';
    }
}); 


document.getElementById('cluster_after_selection').addEventListener('change', function() {
    var selectedValue = this.value;

    if (selectedValue === 'mappp1') {
        document.getElementById('idv2').style.display = 'block';
        document.getElementById('ivr2').style.display = 'none';
        document.getElementById('ltowvs2').style.display = 'none';
        document.getElementById('mas2').style.display = 'none';
        document.getElementById('pdi2').style.display = 'none';
        document.getElementById('uai2').style.display = 'none';
    } else if (selectedValue === 'mappp2') {
        document.getElementById('idv2').style.display = 'none';
        document.getElementById('ivr2').style.display = 'block';
        document.getElementById('ltowvs2').style.display = 'none';
        document.getElementById('mas2').style.display = 'none';
        document.getElementById('pdi2').style.display = 'none';
        document.getElementById('uai2').style.display = 'none';
        
    } else if (selectedValue === 'mappp3') {
        document.getElementById('idv2').style.display = 'none';
        document.getElementById('ivr2').style.display = 'none';
        document.getElementById('ltowvs2').style.display = 'block';
        document.getElementById('mas2').style.display = 'none';
        document.getElementById('pdi2').style.display = 'none';
        document.getElementById('uai2').style.display = 'none';
    }else if (selectedValue === 'mappp4') {
        document.getElementById('idv2').style.display = 'none';
        document.getElementById('ivr2').style.display = 'none';
        document.getElementById('ltowvs2').style.display = 'none';
        document.getElementById('mas2').style.display = 'block';
        document.getElementById('pdi2').style.display = 'none';
        document.getElementById('uai2').style.display = 'none';
    }else if (selectedValue === 'mappp5') {
        document.getElementById('idv2').style.display = 'none';
        document.getElementById('ivr2').style.display = 'none';
        document.getElementById('ltowvs2').style.display = 'none';
        document.getElementById('mas2').style.display = 'none';
        document.getElementById('pdi2').style.display = 'block';
        document.getElementById('uai2').style.display = 'none';
    }else if (selectedValue === 'mappp6') {
        document.getElementById('idv2').style.display = 'none';
        document.getElementById('ivr2').style.display = 'none';
        document.getElementById('ltowvs2').style.display = 'none';
        document.getElementById('mas2').style.display = 'none';
        document.getElementById('pdi2').style.display = 'none';
        document.getElementById('uai2').style.display = 'block';
    }
}); 
