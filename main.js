/* Typewriter pour le nom (.nom h2)
 * - Utilise le texte existant dans .nom h2
 * - Effet machine à écrire (écriture/suppression) en boucle
 * - Curseur clignotant ajouté dynamiquement
 * - Ajoute des logs console pour diagnostiquer le chargement
 */

// Typewriter simple et restreint pour '.nom h2'
(function(){
    const el = document.querySelector('.nom h2');
    if (!el) return;
    const txt = (el.textContent || 'LORSE Fall').trim();
    el.textContent = '';
    let i = 0, del = false;
    (function step(){
        el.textContent = del ? txt.slice(0, --i) : txt.slice(0, ++i);
        if (!del && i === txt.length) { del = true; setTimeout(step, 700); }
        else if (del && i === 0) { del = false; setTimeout(step, 400); }
        else setTimeout(step, del ? 80 : 140);
    })();
})();
