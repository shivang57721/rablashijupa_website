document.getElementById('correlation_selection').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue === 'map_idv_corr') {
        document.getElementById('idv_corr').style.display = 'block';
        document.getElementById('ivr_corr').style.display = 'none';
        document.getElementById('ltowvs_corr').style.display = 'none';
        document.getElementById('mas_corr').style.display = 'none';
        document.getElementById('pdi_corr').style.display = 'none';
        document.getElementById('uai_corr').style.display = 'none';
    } else if (selectedValue === 'map_ivr_corr') {
        document.getElementById('idv_corr').style.display = 'none';
        document.getElementById('ivr_corr').style.display = 'block';
        document.getElementById('ltowvs_corr').style.display = 'none';
        document.getElementById('mas_corr').style.display = 'none';
        document.getElementById('pdi_corr').style.display = 'none';
        document.getElementById('uai_corr').style.display = 'none';
    }else if (selectedValue === 'map_ltowvs_corr') {
        document.getElementById('idv_corr').style.display = 'none';
        document.getElementById('ivr_corr').style.display = 'none';
        document.getElementById('ltowvs_corr').style.display = 'block';
        document.getElementById('mas_corr').style.display = 'none';
        document.getElementById('pdi_corr').style.display = 'none';
        document.getElementById('uai_corr').style.display = 'none';
    }else if (selectedValue === 'map_mas_corr') {
        document.getElementById('idv_corr').style.display = 'none';
        document.getElementById('ivr_corr').style.display = 'none';
        document.getElementById('ltowvs_corr').style.display = 'none';
        document.getElementById('mas_corr').style.display = 'block';
        document.getElementById('pdi_corr').style.display = 'none';
        document.getElementById('uai_corr').style.display = 'none';
    }else if (selectedValue === 'map_pdi_corr') {
        document.getElementById('idv_corr').style.display = 'none';
        document.getElementById('ivr_corr').style.display = 'none';
        document.getElementById('ltowvs_corr').style.display = 'none';
        document.getElementById('mas_corr').style.display = 'none';
        document.getElementById('pdi_corr').style.display = 'block';
        document.getElementById('uai_corr').style.display = 'none';
    }else if (selectedValue === 'map_uai_corr') {
        document.getElementById('idv_corr').style.display = 'none';
        document.getElementById('ivr_corr').style.display = 'none';
        document.getElementById('ltowvs_corr').style.display = 'none';
        document.getElementById('mas_corr').style.display = 'none';
        document.getElementById('pdi_corr').style.display = 'none';
        document.getElementById('uai_corr').style.display = 'block';
    }
}); 

document.getElementById('covid_selection').addEventListener('change', function() {
    var selectedValue = this.value;

    if (selectedValue === 'map_idv_covid') {
        document.getElementById('idv_covid').style.display = 'block';
        document.getElementById('ivr_covid').style.display = 'none';
        document.getElementById('ltowvs_covid').style.display = 'none';
        document.getElementById('mas_covid').style.display = 'none';
        document.getElementById('pdi_covid').style.display = 'none';
        document.getElementById('uai_covid').style.display = 'none';
    } else if (selectedValue === 'map_ivr_covid') {
        document.getElementById('idv_covid').style.display = 'none';
        document.getElementById('ivr_covid').style.display = 'block';
        document.getElementById('ltowvs_covid').style.display = 'none';
        document.getElementById('mas_covid').style.display = 'none';
        document.getElementById('pdi_covid').style.display = 'none';
        document.getElementById('uai_covid').style.display = 'none';
        
    } else if (selectedValue === 'map_ltowvs_covid') {
        document.getElementById('idv_covid').style.display = 'none';
        document.getElementById('ivr_covid').style.display = 'none';
        document.getElementById('ltowvs_covid').style.display = 'block';
        document.getElementById('mas_covid').style.display = 'none';
        document.getElementById('pdi_covid').style.display = 'none';
        document.getElementById('uai_covid').style.display = 'none';
    }else if (selectedValue === 'map_mas_covid') {
        document.getElementById('idv_covid').style.display = 'none';
        document.getElementById('ivr_covid').style.display = 'none';
        document.getElementById('ltowvs_covid').style.display = 'none';
        document.getElementById('mas_covid').style.display = 'block';
        document.getElementById('pdi_covid').style.display = 'none';
        document.getElementById('uai_covid').style.display = 'none';
    }else if (selectedValue === 'map_pdi_covid') {
        document.getElementById('idv_covid').style.display = 'none';
        document.getElementById('ivr_covid').style.display = 'none';
        document.getElementById('ltowvs_covid').style.display = 'none';
        document.getElementById('mas_covid').style.display = 'none';
        document.getElementById('pdi_covid').style.display = 'block';
        document.getElementById('uai_covid').style.display = 'none';
    }else if (selectedValue === 'map_uai_covid') {
        document.getElementById('idv_covid').style.display = 'none';
        document.getElementById('ivr_covid').style.display = 'none';
        document.getElementById('ltowvs_covid').style.display = 'none';
        document.getElementById('mas_covid').style.display = 'none';
        document.getElementById('pdi_covid').style.display = 'none';
        document.getElementById('uai_covid').style.display = 'block';
    }
});
