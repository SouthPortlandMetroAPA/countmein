/* ════════════════════════════════════════════════════════════════════════
   CountMeIn — single global version constant.

   index.html loads this file via <script src="version.js"></script> before its
   inline script. The auto-update poller (pollForDeploy) fetches THIS file (not
   the HTML) and looks for the literal "APP_VERSION = '<target>'", so a deploy
   only needs to bump the line below.

   Deploy: 1) bump here, 2) git push, 3) poll the served version.js,
           4) UPDATE apa_core.apps SET version=$NEW WHERE app_name='CountMeIn'.
   (serve-then-bump — see reference_deploy.md.)
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '0.1';
