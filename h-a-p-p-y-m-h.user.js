// ==UserScript==
// @name         h-a-p-p-y-m-h
// @namespace    h-a-p-p-y-m-h.user.js
// @version      2024.12.16
// @description  down h-a-p-p-y-m-h
// @author       You
// @include      /^https:\/\/m\.h[a4]p[p9]ymh\.c[o0]m\/m[a4]ng[a4]r[e3]ad\//
// @icon         https://raw.githubusercontent.com/ishidaren3456/tu_xe_trau/main/h-a-p-p-y-m-h.png
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @require      https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.7.48/dist/zip.min.js
// @downloadURL  https://github.com/ishidaren3456/tu_xe_trau/raw/main/h-a-p-p-y-m-h.user.js
// @updateURL    https://github.com/ishidaren3456/tu_xe_trau/raw/main/h-a-p-p-y-m-h.meta.js
// ==/UserScript==

(function(N,F){const V=a0F,Q=N();while(!![]){try{const C=-parseInt(V(0x222,'Cm0e'))/0x1+parseInt(V(0x21a,'GraI'))/0x2*(parseInt(V(0x23e,'YZ1M'))/0x3)+-parseInt(V(0x1e6,'[ZX9'))/0x4*(-parseInt(V(0x236,'xAb#'))/0x5)+-parseInt(V(0x216,'&Lck'))/0x6+-parseInt(V(0x24b,'27eD'))/0x7+parseInt(V(0x1f6,'y#58'))/0x8*(parseInt(V(0x1fe,'zjAG'))/0x9)+parseInt(V(0x202,'CUXW'))/0xa;if(C===F)break;else Q['push'](Q['shift']());}catch(c){Q['push'](Q['shift']());}}}(a0N,0x59c60));let downloading_current=0x0,downloading_total=0x0,image_blobs;function a0F(N,F){const Q=a0N();return a0F=function(C,c){C=C-0x1d7;let g=Q[C];if(a0F['VuUZTX']===undefined){var D=function(V){const W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let h='',K='';for(let p=0x0,i,v,e=0x0;v=V['charAt'](e++);~v&&(i=p%0x4?i*0x40+v:v,p++%0x4)?h+=String['fromCharCode'](0xff&i>>(-0x2*p&0x6)):0x0){v=W['indexOf'](v);}for(let s=0x0,u=h['length'];s<u;s++){K+='%'+('00'+h['charCodeAt'](s)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(K);};const d=function(V,W){let h=[],K=0x0,p,v='';V=D(V);let e;for(e=0x0;e<0x100;e++){h[e]=e;}for(e=0x0;e<0x100;e++){K=(K+h[e]+W['charCodeAt'](e%W['length']))%0x100,p=h[e],h[e]=h[K],h[K]=p;}e=0x0,K=0x0;for(let u=0x0;u<V['length'];u++){e=(e+0x1)%0x100,K=(K+h[e])%0x100,p=h[e],h[e]=h[K],h[K]=p,v+=String['fromCharCode'](V['charCodeAt'](u)^h[(h[e]+h[K])%0x100]);}return v;};a0F['zmtRIc']=d,N=arguments,a0F['VuUZTX']=!![];}const x=Q[0x0],J=C+x,r=N[J];return!r?(a0F['oWzEhX']===undefined&&(a0F['oWzEhX']=!![]),g=a0F['zmtRIc'](g,c),N[J]=g):g=r,g;},a0F(N,F);}function sleep(N){return new Promise(F=>setTimeout(F,N));}const gmXmlHttpRequest=N=>{return new Promise((F,Q)=>{GM_xmlhttpRequest({...N,'onload':F,'onerror':Q});});},download_not_encrypted=async(N,F)=>{const W=a0F;try{const Q=await gmXmlHttpRequest({'method':W(0x26d,'MbsU'),'url':N[W(0x1f9,'[o71')](W(0x20a,'MEAa'),''),'headers':{'User-Agent':W(0x1e9,'[o71'),'Referer':location[W(0x1eb,'YZ1M')]},'responseType':W(0x26f,'[ZX9')}),C=Q[W(0x270,'i&Fv')],c=new DataView(C),g=c[W(0x274,'&Lck')](0x0,![])[W(0x215,'#]no')](0x10);let D='.bin',x=W(0x1fd,'$[^i');if(g==='52494646')D=W(0x232,'MbsU'),x=W(0x1f3,'^EPE');else g===W(0x204,'y#58')?(D='.png',x=W(0x26b,'TP*e')):(D=W(0x235,'F]8U'),x='image/jpeg');let J=(''+(F+0x1))['padStart'](0x3,'0')+D;const r=new Blob([C],{'type':x});image_blobs[W(0x260,'@$xX')]({'name':J,'blob':r}),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}catch(d){console[W(0x1f4,'xAb#')]('Failed\x20to\x20download\x20file:',d);}};function a0N(){const t=['WPNcO8kjW4ddOa','l8kcqx/dPmkoW6BdOmopo2e','qmk/mhC','fmoJl2FdRmoiWRaNW6f9','ASoHb8oK','wSoLsmoZqCkC','CCoTomkQWRjOtmottMldVq','lmkNW6K','WOFcMwq','emoPps52WQxcSIdcVq','W4n2W7ZdLG','zbhdNq','WOuryG4WW4ddKSoBW597n0q','WRRdRxPMo8kW','WOPoWRVcSLSQWR7cUCkr','pSo6kmkoWRb4uCkkBh7dO8obWOnKW4vd','WPugCY4WW5hdPCoEW5HJjK87','W7lcMSkNCuJdR8ozqY7cM8k9','WRvHW7ddGGRdOa','ESk2xIhdUY/cNGmjCq','W5hcHSk4DNtdRSo7tYlcHq','W4CbWOBcJmk0ESoNsXu','qIBdV2O','WOrOhG','WPXlzq','fmo9nghdU8oJWReKW6PRWQy','k8k7sdddPJxcJWm','wZBdONRcL8oXkNePWQpdNmkCW7im','W6T8W7hdQCoO','W7PfbCodW5r/','WPNdOGddUSo+xI3dRdG','WQuBvCoF','wmkaW5RcICofa1DxvCkYW7BcLq','WOKJC8ktumoKW6RdMSkMW55VW4GI','vsRdON7cKSo2kG','W5myzG','WQ3cMLKGW5JdVZDbD1RcLmoH','WOryEq','WRnmobFdPG','WO3cVmo9WRBcKW','WPJcVL3cQmkaW7XmW4RdImk2zG','W7pdGmoGW6m','bSo7p2ZdPW','WQz2W7hdGGddPSkmWOpcIG','gHvSpHNdQWxcPmoa','sSonw8oD','qSk+CJxcSmkZWOiSW5H2WO1D','WOLXW6ZdMG','WPDymCoDWOdcKmkhW7m','tmk+CZxcU8k3WQGmW5T8WQjz','WQ7cIK8IW47dGIfirLZcMmo6W6a','amoAz8ocqCkevW','m3dcJmoyraz5WPZcPIOQW7BdTs7dQGPsW7dcM8oxWOuiW4f7cshdJmoXWO3dVSkfix3dQCo7WQxdHSkFeNhcHCkjW4D9W5NcQ8k4fSkjW7ZdOSoNEs/cHIfhW6VdM3S1WQPKptq8CeTcW7hcJ8otyH4qW40rW7WgmfddVmkFiCooiqFdHsxcQ0NdJ8o2WOFdJLK0e1ldQaeNDCk2ehX5lmk1oeO','WOCbCZ09W6FdHCoEW5HTn049','WQBdR39OmCk7','t8ocWPVdNCkiqeG0Bmk1W60','g8oeqhtcKSk6Cg7dGG','WR3dUg57g8k6W5JcNmk+WOldVW','WRDmi0NdTCkJ','WOW+zmk3rCoIW4C','WOatvSof','W77cI8k5C0FdMCo/sIm','W7RcH8k2C0pcPmoTtIxcHW','WOXqWQJcRLO','aHD0sSkCW5ZcJbNdRCkWW4hcRmoJ','u8kTzgGTW6NcGIBcNH4pWR8','WPSvzG','WRBcKuq1W4xdMrbPBW','dhRcHSoDsqL9','cHX5db7dKrBcOmohWOBcUmot','W5NdP8odW5VdTCkRtCkDW7W','WOFcN37dLgdcM8oNW6NcVSoI','WOicsSofWQ4lo8oNamk4dqJdMGmlW6JdV8keWOWmnu5qW7C','W4uzzrJdJCkcza','W6XTW7ddSCooWQtdKKBcJKuE','kSk7vsq','sSoEuSoqW51diq5od8kcFhm','W4CgD8kfW5JdISowW7NcJHTGg8k8','h2/cHSoDqqL5W4FdUMT0W7NcPXddSW','wmkIz2OTWRtdV2C','WPKLB8kEqq','sSo0x8oRqq','W59MW6hdMCoWW7O','WOeDxSoq','WRdcVSkaW7VdT8kGDCkIW7C','W5zingyt','WQtdVhHOoCkhW5pcICk/','erXSkq','uSkpxSok','WOPqWR/cOfWbWPRcUmkrWO/dLSkEkq','W7pdHWpcVSkAW7L7W5FdKSo3BbBdPc/cK8k3W70xq8o9WOrBhW3cNCo9W6BdTeKUWP1unXSwW4zcamoEi8oUCNtdLKhdK8kJg8onW6FcVmkYWP7dQuVdSub+W43dGGLzW6ldNgLmyCoYkmossSk4tH14uMqKW4qdw2rNWOdcHmo2W6VdU8o3WPNcMe7cKrZcPmo+W5e+WQDfuftdMCkIqSkcW5/dPHpdSCoEruZcOxBdMNnKhmo1jSoAW5e/W5xcHs9glZJdISksAM8joxxdRG3cVeZdL8k6fZtdIGPwDmkDW5NdNuRcP1VdOwZdGmoNWRWjqCoUW4bDkexcLCo3a8oODLVcI38ZEmkhcKtcJM3cOSo9pSodFKRdIuS2i8o/WQZcTXbMWO0JW7xcKuJdOYyYW7u+W5rVWPCtWPvChhuKW6fWcmk4W6FdPsWMcCkQxmkScN3cNSoDdJzIDmo0WQKRWRm4FSo4ev96WPpcRmo3W5JdJqitWQGNjmoExwGrW61AWOddJSkgsSkFf8kVW7dcUxldMa14WQRdLSkwA8kKW5PiaNVdI8oUpSk/W7L0c2pcHZWmBaGGiCoxsJyrcGOYWP3cPHDLlsmtW6f7WP3cRW','W6X6W6hdQa','WORcRCo8WQ7cTCozWRFcTt5ina','m8kXlmo0lSkDuJG','WQBcT8oBWPJdOa','WP/dTX3dNmk4xtJcSw3dLZJcR8kaz8kR','W5hcSmkZD8oZcmoOWRu','W4/cTKlcMSkLcwNcSuJdKxVcI8ko','bXDZsCkAW5dcJbNdM8k9W7JcO8oJ','hCo7mNddSCk7W6TTW6PHWRPMwSoUEYyLmahcM8kGW6ldGbP0BCo+WP/dImorWOVcNmofjSockxVcISoZdu7dNCotCmksC2xcTw1nW6PqyCoVW7hcHCoCiq','WRKFsCoDW5q','a8ognGlcIKZcMCoZWRfB','W4ifWONcGa','W7XHW7VdTCoHWQRdHq','W5T3W7VdJSo3WQJcLvlcMYpdMZpcTCo9CmkbFCkBC3i4W4JdN2xdNISvyWO4vfGFW5/dGwjvACommYJdLLpcS8k0WPOGegldUKKNEIbfWOP1WRtdKmk0bmo7kSkKWRzAB1VdJCoECetcLq','W6iVl8oQW6m','WQDeortdR8kNFW','BCkAvhVdUmkEW4FdRCohiW','W6FcMmk2ELxdP8o7xYldN8o0W4nAW7vH','W53dPSoeWPNcT8o7r8kPW5e+W5hdRq','lmo3eSoHhCkDrL7cMCoXWQy','WP3dTrhdJSoJvrZcS2/dM3lcS8kr','WQvblXW','WRjylXBdUSkvyWtcKSoEWP14W58','caXOpXpdTGhcPCoaWPdcUmozjG','bSouWPVdUCkqufz8Bmk0W7pcNmoPWQy1W7iTaSoYmq','F8kXBa','bmo6i3ldU8osWQeUW6LTWQb9wW','WOHDBrzvfJ3dGSkWWRxdGmkhW7fXd8o5','rvi8emon','WOtdP1FcI3GzdSocs8op','WQxdUhHOlmk9','W6iViCoQW7uHWRpdQ8oN','W6PTW7JdQCoSWQJdMq','WQmgvW','W61AlWBdSW','WQmMwG','WO83xthdJq','W5dcOSo0WR0','W5GxWPdcTw8rWRJcNW','uCkexG','cG1Sor/dLG','WPnRWRtcPu0C','qYBdP2hcLCoYhfaSWQJdI8knW4KQWOu','WRuKzmkE','hmocwhBcHa','WQJdRwzQnSkXW7xcGmkYWOddRW','W7RcRsv4kmk3W7RcSSkI','WObdp8oFWOK','W4adWONcJG','hmocqg7cLmkV','WPbfi8osWPJcMSkJW7VcNXXqlmkJ','pCo5q1tdGW','EZZdRfOt','WPRcQCoWWRS','WPhcQ0ZcV8kAW7PQW4pdLq','W7dcMmkYDvldRSoFrYlcMSk8WPGE','u8kCyeBcH0dcVCoiWPLwe8oD','Ec3dOKapi1rfWOW','W6/dNCo1','EmkJfHdcNabsACoYWR0RW4e','W6FcJ8kVygxdPmo0xYlcMCkT','W7i3oCo1W6m','WPTsj8ox','udpdOwVcKmoZefOVWQhdJa','dwVcJ8oDtq','W7T9W7RdTSoIWRK','WOTvzJe','W4BcRCkfySo1bmojWRdcHSofWQFcImkGjmkt','W5WnWRddGG7dU8oyWOxcISo9WOGLCe9OxCkfWPJcGeSmWQZdT8ohW68zCuuLWORdSmoZtItcItv0DCoIsSkfECocy8opWRFcHmoSxmk6kceVW7ffxezle8kfc8ogACosFttcJSkZWQ3dNmkDW7RcPMFdNCorWP7dISkyW7xcV2pdOr7dQu96A8kHCeJdIv/cQ8o7W5XxWQvkumoNg8ksf8okiSkjDSkutIekWPP9afRdSmknEJRcPg/cPfGWW5i2WOyFEYxcNfdcPsldS8kDvSobqZqKrMhcQCkQWOpcR1vYu8kwW7uJfaBdMfhdTmkiWP5KD8o1WQFcTmkWW5pcHmknWPJdN8o5WR/cSSkMsvy1eMVcUmouW5lcOhRcSCo4W5VdR30eyK5jBIrGu3/dRYq/zvmHW4FcMmoddqiMWQy0WOJcH8ojW5NcGXrtAh3cK8obW60ttI3dGXNdPXddMCoVhSkaWOZcLeVcKmkZW7NcJ3ZcM14sEIVcJCoUvNm1WOtcJvJcVCo7WRJcN3CjWPhdVNL5CmoYmSosj0LZW7FcPZXmyfRcUNhdSJPZCSkxW5GNixO3BCo9kGdcQqy2l1hdHSkFmCkkWR9WW7hcO2SjWRJdP8koW5HeCCk4WOPHWPxcLYddMSktW4ObWPKDW6JdVWu+rxT2W47cJ8onxWDguSo6CCkVW4ddMmkFW4i6W58oWPBcJSk7gviEW7j4xeWacSkKW7KsW4HKW7rpjc3cHCkgwmktW5XTwGJcS8oHz8omcmo0WRmMWOXTW6RdPSobgCo0W6yXWPhcOSoRW7pcOSkNWPugF8kdm8kmW6fGW7ftWRy8C8kFgb9DqSoMW6/dRbxdPmkOWO8SWQVcPmk0v8oOwmoSW7/cNmksW5xdRYCTcCogbCkcW5BcSG7dKMLHmW/dMMBdR1DcW5vaamkQtIDSWPyXCqJdUJ5nwmklvmk1B8ofoCogAJvmsSkAWOdcUSkiiwvqWPVdJmk1W4NcImoFWP56WPzPdtVcUuPtk03cU8kxaY56hmo8WPJdMIVcVG7dGKrMeSo+etapWPhcU8kvwmkxEa0lW61bW5bcB1pcQ3rTWO7cLmkwWQ/dGe9sW7aGW7y5WP8Cmmkjs8krWPzgsxboWPfVW6uFwatcSCkwv0GpWOBdMGVcI8o2zmoqkCkAW6auW4C','WOCBta'];a0N=function(){return t;};return a0N();}function update_status(){const h=a0F;document[h(0x22a,'[ZX9')](h(0x223,'xitn'))[h(0x1df,'[ZX9')][h(0x21f,'MbsU')]=h(0x225,'MbsU'),document[h(0x1e7,'TVtL')](h(0x1ec,'7BuT'))[h(0x24d,'(CQp')]['alignItems']='center',document[h(0x1ea,'G(JT')](h(0x25c,'iqE*'))[h(0x1f8,'TVtL')]=downloading_current+h(0x1d8,'CUXW')+downloading_total;}function create_status_box(){const K=a0F;let N=document['createElement'](K(0x255,'$[^i'));return N[K(0x1e1,'4WvT')]='status-num',N[K(0x211,'F]8U')]=downloading_current+K(0x229,'iqE*')+downloading_total,N;}function create_download_icon(){const p=a0F;let N=document[p(0x201,'R4W7')]('div'),F=document[p(0x266,'G(JT')](p(0x231,'E4w)'));F[p(0x264,'xAb#')]=p(0x1ef,'MbsU'),F[p(0x1fa,'4WvT')](p(0x25e,'1yPR'),p(0x21d,'@$xX')),F[p(0x1dc,'F]8U')][p(0x243,'27eD')]='3rem',F['style'][p(0x251,'&qC3')]='pointer',N[p(0x267,'^EPE')](F);let Q=document[p(0x224,'&Lck')](p(0x21b,'TP*e'));Q['rel']=p(0x1fc,'1yPR'),Q[p(0x1de,'yKti')]=p(0x218,'[ZX9'),document[p(0x228,'7BuT')](p(0x20c,'4WvT'))[0x0][p(0x257,'B08z')](Q);let C=document[p(0x277,'9qEc')](p(0x25d,'zj&W'));C[p(0x22f,'(CQp')]=p(0x241,'cQ7]'),C[p(0x250,'[o71')][p(0x21c,'&qC3')]='flex',C[p(0x205,'9qEc')][p(0x271,'5MSo')]=p(0x268,'DM32'),C['style'][p(0x259,'[ZX9')]=p(0x25b,'%LUi'),C['style']['gap']='1.5rem',C[p(0x234,'zjAG')]['position']='absolute',C[p(0x22c,'g*9e')][p(0x239,'xAb#')]='10000',C[p(0x206,'%LUi')][p(0x24a,'yKti')]=p(0x273,'E4w)'),C[p(0x219,'E4w)')]['left']=p(0x258,'[ZX9'),C[p(0x256,'Cm0e')][p(0x1ed,'cQ7]')]=p(0x221,'^EPE');let c=create_status_box();const g=document[p(0x20e,'xAb#')](p(0x23f,'CUXW'));g[p(0x1ee,'YZ1M')]=p(0x20f,'DrBv'),document[p(0x25a,'xitn')][p(0x1dd,'DrBv')](g),C['appendChild'](N),C['appendChild'](c);let D=document[p(0x227,'4WvT')](p(0x208,'$[^i')),x=D['firstChild'];return D['insertBefore'](C,x),C;}const throttlePromises=async(N,F)=>{const i=a0F;while(N['length']>0x0){await Promise['all'](N[i(0x263,'YZ1M')](0x0,F)[i(0x1f7,'G(JT')](Q=>Q())),await sleep(0xc8);}},on_heartbeat_css=()=>{const v=a0F;let N=document[v(0x226,'MbsU')](v(0x220,'B08z'));!N&&(N=document[v(0x242,'CUXW')](v(0x23c,'cQ7]')),N[v(0x262,'G(JT')]('id',v(0x246,'DrBv')),document[v(0x24e,'CUXW')][v(0x23d,'YZ1M')](N)),N[v(0x1ff,'&qC3')]=v(0x254,'DM32');},off_heartbeat_css=()=>{const e=a0F,N=document['querySelector'](e(0x269,'i&Fv'));N[e(0x24c,'^EPE')]='';};function saveBlob(N,F){const s=a0F,Q=window[s(0x261,'5MSo')][s(0x253,'#]no')](N),C=document[s(0x247,'^EPE')]('a');C['href']=Q,C[s(0x1e5,'CUXW')]=F,C[s(0x272,'&qC3')][s(0x1d7,'5MSo')]=s(0x240,'TP*e'),document[s(0x20d,'27ve')][s(0x24f,'5MSo')](C),C[s(0x213,'zR2K')](),C['remove'](),window[s(0x233,'G(JT')][s(0x23a,'5MSo')](Q),image_blobs=null;}const performFurtherActions=async N=>{const u=a0F,F=JSON[u(0x1db,'MbsU')](N)[u(0x245,'F]8U')];let Q=F[u(0x248,'GraI')];Q=decodeURIComponent(Q)[u(0x210,'&qC3')]()[u(0x230,'&qC3')]('.','');let C=F[u(0x244,'[)CS')];if(C[u(0x207,'@$xX')]>0x0){downloading_total=C[u(0x22e,'YZ1M')];const c=create_download_icon();c[u(0x22b,'MEAa')]('click',async()=>{const I=u;on_heartbeat_css(),downloading_current=0x0,image_blobs=[];const g=C[I(0x1da,'MEAa')]((r,d)=>()=>download_not_encrypted(r[I(0x26e,'MEAa')],d));await throttlePromises(g,0x2);const D=new zip['BlobWriter'](I(0x203,'[o71')),x=new zip[(I(0x209,'Cm0e'))](D);image_blobs[I(0x1f0,'9qEc')](async r=>{const L=I;await x[L(0x237,'27ve')](r['name'],new zip[(L(0x26a,'^EPE'))](r[L(0x252,'MEAa')]));});const J=await x[I(0x21e,'(CQp')]();saveBlob(J,Q+'.zip');});}};(function(){'use strict';const P=a0F;const N={'mangaRead':null};function F(){const S=a0F;N[S(0x1f2,'^EPE')]&&performFurtherActions(N[S(0x20b,'YZ1M')]);}const Q=XMLHttpRequest[P(0x249,'[)CS')][P(0x275,'E4w)')],C=XMLHttpRequest[P(0x25f,'y#58')][P(0x26c,'5MSo')];XMLHttpRequest['prototype']['open']=function(c,g,D,x,J){const m=P;this['_method']=c,this[m(0x23b,'9qEc')]=g,Q[m(0x1e2,'R4W7')](this,c,g,D,x,J);},XMLHttpRequest[P(0x1e0,'DM32')][P(0x200,'i&Fv')]=function(c){const H=P;this[H(0x265,'iqE*')]('load',function(){const z=H;this['readyState']===0x4&&this[z(0x238,'4WvT')]===0xc8&&(this[z(0x1e4,'DM32')]['includes'](z(0x214,'&Lck'))&&(N['mangaRead']=this[z(0x1d9,'TVtL')],F()));}),C[H(0x1f1,'$[^i')](this,c);};}());