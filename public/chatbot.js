/* aurelienpage.fr - Widget chatbot
 * Bulle de chat + panneau, branché sur le webhook n8n (agent Claude Haiku).
 * Persona : Aurélien Page, consultant SEO / SEA / GEO / IA / No Code.
 * Inclus via next/script dans app/layout.tsx (src="/chatbot.js").
 */
(function () {
  'use strict';

  var WEBHOOK_URL = 'https://n8n.audiaa.fr/webhook/aurelienpage-chat';
  var ACCUEIL = "Bonjour ! Je suis l'assistant d'Aurélien Page, consultant SEO, SEA, GEO et IA. Une question sur le référencement, la pub en ligne ou l'automatisation ? Je suis là.";

  var sessionId = localStorage.getItem('ap-chat-session');
  if (!sessionId) {
    sessionId = 'sess-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('ap-chat-session', sessionId);
  }

  // --- Styles (charte aurelienpage : navy #0F1B2D, cyan #00B4D8, off-white) ---
  var css = ''
    + '.ap-chat-bulle{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;background:#00B4D8;border:none;cursor:pointer;box-shadow:0 8px 24px rgba(0,180,216,.4);display:flex;align-items:center;justify-content:center;z-index:9998;transition:transform .15s ease}'
    + '.ap-chat-bulle:hover{transform:translateY(-2px)}'
    + '.ap-chat-bulle svg{width:28px;height:28px;fill:#0F1B2D}'
    + '.ap-chat-panneau{position:fixed;bottom:96px;right:24px;width:360px;max-width:calc(100vw - 32px);height:520px;max-height:calc(100vh - 130px);background:#fff;border-radius:16px;box-shadow:0 20px 50px rgba(15,27,45,.3);display:none;flex-direction:column;overflow:hidden;z-index:9999;font-family:Inter,system-ui,sans-serif}'
    + '.ap-chat-panneau.est-ouvert{display:flex}'
    + '.ap-chat-entete{background:#0F1B2D;color:#F0F4F8;padding:16px 18px;font-family:"Space Grotesk",Inter,sans-serif}'
    + '.ap-chat-entete strong{display:block;font-size:15px;font-weight:600}'
    + '.ap-chat-entete span{font-size:12px;color:#00B4D8}'
    + '.ap-chat-fil{flex:1;overflow-y:auto;padding:16px;background:#F0F4F8;display:flex;flex-direction:column;gap:10px}'
    + '.ap-msg{max-width:80%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}'
    + '.ap-msg a{text-decoration:underline}'
    + '.ap-msg-bot{align-self:flex-start;background:#fff;color:#0F1B2D;border:1px solid #d7e0ea;border-bottom-left-radius:4px}'
    + '.ap-msg-bot a{color:#0077a3}'
    + '.ap-msg-user{align-self:flex-end;background:#0F1B2D;color:#F0F4F8;border-bottom-right-radius:4px}'
    + '.ap-msg-user a{color:#7ad8ee}'
    + '.ap-chat-pied{display:flex;gap:8px;padding:12px;border-top:1px solid #d7e0ea;background:#fff}'
    + '.ap-chat-pied input{flex:1;border:1px solid #d7e0ea;border-radius:10px;padding:10px 12px;font-size:13.5px;font-family:inherit;outline:none;color:#0F1B2D}'
    + '.ap-chat-pied input:focus{border-color:#00B4D8}'
    + '.ap-chat-pied button{background:#00B4D8;color:#0F1B2D;border:none;border-radius:10px;width:42px;cursor:pointer;display:flex;align-items:center;justify-content:center}'
    + '.ap-chat-pied button:disabled{opacity:.5;cursor:default}'
    + '.ap-chat-pied button svg{width:18px;height:18px;fill:#0F1B2D}'
    + '.ap-points{align-self:flex-start;background:#fff;border:1px solid #d7e0ea;border-radius:14px;padding:12px 14px}'
    + '.ap-points span{display:inline-block;width:6px;height:6px;margin:0 2px;background:#8B9BB4;border-radius:50%;animation:ap-pulse 1.2s infinite}'
    + '.ap-points span:nth-child(2){animation-delay:.2s}.ap-points span:nth-child(3){animation-delay:.4s}'
    + '@keyframes ap-pulse{0%,60%,100%{opacity:.3}30%{opacity:1}}';

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  var bulle = document.createElement('button');
  bulle.className = 'ap-chat-bulle';
  bulle.setAttribute('aria-label', 'Ouvrir le chat');
  bulle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>';

  var panneau = document.createElement('div');
  panneau.className = 'ap-chat-panneau';
  panneau.innerHTML = ''
    + '<div class="ap-chat-entete"><strong>Assistant - Aurélien Page</strong><span>SEO - SEA - GEO - IA</span></div>'
    + '<div class="ap-chat-fil" id="ap-fil"></div>'
    + '<form class="ap-chat-pied" id="ap-form">'
    + '<input id="ap-input" type="text" placeholder="Votre message..." autocomplete="off" />'
    + '<button type="submit" id="ap-send" aria-label="Envoyer"><svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></button>'
    + '</form>';

  document.body.appendChild(bulle);
  document.body.appendChild(panneau);

  var fil = panneau.querySelector('#ap-fil');
  var form = panneau.querySelector('#ap-form');
  var input = panneau.querySelector('#ap-input');
  var sendBtn = panneau.querySelector('#ap-send');
  var accueilAffiche = false;

  function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function liens(s) { return s.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'); }
  function ajouterMessage(texte, qui) {
    var div = document.createElement('div');
    div.className = 'ap-msg ap-msg-' + qui;
    div.innerHTML = liens(escapeHtml(texte));
    fil.appendChild(div);
    fil.scrollTop = fil.scrollHeight;
  }
  function pointsAttente(actif) {
    var existant = fil.querySelector('.ap-points');
    if (actif && !existant) {
      var p = document.createElement('div');
      p.className = 'ap-points';
      p.innerHTML = '<span></span><span></span><span></span>';
      fil.appendChild(p);
      fil.scrollTop = fil.scrollHeight;
    } else if (!actif && existant) { existant.remove(); }
  }

  bulle.addEventListener('click', function () {
    panneau.classList.toggle('est-ouvert');
    if (panneau.classList.contains('est-ouvert')) {
      if (!accueilAffiche) { ajouterMessage(ACCUEIL, 'bot'); accueilAffiche = true; }
      input.focus();
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var message = input.value.trim();
    if (!message) return;
    ajouterMessage(message, 'user');
    input.value = '';
    sendBtn.disabled = true;
    pointsAttente(true);

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message, sessionId: sessionId })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        pointsAttente(false);
        var reply = (data && (data.reply || data.output)) || "Désolé, je n'ai pas pu répondre. Écrivez-moi via aurelienpage.fr/contact";
        ajouterMessage(reply, 'bot');
      })
      .catch(function () {
        pointsAttente(false);
        ajouterMessage("Petit souci technique. Écrivez-moi via aurelienpage.fr/contact, je reviens vers vous vite.", 'bot');
      })
      .finally(function () { sendBtn.disabled = false; input.focus(); });
  });
})();
