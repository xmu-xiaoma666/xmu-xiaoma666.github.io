function setLang(lang){
  document.body.setAttribute('data-lang', lang);
  try{ localStorage.setItem('site_lang', lang); }catch(e){}
  document.getElementById('btn-zh').classList.toggle('active', lang==='zh');
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
  document.documentElement.setAttribute('lang', lang==='zh'?'zh-CN':'en');
}
(function(){
  var saved = 'zh';
  try{ saved = localStorage.getItem('site_lang') || 'zh'; }catch(e){}
  setLang(saved);
})();
