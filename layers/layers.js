ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([223476.320823, 8622541.136912, 367802.328464, 8725082.037529]);
var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DISTRITOS_1 = new ol.format.GeoJSON();
var features_DISTRITOS_1 = format_DISTRITOS_1.readFeatures(json_DISTRITOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DISTRITOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_1.addFeatures(features_DISTRITOS_1);
var lyr_DISTRITOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOS_1, 
                style: style_DISTRITOS_1,
                interactive: true,
                title: '<img src="styles/legend/DISTRITOS_1.png" /> DISTRITOS'
            });
var format_AD_PTLm_S23_2 = new ol.format.GeoJSON();
var features_AD_PTLm_S23_2 = format_AD_PTLm_S23_2.readFeatures(json_AD_PTLm_S23_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AD_PTLm_S23_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AD_PTLm_S23_2.addFeatures(features_AD_PTLm_S23_2);
var lyr_AD_PTLm_S23_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AD_PTLm_S23_2, 
                style: style_AD_PTLm_S23_2,
                interactive: true,
    title: 'AD_PTLm_S23<br />\
    <img src="styles/legend/AD_PTLm_S23_2_0.png" /> 0 - 2.5 <br />\
    <img src="styles/legend/AD_PTLm_S23_2_1.png" /> 2.5 - 4 <br />\
    <img src="styles/legend/AD_PTLm_S23_2_2.png" /> 4 - 5 <br />\
    <img src="styles/legend/AD_PTLm_S23_2_3.png" /> 5 - 6 <br />\
    <img src="styles/legend/AD_PTLm_S23_2_4.png" /> 6 < <br />'
        });
var format_T9_pt_colectores_3 = new ol.format.GeoJSON();
var features_T9_pt_colectores_3 = format_T9_pt_colectores_3.readFeatures(json_T9_pt_colectores_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_T9_pt_colectores_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T9_pt_colectores_3.addFeatures(features_T9_pt_colectores_3);
var lyr_T9_pt_colectores_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T9_pt_colectores_3, 
                style: style_T9_pt_colectores_3,
                interactive: true,
                title: '<img src="styles/legend/T9_pt_colectores_3.png" /> T9_pt_colectores'
            });

lyr_ESRI_0.setVisible(true);lyr_DISTRITOS_1.setVisible(true);lyr_AD_PTLm_S23_2.setVisible(true);lyr_T9_pt_colectores_3.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_DISTRITOS_1,lyr_AD_PTLm_S23_2,lyr_T9_pt_colectores_3];
lyr_DISTRITOS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'IDPROV': 'IDPROV', 'PROVINCIA': 'PROVINCIA', 'IDDIST': 'IDDIST', 'DISTRITO': 'DISTRITO', 'CAPITAL': 'CAPITAL', 'CODCCPP': 'CODCCPP', 'AREA': 'AREA', 'FUENTE': 'FUENTE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AD_PTLm_S23_2.set('fieldAliases', {'N_PTAR': 'N_PTAR', 'CG/L': 'CG/L', });
lyr_T9_pt_colectores_3.set('fieldAliases', {'OBJECTID_12': 'OBJECTID_12', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FACILITYID': 'FACILITYID', 'PTO_NAME': 'PTO_NAME', 'COD_PMONIT': 'COD_PMONIT', 'POB_CONTRI': 'POB_CONTRI', 'UBIC_PTO': 'UBIC_PTO', });
lyr_DISTRITOS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'IDPROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'IDDIST': 'TextEdit', 'DISTRITO': 'TextEdit', 'CAPITAL': 'TextEdit', 'CODCCPP': 'TextEdit', 'AREA': 'Range', 'FUENTE': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AD_PTLm_S23_2.set('fieldImages', {'N_PTAR': 'TextEdit', 'CG/L': 'TextEdit', });
lyr_T9_pt_colectores_3.set('fieldImages', {'OBJECTID_12': 'TextEdit', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'FACILITYID': 'TextEdit', 'PTO_NAME': 'TextEdit', 'COD_PMONIT': 'TextEdit', 'POB_CONTRI': 'Range', 'UBIC_PTO': 'TextEdit', });
lyr_DISTRITOS_1.set('fieldLabels', {'OBJECTID': 'no label', 'IDDPTO': 'no label', 'DEPARTAMEN': 'no label', 'IDPROV': 'no label', 'PROVINCIA': 'no label', 'IDDIST': 'no label', 'DISTRITO': 'no label', 'CAPITAL': 'no label', 'CODCCPP': 'no label', 'AREA': 'no label', 'FUENTE': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_AD_PTLm_S23_2.set('fieldLabels', {'N_PTAR': 'inline label', 'CG/L': 'no label', });
lyr_T9_pt_colectores_3.set('fieldLabels', {'OBJECTID_12': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'FACILITYID': 'no label', 'PTO_NAME': 'no label', 'COD_PMONIT': 'no label', 'POB_CONTRI': 'no label', 'UBIC_PTO': 'no label', });
lyr_T9_pt_colectores_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});