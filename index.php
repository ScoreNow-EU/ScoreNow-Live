<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css"  href="style.css">
</head>
<body style="background-color: #eeeeee; max-height: 100%;">
 
  
  <!-- Use any element to open/show the overlay navigation menu -->

    <div id="spielerauswahl" style="display:none;">
        <div class="navbar"> <!--Top Bar-->
            <div class="grid">
                <div onclick="sidemenuopen()" class="griditem" style="margin-top: 12px;">
                    <img src="Hamburger_icon.svg.png"  width="50px" height="50px">
                </div>
                
                <div class="teammenu teammenuselected griditem" onclick="menuheim()" id="navheim">
                    <h4>Heim</h4>
                    <h5 id="hometeamname1">Alpla HC Hard</h5>
                </div>
                <div class="teammenu griditem " id="navgast" onclick="menuguest()">
                    <h4>Gast</h4>
                    <h5 id="guestteamname1">Bregrenz Handball</h5>
                </div>
                <div class="griditem">

                </div>
                <div class="dropdown griditem" id="dropdowna">
                    <select class="btn btn-kight drpdwn dropdown-toggle" name="dog-names" id="dog-names">
                        <option class="drpdwn dropdown-item" style="background-color: var(--red);" value="red">Rot</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--orange);" value="orange">Orange</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--yellow);" value="yellow">Gelb</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--green);" value="green">Grün</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--cyan);" value="cyan">Cyan</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--blue);" value="blue">Blau</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--purple);" value="purple">Lila</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--pink);" value="pink">Pink</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--gray-dark);" value="black">Schwarz</option>
                        <option class="drpdwn dropdown-item" style="background-color: var(--light); color: var(--gray-dark)" value="white">Weiß</option>
                    </select>    
                  </div>
                  <div class="dropdown griditem" id="dropdowna">
                      <select class="btn btn-kight drpdwn dropdown-toggle" name="dog-names" id="dog-names2">
                          <option class="drpdwn dropdown-item" style="background-color: var(--red);" value="red">Rot</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--orange);" value="orange">Orange</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--yellow);" value="yellow">Gelb</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--green);" value="green">Grün</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--cyan);" value="cyan">Cyan</option>
                          <option class="drpdwn dropdown-item " selected style="background-color: var(--blue);" value="blue">Blau</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--purple);" value="purple">Lila</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--pink);" value="pink">Pink</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--gray-dark);" value="black">Schwarz</option>
                          <option class="drpdwn dropdown-item" style="background-color: var(--light); color: var(--gray-dark)" value="white">Weiß</option>
                      </select>    
                    </div>
        </div>
        <div class="playergrid" id="gridheim">
            <div class="playergriditem playercard" id="1h1" onclick="openNav('h1')"> <!--Spieler nummer 1-->
                <div class="playercardtop" id="2h1">
                    <div class="playercardlastname" id="3h1">Nachname</div>
                    <div class="playercardnr" id="4h1">1</div>
                </div>
                <img class="passbild" id="5h1" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h1">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h2" onclick="openNav('h2')"> <!--Spieler nummer 2-->
                <div class="playercardtop" id="2h2">
                    <div class="playercardlastname" id="3h2">Nachname</div>
                    <div class="playercardnr" id="4h2">2</div>
                </div>
                <img class="passbild" id="5h2" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h2">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h3" onclick="openNav('h3')"> <!--Spieler nummer 3-->
                <div class="playercardtop" id="2h3">
                    <div class="playercardlastname" id="3h3">Nachname</div>
                    <div class="playercardnr" id="4h3">3</div>
                </div>
                <img class="passbild" id="5h3" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h3">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h4" onclick="openNav('h4')"> <!--Spieler nummer 4-->
                <div class="playercardtop" id="2h4">
                    <div class="playercardlastname" id="3h4">Nachname</div>
                    <div class="playercardnr" id="4h4">4</div>
                </div>
                <img class="passbild" id="5h4" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h4">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h5" onclick="openNav('h5')"> <!--Spieler nummer 5-->
                <div class="playercardtop" id="2h5">
                    <div class="playercardlastname" id="3h5">Nachname</div>
                    <div class="playercardnr" id="4h5">5</div>
                </div>
                <img class="passbild" id="5h5" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h5">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h6" onclick="openNav('h6')"> <!--Spieler nummer 6-->
                <div class="playercardtop" id="2h6">
                    <div class="playercardlastname" id="3h6">Nachname</div>
                    <div class="playercardnr" id="4h6">6</div>
                </div>
                <img class="passbild" id="5h6" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h6">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h7" onclick="openNav('h7')"> <!--Spieler nummer 7-->
                <div class="playercardtop" id="2h7">
                    <div class="playercardlastname" id="3h7">Nachname</div>
                    <div class="playercardnr" id="4h7">7</div>
                </div>
                <img class="passbild" id="5h7" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h7">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h8" onclick="openNav('h8')"> <!--Spieler nummer 8-->
                <div class="playercardtop" id="2h8">
                    <div class="playercardlastname" id="3h8">Nachname</div>
                    <div class="playercardnr" id="4h8">8</div>
                </div>
                <img class="passbild" id="5h8" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h8">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h9" onclick="openNav('h9')"> <!--Spieler nummer 9-->
                <div class="playercardtop" id="2h9">
                    <div class="playercardlastname" id="3h9">Nachname</div>
                    <div class="playercardnr" id="4h9">9</div>
                </div>
                <img class="passbild" id="5h9" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h9">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h10" onclick="openNav('h10')"> <!--Spieler nummer 10-->
                <div class="playercardtop" id="2h10">
                    <div class="playercardlastname" id="3h10">Nachname</div>
                    <div class="playercardnr" id="4h10">10</div>
                </div>
                <img class="passbild" id="5h10" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h10">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h11" onclick="openNav('h11')"> <!--Spieler nummer 11-->
                <div class="playercardtop" id="2h11">
                    <div class="playercardlastname" id="3h11">Nachname</div>
                    <div class="playercardnr" id="4h11">11</div>
                </div>
                <img class="passbild" id="5h11" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h11">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h12" onclick="openNav('h12')"> <!--Spieler nummer 12-->
                <div class="playercardtop" id="2h12">
                    <div class="playercardlastname" id="3h12">Nachname</div>
                    <div class="playercardnr" id="4h12">12</div>
                </div>
                <img class="passbild" id="5h12" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h12">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h13" onclick="openNav('h13')"> <!--Spieler nummer 13-->
                <div class="playercardtop" id="2h13">
                    <div class="playercardlastname" id="3h13">Nachname</div>
                    <div class="playercardnr" id="4h13">13</div>
                </div>
                <img class="passbild" id="5h13" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h13">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h14" onclick="openNav('h14')"> <!--Spieler nummer 14-->
                <div class="playercardtop" id="2h14">
                    <div class="playercardlastname" id="3h14">Nachname</div>
                    <div class="playercardnr" id="4h14">14</div>
                </div>
                <img class="passbild" id="5h14" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6h14">Vorname</div>
                </div>
            </div>

            <div class="playergriditem"></div>
            
            <div class="playergriditem playercard" id="1ha" onclick="openNav('ha')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2ha">
                    <div class="playercardlastname" id="3ha">Nachname</div>
                    <div class="playercardnr" id="4ha">A</div>
                </div>
                <img class="passbild" id="5ha" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6ha">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1hb" onclick="openNav('hb')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2hb">
                    <div class="playercardlastname" id="3hb">Nachname</div>
                    <div class="playercardnr" id="4hb">B</div>
                </div>
                <img class="passbild" id="5hb" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6hb">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1hc" onclick="openNav('hc')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2hc">
                    <div class="playercardlastname" id="3hc">Nachname</div>
                    <div class="playercardnr" id="4hc">C</div>
                </div>
                <img class="passbild" id="5hc" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6hc">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1hd" onclick="openNav('hd')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2hd">
                    <div class="playercardlastname" id="3hd">Nachname</div>
                    <div class="playercardnr" id="4hd"></div>
                </div>
                <img class="passbild" id="5hd" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6hd">Vorname</div>
                </div>
            </div>
            <div class="playergriditem"></div>
            <form>
                <input type="password" class="form-control" placeholder="PIN" aria-label="PIN" id="homepin1" aria-describedby="basic-addon1">
            </form>
            <button type="button" class="btn btn-primary" style="width: 17vh;" id="homepinbutton1" onclick="pinInsert('home1')">Unterschreiben</button>
            <button type="button" class="btn btn-danger"id="homepincancel1" style="display: none;" onclick="pinInsert('cancelhome1')">Unterschrift zurückziehen</button>
        </div>









        
        <div class="playergrid"  id="gridgast">
            <div class="playergriditem playercard" id="1g1" onclick="openNav('g1')"> <!--Spieler nummer 1-->
                <div class="playercardtop" id="2g1">
                    <div class="playercardlastname" id="3g1">Nachname</div>
                    <div class="playercardnr" id="4g1">1</div>
                </div>
                <img class="passbild" id="5g1" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g1">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g2" onclick="openNav('g2')"> <!--Spieler nummer 2-->
                <div class="playercardtop" id="2g2">
                    <div class="playercardlastname" id="3g2">Nachname</div>
                    <div class="playercardnr" id="4g2">2</div>
                </div>
                <img class="passbild" id="5g2" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g2">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g3" onclick="openNav('g3')"> <!--Spieler nummer 3-->
                <div class="playercardtop" id="2g3">
                    <div class="playercardlastname" id="3g3">Nachname</div>
                    <div class="playercardnr" id="4g3">3</div>
                </div>
                <img class="passbild" id="5g3" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g3">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g4" onclick="openNav('g4')"> <!--Spieler nummer 4-->
                <div class="playercardtop" id="2g4">
                    <div class="playercardlastname" id="3g4">Nachname</div>
                    <div class="playercardnr" id="4g4">4</div>
                </div>
                <img class="passbild" id="5g4" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g4">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g5" onclick="openNav('g5')"> <!--Spieler nummer 5-->
                <div class="playercardtop" id="2g5">
                    <div class="playercardlastname" id="3g5">Nachname</div>
                    <div class="playercardnr" id="4g5">5</div>
                </div>
                <img class="passbild" id="5g5" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g5">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g6" onclick="openNav('g6')"> <!--Spieler nummer 6-->
                <div class="playercardtop" id="2g6">
                    <div class="playercardlastname" id="3g6">Nachname</div>
                    <div class="playercardnr" id="4g6">6</div>
                </div>
                <img class="passbild" id="5h6" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g6">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g7" onclick="openNav('g7')"> <!--Spieler nummer 7-->
                <div class="playercardtop" id="2g7">
                    <div class="playercardlastname" id="3g7">Nachname</div>
                    <div class="playercardnr" id="4g7">7</div>
                </div>
                <img class="passbild" id="5g7" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g7">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g8" onclick="openNav('g8')"> <!--Spieler nummer 8-->
                <div class="playercardtop" id="2g8">
                    <div class="playercardlastname" id="3g8">Nachname</div>
                    <div class="playercardnr" id="4g8">8</div>
                </div>
                <img class="passbild" id="5g8" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g8">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g9" onclick="openNav('g9')"> <!--Spieler nummer 9-->
                <div class="playercardtop" id="2g9">
                    <div class="playercardlastname" id="3g9">Nachname</div>
                    <div class="playercardnr" id="4g9">9</div>
                </div>
                <img class="passbild" id="5g9" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g9">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1h10" onclick="openNav('g10')"> <!--Spieler nummer 10-->
                <div class="playercardtop" id="2g10">
                    <div class="playercardlastname" id="3g10">Nachname</div>
                    <div class="playercardnr" id="4g10">10</div>
                </div>
                <img class="passbild" id="5g10" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g10">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g11" onclick="openNav('g11')"> <!--Spieler nummer 11-->
                <div class="playercardtop" id="2g11">
                    <div class="playercardlastname" id="3g11">Nachname</div>
                    <div class="playercardnr" id="4g11">11</div>
                </div>
                <img class="passbild" id="5g11" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g11">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g12" onclick="openNav('g12')"> <!--Spieler nummer 12-->
                <div class="playercardtop" id="2g12">
                    <div class="playercardlastname" id="3g12">Nachname</div>
                    <div class="playercardnr" id="4g12">12</div>
                </div>
                <img class="passbild" id="5g12" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g12">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g13" onclick="openNav('g13')"> <!--Spieler nummer 13-->
                <div class="playercardtop" id="2g13">
                    <div class="playercardlastname" id="3g13">Nachname</div>
                    <div class="playercardnr" id="4g13">13</div>
                </div>
                <img class="passbild" id="5g13" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g13">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1g14" onclick="openNav('g14')"> <!--Spieler nummer 14-->
                <div class="playercardtop" id="2g14">
                    <div class="playercardlastname" id="3g14">Nachname</div>
                    <div class="playercardnr" id="4g14">14</div>
                </div>
                <img class="passbild" id="5g14" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6g14">Vorname</div>
                </div>
            </div>
            <div class="playergriditem"></div>
            
            <div class="playergriditem playercard" id="1ga" onclick="openNav('ga')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2ga">
                    <div class="playercardlastname" id="3ga">Nachname</div>
                    <div class="playercardnr" id="4ga">A</div>
                </div>
                <img class="passbild" id="5ga" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6ga">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1gb" onclick="openNav('gb')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2gb">
                    <div class="playercardlastname" id="3gb">Nachname</div>
                    <div class="playercardnr" id="4gb">B</div>
                </div>
                <img class="passbild" id="5gb" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6gb">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1gc" onclick="openNav('gc')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2gc">
                    <div class="playercardlastname" id="3gc">Nachname</div>
                    <div class="playercardnr" id="4gc">C</div>
                </div>
                <img class="passbild" id="5gc" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6gc">Vorname</div>
                </div>
            </div>

            
            <div class="playergriditem playercard" id="1gd" onclick="openNav('gd')"> <!--Spieler nummer 1-->
                <div class="playercardtop coachcard" id="2gd">
                    <div class="playercardlastname" id="3gd">Nachname</div>
                    <div class="playercardnr" id="4gd"></div>
                </div>
                <img class="passbild" id="5gd" src="./default_passbild.png"></img>
                
                <div class="playercardbottom">
                    <div class="playercardfirstname" id="6gd">Vorname</div>
                </div>
            </div>
            <div class="playergriditem"></div>
            <form>
                <input type="password" class="form-control" placeholder="PIN" aria-label="PIN" id="guestpin1" aria-describedby="basic-addon1">
            </form>
            <button type="button" class="btn btn-primary" style="width: 17vh;" id="guestpinbutton1" onclick="pinInsert('guest1')">Unterschreiben</button>
            <button type="button" class="btn btn-danger"id="guestpincancel1" style="display: none;" onclick="pinInsert('cancelguest1')">Unterschrift zurückziehen</button>

        </div>
    </div>
    
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast2" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <div class="rounded toast-teamcolor" id="toastTeamcolor2"></div>
            <strong class="me-auto" id="toastHead2"> Neues Event - TuS Wettbergen</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>

    <div id="spielprotokoll" style="display: block; max-height: 100%; min-height: 50%;">
        <div class="grid-container item1b">
            <div class="navbar item1b"> <!--Top Bar-->
                <div class="grid grid2 item1b" style="margin-top:5px">
                    <div onclick="sidemenuopen()" class="griditem" style="margin-top: -14px; margin-left: -143px;">
                        <img src="Hamburger_icon.svg.png"  width="50px" height="50px">
                    </div>
                    <div class="item1a griditem" id="hometeamname2">
                        Alpla HC Hard
                    </div>
                    <div class="item1a griditem" id="scorename2">
                        0 : 0 (0:0)
                    </div>
                    <div class="item1a griditem" id="guestteamname2">
                        Bregrenz Handball
                    </div>
            </div>
                    
            </div>
            <div class="item3">

                <div class="item3a">
                    <button type="button" id="prottopgoal" class="btn btn-outline-secondary btn-color trans">Tor</button>
                </div>
                <div class="item3a">
                    <button type="button" id="prottopmit" class="btn btn-outline-secondary btn-color trans">7m mit Tor</button>
                </div>
                <div class="item3a">
                    <button type="button" id="prottopohne" class="btn btn-outline-secondary btn-color trans">7m ohne Tor</button>
                </div>
                <div class="item3a"> </div>
                
                <div class="item3a">
                    <button type="button" id="prottopyc" class="btn btn-outline-secondary btn-color bverw trans">Verwarnung</button>
                </div>
                <div class="item3a">
                    <button type="button" id="prottop2m" class="btn btn-outline-secondary btn-color b2min trans">2 Minuten</button>
                </div>
                <div class="item3a">
                </div>
                <div class="item3a"> </div>
                
                <div class="item3a">
                    <button type="button" id="prottopob" class="btn btn-outline-secondary btn-color bred trans">ohne Bericht</button>
                </div>
                <div class="item3a">
                    <button type="button" id="prottopmb" class="btn btn-outline-secondary btn-color bblue trans">mit Bericht</button>
                </div>
            </div>  
            <div class="item6">
                <div class="item6a tto" >
                    <button type="button" id="ttoh1" class="btn btn-success">T1</button>
                </div>
                <div class="item6a tto" style="margin-left: -100px;">
                    <button type="button" id="ttoh2" class="btn btn-success">T2</button>
                </div>
                <div class="item6a tto" style="margin-left: -200px;">
                    <button type="button" id="ttoh3" class="btn btn-success ttono">T3</button>
                </div>
                <div class="item6a" id="hometeamname3">Alpla HC Hard</div>
                <div class="item6a item6b" id="scorename3">0 : 0</div>
                <div class="item6a" id="guestteamname3">Bregrenz Handball</div>
                <div class="item6a tto">
                    <button type="button" id="ttog1" style="margin-left: 200px;" class="btn btn-success">T1</button>
                </div>
                <div class="item6a tto" >
                    <button type="button" id="ttog2" style="margin-left: 100px;" class="btn btn-success">T2</button>
                </div>
                <div class="item6a tto">
                    <button type="button" id="ttog3" class="btn btn-success ttono">T3</button>
                </div>
            </div>
            <div class="item4">
                <div class="item4a" id="pr1h1"><div class="item4b" id="pr2h1">Nachname<div class="item4c" id="pr3h1"><div id="prych1" class="smallyc"></div><div id="pr2mha1" class="small2m"></div><div id="pr2mhb1" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc1" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch1" class="smallrc"></div><div id="prbch1" class="smallbc"></div>1</div></div></div>
                <div class="item4a" id="pr1h2"><div class="item4b" id="pr2h2">Nachname<div class="item4c" id="pr3h2"><div id="prych2" class="smallyc"></div><div id="pr2mha2" class="small2m"></div><div id="pr2mhb2" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc2" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch2" class="smallrc"></div><div id="prbch2" class="smallbc"></div>2</div></div></div>
                <div class="item4a" id="pr1h3"><div class="item4b" id="pr2h3">Nachname<div class="item4c" id="pr3h3"><div id="prych3" class="smallyc"></div><div id="pr2mha3" class="small2m"></div><div id="pr2mhb3" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc3" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch3" class="smallrc"></div><div id="prbch3" class="smallbc"></div>3</div></div></div>
                <div class="item4a" id="pr1h4"><div class="item4b" id="pr2h4">Nachname<div class="item4c" id="pr3h4"><div id="prych4" class="smallyc"></div><div id="pr2mha4" class="small2m"></div><div id="pr2mhb4" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc4" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch4" class="smallrc"></div><div id="prbch4" class="smallbc"></div>4</div></div></div>
                <div class="item4a" id="pr1h5"><div class="item4b" id="pr2h5">Nachname<div class="item4c" id="pr3h5"><div id="prych5" class="smallyc"></div><div id="pr2mha5" class="small2m"></div><div id="pr2mhb5" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc5" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch5" class="smallrc"></div><div id="prbch5" class="smallbc"></div>5</div></div></div>
                <div class="item4a" id="pr1h6"><div class="item4b" id="pr2h6">Nachname<div class="item4c" id="pr3h6"><div id="prych6" class="smallyc"></div><div id="pr2mha6" class="small2m"></div><div id="pr2mhb6" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc6" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch6" class="smallrc"></div><div id="prbch6" class="smallbc"></div>6</div></div></div>
                <div class="item4a" id="pr1h7"><div class="item4b" id="pr2h7">Nachname<div class="item4c" id="pr3h7"><div id="prych7" class="smallyc"></div><div id="pr2mha7" class="small2m"></div><div id="pr2mhb7" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc7" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch7" class="smallrc"></div><div id="prbch7" class="smallbc"></div>7</div></div></div>
                <div class="item4a" id="pr1h8"><div class="item4b" id="pr2h8">Nachname<div class="item4c" id="pr3h8"><div id="prych8" class="smallyc"></div><div id="pr2mha8" class="small2m"></div><div id="pr2mhb8" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc8" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch8" class="smallrc"></div><div id="prbch8" class="smallbc"></div>8</div></div></div>
                <div class="item4a" id="pr1h9"><div class="item4b" id="pr2h9">Nachname<div class="item4c" id="pr3h9"><div id="prych9" class="smallyc"></div><div id="pr2mha9" class="small2m"></div><div id="pr2mhb9" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc9" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch9" class="smallrc"></div><div id="prbch9" class="smallbc"></div>9</div></div></div>
                <div class="item4a" id="pr1h10"><div class="item4b" id="pr2h10">Nachname<div class="item4c" id="pr3h10"><div id="prych10" class="smallyc"></div><div id="pr2mha10" class="small2m"></div><div id="pr2mhb10" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc10" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch10" class="smallrc"></div><div id="prbch10" class="smallbc"></div>10</div></div></div>
                <div class="item4a" id="pr1h11"><div class="item4b" id="pr2h11">Nachname<div class="item4c" id="pr3h11"><div id="prych11" class="smallyc"></div><div id="pr2mha11" class="small2m"></div><div id="pr2mhb11" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc11" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch11" class="smallrc"></div><div id="prbch11" class="smallbc"></div>11</div></div></div>
                <div class="item4a" id="pr1h12"><div class="item4b" id="pr2h12">Nachname<div class="item4c" id="pr3h12"><div id="prych12" class="smallyc"></div><div id="pr2mha12" class="small2m"></div><div id="pr2mhb12" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc12" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch12" class="smallrc"></div><div id="prbch12" class="smallbc"></div>12</div></div></div>
                <div class="item4a" id="pr1h13"><div class="item4b" id="pr2h13">Nachname<div class="item4c" id="pr3h13"><div id="prych13" class="smallyc"></div><div id="pr2mha13" class="small2m"></div><div id="pr2mhb13" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc13" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch13" class="smallrc"></div><div id="prbch13" class="smallbc"></div>13</div></div></div>
                <div class="item4a" id="pr1h14"><div class="item4b" id="pr2h14">Nachname<div class="item4c" id="pr3h14"><div id="prych14" class="smallyc"></div><div id="pr2mha14" class="small2m"></div><div id="pr2mhb14" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mhc14" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrch14" class="smallrc"></div><div id="prbch14" class="smallbc"></div>14</div></div></div>
                <div class="item4d"></div>
                <div class="item4d"></div>
                <div class="item4a coachcard coachcard2" id="pr1ha"><div class="item4b" id="pr2ha">Nachname<div class="item4c" id="pr3ha"><div id="prycha" class="smallyc"></div><div id="pr2mha" class="small2m"></div><div id="prrcha" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbcha" class="smallbc" style="margin-left: -7.6vh;"></div>A</div></div></div>
                <div class="item4a coachcard coachcard2" id="pr1hb"><div class="item4b" id="pr2hb">Nachname<div class="item4c" id="pr3hb"><div id="prychb" class="smallyc"></div><div id="pr2mhb" class="small2m"></div><div id="prrchb" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbchb" class="smallbc" style="margin-left: -7.6vh;"></div>B</div></div></div>
                <div class="item4a coachcard coachcard2" id="pr1hc"><div class="item4b" id="pr2hc">Nachname<div class="item4c" id="pr3hc"><div id="prychc" class="smallyc"></div><div id="pr2mhc" class="small2m"></div><div id="prrchc" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbchc" class="smallbc" style="margin-left: -7.6vh;"></div>C</div></div></div>
                <div class="item4a coachcard coachcard2" id="pr1hd"><div class="item4b" id="pr2hd">Nachname<div class="item4c" id="pr3hd"><div id="prychd" class="smallyc"></div><div id="pr2mhd" class="small2m"></div><div id="prrchd" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbchd" class="smallbc" style="margin-left: -7.6vh;"></div>D</div></div></div>
            </div>
            <div class="item5">
                

                <div class="item4a" id="pr1g1"><div class="item4b" id="pr2g1">Nachname<div class="item4c" id="pr3g1"><div id="prycg1" class="smallyc"></div><div id="pr2mga1" class="small2m"></div><div id="pr2mgb1" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc1" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg1" class="smallrc"></div><div id="prbcg1" class="smallbc"></div>1</div></div></div>
                <div class="item4a" id="pr1g2"><div class="item4b" id="pr2g2">Nachname<div class="item4c" id="pr3g2"><div id="prycg2" class="smallyc"></div><div id="pr2mga2" class="small2m"></div><div id="pr2mgb2" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc2" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg2" class="smallrc"></div><div id="prbcg2" class="smallbc"></div>2</div></div></div>
                <div class="item4a" id="pr1g3"><div class="item4b" id="pr2g3">Nachname<div class="item4c" id="pr3g3"><div id="prycg3" class="smallyc"></div><div id="pr2mga3" class="small2m"></div><div id="pr2mgb3" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc3" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg3" class="smallrc"></div><div id="prbcg3" class="smallbc"></div>3</div></div></div>
                <div class="item4a" id="pr1g4"><div class="item4b" id="pr2g4">Nachname<div class="item4c" id="pr3g4"><div id="prycg4" class="smallyc"></div><div id="pr2mga4" class="small2m"></div><div id="pr2mgb4" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc4" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg4" class="smallrc"></div><div id="prbcg4" class="smallbc"></div>4</div></div></div>
                <div class="item4a" id="pr1g5"><div class="item4b" id="pr2g5">Nachname<div class="item4c" id="pr3g5"><div id="prycg5" class="smallyc"></div><div id="pr2mga5" class="small2m"></div><div id="pr2mgb5" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc5" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg5" class="smallrc"></div><div id="prbcg5" class="smallbc"></div>5</div></div></div>
                <div class="item4a" id="pr1g6"><div class="item4b" id="pr2g6">Nachname<div class="item4c" id="pr3g6"><div id="prycg6" class="smallyc"></div><div id="pr2mga6" class="small2m"></div><div id="pr2mgb6" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc6" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg6" class="smallrc"></div><div id="prbcg6" class="smallbc"></div>6</div></div></div>
                <div class="item4a" id="pr1g7"><div class="item4b" id="pr2g7">Nachname<div class="item4c" id="pr3g7"><div id="prycg7" class="smallyc"></div><div id="pr2mga7" class="small2m"></div><div id="pr2mgb7" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc7" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg7" class="smallrc"></div><div id="prbcg7" class="smallbc"></div>7</div></div></div>
                <div class="item4a" id="pr1g8"><div class="item4b" id="pr2g8">Nachname<div class="item4c" id="pr3g8"><div id="prycg8" class="smallyc"></div><div id="pr2mga8" class="small2m"></div><div id="pr2mgb8" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc8" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg8" class="smallrc"></div><div id="prbcg8" class="smallbc"></div>8</div></div></div>
                <div class="item4a" id="pr1g9"><div class="item4b" id="pr2g9">Nachname<div class="item4c" id="pr3g9"><div id="prycg9" class="smallyc"></div><div id="pr2mga9" class="small2m"></div><div id="pr2mgb9" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc9" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg9" class="smallrc"></div><div id="prbcg9" class="smallbc"></div>9</div></div></div>
                <div class="item4a" id="pr1g10"><div class="item4b" id="pr2g10">Nachname<div class="item4c" id="pr3g10"><div id="prycg10" class="smallyc"></div><div id="pr2mga10" class="small2m"></div><div id="pr2mgb10" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc10" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg10" class="smallrc"></div><div id="prbcg10" class="smallbc"></div>10</div></div></div>
                <div class="item4a" id="pr1g11"><div class="item4b" id="pr2g11">Nachname<div class="item4c" id="pr3g11"><div id="prycg11" class="smallyc"></div><div id="pr2mga11" class="small2m"></div><div id="pr2mgb11" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc11" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg11" class="smallrc"></div><div id="prbcg11" class="smallbc"></div>11</div></div></div>
                <div class="item4a" id="pr1g12"><div class="item4b" id="pr2g12">Nachname<div class="item4c" id="pr3g12"><div id="prycg12" class="smallyc"></div><div id="pr2mga12" class="small2m"></div><div id="pr2mgb12" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc12" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg12" class="smallrc"></div><div id="prbcg12" class="smallbc"></div>12</div></div></div>
                <div class="item4a" id="pr1g13"><div class="item4b" id="pr2g13">Nachname<div class="item4c" id="pr3g13"><div id="prycg13" class="smallyc"></div><div id="pr2mga13" class="small2m"></div><div id="pr2mgb13" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc13" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg13" class="smallrc"></div><div id="prbcg13" class="smallbc"></div>13</div></div></div>
                <div class="item4a" id="pr1g14"><div class="item4b" id="pr2g14">Nachname<div class="item4c" id="pr3g14"><div id="prycg14" class="smallyc"></div><div id="pr2mga14" class="small2m"></div><div id="pr2mgb14" class="small2m" style="margin-left: -9.6vh;"></div><div id="pr2mgc14" class="small2m" style="margin-left: -7.6vh;"></div><div id="prrcg14" class="smallrc"></div><div id="prbcg14" class="smallbc"></div>14</div></div></div>
                <div class="item4d"></div>
                <div class="item4d"></div>
                <div class="item4a coachcard coachcard2" id="pr1ga"><div class="item4b" id="pr2ga">Nachname<div class="item4c" id="pr3ga"><div id="prycga" class="smallyc"></div><div id="pr2mga" class="small2m"></div><div id="prrcga" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbcga" class="smallbc" style="margin-left: -7.6vh;"></div>A</div></div></div>
                <div class="item4a coachcard coachcard2" id="pr1gb"><div class="item4b" id="pr2gb">Nachname<div class="item4c" id="pr3gb"><div id="prycgb" class="smallyc"></div><div id="pr2mgb" class="small2m"></div><div id="prrcgb" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbcgb" class="smallbc" style="margin-left: -7.6vh;"></div>B</div></div></div>
                <div class="item4a coachcard coachcard2" id="pr1gc"><div class="item4b" id="pr2gc">Nachname<div class="item4c" id="pr3gc"><div id="prycgc" class="smallyc"></div><div id="pr2mgc" class="small2m"></div><div id="prrcgc" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbcgc" class="smallbc" style="margin-left: -7.6vh;"></div>C</div></div></div>
                <div class="item4a coachcard coachcard2" id="pr1gd"><div class="item4b" id="pr2gd">Nachname<div class="item4c" id="pr3gd"><div id="prycgd" class="smallyc"></div><div id="pr2mgd" class="small2m"></div><div id="prrcgd" class="smallrc" style="margin-left: -9.6vh;"></div><div id="prbcgd" class="smallbc" style="margin-left: -7.6vh;"></div>D</div></div></div>
            </div>
        </div>
    </div>
    
    <div id="offiziellespesen" style="display: none;">
        <div class="navbar"> <!--Top Bar-->
            <div class="grid">
                <div onclick="sidemenuopen()" class="griditem" style="margin-top: 12px;">
                    <img src="Hamburger_icon.svg.png"  width="50px" height="50px">
                </div>
            </div>
        </div>
        <div class="offigrid">
            <div class="offigriditem officard" id="1o1" onclick="openONav('sr-a')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o1">
                    <div class="officardlastname" id="3o1">Nachname</div>
                    <div class="officardnr" id="4o1">SR-A</div>
                </div>
                <img class="offibild" id="5o1" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o1">Vorname</div>
                    <div class="officardverein" id="7o1">Verein: </div>
                    <div class="officardcost" id="8o1">Kosten: </div>
                </div>
            </div>
            
            <div class="offigriditem officard" id="1o2" onclick="openONav('sr-b')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o2">
                    <div class="officardlastname" id="3o2">Nachname</div>
                    <div class="officardnr" id="4o2">SR-B</div>
                </div>
                <img class="offibild" id="5h1" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o2">Vorname</div>
                    <div class="officardverein" id="7o2">Verein: </div>
                    <div class="officardcost" id="8o2">Kosten: </div>
                </div>
            </div>
            
            <div class="offigriditem officard" id="1o3" onclick="openONav('zeitn')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o3">
                    <div class="officardlastname" id="3o3">Nachname</div>
                    <div class="officardnr" id="4o3">Zeitn.</div>
                </div>
                <img class="offibild" id="5o3" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o3">Vorname</div>
                    <div class="officardverein" id="7o3">Verein: </div>
                    <div class="officardcost" id="8o3">Kosten: </div>
                </div>
            </div>
            
            <div class="offigriditem officard" id="1o4" onclick="openONav('sekr')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o4">
                    <div class="officardlastname" id="3o4">Nachname</div>
                    <div class="officardnr" id="4o4">Sekr.</div>
                </div>
                <img class="offibild" id="5o4" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o4">Vorname</div>
                    <div class="officardverein" id="7o4">Verein: </div>
                    <div class="officardcost" id="8o4">Kosten: </div>
                </div>
            </div>
            
            <div class="offigriditem officard" id="1o5" onclick="openONav('sr-beob')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o5">
                    <div class="officardlastname" id="3o5">Nachname</div>
                    <div class="officardnr" id="4o5">SR-Beob.</div>
                </div>
                <img class="offibild" id="5o5" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o5">Vorname</div>
                    <div class="officardverein" id="7o5">Verein: </div>
                    <div class="officardcost" id="8o5">Kosten: </div>
                </div>
            </div>
            
            <div class="offigriditem officard" id="1o6" onclick="openONav('aufsicht')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o6">
                    <div class="officardlastname" id="3o6">Nachname</div>
                    <div class="officardnr" id="4o6">Aufsicht</div>
                </div>
                <img class="offibild" id="5o6" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o6">Vorname</div>
                    <div class="officardverein" id="7o6">Verein: </div>
                    <div class="officardcost" id="8o6">Kosten: </div>
                </div>
            </div>
            
            <div class="offigriditem officard" id="1o7" onclick="openONav('t-dele')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o7">
                    <div class="officardlastname" id="3o7">Nachname</div>
                    <div class="officardnr" id="4o7">T. Dele.</div>
                </div>
                <img class="offibild" id="5o7" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o7">Vorname</div>
                    <div class="officardverein" id="7o7">Verein: </div>
                    <div class="officardcost" id="7o8">Kosten: </div>
                </div>
            </div>
            
            <div class="offigriditem officard" id="1o8" onclick="openONav('ordner')"> <!--Spieler nummer 1-->
                <div class="officardtop" id="2o8">
                    <div class="officardlastname" id="3o8">Nachname</div>
                    <div class="officardnr" id="4o8">Ordner</div>
                </div>
                <img class="offibild" id="5o8" src="./default_passbild.png"></img>
                
                <div class="officardbottom">
                    <div class="officardfirstname" id="6o8">Vorname</div>
                    <div class="officardverein" id="7o8">Verein: </div>
                    <div class="officardcost" id="8o8">Kosten: </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="sidemenu" class="overlaya" style="display: none; transition: 1s;">

        <!-- Button to close the overlay navigation -->
    
        <div class="overlay-content" onclick="sidemenuopen()">
            <a href="javascript:void(0)" class="closebtn" onclick="sidemenuopen()">&times;</a>
            <div class="sidemenubar" >
                <div class="sidemenuopt" onclick="sidemenuopt('manns')">
                    <h4>Mannschaftsaufstellung</h4>
                </div>
                <div class="sidemenuopt spielprotokolloff" onclick="sidemenuopt('prot')" id="sidemenuspielprotokoll">
                    <h4>Spielprotokoll</h4>
                </div>
                <div class="sidemenuopt" onclick="sidemenuopt('offi')">
                    <h4>Offizielle & Spesen</h4>
                </div>
                <div class="sidemenuopt" onclick="sidemenuopt('srbericht')">
                    <h4>Schiedsrichterbericht</h4>
                </div>
                <div class="sidemenuopt" onclick="sidemenuopt('settings')">
                    <h4>Spieleinstellungen</h4>
                </div>
                <div class="sidemenuopt" onclick="sidemenuopt('freigabe')">
                    <h4>Freigabe</h4>
                </div>
                <div class="sidemenuopt" onclick="connectoption()">
                    <h4>Mit Snow Broadcast & Snow Action verbinden</h4>
                </div>
            </div>
        </div>
    
    </div>
   <!-- The overlay -->
