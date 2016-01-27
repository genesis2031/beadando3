#Feladatkezelő rendszer

##Követelmények:

1. Követelmények összegyűjtése

    + a rendszer felhasználóknak és a hozzájuk rendelt elvégzendő feladatok rögzítésére készült
    + megtekinthető a felvitt feladatok és felhasználók listája
    + a felhasználó módosíthatja az elemeket: újakat vehet fel, módosíthat ill. törölhet

2. Követelményanalízis
     + 1..N kapcsolatban lévő felhasználók és teendők
     + Egy személyhez több feladat is tartozhat
     + A felhasználók csak megtekinthetők, ill. törölhetők
     + Az elvégzendő feladatok megtekinthetők, módosíthatók és törölhetők
    

##Tervezés

    
1. Oldaltérkép
     
     + Feladatok
      - feladatok listjája
      - új feladat felvétele
      - meglévő feladat módosítása
      - meglévő feladat törlése
     
     + Felhasználók
      - felhasználók listjája
      - új felhasználó felvitele
      - meglévő felhasználó törlése

2.  Adatbázisterv
    
        ![Adatbázisterv](http://i.imgur.com/2IGRDVp.png)
        
3.  Szekvenciadiagram

        ![Szekvenciadiagram](http://i.imgur.com/w0DfUJa.png)
        
        
##Implementáció

1. Fejlesztői környezet:
    - Cloud9 webes IDE
    
2. Könyvtárstruktúra:
    - config: a waterline konfigurációja
    - controllers: vezérlők, folyamatok irányítása
    - models: adatok, modell definiálása
    - node_modules: node js-hez telepített modulok
    - public
    - viewmodels: nézetmodel
    - views: az egyes oldalak kinézetét adja meg
 

##Tesztelés

