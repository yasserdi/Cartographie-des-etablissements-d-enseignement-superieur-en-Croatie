var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HRV_adm1_1 = new ol.format.GeoJSON();
var features_HRV_adm1_1 = format_HRV_adm1_1.readFeatures(json_HRV_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HRV_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HRV_adm1_1.addFeatures(features_HRV_adm1_1);
var lyr_HRV_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HRV_adm1_1, 
                style: style_HRV_adm1_1,
                interactive: false,
                title: '<img src="styles/legend/HRV_adm1_1.png" /> HRV_adm1'
            });
var format_Type_Etablissement_2 = new ol.format.GeoJSON();
var features_Type_Etablissement_2 = format_Type_Etablissement_2.readFeatures(json_Type_Etablissement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Type_Etablissement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Type_Etablissement_2.addFeatures(features_Type_Etablissement_2);
var lyr_Type_Etablissement_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Type_Etablissement_2, 
                style: style_Type_Etablissement_2,
                interactive: true,
    title: 'Type_Etablissement<br />\
    <img src="styles/legend/Type_Etablissement_2_0.png" /> Académie des Arts<br />\
    <img src="styles/legend/Type_Etablissement_2_1.png" /> Centre universitaire<br />\
    <img src="styles/legend/Type_Etablissement_2_2.png" /> département<br />\
    <img src="styles/legend/Type_Etablissement_2_3.png" /> faculté<br />\
    <img src="styles/legend/Type_Etablissement_2_4.png" /> Lycée<br />\
    <img src="styles/legend/Type_Etablissement_2_5.png" /> Université<br />\
    <img src="styles/legend/Type_Etablissement_2_6.png" /> Université - organisé par département<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_HRV_adm1_1.setVisible(true);lyr_Type_Etablissement_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_HRV_adm1_1,lyr_Type_Etablissement_2];
lyr_HRV_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Type_Etablissement_2.set('fieldAliases', {'Code de l\'enseignement supérieur': 'Code de l\'enseignement supérieur', 'Nom de l\'établissement d\'enseignement supérieur': 'Nom de l\'établissement d\'enseignement supérieur', 'Nom de l\'établissement d\'enseignement supérieur Fr': 'Nom de l\'établissement d\'enseignement supérieur Fr', 'Institution mčre': 'Institution mčre', 'Secteur': 'Secteur', 'Type de l\'établissement': 'Type de l\'établissement', 'Sičge social': 'Sičge social', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', });
lyr_HRV_adm1_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'VARNAME_1': 'Hidden', });
lyr_Type_Etablissement_2.set('fieldImages', {'Code de l\'enseignement supérieur': 'Range', 'Nom de l\'établissement d\'enseignement supérieur': 'Hidden', 'Nom de l\'établissement d\'enseignement supérieur Fr': 'TextEdit', 'Institution mčre': 'TextEdit', 'Secteur': 'TextEdit', 'Type de l\'établissement': 'TextEdit', 'Sičge social': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Adresse': 'TextEdit', });
lyr_HRV_adm1_1.set('fieldLabels', {});
lyr_Type_Etablissement_2.set('fieldLabels', {'Code de l\'enseignement supérieur': 'inline label', 'Nom de l\'établissement d\'enseignement supérieur Fr': 'inline label', 'Institution mčre': 'inline label', 'Secteur': 'inline label', 'Type de l\'établissement': 'inline label', 'Sičge social': 'inline label', 'Adresse': 'inline label', });
lyr_Type_Etablissement_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});