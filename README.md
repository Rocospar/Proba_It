## Serverul de frontend cat si cel de backend se pornesc simultan prin utilizarea comenzii: "npm start"

### FRONTEND

- In folderul src avem foldere:
  - Folderul: "assets" care contine imagini (deocamdata poza de la profil), iar aici ar fi fost stocate imaginile pe care utilizatori si le-ar fi uploadat pe site (profile picture sau posts).
  - Folderul: "components" acesta contine toate paginile web (ex: home,profile,login etc).
  - Folderul: "models" care (va contine) formatul obiectelor (ex: Useri cu n campuri,).Acesta ar fi fost folosite in componente, pentru a nu fi intializate de fiecare data.
  - Folderul: "services" care (va contine) servicii/functii care se folosesc pe mai multe pagini.

- In app.jsx si router.jsx avem logica principala a frontendului.
  - "app.jsx" se ocupa cu functiile de login / logout.
  - "router.jsx" se ocupa de redirectionarea paginilor web.
  - "app.css" contine toate elementele de design folosite in stilizarea paginilor, cat si animatii.

---

### BACKEND

- In folderul pentru backend avem file-ul "index.js" unde este gestionata logica pentru user:
  - Conectarea cu baza de date.
  - Crearea unei "scheme" pentru utilizator (username, password, email, etc).
  - Realizarea "Login"-ului (verifica daca username-ul si parola sunt identice cu cele din baza de date).
  - Verificarea sesiunii utilizatorului (verificarea cookie-ului).
  - Realizarea "Logout"-ului
  - Realizarea "Register"-ului
  - Realizarea editarii profilului utilizatorului

### P.S. Work in progress:
- In pagina "Posts", butonul POST este implementat dar nu face nimic.
- In pagina "Home", nu exista feed.
- In pagina "Profile", nu poti sa-ti editezi poza de profil.
- Mesaje mai estetice.
- Text Styling mai bun.