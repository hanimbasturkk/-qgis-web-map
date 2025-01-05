ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([24.607998, 32.020293, 44.714892, 45.699573]);
var wms_layers = [];

var format_tur_polbnda_adm1_0 = new ol.format.GeoJSON();
var features_tur_polbnda_adm1_0 = format_tur_polbnda_adm1_0.readFeatures(json_tur_polbnda_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_tur_polbnda_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tur_polbnda_adm1_0.addFeatures(features_tur_polbnda_adm1_0);
var lyr_tur_polbnda_adm1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tur_polbnda_adm1_0, 
                style: style_tur_polbnda_adm1_0,
                popuplayertitle: 'tur_polbnda_adm1',
                interactive: true,
    title: 'tur_polbnda_adm1<br />\
    <img src="styles/legend/tur_polbnda_adm1_0_0.png" /> Çok Yüksek Risk<br />\
    <img src="styles/legend/tur_polbnda_adm1_0_1.png" /> Düşük Risk<br />\
    <img src="styles/legend/tur_polbnda_adm1_0_2.png" /> Orta Risk<br />\
    <img src="styles/legend/tur_polbnda_adm1_0_3.png" /> Orta Yüksek Risk<br />\
    <img src="styles/legend/tur_polbnda_adm1_0_4.png" /> Yüksek Risk<br />\
    <img src="styles/legend/tur_polbnda_adm1_0_5.png" /> <br />'
        });
var format_riskskorlucsvxgboost2_1 = new ol.format.GeoJSON();
var features_riskskorlucsvxgboost2_1 = format_riskskorlucsvxgboost2_1.readFeatures(json_riskskorlucsvxgboost2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_riskskorlucsvxgboost2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_riskskorlucsvxgboost2_1.addFeatures(features_riskskorlucsvxgboost2_1);
var lyr_riskskorlucsvxgboost2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_riskskorlucsvxgboost2_1, 
                style: style_riskskorlucsvxgboost2_1,
                popuplayertitle: 'riskskorlucsvxgboost2',
                interactive: true,
                title: '<img src="styles/legend/riskskorlucsvxgboost2_1.png" /> riskskorlucsvxgboost2'
            });

lyr_tur_polbnda_adm1_0.setVisible(true);lyr_riskskorlucsvxgboost2_1.setVisible(true);
var layersList = [lyr_tur_polbnda_adm1_0,lyr_riskskorlucsvxgboost2_1];
lyr_tur_polbnda_adm1_0.set('fieldAliases', {'adm1_tr': 'adm1_tr', 'adm1_en': 'adm1_en', 'adm1': 'adm1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'adm0_en': 'adm0_en', 'adm0_tr': 'adm0_tr', 'adm0': 'adm0', 'risk_skoru_yuzde': 'risk_skoru_yuzde', 'risk_etiketi': 'risk_etiketi', 'renk': 'renk', });
lyr_riskskorlucsvxgboost2_1.set('fieldAliases', {'id': 'id', 'il_adi': 'il_adi', 'enlem': 'enlem', 'boylam': 'boylam', 'ortalama_yagis': 'ortalama_yagis', 'ortalama_yukseklik': 'ortalama_yukseklik', 'arazi_yapisi': 'arazi_yapisi', 'toprak_turu': 'toprak_turu', 'sel_olayi_sayisi': 'sel_olayi_sayisi', 'yuzey_egim_orani': 'yuzey_egim_orani', 'nufus_yogunlugu': 'nufus_yogunlugu', 'risk_skoru': 'risk_skoru', 'arazi_skoru': 'arazi_skoru', 'toprak_skoru': 'toprak_skoru', 'ortalama_yagis_norm': 'ortalama_yagis_norm', 'ortalama_yukseklik_norm': 'ortalama_yukseklik_norm', 'yuzey_egim_orani_norm': 'yuzey_egim_orani_norm', 'nufus_yogunlugu_norm': 'nufus_yogunlugu_norm', 'arazi_skoru_norm': 'arazi_skoru_norm', 'toprak_skoru_norm': 'toprak_skoru_norm', 'risk_skoru_yuzde': 'risk_skoru_yuzde', 'risk_etiketi': 'risk_etiketi', 'renk': 'renk', });
lyr_tur_polbnda_adm1_0.set('fieldImages', {'adm1_tr': 'TextEdit', 'adm1_en': 'TextEdit', 'adm1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'adm0_en': 'TextEdit', 'adm0_tr': 'TextEdit', 'adm0': 'TextEdit', 'risk_skoru_yuzde': 'TextEdit', 'risk_etiketi': 'TextEdit', 'renk': 'TextEdit', });
lyr_riskskorlucsvxgboost2_1.set('fieldImages', {'id': 'Range', 'il_adi': 'TextEdit', 'enlem': 'TextEdit', 'boylam': 'TextEdit', 'ortalama_yagis': 'TextEdit', 'ortalama_yukseklik': 'TextEdit', 'arazi_yapisi': 'TextEdit', 'toprak_turu': 'TextEdit', 'sel_olayi_sayisi': 'Range', 'yuzey_egim_orani': 'TextEdit', 'nufus_yogunlugu': 'Range', 'risk_skoru': 'TextEdit', 'arazi_skoru': 'Range', 'toprak_skoru': 'Range', 'ortalama_yagis_norm': 'TextEdit', 'ortalama_yukseklik_norm': 'TextEdit', 'yuzey_egim_orani_norm': 'TextEdit', 'nufus_yogunlugu_norm': 'TextEdit', 'arazi_skoru_norm': 'TextEdit', 'toprak_skoru_norm': 'TextEdit', 'risk_skoru_yuzde': 'TextEdit', 'risk_etiketi': 'TextEdit', 'renk': 'TextEdit', });
lyr_tur_polbnda_adm1_0.set('fieldLabels', {'adm1_tr': 'no label', 'adm1_en': 'no label', 'adm1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'adm0_en': 'no label', 'adm0_tr': 'no label', 'adm0': 'no label', 'risk_skoru_yuzde': 'no label', 'risk_etiketi': 'no label', 'renk': 'no label', });
lyr_riskskorlucsvxgboost2_1.set('fieldLabels', {'id': 'no label', 'il_adi': 'inline label - visible with data', 'enlem': 'no label', 'boylam': 'no label', 'ortalama_yagis': 'no label', 'ortalama_yukseklik': 'no label', 'arazi_yapisi': 'no label', 'toprak_turu': 'no label', 'sel_olayi_sayisi': 'no label', 'yuzey_egim_orani': 'no label', 'nufus_yogunlugu': 'no label', 'risk_skoru': 'no label', 'arazi_skoru': 'no label', 'toprak_skoru': 'no label', 'ortalama_yagis_norm': 'no label', 'ortalama_yukseklik_norm': 'no label', 'yuzey_egim_orani_norm': 'no label', 'nufus_yogunlugu_norm': 'no label', 'arazi_skoru_norm': 'no label', 'toprak_skoru_norm': 'no label', 'risk_skoru_yuzde': 'inline label - visible with data', 'risk_etiketi': 'inline label - visible with data', 'renk': 'inline label - visible with data', });
lyr_riskskorlucsvxgboost2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});