(() => {
'use strict';
const cached=new Map();
function access(requester){if(document.getElementById('vsAdminFrame')?.contentWindow!==requester||!window.ecwCanUseVersammlungen?.()||!firebaseAuthUser||!firestoreDb)throw Error('Bitte mit Versammlungsberechtigung anmelden.');}
window.ecwMobileMeetingInbox={
 async list(requester){access(requester);const result=await firestoreDb.collection('versammlungenMobile').where('status','==','pending').limit(50).get({source:'server'});access(requester);cached.clear();const rows=[];result.forEach(doc=>{const r=doc.data();if(!['board','work'].includes(r.kind)||typeof r.title!=='string'||!r.title.trim()||r.title.length>160||typeof r.desc!=='string'||r.desc.length>10000)return;const row={id:doc.id,kind:r.kind,title:r.title,desc:r.desc,createdAt:r.createdAt?.toDate?.().toISOString()||''};cached.set(doc.id,row);rows.push(row);});return rows.sort((a,b)=>a.createdAt.localeCompare(b.createdAt));},
 async acknowledge(requester,id){access(requester);if(!cached.has(id))throw Error('Bitte den mobilen Eingang erneut laden.');const ref=firestoreDb.collection('versammlungenMobile').doc(id);await firestoreDb.runTransaction(async tx=>{const snap=await tx.get(ref);if(!snap.exists)throw Error('Eingangspunkt wurde nicht gefunden.');if(snap.data().status==='imported')return;if(snap.data().status!=='pending')throw Error('Unbekannter Eingangsstatus.');tx.update(ref,{status:'imported',importedAt:firebase.firestore.FieldValue.serverTimestamp(),importedBy:firebaseAuthUser.uid});});cached.delete(id);}
};
})();
