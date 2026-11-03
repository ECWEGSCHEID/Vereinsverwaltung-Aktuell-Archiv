(() => {
'use strict';
const panel=document.createElement('section');panel.className='panel no-print';panel.innerHTML='<h3>Mobile Punkte</h3><p>Bewusst laden (maximal 50 offene Punkte), Ziel prüfen und übernehmen. Die Übernahme wird erst nach bestätigter Firebase-Speicherung quittiert.</p><button type="button" class="btn">Mobile Punkte laden</button><p role="status" aria-live="polite"></p><div class="mobile-inbox-list"></div>';
const host=document.querySelector('header')||document.body;host.insertAdjacentElement('afterend',panel);const status=panel.querySelector('p[role]'),list=panel.querySelector('.mobile-inbox-list'),load=panel.querySelector('button');let busy=false;
function api(){if(window.parent===window||!window.parent.ecwMobileMeetingInbox)throw Error('Bitte aus der angemeldeten Vereinsverwaltung öffnen.');return window.parent.ecwMobileMeetingInbox;}
load.onclick=async()=>{if(busy)return;busy=true;load.disabled=true;status.textContent='Mobile Punkte werden geladen …';try{const rows=await api().list(window);list.replaceChildren();for(const row of rows){
 const card=document.createElement('div');card.className='item';const title=document.createElement('h4');title.textContent=(row.kind==='board'?'Vorstandssitzung: ':'Arbeitseinsatz: ')+row.title;const desc=document.createElement('p');desc.textContent=row.desc;desc.style.whiteSpace='pre-wrap';card.append(title,desc);
 let target=null;if(row.kind==='work'){target=document.createElement('select');target.setAttribute('aria-label','Offener Arbeitseinsatz');target.add(new Option('Offenen Arbeitseinsatz wählen …',''));for(const e of window.ecwWorkMobile?.targets()||[])target.add(new Option(e.title+(e.date?' · '+e.date:''),e.id));card.append(target);}
 const button=document.createElement('button');button.className='btn red';button.textContent='Übernehmen und in Firebase sichern';card.append(button);list.append(card);
 button.onclick=async()=>{if(busy)return;if(row.kind==='work'&&!target.value){status.textContent='Bitte einen offenen Arbeitseinsatz wählen.';return;}if(!confirm('„'+row.title+'“ in '+(row.kind==='board'?'die aktuelle Vorstandssitzung':target.selectedOptions[0].textContent)+' übernehmen und in Firebase speichern?'))return;
 busy=true;button.disabled=true;load.disabled=true;
 try{
  if(!window.ecwMeetingCloud?.canWrite?.())throw Error('Bitte zuerst den aktuellen Firebase-Stand laden bzw. die Firebase-Verbindung prüfen. Es wurde kein neuer Punkt eingefügt.');
  if(row.kind==='board')window.ecwBoardMobileImport(row);else window.ecwWorkMobile.import(row,target.value);
  if(!window.ecwMeetingCloud?.saveLocal)throw Error('Firebase-Speicherfunktion fehlt. Der Punkt bleibt lokal erhalten.');
  status.textContent='Punkt lokal übernommen. Gesamter Sitzungsstand wird in Firebase gespeichert …';
  const saved=await window.ecwMeetingCloud.saveLocal(true);if(saved!==true)throw Error('Firebase hat die Speicherung nicht bestätigt. Der Punkt bleibt lokal und im Eingang erhalten. Zuerst den Firebase-Konflikt/Verbindungsstatus klären.');
  await api().acknowledge(window,row.id);card.remove();status.textContent='Übernommen und in Firebase bestätigt gespeichert.';
 }catch(e){status.textContent='Nicht vollständig bestätigt: '+e.message+' Bei erneutem Übernehmen verhindert dieselbe Eingangskennung einen doppelten Punkt.';}
 finally{busy=false;button.disabled=false;load.disabled=false;}
 };
 }status.textContent=rows.length?rows.length+' offene mobile Punkte geladen.':'Keine offenen mobilen Punkte.';}catch(e){status.textContent='Laden fehlgeschlagen: '+e.message;}finally{busy=false;load.disabled=false;}};
})();
