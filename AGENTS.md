# barakags.hr — upute za agente

Next.js 15 (App Router) + Docker + Traefik. Jezici: HR, EN, DE.

## Pokretanje okruženja

Koristi **samo** skripte u korijenu repozitorija — ne pokreći `npm run dev` ili `docker compose` ručno osim ako korisnik to eksplicitno traži.

### Development — `./dev.sh`

```bash
./dev.sh
```

- Compose: `docker-compose.dev.yml`
- Dockerfile: `Dockerfile`
- Image: `barakags-hr-web:dev`
- Server: `next dev` s hot reloadom
- Bind mount izvornog koda (`.:/app`); promjene u kodu odmah su vidljive
- Koristi se za lokalni razvoj i testiranje promjena

### Production — `./prod.sh`

```bash
./prod.sh
```

- Compose: `docker-compose.prod.yml`
- Dockerfile: `Dockerfile.prod`
- Image: `barakags-hr-web:prod`
- Server: Next.js standalone (`node server.js`)
- Potreban rebuild nakon promjena koda ili statičkih asseta — **nakon svake značajnije izmjene u produkciji pokreni `./prod.sh`**
- Koristi se za live site na https://barakags.hr

### Kada što koristiti

| Situacija | Akcija |
|-----------|--------|
| Razvoj, isprobavanje promjena | `./dev.sh` |
| Deploy na live site | `./prod.sh` |
| Promjena `.env` (SMTP itd.) | Restart odgovarajućeg okruženja (`./dev.sh` ili `./prod.sh`) |
| Promjena slika u `public/` | Dev: automatski; prod: `./prod.sh` |

Oba okruženja koriste isti container name (`barakags_hr_web`) — prebacivanje dev ↔ prod zamjenjuje trenutno pokrenuti container.

## Logovi i status

```bash
docker compose -f docker-compose.dev.yml ps    # dev
docker compose -f docker-compose.prod.yml ps   # prod

docker compose -f docker-compose.dev.yml logs -f web
docker compose -f docker-compose.prod.yml logs -f web
```

Site: https://barakags.hr/hr (ili `/en`, `/de`).

## Konfiguracija

- `.env` — SMTP i ostale tajne (ne commitati)
- Traefik mreža `proxy` mora postojati (external network)
- Prijavna forma: `app/api/apply/route.ts` → `office@barakags.hr` preko SMTP iz `.env`

## Git

- Commit i push **samo** kad korisnik eksplicitno zatraži
- Nikad ne commitati `.env`