<div id="myNav" class="overlay" style="display: none;">

    <!-- Button to close the overlay navigation -->
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  
    <!-- Overlay content -->
    <div class="overlay-content" id="playereditoverlay" style="display: none">
      <div class="playereditblock">
            <div class="playeredith1" >Spieler bearbeiten</div>
            <div class="playereditgrid">
                <input type="text" id="editlastname" onchange="lastnameedited()" class="form-control playereditnachname" placeholder="Nachname" aria-label="Username" aria-describedby="basic-addon1">
                <div class="playeredith12" id="editlastnamediv">Nachname</div>
                <input type="text" id="editfirstname" onchange="firstnameedited()" class="form-control playereditnachname" placeholder="Vorname" aria-label="Username" aria-describedby="basic-addon1">
                <div class="playeredith12" id="editfirstnamediv">Vorname</div>
                <input type="text" id="editnr" onchange="nredited()" class="form-control playereditnachname" placeholder="Trikotnummer" aria-label="Username" aria-describedby="basic-addon1">
                <div class="playeredith12" id="editnrdiv">1</div>
                <input type="text" class="form-control playereditnachname" placeholder="Geburtsdatum" aria-label="Username" aria-describedby="basic-addon1">
                <div class="playeredith12">01.01.2000</div>
            </div>
            <input type="checkbox" id="edittwcheck" class="form-check-input" id="exampleCheck1"> Torwart
            <input type="checkbox" class="form-check-input" id="exampleCheck1"> Offizieller
      </div>
    </div>
    
    <div class="overlay-content" id="offieditoverlay" style="display: none;" >
        <div class="offieditblock">
            <div class="offiedith1" id="oe-title">Schiedsrichter A</div>
            <div class="offieditgrid">
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Nachname</div>
                    <input type="text" id="oe-lastname" class="form-control offieditnachname" placeholder="z.B. Mustermann">
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Abfahrt vom Wohnort</div>
                    <div class="input-group mb-3">
                        <input type="text" id="oe-abfahrt" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="z.B. 07:00">
                        <span class="input-group-text offieditside">Uhr</span>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Vorname</div>
                    <input type="text" id="oe-firstname" class="form-control offieditnachname" placeholder="z.B. Max">
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Vorraussichtlicher Heimkehr</div>
                    <div class="input-group mb-3">
                        <input type="text" id="oe-heimkehr" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="z.B. 12:00">
                        <span class="input-group-text offieditside">Uhr</span>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Geburtsdatum</div>
                    <input type="text" id="oe-birthday" class="form-control offieditnachname" placeholder="z.B. 21.02.2001">
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Fahrer km x0.3 €</div>
                    <div class="input-group mb-3">
                        <input type="text" id="oe-fahrerkm" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="z.B. 30">
                        <span class="input-group-text offieditside">km</span>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Verein</div>
                    <input type="text" id="oe-club" class="form-control offieditnachname" placeholder="">
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Mitfahrer km x 0.02 €</div>
                    <div class="input-group mb-3">
                        <input type="text" id="oe-mitfahrerkm" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="z.B. 20">
                        <span class="input-group-text offieditside">km</span>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Lizenznummer</div>
                    <input type="text" id="oe-licence" class="form-control offieditnachname" placeholder="z.B. HRHWL 12 345">
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Spesen</div>
                    <div class="input-group mb-3">
                        <input type="text" id="oe-spesen" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="z.B. 10">
                        <span class="input-group-text offieditside">€</span>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">E-Mail</div>
                    <input type="text" id="oe-email" class="form-control offieditnachname" placeholder="z.B. max.muster@gmail.com">
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Spielleitungsentschädigung</div>
                    <div class="input-group mb-3">
                        <input type="text" id="oe-spielleitung" class="form-control offieditnachname" style="border-right-color: #aaa;" id="offieditspielleitung" placeholder="z.B. 25">
                        <span class="input-group-text offieditside">€</span>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem"></div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offigriditem offiedith12">Summe:</div>
                    <div class="input-group mb-3">
                        <input type="text" id="oe-summe" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="10" readonly>
                        <span class="input-group-text offieditside">€</span>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem">
                </div>
                <div class="offieditgrid2 offigriditem">
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offieditgrid2 offigriditem">
                        <button type="button" class="btn btn-danger" style="margin-left: 10px; cursor:not-allowed;">Person suchen</button>
                        <button type="button" class="btn btn-dark" style="margin-left: 10px; background-color: #13324d;" onclick="voreinstellungen(1)">Voreinstellungen</button>
                    </div>
                </div>
                <div class="offieditgrid2 offigriditem">
                    <div class="offieditgrid2 offigriditem">
                    </div>
                    <div class="offieditgrid2 offigriditem">
                        <button type="button" class="btn btn-primary" onclick="closeNav()">Abbrechen</button>
                        <button type="button" class="btn btn-success" onclick="offieditspeichern()">Speichern</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="overlay-content" id="spielleitung" style="display: none">
            <div class="offieditblock">
                <div class="offiedith1" >Voreinstellungen</div>
                <div class="offieditgrid">
                    <div class="offieditgrid3 offigriditem">
                        <div class="offigriditem offiedith12">Liga</div>
                        <div class="offigriditem offiedith12">Spielleitungsentschädigung</div>
                    </div>
                    <div class="offieditgrid2 offigriditem">
                        <div class="offigriditem offiedith12">Liga</div>
                        <div class="offigriditem offiedith12">Spielleitungsentschädigung</div>
                    </div>

                    <div class="offieditgrid3 offigriditem">
                        <div class="offigriditem offiedith12">Landesliga WJC</div>
                        <div class="input-group mb-3 offigriditem">
                            <input type="text" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="30" readonly>
                            <span class="input-group-text offieditside">€</span>
                        </div>
                        <button type="button" class="btn btn-danger offigriditem" style="width:50%; height: 72%;" onclick="spielleitungchoose(30)">Auswählen</button>
                    </div>

                    <div class="offieditgrid3 offigriditem">
                        <div class="offigriditem offiedith12">Regionsoberliga F</div>
                        <div class="input-group mb-3 offigriditem">
                            <input type="text" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="28" readonly>
                            <span class="input-group-text offieditside">€</span>
                        </div>
                        <button type="button" class="btn btn-danger offigriditem" style="width:50%; height: 72%;" onclick="spielleitungchoose(28)">Auswählen</button>
                    </div>

                    <div class="offieditgrid3 offigriditem">
                        <div class="offigriditem offiedith12">RL/ROL Jugend</div>
                        <div class="input-group mb-3 offigriditem">
                            <input type="text" class="form-control offieditnachname" style="border-right-color: #aaa;" placeholder="25" readonly>
                            <span class="input-group-text offieditside">€</span>
                        </div>
                        <button type="button" class="btn btn-danger offigriditem" style="width:50%; height: 72%;" onclick="spielleitungchoose(25)">Auswählen</button>
                    </div>

                    <div class="offieditgrid2 offigriditem">
                    </div>
                    <div class="offieditgrid2 offigriditem"></div>
                    <div class="offieditgrid2 offigriditem">
                        <div class="offieditgrid2 offigriditem">
                        </div>
                        <div class="offieditgrid2 offigriditem">
                            <button type="button" class="btn btn-primary" onclick="voreinstellungen(0)">Abbrechen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  

</div>
    
    

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
      <script src="script.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11">
        </script>
</body>
</html>