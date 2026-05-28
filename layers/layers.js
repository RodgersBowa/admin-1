ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([27.475045, -17.336448, 42.808510, -9.184863]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MWI_adm1_1 = new ol.format.GeoJSON();
var features_MWI_adm1_1 = format_MWI_adm1_1.readFeatures(json_MWI_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MWI_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MWI_adm1_1.addFeatures(features_MWI_adm1_1);
var lyr_MWI_adm1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MWI_adm1_1, 
                style: style_MWI_adm1_1,
                popuplayertitle: 'MWI_adm1',
                interactive: true,
                title: '<img src="styles/legend/MWI_adm1_1.png" /> MWI_adm1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MWI_adm1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MWI_adm1_1];
lyr_MWI_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Region': 'Region', 'PD': 'PD', 'Sexratio': 'Sexratio', 'literacyR': 'literacyR', 'Ochildren': 'Ochildren', 'Adminzones': 'Adminzones', });
lyr_MWI_adm1_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', 'Region': '', 'PD': '', 'Sexratio': '', 'literacyR': '', 'Ochildren': '', 'Adminzones': '', });
lyr_MWI_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'Region': 'no label', 'PD': 'no label', 'Sexratio': 'no label', 'literacyR': 'no label', 'Ochildren': 'no label', 'Adminzones': 'no label', });
lyr_MWI_adm1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});