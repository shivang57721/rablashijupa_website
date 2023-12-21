document.getElementById('map_selection').addEventListener('change', function() {
    var selectedValue = this.value;
    
    document.getElementById('image1').style.display = 'none';
    document.getElementById('image2').style.display = 'none';

    if (selectedValue === 'map1') {
        document.getElementById('image1').style.display = 'block';
    } else if (selectedValue === 'map2') {
        document.getElementById('image2').style.display = 'block';
    }
});
