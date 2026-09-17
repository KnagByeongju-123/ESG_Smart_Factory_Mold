/* TJD MES - 로그인 없음(v76). 전 화면 전체권한으로 즉시 진입.
 * index.html(부모)에서만 로드. 화면 iframe들의 mes_db.js는 토큰이 없으면
 * publishable key로 접속하며, RLS는 anon 전체 허용으로 열려 있다. */
(function(){
const AUTH={
  session:null, perms:null, role:'master', name:'태진다이텍',
  get token(){return null},
  can(){return true}
};
window.MES_AUTH=AUTH;

function ready(){
  window.dispatchEvent(new Event('mes-auth-ready'));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);
else ready();
})();
