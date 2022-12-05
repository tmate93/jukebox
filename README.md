# Projektmunka II - Jukebox
Projekt tagjai:  
Recska Roman - F5EGYV  
Tóth Norbert - BAPXNS  
Tranta Máté  - DB8LSM  
Konzulens: Csapó Ádám  

## A projekt leírása:
Online „Wurlitzer Jukebox” megvalósítása.
A „Jukebox” müködését tekintve teljesen megfelelne a fizikai másának annyi eltéréssel, hogy a zeneszámok lejátszásához szükséges krediteket nem egy fizikai gépbe dolbáják a felhasználók, hanem azt bankkártyás vagy más online pénzküldő szolgáltatáson keresztül tudják használni. A felhasználóknak módjukban áll a számok belehallgatásába, melyért nem kell kreditet fizetniük. A szolgáltatás egy stílusos és felhasználóbarát oldalon foglalna helyet.

Specifikációk:
Raspberry Pi 3 Model A+ (honlap: https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/)  
Broadcom BCM2837B0, Cortex-A53 (ARMv8) 64-bit SoC @ 1.4GHz  
512MB LPDDR2 SDRAM  
2.4GHz and 5GHz IEEE 802.11.b/g/n/ac wireless LAN, Bluetooth 4.2/BLE  
Full-size HDMI  
Single USB 2.0 ports  
4-pole stereo output and composite video port  
Micro SD port (12GB SD kártyával)  
  
Adatbázis: MariaDB, melyet a phpMyAdmin 5.2.0 segítségével lehet konfigurálni.
A holnap az Angular keretrendszerben készült.
 
## Használat
A gyakorlatban a Jukebox használatához a Raspberry-t egy kijelzöre kell kötni, melyet a klasszikus egér+billentyüzet kombóval lehet manipulálni. A hangrendszer a sztereó kimenetre van kötve. Ez a felállítás egy költséghatékony megoldást jelenthet a drága, robosztus Jukebox gépekhez képest, melyek drágák és nagy helyet foglalnak el. A felhasznól egy terminálok keresztül tudnak kártyás fizetéssel token-eket vásárolni, melyekkel számokat tudnak lejátszani. Ez a projekt jelen formájában mint proof-of-concept nem használ kártyás terminált, a kreditvásárlás jelenleg a bejelentkezés utáni fö oldalon található + gombbal van szimulálva.  
Az adminisztrátor a phpMyAdmin segítségével tudja az adatbázist kezelni, amely tárolja a bejelentkezési név, jelszó mellett a kreditek számát is.  
A zeneszámokat a jukebox/src/assets/music/ mappa tartalmazza, ha új számot kívánunk hozzáadni vagy egyet eltávolítani, úgy azt ezen mappa összeállításával lehet kivitelezni.  
