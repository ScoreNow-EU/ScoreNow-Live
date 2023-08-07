/* Snow Live - script.js

    Structure
    Declaration of ID's
    Colorswitch
    Colorchooser
    Colorchooser2
    openNav
    closeNav
    lastnameedited
    firstnameedited
    nredited
    edittwcheck
    numberrefresh
    menuguest
    menuheim
    sidemenuopen
    sidemenuopt


*/


var home_team = "TuS Wettbergen"
var guest_team = "HSG Deister-Süntel"
var home_score = 0
var guest_score = 0
var a
var pinhome = "test"
var pinguest = "heute"
var half = 1

var homepininserted = true;
var guestpininserted = true;

var homeyc = 0
var guestyc = 0

const hometeamname1 = document.getElementById("hometeamname1");
const guestteamname1 = document.getElementById("guestteamname1");


const hometeamname2 = document.getElementById("hometeamname2");
const scorename2 = document.getElementById("scorename2");
const guestteamname2 = document.getElementById("guestteamname2");

const hometeamname3 = document.getElementById("hometeamname3");
const scorename3 = document.getElementById("scorename3");
const guestteamname3 = document.getElementById("guestteamname3");

const toastLiveExample = document.getElementById('liveToast')
const toastBody = document.getElementById('toastBody')
const toastHead = document.getElementById('toastHead')
const toastTeamcolor = document.getElementById('toastTeamcolor')

const toastLiveExample2 = document.getElementById('liveToast2')
const toastBody2 = document.getElementById('toastBody2')
const toastHead2 = document.getElementById('toastHead2')
const toastTeamcolor2 = document.getElementById('toastTeamcolor2')


const homepin1 = document.getElementById('homepin1')
const homepinbutton1 = document.getElementById('homepinbutton1')
const homepincancel1 = document.getElementById('homepincancel1')

const guestpin1 = document.getElementById('guestpin1')
const guestpinbutton1 = document.getElementById('guestpinbutton1')
const guestpincancel1 = document.getElementById('guestpincancel1')

const sidemenuspielprotokoll = document.getElementById('sidemenuspielprotokoll')

var offisra = {
    title: "Schiedsrichter A",
    lastname: "Schiri A",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}


var offisrb = {
    title: "Schiedsrichter B",
    lastname: "Schiri B",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}


var offizeitn = {
    title: "Zeitnehmer",
    lastname: "Zeitn",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}


var offisekr = {
    title: "Sekretär",
    lastname: "Sekretär",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}


var offisrbeob = {
    title: "Schiedsrichter Beobachter",
    lastname: "Schiri Beobachter",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}


var offiaufsicht = {
    title: "Spielaufsicht",
    lastname: "Spielaufsicht",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}


var offitdele = {
    title: "Technischer Delegierter",
    lastname: "T-Dele",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}


var offiordner = {
    title: "Ordner-Chef",
    lastname: "èl cheffé",
    firstname: " ",
    birthday: " ",
    verein: " ",
    licence: " ",
    email: " ",
    abfahrt: " ",
    heimkehr:" ",
    fahrerkm: 0,
    mitfahrerkm: 0,
    spesen: 0,
    spielleitung: 0,
    summe: 0
}

hometeamname1.textContent = home_team
guestteamname1.textContent = guest_team
hometeamname2.textContent = home_team
scorename2.textContent = home_score + " : " + guest_score
guestteamname2.textContent = guest_team
hometeamname3.textContent = home_team
scorename3.textContent = home_score + " : " + guest_score
guestteamname3.textContent = guest_team
var sidemenuopened = false;

const colorchooser = document.getElementById("dog-names")
const colorchooser2 = document.getElementById("dog-names2")
const colorh1 = document.getElementById("2h1");
const colorh2 = document.getElementById("2h2");
const colorh3 = document.getElementById("2h3");
const colorh4 = document.getElementById("2h4");
const colorh5 = document.getElementById("2h5");
const colorh6 = document.getElementById("2h6");
const colorh7 = document.getElementById("2h7");
const colorh8 = document.getElementById("2h8");
const colorh9 = document.getElementById("2h9");
const colorh10 = document.getElementById("2h10");
const colorh11 = document.getElementById("2h11");
const colorh12 = document.getElementById("2h12");
const colorh13 = document.getElementById("2h13");
const colorh14 = document.getElementById("2h14");

const colorg1 = document.getElementById("2g1");
const colorg2 = document.getElementById("2g2");
const colorg3 = document.getElementById("2g3");
const colorg4 = document.getElementById("2g4");
const colorg5 = document.getElementById("2g5");
const colorg6 = document.getElementById("2g6");
const colorg7 = document.getElementById("2g7");
const colorg8 = document.getElementById("2g8");
const colorg9 = document.getElementById("2g9");
const colorg10 = document.getElementById("2g10");
const colorg11 = document.getElementById("2g11");
const colorg12 = document.getElementById("2g12");
const colorg13 = document.getElementById("2g13");
const colorg14 = document.getElementById("2g14");

const editlastname = document.getElementById("editlastname")
const editlastnamediv = document.getElementById("editlastnamediv")
const editfirstname = document.getElementById("editfirstname")
const editfirstnamediv = document.getElementById("editfirstnamediv")
const editnr = document.getElementById("editnr")
const editnrdiv = document.getElementById("editnrdiv")
const edittwcheck = document.getElementById("edittwcheck")


const item2 = document.getElementById("item2")

const a1h1 = document.getElementById("1h1")
const a2h1 = document.getElementById("2h1")
const a3h1 = document.getElementById("3h1")
const a4h1 = document.getElementById("4h1")
const a5h1 = document.getElementById("5h1")
const a6h1 = document.getElementById("6h1")

const a1h2 = document.getElementById("1h2")
const a2h2 = document.getElementById("2h2")
const a3h2 = document.getElementById("3h2")
const a4h2 = document.getElementById("4h2")
const a5h2 = document.getElementById("5h2")
const a6h2 = document.getElementById("6h2")

const a1h3 = document.getElementById("1h3")
const a2h3 = document.getElementById("2h3")
const a3h3 = document.getElementById("3h3")
const a4h3 = document.getElementById("4h3")
const a5h3 = document.getElementById("5h3")
const a6h3 = document.getElementById("6h3")

const a1h4 = document.getElementById("1h4")
const a2h4 = document.getElementById("2h4")
const a3h4 = document.getElementById("3h4")
const a4h4 = document.getElementById("4h4")
const a5h4 = document.getElementById("5h4")
const a6h4 = document.getElementById("6h4")

const a1h5 = document.getElementById("1h5")
const a2h5 = document.getElementById("2h5")
const a3h5 = document.getElementById("3h5")
const a4h5 = document.getElementById("4h5")
const a5h5 = document.getElementById("5h5")
const a6h5 = document.getElementById("6h5")

const a1h6 = document.getElementById("1h6")
const a2h6 = document.getElementById("2h6")
const a3h6 = document.getElementById("3h6")
const a4h6 = document.getElementById("4h6")
const a5h6 = document.getElementById("5h6")
const a6h6 = document.getElementById("6h6")

const a1h7 = document.getElementById("1h7")
const a2h7 = document.getElementById("2h7")
const a3h7 = document.getElementById("3h7")
const a4h7 = document.getElementById("4h7")
const a5h7 = document.getElementById("5h7")
const a6h7 = document.getElementById("6h7")

const a1h8 = document.getElementById("1h8")
const a2h8 = document.getElementById("2h8")
const a3h8 = document.getElementById("3h8")
const a4h8 = document.getElementById("4h8")
const a5h8 = document.getElementById("5h8")
const a6h8 = document.getElementById("6h8")

const a1h9 = document.getElementById("1h9")
const a2h9 = document.getElementById("2h9")
const a3h9 = document.getElementById("3h9")
const a4h9 = document.getElementById("4h9")
const a5h9 = document.getElementById("5h9")
const a6h9 = document.getElementById("6h9")

const a1h10 = document.getElementById("1h10")
const a2h10 = document.getElementById("2h10")
const a3h10 = document.getElementById("3h10")
const a4h10 = document.getElementById("4h10")
const a5h10 = document.getElementById("5h10")
const a6h10 = document.getElementById("6h10")

const a1h11 = document.getElementById("1h11")
const a2h11 = document.getElementById("2h11")
const a3h11 = document.getElementById("3h11")
const a4h11 = document.getElementById("4h11")
const a5h11 = document.getElementById("5h11")
const a6h11 = document.getElementById("6h11")

const a1h12 = document.getElementById("1h12")
const a2h12 = document.getElementById("2h12")
const a3h12 = document.getElementById("3h12")
const a4h12 = document.getElementById("4h12")
const a5h12 = document.getElementById("5h12")
const a6h12 = document.getElementById("6h12")

const a1h13 = document.getElementById("1h13")
const a2h13 = document.getElementById("2h13")
const a3h13 = document.getElementById("3h13")
const a4h13 = document.getElementById("4h13")
const a5h13 = document.getElementById("5h13")
const a6h13 = document.getElementById("6h13")

const a1h14 = document.getElementById("1h14")
const a2h14 = document.getElementById("2h14")
const a3h14 = document.getElementById("3h14")
const a4h14 = document.getElementById("4h14")
const a5h14 = document.getElementById("5h14")
const a6h14 = document.getElementById("6h14")


const a1ha = document.getElementById("1ha")
const a2ha = document.getElementById("2ha")
const a3ha = document.getElementById("3ha")
const a4ha = document.getElementById("4ha")
const a5ha = document.getElementById("5ha")
const a6ha = document.getElementById("6ha")

const a1hb = document.getElementById("1hb")
const a2hb = document.getElementById("2hb")
const a3hb = document.getElementById("3hb")
const a4hb = document.getElementById("4hb")
const a5hb = document.getElementById("5hb")
const a6hb = document.getElementById("6hb")

const a1hc = document.getElementById("1hc")
const a2hc = document.getElementById("2hc")
const a3hc = document.getElementById("3hc")
const a4hc = document.getElementById("4hc")
const a5hc = document.getElementById("5hc")
const a6hc = document.getElementById("6hc")

const a1hd = document.getElementById("1hd")
const a2hd = document.getElementById("2hd")
const a3hd = document.getElementById("3hd")
const a4hd = document.getElementById("4hd")
const a5hd = document.getElementById("5hd")
const a6hd = document.getElementById("6hd")




const a1g1 = document.getElementById("1g1")
const a2g1 = document.getElementById("2g1")
const a3g1 = document.getElementById("3g1")
const a4g1 = document.getElementById("4g1")
const a5g1 = document.getElementById("5g1")
const a6g1 = document.getElementById("6g1")

const a1g2 = document.getElementById("1g2")
const a2g2 = document.getElementById("2g2")
const a3g2 = document.getElementById("3g2")
const a4g2 = document.getElementById("4g2")
const a5g2 = document.getElementById("5g2")
const a6g2 = document.getElementById("6g2")

const a1g3 = document.getElementById("1g3")
const a2g3 = document.getElementById("2g3")
const a3g3 = document.getElementById("3g3")
const a4g3 = document.getElementById("4g3")
const a5g3 = document.getElementById("5g3")
const a6g3 = document.getElementById("6g3")

const a1g4 = document.getElementById("1g4")
const a2g4 = document.getElementById("2g4")
const a3g4 = document.getElementById("3g4")
const a4g4 = document.getElementById("4g4")
const a5g4 = document.getElementById("5g4")
const a6g4 = document.getElementById("6g4")

const a1g5 = document.getElementById("1g5")
const a2g5 = document.getElementById("2g5")
const a3g5 = document.getElementById("3g5")
const a4g5 = document.getElementById("4g5")
const a5g5 = document.getElementById("5g5")
const a6g5 = document.getElementById("6g5")

const a1g6 = document.getElementById("1g6")
const a2g6 = document.getElementById("2g6")
const a3g6 = document.getElementById("3g6")
const a4g6 = document.getElementById("4g6")
const a5g6 = document.getElementById("5g6")
const a6g6 = document.getElementById("6g6")

const a1g7 = document.getElementById("1g7")
const a2g7 = document.getElementById("2g7")
const a3g7 = document.getElementById("3g7")
const a4g7 = document.getElementById("4g7")
const a5g7 = document.getElementById("5g7")
const a6g7 = document.getElementById("6g7")

const a1g8 = document.getElementById("1g8")
const a2g8 = document.getElementById("2g8")
const a3g8 = document.getElementById("3g8")
const a4g8 = document.getElementById("4g8")
const a5g8 = document.getElementById("5g8")
const a6g8 = document.getElementById("6g8")

const a1g9 = document.getElementById("1g9")
const a2g9 = document.getElementById("2g9")
const a3g9 = document.getElementById("3g9")
const a4g9 = document.getElementById("4g9")
const a5g9 = document.getElementById("5g9")
const a6g9 = document.getElementById("6g9")

const a1g10 = document.getElementById("1g10")
const a2g10 = document.getElementById("2g10")
const a3g10 = document.getElementById("3g10")
const a4g10 = document.getElementById("4g10")
const a5g10 = document.getElementById("5g10")
const a6g10 = document.getElementById("6g10")

const a1g11 = document.getElementById("1g11")
const a2g11 = document.getElementById("2g11")
const a3g11 = document.getElementById("3g11")
const a4g11 = document.getElementById("4g11")
const a5g11 = document.getElementById("5g11")
const a6g11 = document.getElementById("6g11")

const a1g12 = document.getElementById("1g12")
const a2g12 = document.getElementById("2g12")
const a3g12 = document.getElementById("3g12")
const a4g12 = document.getElementById("4g12")
const a5g12 = document.getElementById("5g12")
const a6g12 = document.getElementById("6g12")

const a1g13 = document.getElementById("1g13")
const a2g13 = document.getElementById("2g13")
const a3g13 = document.getElementById("3g13")
const a4g13 = document.getElementById("4g13")
const a5g13 = document.getElementById("5g13")
const a6g13 = document.getElementById("6g13")

const a1ga = document.getElementById("1ga")
const a2ga = document.getElementById("2ga")
const a3ga = document.getElementById("3ga")
const a4ga = document.getElementById("4ga")
const a5ga = document.getElementById("5ga")
const a6ga = document.getElementById("6ga")

const a1gb = document.getElementById("1gb")
const a2gb = document.getElementById("2gb")
const a3gb = document.getElementById("3gb")
const a4gb = document.getElementById("4gb")
const a5gb = document.getElementById("5gb")
const a6gb = document.getElementById("6gb")

const a1gc = document.getElementById("1gc")
const a2gc = document.getElementById("2gc")
const a3gc = document.getElementById("3gc")
const a4gc = document.getElementById("4gc")
const a5gc = document.getElementById("5gc")
const a6gc = document.getElementById("6gc")

const a1gd = document.getElementById("1gd")
const a2gd = document.getElementById("2gd")
const a3gd = document.getElementById("3gd")
const a4gd = document.getElementById("4gd")
const a5gd = document.getElementById("5gd")
const a6gd = document.getElementById("6gd")

const a1g14 = document.getElementById("1g14")
const a2g14 = document.getElementById("2g14")
const a3g14 = document.getElementById("3g14")
const a4g14 = document.getElementById("4g14")
const a5g14 = document.getElementById("5g14")
const a6g14 = document.getElementById("6g14")


const pr1h1 = document.getElementById("pr1h1")
const pr1h2 = document.getElementById("pr1h2")
const pr1h3 = document.getElementById("pr1h3")
const pr1h4 = document.getElementById("pr1h4")
const pr1h5 = document.getElementById("pr1h5")
const pr1h6 = document.getElementById("pr1h6")
const pr1h7 = document.getElementById("pr1h7")
const pr1h8 = document.getElementById("pr1h8")
const pr1h9 = document.getElementById("pr1h9")
const pr1h10 = document.getElementById("pr1h10")
const pr1h11 = document.getElementById("pr1h11")
const pr1h12 = document.getElementById("pr1h12")
const pr1h13 = document.getElementById("pr1h13")
const pr1h14 = document.getElementById("pr1h14")
const pr2h1 = document.getElementById("pr2h1")
const pr2h2 = document.getElementById("pr2h2")
const pr2h3 = document.getElementById("pr2h3")
const pr2h4 = document.getElementById("pr2h4")
const pr2h5 = document.getElementById("pr2h5")
const pr2h6 = document.getElementById("pr2h6")
const pr2h7 = document.getElementById("pr2h7")
const pr2h8 = document.getElementById("pr2h8")
const pr2h9 = document.getElementById("pr2h9")
const pr2h10 = document.getElementById("pr2h10")
const pr2h11 = document.getElementById("pr2h11")
const pr2h12 = document.getElementById("pr2h12")
const pr2h13 = document.getElementById("pr2h13")
const pr2h14 = document.getElementById("pr2h14")
const pr3h1 = document.getElementById("pr3h1")
const pr3h2 = document.getElementById("pr3h2")
const pr3h3 = document.getElementById("pr3h3")
const pr3h4 = document.getElementById("pr3h4")
const pr3h5 = document.getElementById("pr3h5")
const pr3h6 = document.getElementById("pr3h6")
const pr3h7 = document.getElementById("pr3h7")
const pr3h8 = document.getElementById("pr3h8")
const pr3h9 = document.getElementById("pr3h9")
const pr3h10 = document.getElementById("pr3h10")
const pr3h11 = document.getElementById("pr3h11")
const pr3h12 = document.getElementById("pr3h12")
const pr3h13 = document.getElementById("pr3h13")
const pr3h14 = document.getElementById("pr3h14")

const pr1ha = document.getElementById("pr1ha")
const pr2ha = document.getElementById("pr2ha")
const pr3ha = document.getElementById("pr3ha")
const pr1hb = document.getElementById("pr1hb")
const pr2hb = document.getElementById("pr2hb")
const pr3hb = document.getElementById("pr3hb")
const pr1hc = document.getElementById("pr1hc")
const pr2hc = document.getElementById("pr2hc")
const pr3hc = document.getElementById("pr3hc")
const pr1hd = document.getElementById("pr1hd")
const pr2hd = document.getElementById("pr2hd")
const pr3hd = document.getElementById("pr3hd")




const pr1g1 = document.getElementById("pr1g1")
const pr1g2 = document.getElementById("pr1g2")
const pr1g3 = document.getElementById("pr1g3")
const pr1g4 = document.getElementById("pr1g4")
const pr1g5 = document.getElementById("pr1g5")
const pr1g6 = document.getElementById("pr1g6")
const pr1g7 = document.getElementById("pr1g7")
const pr1g8 = document.getElementById("pr1g8")
const pr1g9 = document.getElementById("pr1g9")
const pr1g10 = document.getElementById("pr1g10")
const pr1g11 = document.getElementById("pr1g11")
const pr1g12 = document.getElementById("pr1g12")
const pr1g13 = document.getElementById("pr1g13")
const pr1g14 = document.getElementById("pr1g14")
const pr2g1 = document.getElementById("pr2g1")
const pr2g2 = document.getElementById("pr2g2")
const pr2g3 = document.getElementById("pr2g3")
const pr2g4 = document.getElementById("pr2g4")
const pr2g5 = document.getElementById("pr2g5")
const pr2g6 = document.getElementById("pr2g6")
const pr2g7 = document.getElementById("pr2g7")
const pr2g8 = document.getElementById("pr2g8")
const pr2g9 = document.getElementById("pr2g9")
const pr2g10 = document.getElementById("pr2g10")
const pr2g11 = document.getElementById("pr2g11")
const pr2g12 = document.getElementById("pr2g12")
const pr2g13 = document.getElementById("pr2g13")
const pr2g14 = document.getElementById("pr2g14")
const pr3g1 = document.getElementById("pr3g1")
const pr3g2 = document.getElementById("pr3g2")
const pr3g3 = document.getElementById("pr3g3")
const pr3g4 = document.getElementById("pr3g4")
const pr3g5 = document.getElementById("pr3g5")
const pr3g6 = document.getElementById("pr3g6")
const pr3g7 = document.getElementById("pr3g7")
const pr3g8 = document.getElementById("pr3g8")
const pr3g9 = document.getElementById("pr3g9")
const pr3g10 = document.getElementById("pr3g10")
const pr3g11 = document.getElementById("pr3g11")
const pr3g12 = document.getElementById("pr3g12")
const pr3g13 = document.getElementById("pr3g13")
const pr3g14 = document.getElementById("pr3g14")


const pr1ga = document.getElementById("pr1ga")
const pr2ga = document.getElementById("pr2ga")
const pr3ga = document.getElementById("pr3ga")
const pr1gb = document.getElementById("pr1gb")
const pr2gb = document.getElementById("pr2gb")
const pr3gb = document.getElementById("pr3gb")
const pr1gc = document.getElementById("pr1gc")
const pr2gc = document.getElementById("pr2gc")
const pr3gc = document.getElementById("pr3gc")
const pr1gd = document.getElementById("pr1gd")
const pr2gd = document.getElementById("pr2gd")
const pr3gd = document.getElementById("pr3gd")

const a1o1 = document.getElementById("1o1")
const a2o1 = document.getElementById("2o1")
const a3o1 = document.getElementById("3o1")
const a4o1 = document.getElementById("4o1")
const a5o1 = document.getElementById("5o1")
const a6o1 = document.getElementById("6o1")
const a7o1 = document.getElementById("7o1")
const a8o1 = document.getElementById("8o1")

const a1o2 = document.getElementById("1o2")
const a2o2 = document.getElementById("2o2")
const a3o2 = document.getElementById("3o2")
const a4o2 = document.getElementById("4o2")
const a5o2 = document.getElementById("5o2")
const a6o2 = document.getElementById("6o2")
const a7o2 = document.getElementById("7o2")
const a8o2 = document.getElementById("8o2")

const a1o3 = document.getElementById("1o3")
const a2o3 = document.getElementById("2o3")
const a3o3 = document.getElementById("3o3")
const a4o3 = document.getElementById("4o3")
const a5o3 = document.getElementById("5o3")
const a6o3 = document.getElementById("6o3")
const a7o3 = document.getElementById("7o3")
const a8o3 = document.getElementById("8o3")

const a1o4 = document.getElementById("1o4")
const a2o4 = document.getElementById("2o4")
const a3o4 = document.getElementById("3o4")
const a4o4 = document.getElementById("4o4")
const a5o4 = document.getElementById("5o4")
const a6o4 = document.getElementById("6o4")
const a7o4 = document.getElementById("7o4")
const a8o4 = document.getElementById("8o4")

const a1o5 = document.getElementById("1o5")
const a2o5 = document.getElementById("2o5")
const a3o5 = document.getElementById("3o5")
const a4o5 = document.getElementById("4o5")
const a5o5 = document.getElementById("5o5")
const a6o5 = document.getElementById("6o5")
const a7o5 = document.getElementById("7o5")
const a8o5 = document.getElementById("8o5")

const a1o6 = document.getElementById("1o6")
const a2o6 = document.getElementById("2o6")
const a3o6 = document.getElementById("3o6")
const a4o6 = document.getElementById("4o6")
const a5o6 = document.getElementById("5o6")
const a6o6 = document.getElementById("6o6")
const a7o6 = document.getElementById("7o6")
const a8o6 = document.getElementById("8o6")

const a1o7 = document.getElementById("1o7")
const a2o7 = document.getElementById("2o7")
const a3o7 = document.getElementById("3o7")
const a4o7 = document.getElementById("4o7")
const a5o7 = document.getElementById("5o7")
const a6o7 = document.getElementById("6o7")
const a7o7 = document.getElementById("7o7")
const a8o7 = document.getElementById("8o7")

const a1o8 = document.getElementById("1o8")
const a2o8 = document.getElementById("2o8")
const a3o8 = document.getElementById("3o8")
const a4o8 = document.getElementById("4o8")
const a5o8 = document.getElementById("5o8")
const a6o8 = document.getElementById("6o8")
const a7o8 = document.getElementById("7o8")
const a8o8 = document.getElementById("8o8")

const prottopgoal = document.getElementById("prottopgoal")
const prottopmit = document.getElementById("prottopmit")
const prottopohne = document.getElementById("prottopohne")
const prottopyc = document.getElementById("prottopyc")
const prottop2m = document.getElementById("prottop2m")
const prottopob = document.getElementById("prottopob")
const prottopmb = document.getElementById("prottopmb")

const ttoh1 = document.getElementById("ttoh1")
const ttoh2 = document.getElementById("ttoh2")
const ttoh3 = document.getElementById("ttoh3")
const ttog1 = document.getElementById("ttog1")
const ttog2 = document.getElementById("ttog2")
const ttog3 = document.getElementById("ttog3")


const prych1 = document.getElementById("prych1")
const prych2 = document.getElementById("prych2")
const prych3 = document.getElementById("prych3")
const prych4 = document.getElementById("prych4")
const prych5 = document.getElementById("prych5")
const prych6 = document.getElementById("prych6")
const prych7 = document.getElementById("prych7")
const prych8 = document.getElementById("prych8")
const prych9 = document.getElementById("prych9")
const prych10 = document.getElementById("prych10")
const prych11 = document.getElementById("prych11")
const prych12 = document.getElementById("prych12")
const prych13 = document.getElementById("prych13")
const prych14 = document.getElementById("prych14")

const pr2mha1 = document.getElementById("pr2mha1")
const pr2mha2 = document.getElementById("pr2mha2")
const pr2mha3 = document.getElementById("pr2mha3")
const pr2mha4 = document.getElementById("pr2mha4")
const pr2mha5 = document.getElementById("pr2mha5")
const pr2mha6 = document.getElementById("pr2mha6")
const pr2mha7 = document.getElementById("pr2mha7")
const pr2mha8 = document.getElementById("pr2mha8")
const pr2mha9 = document.getElementById("pr2mha9")
const pr2mha10 = document.getElementById("pr2mha10")
const pr2mha11 = document.getElementById("pr2mha11")
const pr2mha12 = document.getElementById("pr2mha12")
const pr2mha13 = document.getElementById("pr2mha13")
const pr2mha14 = document.getElementById("pr2mha14")

const pr2mhb1 = document.getElementById("pr2mhb1")
const pr2mhb2 = document.getElementById("pr2mhb2")
const pr2mhb3 = document.getElementById("pr2mhb3")
const pr2mhb4 = document.getElementById("pr2mhb4")
const pr2mhb5 = document.getElementById("pr2mhb5")
const pr2mhb6 = document.getElementById("pr2mhb6")
const pr2mhb7 = document.getElementById("pr2mhb7")
const pr2mhb8 = document.getElementById("pr2mhb8")
const pr2mhb9 = document.getElementById("pr2mhb9")
const pr2mhb10 = document.getElementById("pr2mhb10")
const pr2mhb11 = document.getElementById("pr2mhb11")
const pr2mhb12 = document.getElementById("pr2mhb12")
const pr2mhb13 = document.getElementById("pr2mhb13")
const pr2mhb14 = document.getElementById("pr2mhb14")

const pr2mhc1 = document.getElementById("pr2mhc1")
const pr2mhc2 = document.getElementById("pr2mhc2")
const pr2mhc3 = document.getElementById("pr2mhc3")
const pr2mhc4 = document.getElementById("pr2mhc4")
const pr2mhc5 = document.getElementById("pr2mhc5")
const pr2mhc6 = document.getElementById("pr2mhc6")
const pr2mhc7 = document.getElementById("pr2mhc7")
const pr2mhc8 = document.getElementById("pr2mhc8")
const pr2mhc9 = document.getElementById("pr2mhc9")
const pr2mhc10 = document.getElementById("pr2mhc10")
const pr2mhc11 = document.getElementById("pr2mhc11")
const pr2mhc12 = document.getElementById("pr2mhc12")
const pr2mhc13 = document.getElementById("pr2mhc13")
const pr2mhc14 = document.getElementById("pr2mhc14")

const prrch1 = document.getElementById("prrch1")
const prrch2 = document.getElementById("prrch2")
const prrch3 = document.getElementById("prrch3")
const prrch4 = document.getElementById("prrch4")
const prrch5 = document.getElementById("prrch5")
const prrch6 = document.getElementById("prrch6")
const prrch7 = document.getElementById("prrch7")
const prrch8 = document.getElementById("prrch8")
const prrch9 = document.getElementById("prrch9")
const prrch10 = document.getElementById("prrch10")
const prrch11 = document.getElementById("prrch11")
const prrch12 = document.getElementById("prrch12")
const prrch13 = document.getElementById("prrch13")
const prrch14 = document.getElementById("prrch14")

const prbch1 = document.getElementById("prbch1")
const prbch2 = document.getElementById("prbch2")
const prbch3 = document.getElementById("prbch3")
const prbch4 = document.getElementById("prbch4")
const prbch5 = document.getElementById("prbch5")
const prbch6 = document.getElementById("prbch6")
const prbch7 = document.getElementById("prbch7")
const prbch8 = document.getElementById("prbch8")
const prbch9 = document.getElementById("prbch9")
const prbch10 = document.getElementById("prbch10")
const prbch11 = document.getElementById("prbch11")
const prbch12 = document.getElementById("prbch12")
const prbch13 = document.getElementById("prbch13")
const prbch14 = document.getElementById("prbch14")




const prycg1 = document.getElementById("prycg1")
const prycg2 = document.getElementById("prycg2")
const prycg3 = document.getElementById("prycg3")
const prycg4 = document.getElementById("prycg4")
const prycg5 = document.getElementById("prycg5")
const prycg6 = document.getElementById("prycg6")
const prycg7 = document.getElementById("prycg7")
const prycg8 = document.getElementById("prycg8")
const prycg9 = document.getElementById("prycg9")
const prycg10 = document.getElementById("prycg10")
const prycg11 = document.getElementById("prycg11")
const prycg12 = document.getElementById("prycg12")
const prycg13 = document.getElementById("prycg13")
const prycg14 = document.getElementById("prycg14")

const pr2mga1 = document.getElementById("pr2mga1")
const pr2mga2 = document.getElementById("pr2mga2")
const pr2mga3 = document.getElementById("pr2mga3")
const pr2mga4 = document.getElementById("pr2mga4")
const pr2mga5 = document.getElementById("pr2mga5")
const pr2mga6 = document.getElementById("pr2mga6")
const pr2mga7 = document.getElementById("pr2mga7")
const pr2mga8 = document.getElementById("pr2mga8")
const pr2mga9 = document.getElementById("pr2mga9")
const pr2mga10 = document.getElementById("pr2mga10")
const pr2mga11 = document.getElementById("pr2mga11")
const pr2mga12 = document.getElementById("pr2mga12")
const pr2mga13 = document.getElementById("pr2mga13")
const pr2mga14 = document.getElementById("pr2mga14")

const pr2mgb1 = document.getElementById("pr2mgb1")
const pr2mgb2 = document.getElementById("pr2mgb2")
const pr2mgb3 = document.getElementById("pr2mgb3")
const pr2mgb4 = document.getElementById("pr2mgb4")
const pr2mgb5 = document.getElementById("pr2mgb5")
const pr2mgb6 = document.getElementById("pr2mgb6")
const pr2mgb7 = document.getElementById("pr2mgb7")
const pr2mgb8 = document.getElementById("pr2mgb8")
const pr2mgb9 = document.getElementById("pr2mgb9")
const pr2mgb10 = document.getElementById("pr2mgb10")
const pr2mgb11 = document.getElementById("pr2mgb11")
const pr2mgb12 = document.getElementById("pr2mgb12")
const pr2mgb13 = document.getElementById("pr2mgb13")
const pr2mgb14 = document.getElementById("pr2mgb14")

const pr2mgc1 = document.getElementById("pr2mgc1")
const pr2mgc2 = document.getElementById("pr2mgc2")
const pr2mgc3 = document.getElementById("pr2mgc3")
const pr2mgc4 = document.getElementById("pr2mgc4")
const pr2mgc5 = document.getElementById("pr2mgc5")
const pr2mgc6 = document.getElementById("pr2mgc6")
const pr2mgc7 = document.getElementById("pr2mgc7")
const pr2mgc8 = document.getElementById("pr2mgc8")
const pr2mgc9 = document.getElementById("pr2mgc9")
const pr2mgc10 = document.getElementById("pr2mgc10")
const pr2mgc11 = document.getElementById("pr2mgc11")
const pr2mgc12 = document.getElementById("pr2mgc12")
const pr2mgc13 = document.getElementById("pr2mgc13")
const pr2mgc14 = document.getElementById("pr2mgc14")

const prrcg1 = document.getElementById("prrcg1")
const prrcg2 = document.getElementById("prrcg2")
const prrcg3 = document.getElementById("prrcg3")
const prrcg4 = document.getElementById("prrcg4")
const prrcg5 = document.getElementById("prrcg5")
const prrcg6 = document.getElementById("prrcg6")
const prrcg7 = document.getElementById("prrcg7")
const prrcg8 = document.getElementById("prrcg8")
const prrcg9 = document.getElementById("prrcg9")
const prrcg10 = document.getElementById("prrcg10")
const prrcg11 = document.getElementById("prrcg11")
const prrcg12 = document.getElementById("prrcg12")
const prrcg13 = document.getElementById("prrcg13")
const prrcg14 = document.getElementById("prrcg14")

const prbcg1 = document.getElementById("prbcg1")
const prbcg2 = document.getElementById("prbcg2")
const prbcg3 = document.getElementById("prbcg3")
const prbcg4 = document.getElementById("prbcg4")
const prbcg5 = document.getElementById("prbcg5")
const prbcg6 = document.getElementById("prbcg6")
const prbcg7 = document.getElementById("prbcg7")
const prbcg8 = document.getElementById("prbcg8")
const prbcg9 = document.getElementById("prbcg9")
const prbcg10 = document.getElementById("prbcg10")
const prbcg11 = document.getElementById("prbcg11")
const prbcg12 = document.getElementById("prbcg12")
const prbcg13 = document.getElementById("prbcg13")
const prbcg14 = document.getElementById("prbcg14")


const prycga = document.getElementById("prycga")
const prycgb = document.getElementById("prycgb")
const prycgc = document.getElementById("prycgc")
const prycgd = document.getElementById("prycgd")
const pr2mga = document.getElementById("pr2mga")
const pr2mgb = document.getElementById("pr2mgb")
const pr2mgc = document.getElementById("pr2mgc")
const pr2mgd = document.getElementById("pr2mgd")
const prrcga = document.getElementById("prrcga")
const prrcgb = document.getElementById("prrcgb")
const prrcgc = document.getElementById("prrcgc")
const prrcgd = document.getElementById("prrcgd")
const prbcga = document.getElementById("prbcga")
const prbcgb = document.getElementById("prbcgb")
const prbcgc = document.getElementById("prbcgc")
const prbcgd = document.getElementById("prbcgd")

const prycha = document.getElementById("prycha")
const prychb = document.getElementById("prychb")
const prychc = document.getElementById("prychc")
const prychd = document.getElementById("prychd")
const pr2mha = document.getElementById("pr2mha")
const pr2mhb = document.getElementById("pr2mhb")
const pr2mhc = document.getElementById("pr2mhc")
const pr2mhd = document.getElementById("pr2mhd")
const prrcha = document.getElementById("prrcha")
const prrchb = document.getElementById("prrchb")
const prrchc = document.getElementById("prrchc")
const prrchd = document.getElementById("prrchd")
const prbcha = document.getElementById("prbcha")
const prbchb = document.getElementById("prbchb")
const prbchc = document.getElementById("prbchc")
const prbchd = document.getElementById("prbchd")




prych1.style.opacity = 0
prych2.style.opacity = 0
prych3.style.opacity = 0
prych4.style.opacity = 0
prych5.style.opacity = 0
prych6.style.opacity = 0
prych7.style.opacity = 0
prych8.style.opacity = 0
prych9.style.opacity = 0
prych10.style.opacity = 0
prych11.style.opacity = 0
prych12.style.opacity = 0
prych13.style.opacity = 0
prych14.style.opacity = 0
pr2mha1.style.opacity = 0
pr2mha2.style.opacity = 0
pr2mha3.style.opacity = 0
pr2mha4.style.opacity = 0
pr2mha5.style.opacity = 0
pr2mha6.style.opacity = 0
pr2mha7.style.opacity = 0
pr2mha8.style.opacity = 0
pr2mha9.style.opacity = 0
pr2mha10.style.opacity = 0
pr2mha11.style.opacity = 0
pr2mha12.style.opacity = 0
pr2mha13.style.opacity = 0
pr2mha14.style.opacity = 0
pr2mhb1.style.opacity = 0
pr2mhb2.style.opacity = 0
pr2mhb3.style.opacity = 0
pr2mhb4.style.opacity = 0
pr2mhb5.style.opacity = 0
pr2mhb6.style.opacity = 0
pr2mhb7.style.opacity = 0
pr2mhb8.style.opacity = 0
pr2mhb9.style.opacity = 0
pr2mhb10.style.opacity = 0
pr2mhb11.style.opacity = 0
pr2mhb12.style.opacity = 0
pr2mhb13.style.opacity = 0
pr2mhb14.style.opacity = 0
pr2mhc1.style.opacity = 0
pr2mhc2.style.opacity = 0
pr2mhc3.style.opacity = 0
pr2mhc4.style.opacity = 0
pr2mhc5.style.opacity = 0
pr2mhc6.style.opacity = 0
pr2mhc7.style.opacity = 0
pr2mhc8.style.opacity = 0
pr2mhc9.style.opacity = 0
pr2mhc10.style.opacity = 0
pr2mhc11.style.opacity = 0
pr2mhc12.style.opacity = 0
pr2mhc13.style.opacity = 0
pr2mhc14.style.opacity = 0
prrch1.style.opacity = 0
prrch2.style.opacity = 0
prrch3.style.opacity = 0
prrch4.style.opacity = 0
prrch5.style.opacity = 0
prrch6.style.opacity = 0
prrch7.style.opacity = 0
prrch8.style.opacity = 0
prrch9.style.opacity = 0
prrch10.style.opacity = 0
prrch11.style.opacity = 0
prrch12.style.opacity = 0
prrch13.style.opacity = 0
prrch14.style.opacity = 0
prbch1.style.opacity = 0
prbch2.style.opacity = 0
prbch3.style.opacity = 0
prbch4.style.opacity = 0
prbch5.style.opacity = 0
prbch6.style.opacity = 0
prbch7.style.opacity = 0
prbch8.style.opacity = 0
prbch9.style.opacity = 0
prbch10.style.opacity = 0
prbch11.style.opacity = 0
prbch12.style.opacity = 0
prbch13.style.opacity = 0
prbch14.style.opacity = 0


prycg1.style.opacity = 0
prycg2.style.opacity = 0
prycg3.style.opacity = 0
prycg4.style.opacity = 0
prycg5.style.opacity = 0
prycg6.style.opacity = 0
prycg7.style.opacity = 0
prycg8.style.opacity = 0
prycg9.style.opacity = 0
prycg10.style.opacity = 0
prycg11.style.opacity = 0
prycg12.style.opacity = 0
prycg13.style.opacity = 0
prycg14.style.opacity = 0
pr2mga1.style.opacity = 0
pr2mga2.style.opacity = 0
pr2mga3.style.opacity = 0
pr2mga4.style.opacity = 0
pr2mga5.style.opacity = 0
pr2mga6.style.opacity = 0
pr2mga7.style.opacity = 0
pr2mga8.style.opacity = 0
pr2mga9.style.opacity = 0
pr2mga10.style.opacity = 0
pr2mga11.style.opacity = 0
pr2mga12.style.opacity = 0
pr2mga13.style.opacity = 0
pr2mga14.style.opacity = 0
pr2mgb1.style.opacity = 0
pr2mgb2.style.opacity = 0
pr2mgb3.style.opacity = 0
pr2mgb4.style.opacity = 0
pr2mgb5.style.opacity = 0
pr2mgb6.style.opacity = 0
pr2mgb7.style.opacity = 0
pr2mgb8.style.opacity = 0
pr2mgb9.style.opacity = 0
pr2mgb10.style.opacity = 0
pr2mgb11.style.opacity = 0
pr2mgb12.style.opacity = 0
pr2mgb13.style.opacity = 0
pr2mgb14.style.opacity = 0
pr2mgc1.style.opacity = 0
pr2mgc2.style.opacity = 0
pr2mgc3.style.opacity = 0
pr2mgc4.style.opacity = 0
pr2mgc5.style.opacity = 0
pr2mgc6.style.opacity = 0
pr2mgc7.style.opacity = 0
pr2mgc8.style.opacity = 0
pr2mgc9.style.opacity = 0
pr2mgc10.style.opacity = 0
pr2mgc11.style.opacity = 0
pr2mgc12.style.opacity = 0
pr2mgc13.style.opacity = 0
pr2mgc14.style.opacity = 0
prrcg1.style.opacity = 0
prrcg2.style.opacity = 0
prrcg3.style.opacity = 0
prrcg4.style.opacity = 0
prrcg5.style.opacity = 0
prrcg6.style.opacity = 0
prrcg7.style.opacity = 0
prrcg8.style.opacity = 0
prrcg9.style.opacity = 0
prrcg10.style.opacity = 0
prrcg11.style.opacity = 0
prrcg12.style.opacity = 0
prrcg13.style.opacity = 0
prrcg14.style.opacity = 0
prbcg1.style.opacity = 0
prbcg2.style.opacity = 0
prbcg3.style.opacity = 0
prbcg4.style.opacity = 0
prbcg5.style.opacity = 0
prbcg6.style.opacity = 0
prbcg7.style.opacity = 0
prbcg8.style.opacity = 0
prbcg9.style.opacity = 0
prbcg10.style.opacity = 0
prbcg11.style.opacity = 0
prbcg12.style.opacity = 0
prbcg13.style.opacity = 0
prbcg14.style.opacity = 0

prycha.style.opacity = 0
prychb.style.opacity = 0
prychc.style.opacity = 0
prychd.style.opacity = 0
pr2mha.style.opacity = 0
pr2mhb.style.opacity = 0
pr2mhc.style.opacity = 0
pr2mhd.style.opacity = 0
prrcha.style.opacity = 0
prrchb.style.opacity = 0
prrchc.style.opacity = 0
prrchd.style.opacity = 0
prbcha.style.opacity = 0
prbchb.style.opacity = 0
prbchc.style.opacity = 0
prbchd.style.opacity = 0

prycga.style.opacity = 0
prycgb.style.opacity = 0
prycgc.style.opacity = 0
prycgd.style.opacity = 0
pr2mga.style.opacity = 0
pr2mgb.style.opacity = 0
pr2mgc.style.opacity = 0
pr2mgd.style.opacity = 0
prrcga.style.opacity = 0
prrcgb.style.opacity = 0
prrcgc.style.opacity = 0
prrcgd.style.opacity = 0
prbcga.style.opacity = 0
prbcgb.style.opacity = 0
prbcgc.style.opacity = 0
prbcgd.style.opacity = 0





const offieditspielleitung = document.getElementById("offieditspielleitung")

var hcolor = "var(--red)"
var gcolor = "var(--blue)"
var toedit = "h1"
var homenrarg1 = "<div class='item4c' id='pr3" /* h/g (home or guest) + id */
var homenrarg2 = "' style='color: rgb(255,255,255);'>" /* number */
var homenrarg3 = "</div>"


colorswitch = function (c,a,b) {
    if (c == "h") {
        colorchooser.style.backgroundColor = a
        colorh1.style.backgroundColor = a
        colorh1.style.color = b
        colorh2.style.backgroundColor = a
        colorh2.style.color = b
        colorh3.style.backgroundColor = a
        colorh3.style.color = b
        colorh4.style.backgroundColor = a
        colorh4.style.color = b
        colorh5.style.backgroundColor = a
        colorh5.style.color = b
        colorh6.style.backgroundColor = a
        colorh6.style.color = b
        colorh7.style.backgroundColor = a
        colorh7.style.color = b
        colorh8.style.backgroundColor = a
        colorh8.style.color = b
        colorh9.style.backgroundColor = a
        colorh9.style.color = b
        colorh10.style.backgroundColor = a
        colorh10.style.color = b
        colorh11.style.backgroundColor = a
        colorh11.style.color = b
        colorh12.style.backgroundColor = a
        colorh12.style.color = b
        colorh13.style.backgroundColor = a
        colorh13.style.color = b
        colorh14.style.backgroundColor = a
        colorh14.style.color = b
        
        pr1h1.style.backgroundColor = a
        pr3h1.style.color = b
        pr1h2.style.backgroundColor = a
        pr3h2.style.color = b
        pr1h3.style.backgroundColor = a
        pr3h3.style.color = b
        pr1h4.style.backgroundColor = a
        pr3h4.style.color = b
        pr1h5.style.backgroundColor = a
        pr3h5.style.color = b
        pr1h6.style.backgroundColor = a
        pr3h6.style.color = b
        pr1h7.style.backgroundColor = a
        pr3h7.style.color = b
        pr1h8.style.backgroundColor = a
        pr3h8.style.color = b
        pr1h9.style.backgroundColor = a
        pr3h9.style.color = b
        pr1h10.style.backgroundColor = a
        pr3h10.style.color = b
        pr1h11.style.backgroundColor = a
        pr3h11.style.color = b
        pr1h12.style.backgroundColor = a
        pr3h12.style.color = b
        pr1h13.style.backgroundColor = a
        pr3h13.style.color = b
        pr1h14.style.backgroundColor = a
        pr3h14.style.color = b
    } else if (c == "g") {
        colorchooser2.style.backgroundColor = a
        colorg1.style.backgroundColor = a
        colorg1.style.color = b
        colorg2.style.backgroundColor = a
        colorg2.style.color = b
        colorg3.style.backgroundColor = a
        colorg3.style.color = b
        colorg4.style.backgroundColor = a
        colorg4.style.color = b
        colorg5.style.backgroundColor = a
        colorg5.style.color = b
        colorg6.style.backgroundColor = a
        colorg6.style.color = b
        colorg7.style.backgroundColor = a
        colorg7.style.color = b
        colorg8.style.backgroundColor = a
        colorg8.style.color = b
        colorg9.style.backgroundColor = a
        colorg9.style.color = b
        colorg10.style.backgroundColor = a
        colorg10.style.color = b
        colorg11.style.backgroundColor = a
        colorg11.style.color = b
        colorg12.style.backgroundColor = a
        colorg12.style.color = b
        colorg13.style.backgroundColor = a
        colorg13.style.color = b
        colorg14.style.backgroundColor = a
        colorg14.style.color = b
        
        pr1g1.style.backgroundColor = a
        pr3g1.style.color = b
        pr1g2.style.backgroundColor = a
        pr3g2.style.color = b
        pr1g3.style.backgroundColor = a
        pr3g3.style.color = b
        pr1g4.style.backgroundColor = a
        pr3g4.style.color = b
        pr1g5.style.backgroundColor = a
        pr3g5.style.color = b
        pr1g6.style.backgroundColor = a
        pr3g6.style.color = b
        pr1g7.style.backgroundColor = a
        pr3g7.style.color = b
        pr1g8.style.backgroundColor = a
        pr3g8.style.color = b
        pr1g9.style.backgroundColor = a
        pr3g9.style.color = b
        pr1g10.style.backgroundColor = a
        pr3g10.style.color = b
        pr1g11.style.backgroundColor = a
        pr3g11.style.color = b
        pr1g12.style.backgroundColor = a
        pr3g12.style.color = b
        pr1g13.style.backgroundColor = a
        pr3g13.style.color = b
        pr1g14.style.backgroundColor = a
        pr3g14.style.color = b
    }
}



colorchooser.onchange = function () {
        if (colorchooser.value == "red")
        {
            colorswitch("h","var(--red)","#fff")
            hcolor = "var(--red)"
        }
        if (colorchooser.value == "orange")
        {
            colorswitch("h","var(--orange)","#fff")
            hcolor = "var(--orange)"
        }
        if (colorchooser.value == "yellow")
        {
            colorswitch("h","var(--yellow)","#fff")
            hcolor = "var(--yellow)"
        }
        if (colorchooser.value == "green")
        {
            colorswitch("h","var(--green)","#fff")
            hcolor = "var(--green)"
        }
        if (colorchooser.value == "cyan")
        {
            colorswitch("h","var(--cyan)","#fff")
            hcolor = "var(--cyan)"
        }
        if (colorchooser.value == "blue")
        {
            colorswitch("h","var(--blue)","#fff")
            hcolor = "var(--blue)"
        }
        if (colorchooser.value == "purple")
        {
            colorswitch("h","var(--purple)","#fff")
            hcolor = "var(--purple)"
        }
        if (colorchooser.value == "pink")
        {
            colorswitch("h","var(--pink)","#fff")
            hcolor = "var(--pink)"
        }
        if (colorchooser.value == "black")
        {
            colorswitch("h","var(--gray-dark)","#fff")
            hcolor = "var(--gray-dark)"
        }
        if (colorchooser.value == "white")
        {
            colorswitch("h","var(--light)","#000")
            hcolor = "var(--light)"
        }
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            width: 500,
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
  
  Toast.fire({
    icon: 'success',
    title: '<div class="toast-teamcolor" id="toast1"></div><div style="margin-left: 2vh" id="toast2"><div>'
  })
  document.getElementById("toast1").style.backgroundColor = hcolor
  document.getElementById("toast2").innerHTML = home_team + " - Farbe geändert"
}

colorchooser2.onchange = function () {
    if (colorchooser2.value == "red")
    {
        colorswitch("g","var(--red)","#fff")
        gcolor = "var(--red)"
    }
    if (colorchooser2.value == "orange")
    {
        colorswitch("g","var(--orange)","#fff")
        gcolor = "var(--orange)"
    }
    if (colorchooser2.value == "yellow")
    {
        colorswitch("g","var(--yellow)","#fff")
        gcolor = "var(--yellow)"
    }
    if (colorchooser2.value == "green")
    {
        colorswitch("g","var(--green)","#fff")
        gcolor = "var(--green)"
    }
    if (colorchooser2.value == "cyan")
    {
        colorswitch("g","var(--cyan)","#fff")
        gcolor = "var(--cyan)"
    }
    if (colorchooser2.value == "blue")
    {
        colorswitch("g","var(--blue)","#fff")
        gcolor = "var(--blue)"
    }
    if (colorchooser2.value == "purple")
    {
        colorswitch("g","var(--purple)","#fff")
        gcolor = "var(--purple)"
    }
    if (colorchooser2.value == "pink")
    {
        colorswitch("g","var(--pink)","#fff")
        gcolor = "var(--pink)"
    }
    if (colorchooser2.value == "black")
    {
        colorswitch("g","var(--gray-dark)","#fff")
        gcolor = "var(--gray-dark)"
    }
    if (colorchooser2.value == "white")
    {
        colorswitch("g","var(--light)","#000")
        gcolor = "var(--light)"
    }

    
        
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        width: 500,
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
      icon: 'success',
      title: '<div class="toast-teamcolor" id="toast1"></div><div style="margin-left: 2vh" id="toast2"><div>'
      })
      document.getElementById("toast1").style.backgroundColor = gcolor
      document.getElementById("toast2").innerHTML = guest_team + " - Farbe geändert"
}


/* Open */
function openNav(a) {
    toedit = a
    if (a == "h1") {
        editlastname.value = a3h1.innerHTML
        editfirstname.value = a6h1.innerHTML
        editnr.value = a4h1.innerHTML
    } else if (a == "h2") {
        editlastname.value = a3h2.innerHTML
        editfirstname.value = a6h2.innerHTML
        editnr.value = a4h2.innerHTML
    } else if (a == "h3") {
        editlastname.value = a3h3.innerHTML
        editfirstname.value = a6h3.innerHTML
        editnr.value = a4h3.innerHTML
    } else if (a == "h4") {
        editlastname.value = a3h4.innerHTML
        editfirstname.value = a6h4.innerHTML
        editnr.value = a4h4.innerHTML
    } else if (a == "h5") {
        editlastname.value = a3h5.innerHTML
        editfirstname.value = a6h5.innerHTML
        editnr.value = a4h5.innerHTML
    } else if (a == "h6") {
        editlastname.value = a3h6.innerHTML
        editfirstname.value = a6h6.innerHTML
        editnr.value = a4h6.innerHTML
    } else if (a == "h7") {
        editlastname.value = a3h7.innerHTML
        editfirstname.value = a6h7.innerHTML
        editnr.value = a4h7.innerHTML
    } else if (a == "h8") {
        editlastname.value = a3h8.innerHTML
        editfirstname.value = a6h8.innerHTML
        editnr.value = a4h8.innerHTML
    } else if (a == "h9") {
        editlastname.value = a3h9.innerHTML
        editfirstname.value = a6h9.innerHTML
        editnr.value = a4h9.innerHTML
    } else if (a == "h10") {
        editlastname.value = a3h10.innerHTML
        editfirstname.value = a6h10.innerHTML
        editnr.value = a4h10.innerHTML
    } else if (a == "h11") {
        editlastname.value = a3h11.innerHTML
        editfirstname.value = a6h11.innerHTML
        editnr.value = a4h11.innerHTML
    } else if (a == "h12") {
        editlastname.value = a3h12.innerHTML
        editfirstname.value = a6h12.innerHTML
        editnr.value = a4h12.innerHTML
    } else if (a == "h13") {
        editlastname.value = a3h13.innerHTML
        editfirstname.value = a6h13.innerHTML
        editnr.value = a4h13.innerHTML
    } else if (a == "h14") {
        editlastname.value = a3h14.innerHTML
        editfirstname.value = a6h14.innerHTML
        editnr.value = a4h14.innerHTML
    } else if (a == "ha") {
        editlastname.value = a3ha.innerHTML
        editfirstname.value = a6ha.innerHTML
        editnr.value = a4ha.innerHTML
    } else if (a == "hb") {
        editlastname.value = a3hb.innerHTML
        editfirstname.value = a6hb.innerHTML
        editnr.value = a4hb.innerHTML
    } else if (a == "hc") {
        editlastname.value = a3hc.innerHTML
        editfirstname.value = a6hc.innerHTML
        editnr.value = a4hc.innerHTML
    } else if (a == "hd") {
        editlastname.value = a3hd.innerHTML
        editfirstname.value = a6hd.innerHTML
        editnr.value = a4hd.innerHTML
    } else if (a == "g1") {
        editlastname.value = a3g1.innerHTML
        editfirstname.value = a6g1.innerHTML
        editnr.value = a4g1.innerHTML
    } else if (a == "g2") {
        editlastname.value = a3g2.innerHTML
        editfirstname.value = a6g2.innerHTML
        editnr.value = a4g2.innerHTML
    } else if (a == "g3") {
        editlastname.value = a3g3.innerHTML
        editfirstname.value = a6g3.innerHTML
        editnr.value = a4g3.innerHTML
    } else if (a == "g4") {
        editlastname.value = a3g4.innerHTML
        editfirstname.value = a6g4.innerHTML
        editnr.value = a4g4.innerHTML
    } else if (a == "g5") {
        editlastname.value = a3g5.innerHTML
        editfirstname.value = a6g5.innerHTML
        editnr.value = a4g5.innerHTML
    } else if (a == "g6") {
        editlastname.value = a3g6.innerHTML
        editfirstname.value = a6g6.innerHTML
        editnr.value = a4g6.innerHTML
    } else if (a == "g7") {
        editlastname.value = a3g7.innerHTML
        editfirstname.value = a6g7.innerHTML
        editnr.value = a4g7.innerHTML
    } else if (a == "g8") {
        editlastname.value = a3g8.innerHTML
        editfirstname.value = a6g8.innerHTML
        editnr.value = a4g8.innerHTML
    } else if (a == "g9") {
        editlastname.value = a3g9.innerHTML
        editfirstname.value = a6g9.innerHTML
        editnr.value = a4g9.innerHTML
    } else if (a == "g10") {
        editlastname.value = a3g10.innerHTML
        editfirstname.value = a6g10.innerHTML
        editnr.value = a4g10.innerHTML
    } else if (a == "g11") {
        editlastname.value = a6g11.innerHTML
        editfirstname.value = a6g11.innerHTML
        editnr.value = a4g11.innerHTML
    } else if (a == "g12") {
        editlastname.value = a3g12.innerHTML
        editfirstname.value = a6g12.innerHTML
        editnr.value = a4g12.innerHTML
    } else if (a == "g13") {
        editlastname.value = a3g13.innerHTML
        editfirstname.value = a6g13.innerHTML
        editnr.value = a4g13.innerHTML
    } else if (a == "g14") {
        editlastname.value = a3g14.innerHTML
        editfirstname.value = a6g14.innerHTML
        editnr.value = a4g14.innerHTML
    } else if (a == "ga") {
        editlastname.value = a3ga.innerHTML
        editfirstname.value = a6ga.innerHTML
        editnr.value = a4ga.innerHTML
    } else if (a == "gb") {
        editlastname.value = a3gb.innerHTML
        editfirstname.value = a6gb.innerHTML
        editnr.value = a4gb.innerHTML
    } else if (a == "gc") {
        editlastname.value = a3gc.innerHTML
        editfirstname.value = a6gc.innerHTML
        editnr.value = a4gc.innerHTML
    } else if (a == "gd") {
        editlastname.value = a3gd.innerHTML
        editfirstname.value = a6gd.innerHTML
        editnr.value = a4gd.innerHTML
    } 
    editlastnamediv.innerHTML = editlastname.value;
    editfirstnamediv.innerHTML = editfirstname.value;
    editnrdiv.innerHTML = editnr.value;
    document.getElementById("myNav").style.display = "block";
    document.getElementById("playereditoverlay").style.display = "block";
    document.getElementById("offieditoverlay").style.display = "none";
  }

  function openONav(a) {
    offiedited = a
    document.getElementById("myNav").style.display = "block";
    document.getElementById("playereditoverlay").style.display = "none";
    document.getElementById("offieditoverlay").style.display = "block";
    if (a == 'sr-a') {
        document.getElementById("oe-title").innerHTML = offisra.title;
        document.getElementById("oe-lastname").value = offisra.lastname;
        document.getElementById("oe-abfahrt").value = offisra.abfahrt;
        document.getElementById("oe-firstname").value = offisra.firstname;
        document.getElementById("oe-heimkehr").value = offisra.heimkehr;
        document.getElementById("oe-birthday").value = offisra.birthday;
        document.getElementById("oe-fahrerkm").value = offisra.fahrerkm;
        document.getElementById("oe-club").value = offisra.verein;
        document.getElementById("oe-mitfahrerkm").value = offisra.mitfahrerkm;
        document.getElementById("oe-licence").value = offisra.licence;
        document.getElementById("oe-spesen").value = offisra.spesen;
        document.getElementById("oe-email").value = offisra.email;
        document.getElementById("oe-spielleitung").value = offisra.spielleitung;
        document.getElementById("oe-summe").value = offisra.summe;
    } else if (a == 'sr-b') {
        console.log(offisrb)
        document.getElementById("oe-title").innerHTML = offisrb.title;
        document.getElementById("oe-lastname").value = offisrb.lastname;
        document.getElementById("oe-abfahrt").value = offisrb.abfahrt;
        document.getElementById("oe-firstname").value = offisrb.firstname;
        document.getElementById("oe-heimkehr").value = offisrb.heimkehr;
        document.getElementById("oe-birthday").value = offisrb.birthday;
        document.getElementById("oe-fahrerkm").value = offisrb.fahrerkm;
        document.getElementById("oe-club").value = offisrb.verein;
        document.getElementById("oe-mitfahrerkm").value = offisrb.mitfahrerkm;
        document.getElementById("oe-licence").value = offisrb.licence;
        document.getElementById("oe-spesen").value = offisrb.spesen;
        document.getElementById("oe-email").value = offisrb.email;
        document.getElementById("oe-spielleitung").value = offisrb.spielleitung;
        document.getElementById("oe-summe").value = offisrb.summe;
    } else if (a == 'zeitn') {
        document.getElementById("oe-title").innerHTML = offizeitn.title;
        document.getElementById("oe-lastname").value = offizeitn.lastname;
        document.getElementById("oe-abfahrt").value = offizeitn.abfahrt;
        document.getElementById("oe-firstname").value = offizeitn.firstname;
        document.getElementById("oe-heimkehr").value = offizeitn.heimkehr;
        document.getElementById("oe-birthday").value = offizeitn.birthday;
        document.getElementById("oe-fahrerkm").value = offizeitn.fahrerkm;
        document.getElementById("oe-club").value = offizeitn.verein;
        document.getElementById("oe-mitfahrerkm").value = offizeitn.mitfahrerkm;
        document.getElementById("oe-licence").value = offizeitn.licence;
        document.getElementById("oe-spesen").value = offizeitn.spesen;
        document.getElementById("oe-email").value = offizeitn.email;
        document.getElementById("oe-spielleitung").value = offizeitn.spielleitung;
        document.getElementById("oe-summe").value = offizeitn.summe;
    } else if (a == 'sekr') {
        document.getElementById("oe-title").innerHTML = offisekr.title;
        document.getElementById("oe-lastname").value = offisekr.lastname;
        document.getElementById("oe-abfahrt").value = offisekr.abfahrt;
        document.getElementById("oe-firstname").value = offisekr.firstname;
        document.getElementById("oe-heimkehr").value = offisekr.heimkehr;
        document.getElementById("oe-birthday").value = offisekr.birthday;
        document.getElementById("oe-fahrerkm").value = offisekr.fahrerkm;
        document.getElementById("oe-club").value = offisekr.verein;
        document.getElementById("oe-mitfahrerkm").value = offisekr.mitfahrerkm;
        document.getElementById("oe-licence").value = offisekr.licence;
        document.getElementById("oe-spesen").value = offisekr.spesen;
        document.getElementById("oe-email").value = offisekr.email;
        document.getElementById("oe-spielleitung").value = offisekr.spielleitung;
        document.getElementById("oe-summe").value = offisekr.summe;
    } else if (a == 'sr-beob') {
        document.getElementById("oe-title").innerHTML = offisrbeob.title;
        document.getElementById("oe-lastname").value = offisrbeob.lastname;
        document.getElementById("oe-abfahrt").value = offisrbeob.abfahrt;
        document.getElementById("oe-firstname").value = offisrbeob.firstname;
        document.getElementById("oe-heimkehr").value = offisrbeob.heimkehr;
        document.getElementById("oe-birthday").value = offisrbeob.birthday;
        document.getElementById("oe-fahrerkm").value = offisrbeob.fahrerkm;
        document.getElementById("oe-club").value = offisrbeob.verein;
        document.getElementById("oe-mitfahrerkm").value = offisrbeob.mitfahrerkm;
        document.getElementById("oe-licence").value = offisrbeob.licence;
        document.getElementById("oe-spesen").value = offisrbeob.spesen;
        document.getElementById("oe-email").value = offisrbeob.email;
        document.getElementById("oe-spielleitung").value = offisrbeob.spielleitung;
        document.getElementById("oe-summe").value = offisrbeob.summe;
    } else if (a == 'aufsicht') {
        document.getElementById("oe-title").innerHTML = offiaufsicht.title;
        document.getElementById("oe-lastname").value = offiaufsicht.lastname;
        document.getElementById("oe-abfahrt").value = offiaufsicht.abfahrt;
        document.getElementById("oe-firstname").value = offiaufsicht.firstname;
        document.getElementById("oe-heimkehr").value = offiaufsicht.heimkehr;
        document.getElementById("oe-birthday").value = offiaufsicht.birthday;
        document.getElementById("oe-fahrerkm").value = offiaufsicht.fahrerkm;
        document.getElementById("oe-club").value = offiaufsicht.verein;
        document.getElementById("oe-mitfahrerkm").value = offiaufsicht.mitfahrerkm;
        document.getElementById("oe-licence").value = offiaufsicht.licence;
        document.getElementById("oe-spesen").value = offiaufsicht.spesen;
        document.getElementById("oe-email").value = offiaufsicht.email;
        document.getElementById("oe-spielleitung").value = offiaufsicht.spielleitung;
        document.getElementById("oe-summe").value = offiaufsicht.summe;
    } else if (a == 't-dele') {
        document.getElementById("oe-title").innerHTML = offitdele.title;
        document.getElementById("oe-lastname").value = offitdele.lastname;
        document.getElementById("oe-abfahrt").value = offitdele.abfahrt;
        document.getElementById("oe-firstname").value = offitdele.firstname;
        document.getElementById("oe-heimkehr").value = offitdele.heimkehr;
        document.getElementById("oe-birthday").value = offitdele.birthday;
        document.getElementById("oe-fahrerkm").value = offitdele.fahrerkm;
        document.getElementById("oe-club").value = offitdele.verein;
        document.getElementById("oe-mitfahrerkm").value = offitdele.mitfahrerkm;
        document.getElementById("oe-licence").value = offitdele.licence;
        document.getElementById("oe-spesen").value = offitdele.spesen;
        document.getElementById("oe-email").value = offitdele.email;
        document.getElementById("oe-spielleitung").value = offitdele.spielleitung;
        document.getElementById("oe-summe").value = offitdele.summe;
    } else if (a == 'ordner') {
        document.getElementById("oe-title").innerHTML = offiordner.title;
        document.getElementById("oe-lastname").value = offiordner.lastname;
        document.getElementById("oe-abfahrt").value = offiordner.abfahrt;
        document.getElementById("oe-firstname").value = offiordner.firstname;
        document.getElementById("oe-heimkehr").value = offiordner.heimkehr;
        document.getElementById("oe-birthday").value = offiordner.birthday;
        document.getElementById("oe-fahrerkm").value = offiordner.fahrerkm;
        document.getElementById("oe-club").value = offiordner.verein;
        document.getElementById("oe-mitfahrerkm").value = offiordner.mitfahrerkm;
        document.getElementById("oe-licence").value = offiordner.licence;
        document.getElementById("oe-spesen").value = offiordner.spesen;
        document.getElementById("oe-email").value = offiordner.email;
        document.getElementById("oe-spielleitung").value = offiordner.spielleitung;
        document.getElementById("oe-summe").value = offiordner.summe;
    }
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }


function lastnameedited() {
    if (toedit == "h1") {
        a3h1.innerHTML = editlastname.value;
        pr2h1.textContent = editlastname.value
        _ = numberrefresh("pr3h1")
        _.textContent = a4h1.innerHTML
        pr2h1.appendChild(_)
    } else if (toedit == "h2") {
        a3h2.innerHTML = editlastname.value;
        pr2h2.innerText = editlastname.value
        _ = numberrefresh("pr3h2")
        _.textContent = a4h2.innerHTML
        pr2h2.appendChild(_)
    } else if (toedit == "h3") {
        a3h3.innerHTML = editlastname.value;
        pr2h3.innerHTML = editlastname.value
        _ = numberrefresh("pr3h3")
        _.textContent = a4h3.innerHTML
        pr2h3.appendChild(_)
    } else if (toedit == "h4") {
        a3h4.innerHTML = editlastname.value;
        pr2h4.innerHTML = editlastname.value
        _ = numberrefresh("pr3h4")
        _.textContent = a4h4.innerHTML
        pr2h4.appendChild(_)
    } else if (toedit == "h5") {
        a3h5.innerHTML = editlastname.value;
        pr2h5.innerHTML = editlastname.value
        _ = numberrefresh("pr3h5")
        _.textContent = a4h5.innerHTML
        pr2h5.appendChild(_)
    } else if (toedit == "h6") {
        a3h6.innerHTML = editlastname.value;
        pr2h6.innerHTML = editlastname.value
        _ = numberrefresh("pr3h6")
        _.textContent = a4h6.innerHTML
        pr2h6.appendChild(_)
    } else if (toedit == "h7") {
        a3h7.innerHTML = editlastname.value;
        pr2h7.innerHTML = editlastname.value
        _ = numberrefresh("pr3h7")
        _.textContent = a4h7.innerHTML
        pr2h7.appendChild(_)
    } else if (toedit == "h8") {
        a3h8.innerHTML = editlastname.value;
        pr2h8.innerHTML = editlastname.value
        _ = numberrefresh("pr3h8")
        _.textContent = a4h8.innerHTML
        pr2h8.appendChild(_)
    } else if (toedit == "h9") {
        a3h9.innerHTML = editlastname.value;
        pr2h9.innerHTML = editlastname.value
        _ = numberrefresh("pr3h9")
        _.textContent = a4h9.innerHTML
        pr2h9.appendChild(_)
    } else if (toedit == "h10") {
        a3h10.innerHTML = editlastname.value;
        pr2h10.innerHTML = editlastname.value
        _ = numberrefresh("pr3h10")
        _.textContent = a4h10.innerHTML
        pr2h10.appendChild(_)
    } else if (toedit == "h11") {
        a3h11.innerHTML = editlastname.value;
        pr2h11.innerHTML = editlastname.value
        _ = numberrefresh("pr3h11")
        _.textContent = a4h11.innerHTML
        pr2h11.appendChild(_)
    } else if (toedit == "h12") {
        a3h12.innerHTML = editlastname.value;
        pr2h12.innerHTML = editlastname.value
        _ = numberrefresh("pr3h12")
        _.textContent = a4h12.innerHTML
        pr2h12.appendChild(_)
    } else if (toedit == "h13") {
        a3h13.innerHTML = editlastname.value;
        pr2h13.innerHTML = editlastname.value
        _ = numberrefresh("pr3h13")
        _.textContent = a4h13.innerHTML
        pr2h13.appendChild(_)
    } else if (toedit == "h14") {
        a3h14.innerHTML = editlastname.value;
        pr2h14.innerHTML = editlastname.value
        _ = numberrefresh("pr3h14")
        _.textContent = a4h14.innerHTML
        pr2h14.appendChild(_)
    } else if (toedit == "ha") {
        a3ha.innerHTML = editlastname.value;
        pr2ha.innerHTML = editlastname.value
        _ = numberrefresh("pr3ha")
        _.textContent = a4ha.innerHTML
        pr2ha.appendChild(_)
    } else if (toedit == "hb") {
        a3hb.innerHTML = editlastname.value;
        pr2hb.innerHTML = editlastname.value
        _ = numberrefresh("pr3hb")
        _.textContent = a4hb.innerHTML
        pr2hb.appendChild(_)
    } else if (toedit == "hc") {
        a3hc.innerHTML = editlastname.value;
        pr2hc.innerHTML = editlastname.value
        _ = numberrefresh("pr3hc")
        _.textContent = a4hc.innerHTML
        pr2hc.appendChild(_)
    } else if (toedit == "hd") {
        a3hd.innerHTML = editlastname.value;
        pr2hd.innerHTML = editlastname.value
        _ = numberrefresh("pr3hd")
        _.textContent = a4hd.innerHTML
        pr2hd.appendChild(_)
    } else if (toedit == "g1") {
        a3g1.innerHTML = editlastname.value;
        pr2g1.innerHTML = editlastname.value
        _ = numberrefresh("pr3g1")
        _.textContent = a4g1.innerHTML
        pr2g1.appendChild(_)
    } else if (toedit == "g2") {
        a3g2.innerHTML = editlastname.value;
        pr2g2.innerHTML = editlastname.value
        _ = numberrefresh("pr3g2")
        _.textContent = a4g2.innerHTML
        pr2g2.appendChild(_)
    } else if (toedit == "g3") {
        a3g3.innerHTML = editlastname.value;
        pr2g3.innerHTML = editlastname.value
        _ = numberrefresh("pr3g3")
        _.textContent = a4g3.innerHTML
        pr2g3.appendChild(_)
    } else if (toedit == "g4") {
        a3g4.innerHTML = editlastname.value;
        pr2g4.innerHTML = editlastname.value
        _ = numberrefresh("pr3g4")
        _.textContent = a4g4.innerHTML
        pr2g4.appendChild(_)
    } else if (toedit == "g5") {
        a3g5.innerHTML = editlastname.value;
        pr2g5.innerHTML = editlastname.value
        _ = numberrefresh("pr3g5")
        _.textContent = a4g5.innerHTML
        pr2g5.appendChild(_)
    } else if (toedit == "g6") {
        a3g6.innerHTML = editlastname.value;
        pr2g6.innerHTML = editlastname.value
        _ = numberrefresh("pr3g6")
        _.textContent = a4g6.innerHTML
        pr2g6.appendChild(_)
    } else if (toedit == "g7") {
        a3g7.innerHTML = editlastname.value;
        pr2g7.innerHTML = editlastname.value
        _ = numberrefresh("pr3g7")
        _.textContent = a4g7.innerHTML
        pr2g7.appendChild(_)
    } else if (toedit == "g8") {
        a3g8.innerHTML = editlastname.value;
        pr2g8.innerHTML = editlastname.value
        _ = numberrefresh("pr3g8")
        _.textContent = a4g8.innerHTML
        pr2g8.appendChild(_)
    } else if (toedit == "g9") {
        pr2g9.innerHTML = editlastname.value
        a3g9.innerHTML = editlastname.value;
        _ = numberrefresh("pr3g9")
        _.textContent = a4g9.innerHTML
        pr2g9.appendChild(_)
    } else if (toedit == "g10") {
        a3g10.innerHTML = editlastname.value;
        pr2g10.innerHTML = editlastname.value
        _ = numberrefresh("pr3g10")
        _.textContent = a4g10.innerHTML
        pr2g10.appendChild(_)
    } else if (toedit == "g11") {
        a3g11.innerHTML = editlastname.value;
        pr2g11.innerHTML = editlastname.value
        _ = numberrefresh("pr3g11")
        _.textContent = a4g11.innerHTML
        pr2g11.appendChild(_)
    } else if (toedit == "g12") {
        a3g12.innerHTML = editlastname.value;
        pr2g12.innerHTML = editlastname.value
        _ = numberrefresh("pr3g12")
        _.textContent = a4g12.innerHTML
        pr2g12.appendChild(_)
    } else if (toedit == "g13") {
        a3g13.innerHTML = editlastname.value;
        pr2g13.innerHTML = editlastname.value
        _ = numberrefresh("pr3g13")
        _.textContent = a4g13.innerHTML
        pr2g13.appendChild(_)
    } else if (toedit == "g14") {
        a3g14.innerHTML = editlastname.value;
        pr2g14.innerHTML = editlastname.value
        _ = numberrefresh("pr3g14")
        _.textContent = a4g14.innerHTML
        pr2g14.appendChild(_)
    } else if (toedit == "ga") {
        a3ga.innerHTML = editlastname.value;
        pr2ga.innerHTML = editlastname.value
        _ = numberrefresh("pr3ga")
        _.textContent = a4ga.innerHTML
        pr2ha.appendChild(_)
    } else if (toedit == "gb") {
        a3gb.innerHTML = editlastname.value;
        pr2gb.innerHTML = editlastname.value
        _ = numberrefresh("pr3gb")
        _.textContent = a4gb.innerHTML
        pr2gb.appendChild(_)
    } else if (toedit == "gc") {
        a3gc.innerHTML = editlastname.value;
        pr2gc.innerHTML = editlastname.value
        _ = numberrefresh("pr3gc")
        _.textContent = a4gc.innerHTML
        pr2gc.appendChild(_)
    } else if (toedit == "gd") {
        a3gd.innerHTML = editlastname.value;
        pr2gd.innerHTML = editlastname.value
        _ = numberrefresh("pr3gd")
        _.textContent = a4gd.innerHTML
        pr2gd.appendChild(_)
    } 
    editlastnamediv.innerHTML = editlastname.value;
}

function firstnameedited() {
    if (toedit == "h1") {
        a6h1.innerHTML = editfirstname.value;
    } else if (toedit == "h2") {
        a6h2.innerHTML = editfirstname.value;
    } else if (toedit == "h3") {
        a6h3.innerHTML = editfirstname.value;
    } else if (toedit == "h4") {
        a6h4.innerHTML = editfirstname.value;
    } else if (toedit == "h5") {
        a6h5.innerHTML = editfirstname.value;
    } else if (toedit == "h6") {
        a6h6.innerHTML = editfirstname.value;
    } else if (toedit == "h7") {
        a6h7.innerHTML = editfirstname.value;
    } else if (toedit == "h8") {
        a6h8.innerHTML = editfirstname.value;
    } else if (toedit == "h9") {
        a6h9.innerHTML = editfirstname.value;
    } else if (toedit == "h10") {
        a6h10.innerHTML = editfirstname.value;
    } else if (toedit == "h11") {
        a6h11.innerHTML = editfirstname.value;
    } else if (toedit == "h12") {
        a6h12.innerHTML = editfirstname.value;
    } else if (toedit == "h13") {
        a6h13.innerHTML = editfirstname.value;
    } else if (toedit == "h14") {
        a6h14.innerHTML = editfirstname.value;
    } else if (toedit == "ha") {
        a6ha.innerHTML = editfirstname.value;
    } else if (toedit == "hb") {
        a6hb.innerHTML = editfirstname.value;
    } else if (toedit == "hc") {
        a6hc.innerHTML = editfirstname.value;
    } else if (toedit == "hd") {
        a6hd.innerHTML = editfirstname.value;
    } else if (toedit == "g1") {
        a6g1.innerHTML = editfirstname.value;
    } else if (toedit == "g2") {
        a6g2.innerHTML = editfirstname.value;
    } else if (toedit == "g3") {
        a6g3.innerHTML = editfirstname.value;
    } else if (toedit == "g4") {
        a6g4.innerHTML = editfirstname.value;
    } else if (toedit == "g5") {
        a6g5.innerHTML = editfirstname.value;
    } else if (toedit == "g6") {
        a6g6.innerHTML = editfirstname.value;
    } else if (toedit == "g7") {
        a6g7.innerHTML = editfirstname.value;
    } else if (toedit == "g8") {
        a6g8.innerHTML = editfirstname.value;
    } else if (toedit == "g9") {
        a6g9.innerHTML = editfirstname.value;
    } else if (toedit == "g10") {
        a6g10.innerHTML = editfirstname.value;
    } else if (toedit == "g11") {
        a6g11.innerHTML = editfirstname.value;
    } else if (toedit == "g12") {
        a6g12.innerHTML = editfirstname.value;
    } else if (toedit == "g13") {
        a6g13.innerHTML = editfirstname.value;
    } else if (toedit == "g14") {
        a6g14.innerHTML = editfirstname.value;
    } else if (toedit == "ga") {
        a6ga.innerHTML = editfirstname.value;
    } else if (toedit == "gb") {
        a6gb.innerHTML = editfirstname.value;
    } else if (toedit == "gc") {
        a6gc.innerHTML = editfirstname.value;
    } else if (toedit == "gd") {
        a6gd.innerHTML = editfirstname.value;
    }
    
    editfirstnamediv.innerHTML = editfirstname.value;
}

function nredited() {
    if (toedit == "h1") {
        a4h1.innerHTML = editnr.value
        pr3h1.textContent = editnr.value
    } else if (toedit == "h2") {
        a4h2.innerHTML = editnr.value
        pr3h2.innerHTML = editnr.value
    } else if (toedit == "h3") {
        a4h3.innerHTML = editnr.value
        pr3h3.innerHTML = editnr.value
    } else if (toedit == "h4") {
        a4h4.innerHTML = editnr.value
        pr3h4.innerHTML = editnr.value
    } else if (toedit == "h5") {
        a4h5.innerHTML = editnr.value
        pr3h5.innerHTML = editnr.value
    } else if (toedit == "h6") {
        a4h6.innerHTML = editnr.value;
        pr3h6.innerHTML = editnr.value;
    } else if (toedit == "h7") {
        a4h7.innerHTML = editnr.value;
        pr3h7.innerHTML = editnr.value;
    } else if (toedit == "h8") {
        a4h8.innerHTML = editnr.value;
        pr3h8.innerHTML = editnr.value;
    } else if (toedit == "h9") {
        a4h9.innerHTML = editnr.value;
        pr3h9.innerHTML = editnr.value;
    } else if (toedit == "h10") {
        a4h10.innerHTML = editnr.value;
        pr3h10.innerHTML = editnr.value;
    } else if (toedit == "h11") {
        a4h11.innerHTML = editnr.value;
        pr3h11.innerHTML = editnr.value;
    } else if (toedit == "h12") {
        a4h12.innerHTML = editnr.value;
        pr3h12.innerHTML = editnr.value;
    } else if (toedit == "h13") {
        a4h13.innerHTML = editnr.value;
        pr3h13.innerHTML = editnr.value;
    } else if (toedit == "h14") {
        a4h14.innerHTML = editnr.value;
        pr3h14.innerHTML = editnr.value;
    } else if (toedit == "ha") {
        a4ha.innerHTML = editnr.value;
        pr3ha.innerHTML = editnr.value;
    } else if (toedit == "hb") {
        a4hb.innerHTML = editnr.value;
        pr3hb.innerHTML = editnr.value;
    } else if (toedit == "hc") {
        a4hc.innerHTML = editnr.value;
        pr3hc.innerHTML = editnr.value;
    } else if (toedit == "hd") {
        a4hd.innerHTML = editnr.value;
        pr3hd.innerHTML = editnr.value;
    } else if (toedit == "g1") {
        a4g1.innerHTML = editnr.value;
        pr3g1.innerHTML = editnr.value;
    } else if (toedit == "g2") {
        a4g2.innerHTML = editnr.value;
        pr3g2.innerHTML = editnr.value;
    } else if (toedit == "g3") {
        a4g3.innerHTML = editnr.value;
        pr3g3.innerHTML = editnr.value;
    } else if (toedit == "g4") {
        a4g4.innerHTML = editnr.value;
        pr3g4.innerHTML = editnr.value;
    } else if (toedit == "g5") {
        a4g5.innerHTML = editnr.value;
        pr3g5.innerHTML = editnr.value;
    } else if (toedit == "g6") {
        a4g6.innerHTML = editnr.value;
        pr3g6.innerHTML = editnr.value;
    } else if (toedit == "g7") {
        a4g7.innerHTML = editnr.value;
        pr3g7.innerHTML = editnr.value;
    } else if (toedit == "g8") {
        a4g8.innerHTML = editnr.value;
        pr3g8.innerHTML = editnr.value;
    } else if (toedit == "g9") {
        a4g9.innerHTML = editnr.value;
        pr3g9.innerHTML = editnr.value;
    } else if (toedit == "g10") {
        a4g10.innerHTML = editnr.value;
        pr3g10.innerHTML = editnr.value;
    } else if (toedit == "g11") {
        a4g11.innerHTML = editnr.value;
        pr3g11.innerHTML = editnr.value;
    } else if (toedit == "g12") {
        a4g12.innerHTML = editnr.value;
        pr3g12.innerHTML = editnr.value;
    } else if (toedit == "g13") {
        a4g13.innerHTML = editnr.value;
        pr3g13.innerHTML = editnr.value;
    } else if (toedit == "g14") {
        a4g14.innerHTML = editnr.value;
        pr3g14.innerHTML = editnr.value;
    } else if (toedit == "ga") {
        a4ga.innerHTML = editnr.value;
        pr3ga.innerHTML = editnr.value;
    } else if (toedit == "gb") {
        a4gb.innerHTML = editnr.value;
        pr3gb.innerHTML = editnr.value;
    } else if (toedit == "gc") {
        a4gc.innerHTML = editnr.value;
        pr3gc.innerHTML = editnr.value;
    } else if (toedit == "gd") {
        a4gd.innerHTML = editnr.value;
        pr3gd.innerHTML = editnr.value;
    } 
    lastnameedited()
    editnrdiv.innerHTML = editnr.value;
}

edittwcheck.onchange = function () {
    if (edittwcheck.checked == true) {
        if (toedit == "h1") {
            colorh1.style.backgroundColor = "var(--blue-dark)"
            colorh1.style.color = "#fff"
            pr1h1.style.backgroundColor = "var(--blue-dark)"
            pr3h1.style.color = "#fff"
        } else if (toedit == "h2") {
            colorh2.style.backgroundColor = "var(--blue-dark)"
            colorh2.style.color = "#fff"
            pr1h2.style.backgroundColor = "var(--blue-dark)"
            pr3h2.style.color = "#fff"
        } else if (toedit == "h3") {
            colorh3.style.backgroundColor = "var(--blue-dark)"
            colorh3.style.color = "#fff"
            pr1h3.style.backgroundColor = "var(--blue-dark)"
            pr3h3.style.color = "#fff"
        } else if (toedit == "h4") {
            colorh4.style.backgroundColor = "var(--blue-dark)"
            colorh4.style.color = "#fff"
            pr1h4.style.backgroundColor = "var(--blue-dark)"
            pr3h4.style.color = "#fff"
        } else if (toedit == "h5") {
            colorh5.style.backgroundColor = "var(--blue-dark)"
            colorh5.style.color = "#fff"
            pr1h5.style.backgroundColor = "var(--blue-dark)"
            pr3h5.style.color = "#fff"
        } else if (toedit == "h6") {
            colorh6.style.backgroundColor = "var(--blue-dark)"
            colorh6.style.color = "#fff"
            pr1h6.style.backgroundColor = "var(--blue-dark)"
            pr3h6.style.color = "#fff"
        } else if (toedit == "h7") {
            colorh7.style.backgroundColor = "var(--blue-dark)"
            colorh7.style.color = "#fff"
            pr1h7.style.backgroundColor = "var(--blue-dark)"
            pr3h7.style.color = "#fff"
        } else if (toedit == "h8") {
            colorh8.style.backgroundColor = "var(--blue-dark)"
            colorh8.style.color = "#fff"
            pr1h8.style.backgroundColor = "var(--blue-dark)"
            pr3h8.style.color = "#fff"
        } else if (toedit == "h9") {
            colorh9.style.backgroundColor = "var(--blue-dark)"
            colorh9.style.color = "#fff"
            pr1h9.style.backgroundColor = "var(--blue-dark)"
            pr3h9.style.color = "#fff"
        } else if (toedit == "h10") {
            colorh10.style.backgroundColor = "var(--blue-dark)"
            colorh10.style.color = "#fff"
            pr1h10.style.backgroundColor = "var(--blue-dark)"
            pr3h10.style.color = "#fff"
        } else if (toedit == "h11") {
            colorh11.style.backgroundColor = "var(--blue-dark)"
            colorh11.style.color = "#fff"
            pr1h11.style.backgroundColor = "var(--blue-dark)"
            pr3h11.style.color = "#fff"
        } else if (toedit == "h12") {
            colorh12.style.backgroundColor = "var(--blue-dark)"
            colorh12.style.color = "#fff"
            pr1h12.style.backgroundColor = "var(--blue-dark)"
            pr3h12.style.color = "#fff"
        } else if (toedit == "h13") {
            colorh13.style.backgroundColor = "var(--blue-dark)"
            colorh13.style.color = "#fff"
            pr1h13.style.backgroundColor = "var(--blue-dark)"
            pr3h13.style.color = "#fff"
        } else if (toedit == "h14") {
            colorh14.style.backgroundColor = "var(--blue-dark)"
            colorh14.style.color = "#fff"
            pr1h14.style.backgroundColor = "var(--blue-dark)"
            pr3h14.style.color = "#fff"
        } else if (toedit == "g1") {
            colorg1.style.backgroundColor = "var(--blue-dark)"
            colorg1.style.color = "#fff"
            pr1g1.style.backgroundColor = "var(--blue-dark)"
            pr3g1.style.color = "#fff"
        } else if (toedit == "g2") {
            colorg2.style.backgroundColor = "var(--blue-dark)"
            colorg2.style.color = "#fff"
            pr1g2.style.backgroundColor = "var(--blue-dark)"
            pr3g2.style.color = "#fff"
        } else if (toedit == "g3") {
            colorg3.style.backgroundColor = "var(--blue-dark)"
            colorg3.style.color = "#fff"
            pr1g3.style.backgroundColor = "var(--blue-dark)"
            pr3g3.style.color = "#fff"
        } else if (toedit == "g4") {
            colorg4.style.backgroundColor = "var(--blue-dark)"
            colorg4.style.color = "#fff"
            pr1g4.style.backgroundColor = "var(--blue-dark)"
            pr3g4.style.color = "#fff"
        } else if (toedit == "g5") {
            colorg5.style.backgroundColor = "var(--blue-dark)"
            colorg5.style.color = "#fff"
            pr1g5.style.backgroundColor = "var(--blue-dark)"
            pr3g5.style.color = "#fff"
        } else if (toedit == "g6") {
            colorg6.style.backgroundColor = "var(--blue-dark)"
            colorg6.style.color = "#fff"
            pr1g6.style.backgroundColor = "var(--blue-dark)"
            pr3g6.style.color = "#fff"
        } else if (toedit == "g7") {
            colorg7.style.backgroundColor = "var(--blue-dark)"
            colorg7.style.color = "#fff"
            pr1g7.style.backgroundColor = "var(--blue-dark)"
            pr3g7.style.color = "#fff"
        } else if (toedit == "g8") {
            colorg8.style.backgroundColor = "var(--blue-dark)"
            colorg8.style.color = "#fff"
            pr1g8.style.backgroundColor = "var(--blue-dark)"
            pr3g8.style.color = "#fff"
        } else if (toedit == "g9") {
            colorg9.style.backgroundColor = "var(--blue-dark)"
            colorg9.style.color = "#fff"
            pr1g9.style.backgroundColor = "var(--blue-dark)"
            pr3g9.style.color = "#fff"
        } else if (toedit == "g10") {
            colorg10.style.backgroundColor = "var(--blue-dark)"
            colorg10.style.color = "#fff"
            pr1g10.style.backgroundColor = "var(--blue-dark)"
            pr3g10.style.color = "#fff"
        } else if (toedit == "g11") {
            colorg11.style.backgroundColor = "var(--blue-dark)"
            colorg11.style.color = "#fff"
            pr1g11.style.backgroundColor = "var(--blue-dark)"
            pr3g11.style.color = "#fff"
        } else if (toedit == "g12") {
            colorg12.style.backgroundColor = "var(--blue-dark)"
            colorg12.style.color = "#fff"
            pr1g12.style.backgroundColor = "var(--blue-dark)"
            pr3g12.style.color = "#fff"
        } else if (toedit == "g13") {
            colorg13.style.backgroundColor = "var(--blue-dark)"
            colorg13.style.color = "#fff"
            pr1g13.style.backgroundColor = "var(--blue-dark)"
            pr3g13.style.color = "#fff"
        } else if (toedit == "g14") {
            colorg14.style.backgroundColor = "var(--blue-dark)"
            colorg14.style.color = "#fff"
            pr1g14.style.backgroundColor = "var(--blue-dark)"
            pr3g14.style.color = "#fff"
        }
    } else  {
        if (toedit == "h1") {
            colorh1.style.backgroundColor = hcolor
            pr1h1.style.backgroundColor = hcolor
        } else if (toedit == "h2") {
            colorh2.style.backgroundColor = hcolor
            pr1h2.style.backgroundColor = hcolor
        } else if (toedit == "h3") {
            colorh3.style.backgroundColor = hcolor
            pr1h3.style.backgroundColor = hcolor
        } else if (toedit == "h4") {
            colorh4.style.backgroundColor = hcolor
            pr1h4.style.backgroundColor = hcolor
        } else if (toedit == "h5") {
            colorh5.style.backgroundColor = hcolor
            pr1h5.style.backgroundColor = hcolor
        } else if (toedit == "h6") {
            colorh6.style.backgroundColor = hcolor
            pr1h6.style.backgroundColor = hcolor
        } else if (toedit == "h7") {
            colorh7.style.backgroundColor = hcolor
            pr1h7.style.backgroundColor = hcolor
        } else if (toedit == "h8") {
            colorh8.style.backgroundColor = hcolor
            pr1h8.style.backgroundColor = hcolor
        } else if (toedit == "h9") {
            colorh9.style.backgroundColor = hcolor
            pr1h9.style.backgroundColor = hcolor
        } else if (toedit == "h10") {
            colorh10.style.backgroundColor = hcolor
            pr1h10.style.backgroundColor = hcolor
        } else if (toedit == "h11") {
            colorh11.style.backgroundColor = hcolor
            pr1h11.style.backgroundColor = hcolor
        } else if (toedit == "h12") {
            colorh12.style.backgroundColor = hcolor
            pr1h12.style.backgroundColor = hcolor
        } else if (toedit == "h13") {
            colorh13.style.backgroundColor = hcolor
            pr1h13.style.backgroundColor = hcolor
        } else if (toedit == "h14") {
            colorh14.style.backgroundColor = hcolor
            pr1h14.style.backgroundColor = hcolor
        } else if (toedit == "g1") {
            colorg1.style.backgroundColor = gcolor
            pr1g1.style.backgroundColor = gcolor
        } else if (toedit == "g2") {
            colorg2.style.backgroundColor = gcolor
            pr1g2.style.backgroundColor = gcolor
        } else if (toedit == "g3") {
            colorg3.style.backgroundColor = gcolor
            pr1g3.style.backgroundColor = gcolor
        } else if (toedit == "g4") {
            colorg4.style.backgroundColor = gcolor
            pr1g4.style.backgroundColor = gcolor
        } else if (toedit == "g5") {
            colorg5.style.backgroundColor = gcolor
            pr1g5.style.backgroundColor = gcolor
        } else if (toedit == "g6") {
            colorg6.style.backgroundColor = gcolor
            pr1g6.style.backgroundColor = gcolor
        } else if (toedit == "g7") {
            colorg7.style.backgroundColor = gcolor
            pr1g7.style.backgroundColor = gcolor
        } else if (toedit == "g8") {
            colorg8.style.backgroundColor = gcolor
            pr1g8.style.backgroundColor = gcolor
        } else if (toedit == "g9") {
            colorg9.style.backgroundColor = gcolor
            pr1g9.style.backgroundColor = gcolor
        } else if (toedit == "g10") {
            colorg10.style.backgroundColor = gcolor
            pr1g10.style.backgroundColor = gcolor
        } else if (toedit == "g11") {
            colorg11.style.backgroundColor = gcolor
            pr1g11.style.backgroundColor = gcolor
        } else if (toedit == "g12") {
            colorg12.style.backgroundColor = gcolor
            pr1g12.style.backgroundColor = gcolor
        } else if (toedit == "g13") {
            colorg13.style.backgroundColor = gcolor
            pr1g13.style.backgroundColor = gcolor
        } else if (toedit == "g14") {
            colorg14.style.backgroundColor = gcolor
            pr1g14.style.backgroundColor = gcolor
        }
    }
}


function numberrefresh(a,b) {
    _ = ""
    _ = document.createElement("div")
    _.setAttribute('class', 'item4c')
    _.setAttribute('id', a)
    _.style.color = '#fff'

    return _
}



function menuguest() {
    document.getElementById("navheim").classList.remove("teammenuselected");
    document.getElementById("navgast").classList.add("teammenuselected");
    document.getElementById("gridheim").style.display = "none";
    document.getElementById("gridgast").style.display = "grid";
} 

function menuheim() {
    document.getElementById("navheim").classList.add("teammenuselected");
    document.getElementById("navgast").classList.remove("teammenuselected");
    document.getElementById("gridheim").style.display = "grid";
    document.getElementById("gridgast").style.display = "none";
} 
menuheim()
colorswitch("h","var(--red)","#fff")
colorswitch("g","var(--blue)","#fff")


function sidemenuopen() {
    if (sidemenuopened == false) {
        document.getElementById("sidemenu").style.display = "block";
        sidemenuopened = true
    } else {
        document.getElementById("sidemenu").style.display = "none";
        sidemenuopened = false
    }
  }

function sidemenuopt(a) {
    if (a == "manns") {
        document.getElementById("spielerauswahl").style.display = "block";
        document.getElementById("spielprotokoll").style.display = "none";
        document.getElementById("offiziellespesen").style.display = "none";
        sidemenuopen()
    } else if (a == "prot") {
        if (guestpininserted == true && homepininserted == true) {
            document.getElementById("spielerauswahl").style.display = "none";
            document.getElementById("spielprotokoll").style.display = "grid";
            document.getElementById("offiziellespesen").style.display = "none";
            sidemenuopen()
        }
    } else if (a == "offi") {
        document.getElementById("spielerauswahl").style.display = "none";
        document.getElementById("spielprotokoll").style.display = "none";
        document.getElementById("offiziellespesen").style.display = "grid";
        sidemenuopen()
    }
}

function coachselected() {
    prottopgoal.classList.add('prottopdisabled')
    prottopmit.classList.add('prottopdisabled')
    prottopohne.classList.add('prottopdisabled')
}
function protounselectall() {
    prottopgoal.classList.remove('prottopdisabled')
    prottopmit.classList.remove('prottopdisabled')
    prottopohne.classList.remove('prottopdisabled')
    protoselected = ""
    pr1h1.style.backgroundColor = hcolor
    pr2h1.style.backgroundColor = "#fff"
    pr2h1.style.color = "#000"

    pr1h2.style.backgroundColor = hcolor
    pr2h2.style.backgroundColor = "#fff"
    pr2h2.style.color = "#000"

    pr1h3.style.backgroundColor = hcolor
    pr2h3.style.backgroundColor = "#fff"
    pr2h3.style.color = "#000"

    pr1h4.style.backgroundColor = hcolor
    pr2h4.style.backgroundColor = "#fff"
    pr2h4.style.color = "#000"

    pr1h5.style.backgroundColor = hcolor
    pr2h5.style.backgroundColor = "#fff"
    pr2h5.style.color = "#000"

    pr1h6.style.backgroundColor = hcolor
    pr2h6.style.backgroundColor = "#fff"
    pr2h6.style.color = "#000"

    pr1h7.style.backgroundColor = hcolor
    pr2h7.style.backgroundColor = "#fff"
    pr2h7.style.color = "#000"

    pr1h8.style.backgroundColor = hcolor
    pr2h8.style.backgroundColor = "#fff"
    pr2h8.style.color = "#000"

    pr1h9.style.backgroundColor = hcolor
    pr2h9.style.backgroundColor = "#fff"
    pr2h9.style.color = "#000"

    pr1h10.style.backgroundColor = hcolor
    pr2h10.style.backgroundColor = "#fff"
    pr2h10.style.color = "#000"

    pr1h11.style.backgroundColor = hcolor
    pr2h11.style.backgroundColor = "#fff"
    pr2h11.style.color = "#000"

    pr1h12.style.backgroundColor = hcolor
    pr2h12.style.backgroundColor = "#fff"
    pr2h12.style.color = "#000"

    pr1h13.style.backgroundColor = hcolor
    pr2h13.style.backgroundColor = "#fff"
    pr2h13.style.color = "#000"

    pr1h14.style.backgroundColor = hcolor
    pr2h14.style.backgroundColor = "#fff"
    pr2h14.style.color = "#000"
    

    pr1g1.style.backgroundColor = gcolor
    pr2g1.style.backgroundColor = "#fff"
    pr2g1.style.color = "#000"

    pr1g2.style.backgroundColor = gcolor
    pr2g2.style.backgroundColor = "#fff"
    pr2g2.style.color = "#000"

    pr1g3.style.backgroundColor = gcolor
    pr2g3.style.backgroundColor = "#fff"
    pr2g3.style.color = "#000"

    pr1g4.style.backgroundColor = gcolor
    pr2g4.style.backgroundColor = "#fff"
    pr2g4.style.color = "#000"

    pr1g5.style.backgroundColor = gcolor
    pr2g5.style.backgroundColor = "#fff"
    pr2g5.style.color = "#000"

    pr1g6.style.backgroundColor = gcolor
    pr2g6.style.backgroundColor = "#fff"
    pr2g6.style.color = "#000"

    pr1g7.style.backgroundColor = gcolor
    pr2g7.style.backgroundColor = "#fff"
    pr2g7.style.color = "#000"

    pr1g8.style.backgroundColor = gcolor
    pr2g8.style.backgroundColor = "#fff"
    pr2g8.style.color = "#000"

    pr1g9.style.backgroundColor = gcolor
    pr2g9.style.backgroundColor = "#fff"
    pr2g9.style.color = "#000"

    pr1g10.style.backgroundColor = gcolor
    pr2g10.style.backgroundColor = "#fff"
    pr2g10.style.color = "#000"

    pr1g11.style.backgroundColor = gcolor
    pr2g11.style.backgroundColor = "#fff"
    pr2g11.style.color = "#000"

    pr1g12.style.backgroundColor = gcolor
    pr2g12.style.backgroundColor = "#fff"
    pr2g12.style.color = "#000"

    pr1g13.style.backgroundColor = gcolor
    pr2g13.style.backgroundColor = "#fff"
    pr2g13.style.color = "#000"

    pr1g14.style.backgroundColor = gcolor
    pr2g14.style.backgroundColor = "#fff"
    pr2g14.style.color = "#000"

    pr1ga.style.backgroundColor = "#13324d"
    pr2ga.style.backgroundColor = "#fff"
    pr2ga.style.color = "#000"

    pr1gb.style.backgroundColor = "#13324d"
    pr2gb.style.backgroundColor = "#fff"
    pr2gb.style.color = "#000"

    pr1gc.style.backgroundColor = "#13324d"
    pr2gc.style.backgroundColor = "#fff"
    pr2gc.style.color = "#000"

    pr1gd.style.backgroundColor = "#13324d"
    pr2gd.style.backgroundColor = "#fff"
    pr2gd.style.color = "#000"


    pr1ha.style.backgroundColor = "#13324d"
    pr2ha.style.backgroundColor = "#fff"
    pr2ha.style.color = "#000"

    pr1hb.style.backgroundColor = "#13324d"
    pr2hb.style.backgroundColor = "#fff"
    pr2hb.style.color = "#000"

    pr1hc.style.backgroundColor = "#13324d"
    pr2hc.style.backgroundColor = "#fff"
    pr2hc.style.color = "#000"

    pr1hd.style.backgroundColor = "#13324d"
    pr2hd.style.backgroundColor = "#fff"
    pr2hd.style.color = "#000"
}

protoselected = ""
protoplayer = ""

pr1h1.onclick = function() {
    if (protoselected != "h1") {
        protounselectall()
        pr1h1.style.backgroundColor = "#13324d"
        pr2h1.style.backgroundColor = "#13324d"
        pr2h1.style.color = "#fff"
        protoselected = "h1"
        protoplayer = a4h1
    } else {
        protounselectall()
    }
    addlog()
}

pr1h2.onclick = function() {
    if (protoselected != "h2") {
        protounselectall()
        pr1h2.style.backgroundColor = "#13324d"
        pr2h2.style.backgroundColor = "#13324d"
        pr2h2.style.color = "#fff"
        protoselected = "h2"
        protoplayer = a4h2
    } else {
        protounselectall()
    }
    addlog()
}

pr1h3.onclick = function() {
    if (protoselected != "h3") {
        protounselectall()
        pr1h3.style.backgroundColor = "#13324d"
        pr2h3.style.backgroundColor = "#13324d"
        pr2h3.style.color = "#fff"
        protoselected = "h3"
        protoplayer = a4h3
    } else {
        protounselectall()
    }
    addlog()
}

pr1h4.onclick = function() {
    if (protoselected != "h4") {
        protounselectall()
        pr1h4.style.backgroundColor = "#13324d"
        pr2h4.style.backgroundColor = "#13324d"
        pr2h4.style.color = "#fff"
        protoselected = "h4"
        protoplayer = a4h4
    } else {
        protounselectall()
    }
    addlog()
}

pr1h5.onclick = function() {
    if (protoselected != "h5") {
        protounselectall()
        pr1h5.style.backgroundColor = "#13324d"
        pr2h5.style.backgroundColor = "#13324d"
        pr2h5.style.color = "#fff"
        protoselected = "h5"
        protoplayer = a4h5
    } else {
        protounselectall()
    }
    addlog()
}

pr1h6.onclick = function() {
    if (protoselected != "h6") {
        protounselectall()
        pr1h6.style.backgroundColor = "#13324d"
        pr2h6.style.backgroundColor = "#13324d"
        pr2h6.style.color = "#fff"
        protoselected = "h6"
        protoplayer = a4h6
    } else {
        protounselectall()
    }
    addlog()
}

pr1h7.onclick = function() {
    if (protoselected != "h7") {
        protounselectall()
        pr1h7.style.backgroundColor = "#13324d"
        pr2h7.style.backgroundColor = "#13324d"
        pr2h7.style.color = "#fff"
        protoselected = "h7"
        protoplayer = a4h7
    } else {
        protounselectall()
    }
    addlog()
}

pr1h8.onclick = function() {
    if (protoselected != "h8") {
        protounselectall()
        pr1h8.style.backgroundColor = "#13324d"
        pr2h8.style.backgroundColor = "#13324d"
        pr2h8.style.color = "#fff"
        protoselected = "h8"
        protoplayer = a4h8
    } else {
        protounselectall()
    }
    addlog()
}

pr1h9.onclick = function() {
    if (protoselected != "h9") {
        protounselectall()
        pr1h9.style.backgroundColor = "#13324d"
        pr2h9.style.backgroundColor = "#13324d"
        pr2h9.style.color = "#fff"
        protoselected = "h9"
        protoplayer = a4h9
    } else {
        protounselectall()
    }
    addlog()
}

pr1h10.onclick = function() {
    if (protoselected != "h10") {
        protounselectall()
        pr1h10.style.backgroundColor = "#13324d"
        pr2h10.style.backgroundColor = "#13324d"
        pr2h10.style.color = "#fff"
        protoselected = "h10"
        protoplayer = a4h10
    } else {
        protounselectall()
    }
    addlog()
}

pr1h11.onclick = function() {
    if (protoselected != "h11") {
        protounselectall()
        pr1h11.style.backgroundColor = "#13324d"
        pr2h11.style.backgroundColor = "#13324d"
        pr2h11.style.color = "#fff"
        protoselected = "h11"
        protoplayer = a4h11
    } else {
        protounselectall()
    }
    addlog()
}

pr1h12.onclick = function() {
    if (protoselected != "h12") {
        protounselectall()
        pr1h12.style.backgroundColor = "#13324d"
        pr2h12.style.backgroundColor = "#13324d"
        pr2h12.style.color = "#fff"
        protoselected = "h12"
        protoplayer = a4h12
    } else {
        protounselectall()
    }
    addlog()
}

pr1h13.onclick = function() {
    if (protoselected != "h13") {
        protounselectall()
        pr1h13.style.backgroundColor = "#13324d"
        pr2h13.style.backgroundColor = "#13324d"
        pr2h13.style.color = "#fff"
        protoselected = "h13"
        protoplayer = a4h13
    } else {
        protounselectall()
    }
    addlog()
}

pr1h14.onclick = function() {
    if (protoselected != "h14") {
        protounselectall()
        pr1h14.style.backgroundColor = "#13324d"
        pr2h14.style.backgroundColor = "#13324d"
        pr2h14.style.color = "#fff"
        protoselected = "h14"
        protoplayer = a4h14
    } else {
        protounselectall()
    }
    addlog()
}

pr1ha.onclick = function() {
    if (protoselected != "ha") {
        protounselectall()
        pr1ha.style.backgroundColor = "#13324d"
        pr2ha.style.backgroundColor = "#13324d"
        pr2ha.style.color = "#fff"
        protoselected = "ha"
        protoplayer = a4ha
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}

pr1hb.onclick = function() {
    if (protoselected != "hb") {
        protounselectall()
        pr1hb.style.backgroundColor = "#13324d"
        pr2hb.style.backgroundColor = "#13324d"
        pr2hb.style.color = "#fff"
        protoselected = "hb"
        protoplayer = a4hb
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}

pr1hc.onclick = function() {
    if (protoselected != "hc") {
        protounselectall()
        pr1hc.style.backgroundColor = "#13324d"
        pr2hc.style.backgroundColor = "#13324d"
        pr2hc.style.color = "#fff"
        protoselected = "hc"
        protoplayer = a4hc
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}

pr1hd.onclick = function() {
    if (protoselected != "hd") {
        protounselectall()
        pr1hd.style.backgroundColor = "#13324d"
        pr2hd.style.backgroundColor = "#13324d"
        pr2hd.style.color = "#fff"
        protoselected = "hd"
        protoplayer = a4hd
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}




pr1g1.onclick = function() {
    if (protoselected != "g1") {
        protounselectall()
        pr1g1.style.backgroundColor = "#13324d"
        pr2g1.style.backgroundColor = "#13324d"
        pr2g1.style.color = "#fff"
        protoselected = "g1"
        protoplayer = a4g1
    } else {
        protounselectall()
    }
    addlog()
}

pr1g2.onclick = function() {
    if (protoselected != "g2") {
        protounselectall()
        pr1g2.style.backgroundColor = "#13324d"
        pr2g2.style.backgroundColor = "#13324d"
        pr2g2.style.color = "#fff"
        protoselected = "g2"
        protoplayer = a4g2
    } else {
        protounselectall()
    }
    addlog()
}

pr1g3.onclick = function() {
    if (protoselected != "g3") {
        protounselectall()
        pr1g3.style.backgroundColor = "#13324d"
        pr2g3.style.backgroundColor = "#13324d"
        pr2g3.style.color = "#fff"
        protoselected = "g3"
        protoplayer = a4g3
    } else {
        protounselectall()
    }
    addlog()
}

pr1g4.onclick = function() {
    if (protoselected != "g4") {
        protounselectall()
        pr1g4.style.backgroundColor = "#13324d"
        pr2g4.style.backgroundColor = "#13324d"
        pr2g4.style.color = "#fff"
        protoselected = "g4"
        protoplayer = a4g4
    } else {
        protounselectall()
    }
    addlog()
}

pr1g5.onclick = function() {
    if (protoselected != "g5") {
        protounselectall()
        pr1g5.style.backgroundColor = "#13324d"
        pr2g5.style.backgroundColor = "#13324d"
        pr2g5.style.color = "#fff"
        protoselected = "g5"
        protoplayer = a4g5
    } else {
        protounselectall()
    }
    addlog()
}

pr1g6.onclick = function() {
    if (protoselected != "g6") {
        protounselectall()
        pr1g6.style.backgroundColor = "#13324d"
        pr2g6.style.backgroundColor = "#13324d"
        pr2g6.style.color = "#fff"
        protoselected = "g6"
        protoplayer = a4g6
    } else {
        protounselectall()
    }
    addlog()
}

pr1g7.onclick = function() {
    if (protoselected != "g7") {
        protounselectall()
        pr1g7.style.backgroundColor = "#13324d"
        pr2g7.style.backgroundColor = "#13324d"
        pr2g7.style.color = "#fff"
        protoselected = "g7"
        protoplayer = a4g7
    } else {
        protounselectall()
    }
    addlog()
}

pr1g8.onclick = function() {
    if (protoselected != "g8") {
        protounselectall()
        pr1g8.style.backgroundColor = "#13324d"
        pr2g8.style.backgroundColor = "#13324d"
        pr2g8.style.color = "#fff"
        protoselected = "g8"
        protoplayer = a4g8
    } else {
        protounselectall()
    }
    addlog()
}

pr1g9.onclick = function() {
    if (protoselected != "g9") {
        protounselectall()
        pr1g9.style.backgroundColor = "#13324d"
        pr2g9.style.backgroundColor = "#13324d"
        pr2g9.style.color = "#fff"
        protoselected = "g9"
        protoplayer = a4g9
    } else {
        protounselectall()
    }
    addlog()
}

pr1g10.onclick = function() {
    if (protoselected != "g10") {
        protounselectall()
        pr1g10.style.backgroundColor = "#13324d"
        pr2g10.style.backgroundColor = "#13324d"
        pr2g10.style.color = "#fff"
        protoselected = "g10"
        protoplayer = a4g10
    } else {
        protounselectall()
    }
    addlog()
}

pr1g11.onclick = function() {
    if (protoselected != "g11") {
        protounselectall()
        pr1g11.style.backgroundColor = "#13324d"
        pr2g11.style.backgroundColor = "#13324d"
        pr2g11.style.color = "#fff"
        protoselected = "g11"
        protoplayer = a4g11
    } else {
        protounselectall()
    }
    addlog()
}

pr1g12.onclick = function() {
    if (protoselected != "g12") {
        protounselectall()
        pr1g12.style.backgroundColor = "#13324d"
        pr2g12.style.backgroundColor = "#13324d"
        pr2g12.style.color = "#fff"
        protoselected = "g12"
        protoplayer = a4g12
    } else {
        protounselectall()
    }
    addlog()
}

pr1g13.onclick = function() {
    if (protoselected != "g13") {
        protounselectall()
        pr1g13.style.backgroundColor = "#13324d"
        pr2g13.style.backgroundColor = "#13324d"
        pr2g13.style.color = "#fff"
        protoselected = "g13"
        protoplayer = a4g13
    } else {
        protounselectall()
    }
    addlog()
}

pr1g14.onclick = function() {
    if (protoselected != "g14") {
        protounselectall()
        pr1g14.style.backgroundColor = "#13324d"
        pr2g14.style.backgroundColor = "#13324d"
        pr2g14.style.color = "#fff"
        protoselected = "g14"
        protoplayer = a4g14
    } else {
        protounselectall()
    }
    addlog()
}



pr1ga.onclick = function() {
    if (protoselected != "ga") {
        protounselectall()
        pr1ga.style.backgroundColor = "#13324d"
        pr2ga.style.backgroundColor = "#13324d"
        pr2ga.style.color = "#fff"
        protoselected = "ga"
        protoplayer = a4ga
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}

pr1gb.onclick = function() {
    if (protoselected != "gb") {
        protounselectall()
        pr1gb.style.backgroundColor = "#13324d"
        pr2gb.style.backgroundColor = "#13324d"
        pr2gb.style.color = "#fff"
        protoselected = "gb"
        protoplayer = a4gb
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}

pr1gc.onclick = function() {
    if (protoselected != "gc") {
        protounselectall()
        pr1gc.style.backgroundColor = "#13324d"
        pr2gc.style.backgroundColor = "#13324d"
        pr2gc.style.color = "#fff"
        protoselected = "gc"
        protoplayer = a4gc
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}

pr1gd.onclick = function() {
    if (protoselected != "gd") {
        protounselectall()
        pr1gd.style.backgroundColor = "#13324d"
        pr2gd.style.backgroundColor = "#13324d"
        pr2gd.style.color = "#fff"
        protoselected = "gd"
        protoplayer = a4gd
        coachselected()
    } else {
        protounselectall()
    }
    addlog()
}



prototopselected = ""

function protounselecttop() {
    prototopselected = ""
    prottopgoal.classList.remove("prototopselected")
    prottopmit.classList.remove("prototopselected")
    prottopohne.classList.remove("prototopselected")
    prottopyc.classList.remove("prototopselected")
    prottop2m.classList.remove("prototopselected")
    prottopmb.classList.remove("prototopselected")
    prottopob.classList.remove("prototopselected")
}

prottopgoal.onclick = function () {
    if (prototopselected != "prottopgoal") {
        protounselecttop()
        prottopgoal.classList.add("prototopselected")
        prototopselected = "prottopgoal"
    } else {
        protounselecttop()
    }
    addlog()
}

prottopmit.onclick = function () {
    if (prototopselected != "prottopmit") {
        protounselecttop()
        prottopmit.classList.add("prototopselected")
        prototopselected = "prottopmit"
    } else {
        protounselecttop()
    }
    addlog()
}

prottopohne.onclick = function () {
    if (prototopselected != "prottopohne") {
        protounselecttop()
        prottopohne.classList.add("prototopselected")
        prototopselected = "prottopohne"
    } else {
        protounselecttop()
    }
    addlog()
}

prottopyc.onclick = function () {
    if (prototopselected != "prottopyc") {
        protounselecttop()
        prottopyc.classList.add("prototopselected")
        prototopselected = "prottopyc"
    } else {
        protounselecttop()
    }
    addlog()
}

prottop2m.onclick = function () {
    if (prototopselected != "prottop2m") {
        protounselecttop()
        prottop2m.classList.add("prototopselected")
        prototopselected = "prottop2m"
    } else {
        protounselecttop()
    }
    addlog()
}

prottopmb.onclick = function () {
    if (prototopselected != "prottopmb") {
        protounselecttop()
        prottopmb.classList.add("prototopselected")
        prototopselected = "prottopmb"
    } else {
        protounselecttop()
    }
    addlog()
}

prottopob.onclick = function () {
    if (prototopselected != "prottopob") {
        protounselecttop()
        prottopob.classList.add("prototopselected")
        prototopselected = "prottopob"
    } else {
        protounselecttop()
    }
    addlog()
}

var verlauf = {
    1: [home_team, "00:00", "1:0", "goal(1)", 83]
}

_x = 0

function addlog() {
    shouldStop = 0
    if (prototopselected != "" && protoselected != "") {

        if (prototopselected == "prottop2m") {
                var swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: "btn btn-primary",
                        cancelButton: "btn btn-danger me-3",
                    },
                    buttonsStyling: false,
                });
                swalWithBootstrapButtons
                    .fire({
                        title: "Bestätigen",
                        text: "2 Minuten Strafe Bestätigen?",
                        icon: "warning",
                        confirmButtonText: "<i class='fas fa-check-circle me-1'></i> Ja",
                        cancelButtonText: "<i class='fas fa-times-circle me-1'></i> Nein",
                        showConfirmButton: true,
                        showCancelButton: true,
                        reverseButtons: true,
                        focusConfirm: true,
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            
                            Swal.fire({
                                icon: "success",
                                title: "Bestätigt!",
                                text: "2 Minuten Strafe",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        logging()
                        }
                    });
        } else
        if (prototopselected == "prottopob") {
            var swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-danger me-3",
                },
                buttonsStyling: false,
            });
            swalWithBootstrapButtons
                .fire({
                    title: "Bestätigen",
                    text: "Disqualifikation ohne Bericht Bestätigen?",
                    icon: "warning",
                    confirmButtonText: "<i class='fas fa-check-circle me-1'></i> Ja",
                    cancelButtonText: "<i class='fas fa-times-circle me-1'></i> Nein",
                    showConfirmButton: true,
                    showCancelButton: true,
                    reverseButtons: true,
                    focusConfirm: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        
                        Swal.fire({
                            icon: "success",
                            title: "Bestätigt!",
                            text: "Disqualifikation ohne Bericht",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    logging()
                    }
                });
        } else
        if (prototopselected == "prottopmb") {
            var swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-danger me-3",
                },
                buttonsStyling: false,
            });
            swalWithBootstrapButtons
                .fire({
                    title: "Bestätigen",
                    text: "Disqualifikation mit Bericht Bestätigen?",
                    icon: "warning",
                    confirmButtonText: "<i class='fas fa-check-circle me-1'></i> Ja",
                    cancelButtonText: "<i class='fas fa-times-circle me-1'></i> Nein",
                    showConfirmButton: true,
                    showCancelButton: true,
                    reverseButtons: true,
                    focusConfirm: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        
                        Swal.fire({
                            icon: "success",
                            title: "Bestätigt!",
                            text: "Disqualifikation mit Bericht",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    logging()
                    }
                });
        } else {logging()}


    }
}

function loggingerror(a) {
    if (a == "yc") {
        Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "Der Spieler hat bereits eine Gelbe Karte.",
            showConfirmButton: false,
            timer: 1500,
        });
    } else if (a == "3yc") {
        Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "Die Mannschaft hat bereits 3 Gelbe Karten.",
            showConfirmButton: false,
            timer: 1500,
        });
    } else if (a == "2m") {
        Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "Der Spieler hat bereits 3 Zeitstrafen.",
            showConfirmButton: false,
            timer: 1500,
        });
    } else if (a == "firsthalf") {
        Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "In der Zweiten Halbzeit soll keine Gelbe Karte gegeben werden.",
            showConfirmButton: false,
            timer: 1500,
        });
    } else if (a == "red") {
        Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "Der Spieler hat bereits eine Rote Karte",
            showConfirmButton: false,
            timer: 1500,
        });
    } else if (a == "blue") {
        Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "Der Spieler hat bereits eine Blaue Karte",
            showConfirmButton: false,
            timer: 1500,
        });
    } else if  (a == "2ma") {
        Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "Der Spieler hat bereits eine Zeitstrafe",
            showConfirmButton: false,
            timer: 1500,
        });
    }
    protounselecttop()
    protounselectall()
}

function logging() {

        if (protoselected == "h1") {
            if (prototopselected == "prottopyc") {
                if (prbch1.style.opacity != 1) {
                    if (prrch1.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych1.style.opacity == 0) {prych1.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch1.style.opacity != 1) {
                    if (prrch1.style.opacity != 1) {
                        if (pr2mhc1.style.opacity != 1) {
                            if (pr2mha1.style.opacity == 0) {pr2mha1.style.opacity = 1;} else
                            if (pr2mhb1.style.opacity == 0) {pr2mhb1.style.opacity = 1;} else
                            if (pr2mhc1.style.opacity == 0) {pr2mhc1.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch1.style.opacity != 1) {
                    if (prrch1.style.opacity != 1) {
                        prrch1.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch1.style.opacity != 1) {
                    prbch1.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "h2") {
            if (prototopselected == "prottopyc") {
                if (prbch2.style.opacity != 1) {
                    if (prrch2.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych2.style.opacity == 0) {prych2.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch2.style.opacity != 1) {
                    if (prrch2.style.opacity != 1) {
                        if (pr2mhc2.style.opacity != 1) {
                            if (pr2mha2.style.opacity == 0) {pr2mha2.style.opacity = 1;} else
                            if (pr2mhb2.style.opacity == 0) {pr2mhb2.style.opacity = 1;} else
                            if (pr2mhc2.style.opacity == 0) {pr2mhc2.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch2.style.opacity != 1) {
                    if (prrch2.style.opacity != 1) {
                        prrch2.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch2.style.opacity != 1) {
                    prbch2.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "h3") {
            if (prototopselected == "prottopyc") {
                if (prbch3.style.opacity != 1) {
                    if (prrch3.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych3.style.opacity == 0) {prych3.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch3.style.opacity != 1) {
                    if (prrch3.style.opacity != 1) {
                        if (pr2mhc3.style.opacity != 1) {
                            if (pr2mha3.style.opacity == 0) {pr2mha3.style.opacity = 1;} else
                            if (pr2mhb3.style.opacity == 0) {pr2mhb3.style.opacity = 1;} else
                            if (pr2mhc3.style.opacity == 0) {pr2mhc3.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch3.style.opacity != 1) {
                    if (prrch3.style.opacity != 1) {
                        prrch3.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch3.style.opacity != 1) {
                    prbch3.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "h4") {
            if (prototopselected == "prottopyc") {
                if (prbch4.style.opacity != 1) {
                    if (prrch4.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych4.style.opacity == 0) {prych4.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch4.style.opacity != 1) {
                    if (prrch4.style.opacity != 1) {
                        if (pr2mhc4.style.opacity != 1) {
                            if (pr2mha4.style.opacity == 0) {pr2mha4.style.opacity = 1;} else
                            if (pr2mhb4.style.opacity == 0) {pr2mhb4.style.opacity = 1;} else
                            if (pr2mhc4.style.opacity == 0) {pr2mhc4.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch4.style.opacity != 1) {
                    if (prrch4.style.opacity != 1) {
                        prrch4.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch4.style.opacity != 1) {
                    prbch4.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h5") {
            if (prototopselected == "prottopyc") {
                if (prbch5.style.opacity != 1) {
                    if (prrch5.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych5.style.opacity == 0) {prych5.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch5.style.opacity != 1) {
                    if (prrch5.style.opacity != 1) {
                        if (pr2mhc5.style.opacity != 1) {
                            if (pr2mha5.style.opacity == 0) {pr2mha5.style.opacity = 1;} else
                            if (pr2mhb5.style.opacity == 0) {pr2mhb5.style.opacity = 1;} else
                            if (pr2mhc5.style.opacity == 0) {pr2mhc5.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch5.style.opacity != 1) {
                    if (prrch5.style.opacity != 1) {
                        prrch5.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch5.style.opacity != 1) {
                    prbch5.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "h6") {
            if (prototopselected == "prottopyc") {
                if (prbch6.style.opacity != 1) {
                    if (prrch6.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych6.style.opacity == 0) {prych6.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch6.style.opacity != 1) {
                    if (prrch6.style.opacity != 1) {
                        if (pr2mhc6.style.opacity != 1) {
                            if (pr2mha6.style.opacity == 0) {pr2mha6.style.opacity = 1;} else
                            if (pr2mhb6.style.opacity == 0) {pr2mhb6.style.opacity = 1;} else
                            if (pr2mhc6.style.opacity == 0) {pr2mhc6.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch6.style.opacity != 1) {
                    if (prrch6.style.opacity != 1) {
                        prrch6.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch6.style.opacity != 1) {
                    prbch6.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h7") {
            if (prototopselected == "prottopyc") {
                if (prbch7.style.opacity != 1) {
                    if (prrch7.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych7.style.opacity == 0) {prych7.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch7.style.opacity != 1) {
                    if (prrch7.style.opacity != 1) {
                        if (pr2mhc7.style.opacity != 1) {
                            if (pr2mha7.style.opacity == 0) {pr2mha7.style.opacity = 1;} else
                            if (pr2mhb7.style.opacity == 0) {pr2mhb7.style.opacity = 1;} else
                            if (pr2mhc7.style.opacity == 0) {pr2mhc7.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch7.style.opacity != 1) {
                    if (prrch7.style.opacity != 1) {
                        prrch7.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch7.style.opacity != 1) {
                    prbch7.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h8") {
            if (prototopselected == "prottopyc") {
                if (prbch8.style.opacity != 1) {
                    if (prrch8.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych8.style.opacity == 0) {prych8.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch8.style.opacity != 1) {
                    if (prrch8.style.opacity != 1) {
                        if (pr2mhc8.style.opacity != 1) {
                            if (pr2mha8.style.opacity == 0) {pr2mha8.style.opacity = 1;} else
                            if (pr2mhb8.style.opacity == 0) {pr2mhb8.style.opacity = 1;} else
                            if (pr2mhc8.style.opacity == 0) {pr2mhc8.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch8.style.opacity != 1) {
                    if (prrch8.style.opacity != 1) {
                        prrch8.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch8.style.opacity != 1) {
                    prbch8.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h9") {
            if (prototopselected == "prottopyc") {
                if (prbch9.style.opacity != 1) {
                    if (prrch9.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych9.style.opacity == 0) {prych9.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch9.style.opacity != 1) {
                    if (prrch9.style.opacity != 1) {
                        if (pr2mhc9.style.opacity != 1) {
                            if (pr2mha9.style.opacity == 0) {pr2mha9.style.opacity = 1;} else
                            if (pr2mhb9.style.opacity == 0) {pr2mhb9.style.opacity = 1;} else
                            if (pr2mhc9.style.opacity == 0) {pr2mhc9.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch9.style.opacity != 1) {
                    if (prrch9.style.opacity != 1) {
                        prrch9.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch9.style.opacity != 1) {
                    prbch9.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h10") {
            if (prototopselected == "prottopyc") {
                if (prbch10.style.opacity != 1) {
                    if (prrch10.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych10.style.opacity == 0) {prych10.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch10.style.opacity != 1) {
                    if (prrch10.style.opacity != 1) {
                        if (pr2mhc10.style.opacity != 1) {
                            if (pr2mha10.style.opacity == 0) {pr2mha10.style.opacity = 1;} else
                            if (pr2mhb10.style.opacity == 0) {pr2mhb10.style.opacity = 1;} else
                            if (pr2mhc10.style.opacity == 0) {pr2mhc10.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch10.style.opacity != 1) {
                    if (prrch10.style.opacity != 1) {
                        prrch10.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch10.style.opacity != 1) {
                    prbch10.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h11") {
            if (prototopselected == "prottopyc") {
                if (prbch11.style.opacity != 1) {
                    if (prrch11.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych11.style.opacity == 0) {prych11.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch11.style.opacity != 1) {
                    if (prrch11.style.opacity != 1) {
                        if (pr2mhc11.style.opacity != 1) {
                            if (pr2mha11.style.opacity == 0) {pr2mha11.style.opacity = 1;} else
                            if (pr2mhb11.style.opacity == 0) {pr2mhb11.style.opacity = 1;} else
                            if (pr2mhc11.style.opacity == 0) {pr2mhc11.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch11.style.opacity != 1) {
                    if (prrch11.style.opacity != 1) {
                        prrch11.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch11.style.opacity != 1) {
                    prbch11.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h12") {
            if (prototopselected == "prottopyc") {
                if (prbch12.style.opacity != 1) {
                    if (prrch12.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych12.style.opacity == 0) {prych12.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch12.style.opacity != 1) {
                    if (prrch12.style.opacity != 1) {
                        if (pr2mhc12.style.opacity != 1) {
                            if (pr2mha12.style.opacity == 0) {pr2mha12.style.opacity = 1;} else
                            if (pr2mhb12.style.opacity == 0) {pr2mhb12.style.opacity = 1;} else
                            if (pr2mhc12.style.opacity == 0) {pr2mhc12.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch12.style.opacity != 1) {
                    if (prrch12.style.opacity != 1) {
                        prrch12.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch12.style.opacity != 1) {
                    prbch12.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else



        if (protoselected == "h13") {
            if (prototopselected == "prottopyc") {
                if (prbch13.style.opacity != 1) {
                    if (prrch13.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych13.style.opacity == 0) {prych13.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch13.style.opacity != 1) {
                    if (prrch13.style.opacity != 1) {
                        if (pr2mhc13.style.opacity != 1) {
                            if (pr2mha13.style.opacity == 0) {pr2mha13.style.opacity = 1;} else
                            if (pr2mhb13.style.opacity == 0) {pr2mhb13.style.opacity = 1;} else
                            if (pr2mhc13.style.opacity == 0) {pr2mhc13.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch13.style.opacity != 1) {
                    if (prrch13.style.opacity != 1) {
                        prrch13.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch13.style.opacity != 1) {
                    prbch13.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        


        if (protoselected == "h14") {
            if (prototopselected == "prottopyc") {
                if (prbch14.style.opacity != 1) {
                    if (prrch14.style.opacity != 1) {
                        if (half == 1) {
                            if (homeyc < 3) {
                                if (prych14.style.opacity == 0) {prych14.style.opacity = 1; homeyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbch14.style.opacity != 1) {
                    if (prrch14.style.opacity != 1) {
                        if (pr2mhc14.style.opacity != 1) {
                            if (pr2mha14.style.opacity == 0) {pr2mha14.style.opacity = 1;} else
                            if (pr2mhb14.style.opacity == 0) {pr2mhb14.style.opacity = 1;} else
                            if (pr2mhc14.style.opacity == 0) {pr2mhc14.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbch14.style.opacity != 1) {
                    if (prrch14.style.opacity != 1) {
                        prrch14.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbch14.style.opacity != 1) {
                    prbch14.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        }









        if (protoselected == "g1") {
            if (prototopselected == "prottopyc") {
                if (prbcg1.style.opacity != 1) {
                    if (prrcg1.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg1.style.opacity == 0) {prycg1.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg1.style.opacity != 1) {
                    if (prrcg1.style.opacity != 1) {
                        if (pr2mgc1.style.opacity != 1) {
                            if (pr2mga1.style.opacity == 0) {pr2mga1.style.opacity = 1;} else
                            if (pr2mgb1.style.opacity == 0) {pr2mgb1.style.opacity = 1;} else
                            if (pr2mgc1.style.opacity == 0) {pr2mgc1.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg1.style.opacity != 1) {
                    if (prrcg1.style.opacity != 1) {
                        prrcg1.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg1.style.opacity != 1) {
                    prbcg1.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "g2") {
            if (prototopselected == "prottopyc") {
                if (prbcg2.style.opacity != 1) {
                    if (prrcg2.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg2.style.opacity == 0) {prycg2.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg2.style.opacity != 1) {
                    if (prrcg2.style.opacity != 1) {
                        if (pr2mgc2.style.opacity != 1) {
                            if (pr2mga2.style.opacity == 0) {pr2mga2.style.opacity = 1;} else
                            if (pr2mgb2.style.opacity == 0) {pr2mgb2.style.opacity = 1;} else
                            if (pr2mgc2.style.opacity == 0) {pr2mgc2.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg2.style.opacity != 1) {
                    if (prrcg2.style.opacity != 1) {
                        prrcg2.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg2.style.opacity != 1) {
                    prbcg2.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "g3") {
            if (prototopselected == "prottopyc") {
                if (prbcg3.style.opacity != 1) {
                    if (prrcg3.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg3.style.opacity == 0) {prycg3.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg3.style.opacity != 1) {
                    if (prrcg3.style.opacity != 1) {
                        if (pr2mgc3.style.opacity != 1) {
                            if (pr2mga3.style.opacity == 0) {pr2mga3.style.opacity = 1;} else
                            if (pr2mgb3.style.opacity == 0) {pr2mgb3.style.opacity = 1;} else
                            if (pr2mgc3.style.opacity == 0) {pr2mgc3.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg3.style.opacity != 1) {
                    if (prrcg3.style.opacity != 1) {
                        prrcg3.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg3.style.opacity != 1) {
                    prbcg3.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g4") {
            if (prototopselected == "prottopyc") {
                if (prbcg4.style.opacity != 1) {
                    if (prrcg4.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg4.style.opacity == 0) {prycg4.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg4.style.opacity != 1) {
                    if (prrcg4.style.opacity != 1) {
                        if (pr2mgc4.style.opacity != 1) {
                            if (pr2mga4.style.opacity == 0) {pr2mga4.style.opacity = 1;} else
                            if (pr2mgb4.style.opacity == 0) {pr2mgb4.style.opacity = 1;} else
                            if (pr2mgc4.style.opacity == 0) {pr2mgc4.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg4.style.opacity != 1) {
                    if (prrcg4.style.opacity != 1) {
                        prrcg4.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg4.style.opacity != 1) {
                    prbcg4.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "g5") {
            if (prototopselected == "prottopyc") {
                if (prbcg5.style.opacity != 1) {
                    if (prrcg5.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg5.style.opacity == 0) {prycg5.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg5.style.opacity != 1) {
                    if (prrcg5.style.opacity != 1) {
                        if (pr2mgc5.style.opacity != 1) {
                            if (pr2mga5.style.opacity == 0) {pr2mga5.style.opacity = 1;} else
                            if (pr2mgb5.style.opacity == 0) {pr2mgb5.style.opacity = 1;} else
                            if (pr2mgc5.style.opacity == 0) {pr2mgc5.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg5.style.opacity != 1) {
                    if (prrcg5.style.opacity != 1) {
                        prrcg5.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg5.style.opacity != 1) {
                    prbcg5.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g6") {
            if (prototopselected == "prottopyc") {
                if (prbcg6.style.opacity != 1) {
                    if (prrcg6.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg6.style.opacity == 0) {prycg6.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg6.style.opacity != 1) {
                    if (prrcg6.style.opacity != 1) {
                        if (pr2mgc6.style.opacity != 1) {
                            if (pr2mga6.style.opacity == 0) {pr2mga6.style.opacity = 1;} else
                            if (pr2mgb6.style.opacity == 0) {pr2mgb6.style.opacity = 1;} else
                            if (pr2mgc6.style.opacity == 0) {pr2mgc6.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg6.style.opacity != 1) {
                    if (prrcg6.style.opacity != 1) {
                        prrcg6.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg6.style.opacity != 1) {
                    prbcg6.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g7") {
            if (prototopselected == "prottopyc") {
                if (prbcg7.style.opacity != 1) {
                    if (prrcg7.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg7.style.opacity == 0) {prycg7.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg7.style.opacity != 1) {
                    if (prrcg7.style.opacity != 1) {
                        if (pr2mgc7.style.opacity != 1) {
                            if (pr2mga7.style.opacity == 0) {pr2mga7.style.opacity = 1;} else
                            if (pr2mgb7.style.opacity == 0) {pr2mgb7.style.opacity = 1;} else
                            if (pr2mgc7.style.opacity == 0) {pr2mgc7.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg7.style.opacity != 1) {
                    if (prrcg7.style.opacity != 1) {
                        prrcg7.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg7.style.opacity != 1) {
                    prbcg7.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g8") {
            if (prototopselected == "prottopyc") {
                if (prbcg8.style.opacity != 1) {
                    if (prrcg8.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg8.style.opacity == 0) {prycg8.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg8.style.opacity != 1) {
                    if (prrcg8.style.opacity != 1) {
                        if (pr2mgc8.style.opacity != 1) {
                            if (pr2mga8.style.opacity == 0) {pr2mga8.style.opacity = 1;} else
                            if (pr2mgb8.style.opacity == 0) {pr2mgb8.style.opacity = 1;} else
                            if (pr2mgc8.style.opacity == 0) {pr2mgc8.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg8.style.opacity != 1) {
                    if (prrcg8.style.opacity != 1) {
                        prrcg8.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg8.style.opacity != 1) {
                    prbcg8.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g9") {
            if (prototopselected == "prottopyc") {
                if (prbcg9.style.opacity != 1) {
                    if (prrcg9.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg9.style.opacity == 0) {prycg9.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg9.style.opacity != 1) {
                    if (prrcg9.style.opacity != 1) {
                        if (pr2mgc9.style.opacity != 1) {
                            if (pr2mga9.style.opacity == 0) {pr2mga9.style.opacity = 1;} else
                            if (pr2mgb9.style.opacity == 0) {pr2mgb9.style.opacity = 1;} else
                            if (pr2mgc9.style.opacity == 0) {pr2mgc9.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg9.style.opacity != 1) {
                    if (prrcg9.style.opacity != 1) {
                        prrcg9.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg9.style.opacity != 1) {
                    prbcg9.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g10") {
            if (prototopselected == "prottopyc") {
                if (prbcg10.style.opacity != 1) {
                    if (prrcg10.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg10.style.opacity == 0) {prycg10.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg10.style.opacity != 1) {
                    if (prrcg10.style.opacity != 1) {
                        if (pr2mgc10.style.opacity != 1) {
                            if (pr2mga10.style.opacity == 0) {pr2mga10.style.opacity = 1;} else
                            if (pr2mgb10.style.opacity == 0) {pr2mgb10.style.opacity = 1;} else
                            if (pr2mgc10.style.opacity == 0) {pr2mgc10.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg10.style.opacity != 1) {
                    if (prrcg10.style.opacity != 1) {
                        prrcg10.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg10.style.opacity != 1) {
                    prbcg10.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g11") {
            if (prototopselected == "prottopyc") {
                if (prbcg11.style.opacity != 1) {
                    if (prrcg11.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg11.style.opacity == 0) {prycg11.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg11.style.opacity != 1) {
                    if (prrcg11.style.opacity != 1) {
                        if (pr2mgc11.style.opacity != 1) {
                            if (pr2mga11.style.opacity == 0) {pr2mga11.style.opacity = 1;} else
                            if (pr2mgb11.style.opacity == 0) {pr2mgb11.style.opacity = 1;} else
                            if (pr2mgc11.style.opacity == 0) {pr2mgc11.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg11.style.opacity != 1) {
                    if (prrcg11.style.opacity != 1) {
                        prrcg11.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg11.style.opacity != 1) {
                    prbcg11.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g12") {
            if (prototopselected == "prottopyc") {
                if (prbcg12.style.opacity != 1) {
                    if (prrcg12.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg12.style.opacity == 0) {prycg12.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg12.style.opacity != 1) {
                    if (prrcg12.style.opacity != 1) {
                        if (pr2mgc12.style.opacity != 1) {
                            if (pr2mga12.style.opacity == 0) {pr2mga12.style.opacity = 1;} else
                            if (pr2mgb12.style.opacity == 0) {pr2mgb12.style.opacity = 1;} else
                            if (pr2mgc12.style.opacity == 0) {pr2mgc12.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg12.style.opacity != 1) {
                    if (prrcg12.style.opacity != 1) {
                        prrcg12.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg12.style.opacity != 1) {
                    prbcg12.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g13") {
            if (prototopselected == "prottopyc") {
                if (prbcg13.style.opacity != 1) {
                    if (prrcg13.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg13.style.opacity == 0) {prycg13.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg13.style.opacity != 1) {
                    if (prrcg13.style.opacity != 1) {
                        if (pr2mgc13.style.opacity != 1) {
                            if (pr2mga13.style.opacity == 0) {pr2mga13.style.opacity = 1;} else
                            if (pr2mgb13.style.opacity == 0) {pr2mgb13.style.opacity = 1;} else
                            if (pr2mgc13.style.opacity == 0) {pr2mgc13.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg13.style.opacity != 1) {
                    if (prrcg13.style.opacity != 1) {
                        prrcg13.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg13.style.opacity != 1) {
                    prbcg13.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else


        if (protoselected == "g14") {
            if (prototopselected == "prottopyc") {
                if (prbcg14.style.opacity != 1) {
                    if (prrcg14.style.opacity != 1) {
                        if (half == 1) {
                            if (guestyc < 3) {
                                if (prycg14.style.opacity == 0) {prycg14.style.opacity = 1; guestyc++;} else {
                                    loggingerror("yc")
                                    return;
                                }
                            } else {
                                loggingerror("3yc")
                                return;
                            }
                        } else {
                            loggingerror("firsthalf")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcg14.style.opacity != 1) {
                    if (prrcg14.style.opacity != 1) {
                        if (pr2mgc14.style.opacity != 1) {
                            if (pr2mga14.style.opacity == 0) {pr2mga14.style.opacity = 1;} else
                            if (pr2mgb14.style.opacity == 0) {pr2mgb14.style.opacity = 1;} else
                            if (pr2mgc14.style.opacity == 0) {pr2mgc14.style.opacity = 1;}
                        } else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcg14.style.opacity != 1) {
                    if (prrcg14.style.opacity != 1) {
                        prrcg14.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcg14.style.opacity != 1) {
                    prbcg14.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else 

        if (protoselected == "ha") {
            if (prototopselected == "prottopyc") {
                if (prbcha.style.opacity != 1) {
                    if (prrcha.style.opacity != 1) {
                        if (pr2mha.style.opacity != 1) {
                        if (prycha.style.opacity == 0) {prycha.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                    } else {
                        loggingerror("2ma")
                        return;
                    }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcha.style.opacity != 1) {
                    if (prrcha.style.opacity != 1) {
                        if (pr2mha.style.opacity == 0) {pr2mha.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcha.style.opacity != 1) {
                    if (prrcha.style.opacity != 1) {
                        prrcha.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcha.style.opacity != 1) {
                    prbcha.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "hb") {
            if (prototopselected == "prottopyc") {
                if (prbchb.style.opacity != 1) {
                    if (prrchb.style.opacity != 1) {
                        if (pr2mhb.style.opacity != 1) {
                        if (prychb.style.opacity == 0) {prychb.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                    } else {
                        loggingerror("2ma")
                        return;
                    }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbchb.style.opacity != 1) {
                    if (prrchb.style.opacity != 1) {
                        if (pr2mhb.style.opacity == 0) {pr2mhb.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbchb.style.opacity != 1) {
                    if (prrchb.style.opacity != 1) {
                        prrchb.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbchb.style.opacity != 1) {
                    prbchb.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "hc") {
            if (prototopselected == "prottopyc") {
                if (prbchc.style.opacity != 1) {
                    if (prrchc.style.opacity != 1) {
                        if (pr2mhc.style.opacity != 1) {
                        if (prychc.style.opacity == 0) {prychc.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                    } else {
                        loggingerror("2ma")
                        return;
                    }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbchc.style.opacity != 1) {
                    if (prrchc.style.opacity != 1) {
                        if (pr2mhc.style.opacity == 0) {pr2mhc.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbchc.style.opacity != 1) {
                    if (prrchc.style.opacity != 1) {
                        prrchc.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbchc.style.opacity != 1) {
                    prbchc.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "hd") {
            if (prototopselected == "prottopyc") {
                if (prbchd.style.opacity != 1) {
                    if (prrchd.style.opacity != 1) {
                        if (pr2mhd.style.opacity != 1) {
                        if (prychd.style.opacity == 0) {prychd.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                    } else {
                        loggingerror("2ma")
                        return;
                    }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbchd.style.opacity != 1) {
                    if (prrchd.style.opacity != 1) {
                        if (pr2mhd.style.opacity == 0) {pr2mhd.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbchd.style.opacity != 1) {
                    if (prrchd.style.opacity != 1) {
                        prrchd.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbchd.style.opacity != 1) {
                    prbchd.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "ga") {
            if (prototopselected == "prottopyc") {
                if (prbcga.style.opacity != 1) {
                    if (prrcga.style.opacity != 1) {
                        if (pr2mga.style.opacity != 1) {
                        if (prycga.style.opacity == 0) {prycga.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                    } else {
                        loggingerror("2ma")
                        return;
                    }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcga.style.opacity != 1) {
                    if (prrcga.style.opacity != 1) {
                        if (pr2mga.style.opacity == 0) {pr2mga.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcga.style.opacity != 1) {
                    if (prrcga.style.opacity != 1) {
                        prrcga.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcga.style.opacity != 1) {
                    prbcga.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "gb") {
            if (prototopselected == "prottopyc") {
                if (prbcgb.style.opacity != 1) {
                    if (prrcgb.style.opacity != 1) {
                        if (pr2mgb.style.opacity != 1) {
                        if (prycgb.style.opacity == 0) {prycgb.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                    } else {
                        loggingerror("2ma")
                        return;
                    }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcgb.style.opacity != 1) {
                    if (prrcgb.style.opacity != 1) {
                        if (pr2mgb.style.opacity == 0) {pr2mgb.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcgb.style.opacity != 1) {
                    if (prrcgb.style.opacity != 1) {
                        prrcgb.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcgb.style.opacity != 1) {
                    prbcgb.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "gc") {
            if (prototopselected == "prottopyc") {
                if (prbcgc.style.opacity != 1) {
                    if (prrcgc.style.opacity != 1) {
                        if (pr2mgc.style.opacity != 1) {
                        if (prycgc.style.opacity == 0) {prycgc.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                    } else {
                        loggingerror("2ma")
                        return;
                    }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcgc.style.opacity != 1) {
                    if (prrcgc.style.opacity != 1) {
                        if (pr2mgc.style.opacity == 0) {pr2mgc.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcgc.style.opacity != 1) {
                    if (prrcgc.style.opacity != 1) {
                        prrcgc.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcgc.style.opacity != 1) {
                    prbcgc.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

        if (protoselected == "gd") {
            if (prototopselected == "prottopyc") {
                if (prbcgd.style.opacity != 1) {
                    if (prrcgd.style.opacity != 1) {
                        if (pr2mgd.style.opacity != 1) {
                        if (prycgd.style.opacity == 0) {prycgd.style.opacity = 1;} else {
                            loggingerror("yc")
                            return;
                        }
                        } else {
                            loggingerror("2ma")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottop2m") {
                
                if (prbcgd.style.opacity != 1) {
                    if (prrcgd.style.opacity != 1) {
                        if (pr2mgd.style.opacity == 0) {pr2mgd.style.opacity = 1;} else {
                            loggingerror("2m")
                            return;
                        }
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopob") {
                
                if (prbcgd.style.opacity != 1) {
                    if (prrcgd.style.opacity != 1) {
                        prrcgd.style.opacity = 1
                    } else {
                        loggingerror("red")
                        return;
                    }
                } else {
                    loggingerror("blue")
                    return;
                }
            } else if (prototopselected == "prottopmb") {
                if (prbcgd.style.opacity != 1) {
                    prbcgd.style.opacity = 1
                    protounselecttop()
                    protounselectall()
                }
            }
        } else

       




    
        _x = _x + 1
        if (protoselected.includes("h") == true) {
            _b = home_team
            if (prototopselected == "prottopgoal") {
                home_score += 1
                scorename2.textContent = home_score + " : " + guest_score
                scorename3.textContent = home_score + " : " + guest_score
            } else if (prototopselected == "prottopmit") {
                home_score += 1
                scorename2.textContent = home_score + " : " + guest_score
                scorename3.textContent = home_score + " : " + guest_score
            }
        } else {
            _b = guest_team
            if (prototopselected == "prottopgoal") {
                guest_score += 1
                scorename2.textContent = home_score + " : " + guest_score
                scorename3.textContent = home_score + " : " + guest_score
            } else if (prototopselected == "prottopmit") {
                guest_score += 1
                scorename2.textContent = home_score + " : " + guest_score
                scorename3.textContent = home_score + " : " + guest_score
            }
        }
        _c = home_score+":"+guest_score
        console.log(_x)
        
        
        
        _d = "0:00"

        if (prototopselected == "prottopgoal") {_e = "Tor"} else
        if (prototopselected == "prottopmit") {_e = "7m mit Tor"} else
        if (prototopselected == "prottopohne") {_e = "7m ohne Tor"} else
        if (prototopselected == "prottopyc") {_e = "Gelbe Karte"} else
        if (prototopselected == "prottopob") {_e = "Disqualifizierung ohne Bericht"} else
        if (prototopselected == "prottopmb") {_e = "Disqualifizierung mit Bericht"} else
        if (prototopselected == "prottop2m") {_e = "2 Minuten"}

        if (protoselected == "h1") {_f = pr3h1.textContent; _g = pr2h1.textContent.replace(_f, "");} else
        if (protoselected == "h2") {_f = pr3h2.textContent; _g = pr2h2.textContent.replace(_f, "");} else
        if (protoselected == "h3") {_f = pr3h3.textContent; _g = pr2h3.textContent.replace(_f, "");} else
        if (protoselected == "h4") {_f = pr3h4.textContent; _g = pr2h4.textContent.replace(_f, "");} else
        if (protoselected == "h5") {_f = pr3h5.textContent; _g = pr2h5.textContent.replace(_f, "");} else
        if (protoselected == "h6") {_f = pr3h6.textContent; _g = pr2h6.textContent.replace(_f, "");} else
        if (protoselected == "h7") {_f = pr3h7.textContent; _g = pr2h7.textContent.replace(_f, "");} else
        if (protoselected == "h8") {_f = pr3h8.textContent; _g = pr2h8.textContent.replace(_f, "");} else
        if (protoselected == "h9") {_f = pr3h9.textContent; _g = pr2h9.textContent.replace(_f, "");} else
        if (protoselected == "h10") {_f = pr3h10.textContent; _g = pr2h10.textContent.replace(_f, "");} else
        if (protoselected == "h11") {_f = pr3h11.textContent; _g = pr2h11.textContent.replace(_f, "");} else
        if (protoselected == "h12") {_f = pr3h12.textContent; _g = pr2h12.textContent.replace(_f, "");} else
        if (protoselected == "h13") {_f = pr3h13.textContent; _g = pr2h13.textContent.replace(_f, "");} else
        if (protoselected == "h14") {_f = pr3h14.textContent; _g = pr2h14.textContent.replace(_f, "");} else
        if (protoselected == "ha") {_f = pr3ha.textContent; _g = pr2ha.textContent.replace(_f, "");} else
        if (protoselected == "hb") {_f = pr3hb.textContent; _g = pr2hb.textContent.replace(_f, "");} else
        if (protoselected == "hc") {_f = pr3hc.textContent; _g = pr2hc.textContent.replace(_f, "");} else
        if (protoselected == "hd") {_f = pr3hd.textContent; _g = pr2hd.textContent.replace(_f, "");} else
        if (protoselected == "g1") {_f = pr3g1.textContent; _g = pr2g1.textContent.replace(_f, "");} else
        if (protoselected == "g2") {_f = pr3g2.textContent; _g = pr2g2.textContent.replace(_f, "");} else
        if (protoselected == "g3") {_f = pr3g3.textContent; _g = pr2g3.textContent.replace(_f, "");} else
        if (protoselected == "g4") {_f = pr3g4.textContent; _g = pr2g4.textContent.replace(_f, "");} else
        if (protoselected == "g5") {_f = pr3g5.textContent; _g = pr2g5.textContent.replace(_f, "");} else
        if (protoselected == "g6") {_f = pr3g6.textContent; _g = pr2g6.textContent.replace(_f, "");} else
        if (protoselected == "g7") {_f = pr3g7.textContent; _g = pr2g7.textContent.replace(_f, "");} else
        if (protoselected == "g8") {_f = pr3g8.textContent; _g = pr2g8.textContent.replace(_f, "");} else
        if (protoselected == "g9") {_f = pr3g9.textContent; _g = pr2g9.textContent.replace(_f, "");} else
        if (protoselected == "g10") {_f = pr3g10.textContent; _g = pr2g10.textContent.replace(_f, "");} else
        if (protoselected == "g11") {_f = pr3g11.textContent; _g = pr2g11.textContent.replace(_f, "");} else
        if (protoselected == "g12") {_f = pr3g12.textContent; _g = pr2g12.textContent.replace(_f, "");} else
        if (protoselected == "g13") {_f = pr3g13.textContent; _g = pr2g13.textContent.replace(_f, "");} else
        if (protoselected == "g14") {_f = pr3g14.textContent; _g = pr2g14.textContent.replace(_f, "");} else
        if (protoselected == "ga") {_f = pr3ga.textContent; _g = pr2ga.textContent.replace(_f, "");} else
        if (protoselected == "gb") {_f = pr3gb.textContent; _g = pr2gb.textContent.replace(_f, "");} else
        if (protoselected == "gc") {_f = pr3gc.textContent; _g = pr2gc.textContent.replace(_f, "");} else
        if (protoselected == "gd") {_f = pr3gd.textContent; _g = pr2gd.textContent;}

        
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            width: 500,
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
  
  Toast.fire({
    icon: 'success',
    title: '<div class="toast-teamcolor" id="toast1"></div><div style="margin-left: 2vh" id="toast2"><div>',
    html: '<div id="toast3"></div>'
  })
  if (_b == home_team) {
    console.log(hcolor)
    document.getElementById("toast1").style.backgroundColor = hcolor
} else {
    console.log(gcolor)
    document.getElementById("toast1").style.backgroundColor = gcolor
}

    document.getElementById("toast2").innerHTML = "Neues Event - " + _b
  document.getElementById("toast3").innerHTML = _d + " - " + _e + " - " + _f + " " + _g

        
        
        protounselecttop()
        protounselectall()
    }

function verlaufevent(a,b,cd) {
    if (b == 1) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        _.setAttribute('class', 'protcolor')
        _.setAttribute('id', a)
        if (protoselected.includes("h") == true) {
            _.style.backgroundColor = hcolor
            _.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspHeim"
        } else {
            _.style.backgroundColor = gcolor
            _.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspGast"
        }
        return _
    } else if (b == 2) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        _.setAttribute('class', 'protstand')
        _.setAttribute('id', a)
        _.textContent = home_score + " : " + guest_score
        return _
    } else if (b == 3) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        _.setAttribute('class', 'protereignis')
        _.setAttribute('id', a)
        if (prototopselected == "prottopgoal") {
            _.textContent = "Tor"
        } else if (prototopselected == "prottopmit") {
            _.textContent = "7m mit Tor"
        } else if (prototopselected == "prottopohne") {
            _.textContent = "7m ohne Tor"
        } else if (prototopselected == "prottopyc") {
            _.textContent = "Verwarnung"
        } else if (prototopselected == "prottop2m") {
            _.textContent = "2 Minuten"
        } else if (prototopselected == "prottopob") {
            _.textContent = "ohne Bericht"
        } else if (prototopselected == "prottopmb") {
            _.textContent = "mit Bericht"
        }
        return _
    } else if (b == 4) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        _.setAttribute('class', 'protspieler')
        _.setAttribute('id', a)
        __ = protoselected.replace('g', '')
        __ = __.replace('h', '')
        _.textContent = __
        return _
    } else if (b == 5) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        return _
    } else if (b == 6) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        _.setAttribute('class', 'protereignis')
        _.setAttribute('id', a)
        _.textContent = "Team Time Out"

        return _
    } else if (b == 7) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        _.setAttribute('class', 'protcolor')
        _.setAttribute('id', a)
        _.style.backgroundColor = hcolor
        _.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspHeim"
        return _
    } else if (b == 8) {
        _ = ""
        _ = document.createElement("div")
        _.setAttribute('class', 'item2a')
        _.setAttribute('class', 'protcolor')
        _.setAttribute('id', a)
        _.style.backgroundColor = gcolor
        _.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspGast"
        return _
    }
    protounselecttop()
    protounselectall()
}

ttoh1.onclick = function() {
    if (ttoh1.classList.contains("ttono") == false ) {
        _a = verlaufevent("verlauf"+_x+1+"-1",7)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-2",5)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-3",6)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-4",5)
        item2.appendChild(_a)

        verlauf[_x+1] = ' '
        ttoh1.classList.add('ttono')
    }
}

ttoh2.onclick = function() {
    if (ttoh2.classList.contains("ttono") == false ) {
        _a = verlaufevent("verlauf"+_x+1+"-1",7)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-2",5)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-3",6)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-4",5)
        item2.appendChild(_a)

        verlauf[_x+1] = ' '
        ttoh2.classList.add('ttono')
    }
}

ttog1.onclick = function() {
    if (ttog1.classList.contains("ttono") == false ) {
        _a = verlaufevent("verlauf"+_x+1+"-1",8)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-2",5)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-3",6)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-4",5)
        item2.appendChild(_a)

        verlauf[_x+1] = ' '
        ttog1.classList.add('ttono')
    }
}

ttog2.onclick = function() {
    if (ttog2.classList.contains("ttono") == false ) {
        _a = verlaufevent("verlauf"+_x+1+"-1",8)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-2",5)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-3",6)
        item2.appendChild(_a)
        
        _a = verlaufevent("verlauf"+_x+"-4",5)
        item2.appendChild(_a)

        verlauf[_x+1] = ' '
        ttog2.classList.add('ttono')
    }
}

function voreinstellungen(a) {
    if (a == 1) {
        document.getElementById("offieditoverlay").style.display = "none";
        document.getElementById("spielleitung").style.display = "block";
    } else {
        document.getElementById("offieditoverlay").style.display = "block";
        document.getElementById("spielleitung").style.display = "none";
    }
} 

function spielleitungchoose(a) {
    offieditspielleitung.value = a
    voreinstellungen(0)
}

function offieditspeichern() {
    a = offiedited
    if (document.getElementById("oe-lastname").value == null) {
        document.getElementById("oe-lastname").value = ""
    }
    if (document.getElementById("oe-abfahrt").value == null) {
        document.getElementById("oe-abfahrt").value = ""
    }
    if (document.getElementById("oe-firstname").value == null) {
        document.getElementById("oe-firstname").value = ""
    }
    if (document.getElementById("oe-heimkehr").value == null) {
        document.getElementById("oe-heimkehr").value = ""
    }
    if (document.getElementById("oe-birthday").value == null) {
        document.getElementById("oe-birthday").value = ""
    }
    if (document.getElementById("oe-fahrerkm").value == null) {
        document.getElementById("oe-fahrerkm").value = ""
    }
    if (document.getElementById("oe-club").value == null) {
        document.getElementById("oe-club").value = ""
    }
    if (document.getElementById("oe-mitfahrerkm").value == null) {
        document.getElementById("oe-mitfahrerkm").value = ""
    }
    if (document.getElementById("oe-licence").value == null) {
        document.getElementById("oe-licence").value = ""
    }
    if (document.getElementById("oe-spesen").value == null) {
        document.getElementById("oe-spesen").value = ""
    }
    if (document.getElementById("oe-email").value == null) {
        document.getElementById("oe-email").value = ""
    }
    if (document.getElementById("oe-spielleitung").value == null) {
        document.getElementById("oe-spielleitung").value = ""
    }
    if (document.getElementById("oe-summe").value == null) {
        document.getElementById("oe-summe").value = ""
    }
    if (a == 'sr-a') {
        offisra.lastname = document.getElementById("oe-lastname").value;
        offisra.abfahrt = document.getElementById("oe-abfahrt").value;
        offisra.firstname = document.getElementById("oe-firstname").value;
        offisra.heimkehr = document.getElementById("oe-heimkehr").value;
        offisra.birthday = document.getElementById("oe-birthday").value;
        offisra.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offisra.verein = document.getElementById("oe-club").value;
        offisra.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offisra.licence = document.getElementById("oe-licence").value;
        offisra.spesen = document.getElementById("oe-spesen").value;
        offisra.email = document.getElementById("oe-email").value;
        offisra.spielleitung = document.getElementById("oe-spielleitung").value;
        offisra.summe = document.getElementById("oe-summe").value;
        a3o1.innerHTML = offisra.firstname + " " + offisra.lastname
        a6o1.innerHTML = offisra.verein
        a7o1.innerHTML = "Kosten: "+offisra.summe+"€"
        a8o1.innerHTML = ""
    } else if (a == 'sr-b') {
        offisrb.lastname = document.getElementById("oe-lastname").value;
        offisrb.abfahrt = document.getElementById("oe-abfahrt").value;
        offisrb.firstname = document.getElementById("oe-firstname").value;
        offisrb.heimkehr = document.getElementById("oe-heimkehr").value;
        offisrb.birthday = document.getElementById("oe-birthday").value;
        offisrb.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offisrb.verein = document.getElementById("oe-club").value;
        offisrb.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offisrb.licence = document.getElementById("oe-licence").value;
        offisrb.spesen = document.getElementById("oe-spesen").value;
        offisrb.email = document.getElementById("oe-email").value;
        offisrb.spielleitung = document.getElementById("oe-spielleitung").value;
        offisrb.summe = document.getElementById("oe-summe").value;
        a3o2.innerHTML = offisrb.firstname + " " + offisrb.lastname
        a6o2.innerHTML = offisrb.verein
        a7o2.innerHTML = "Kosten: "+offisrb.summe+"€"
        a8o2.innerHTML = ""
    } else if (a == 'zeitn') {
        offizeitn.lastname = document.getElementById("oe-lastname").value;
        offizeitn.abfahrt = document.getElementById("oe-abfahrt").value;
        offizeitn.firstname = document.getElementById("oe-firstname").value;
        offizeitn.heimkehr = document.getElementById("oe-heimkehr").value;
        offizeitn.birthday = document.getElementById("oe-birthday").value;
        offizeitn.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offizeitn.verein = document.getElementById("oe-club").value;
        offizeitn.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offizeitn.licence = document.getElementById("oe-licence").value;
        offizeitn.spesen = document.getElementById("oe-spesen").value;
        offizeitn.email = document.getElementById("oe-email").value;
        offizeitn.spielleitung = document.getElementById("oe-spielleitung").value;
        offizeitn.summe = document.getElementById("oe-summe").value;
        a3o3.innerHTML = offizeitn.firstname + " " + offizeitn.lastname
        a6o3.innerHTML = offizeitn.verein
        a7o3.innerHTML = "Kosten: "+offizeitn.summe+"€"
        a8o3.innerHTML = ""
    } else if (a == 'sekr') {
        offisekr.lastname = document.getElementById("oe-lastname").value;
        offisekr.abfahrt = document.getElementById("oe-abfahrt").value;
        offisekr.firstname = document.getElementById("oe-firstname").value;
        offisekr.heimkehr = document.getElementById("oe-heimkehr").value;
        offisekr.birthday = document.getElementById("oe-birthday").value;
        offisekr.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offisekr.verein = document.getElementById("oe-club").value;
        offisekr.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offisekr.licence = document.getElementById("oe-licence").value;
        offisekr.spesen = document.getElementById("oe-spesen").value;
        offisekr.email = document.getElementById("oe-email").value;
        offisekr.spielleitung = document.getElementById("oe-spielleitung").value;
        offisekr.summe = document.getElementById("oe-summe").value;
        a3o4.innerHTML = offisekr.firstname + " " + offisekr.lastname
        a6o4.innerHTML = offisekr.verein
        a7o4.innerHTML = "Kosten: "+offisekr.summe+"€"
        a8o4.innerHTML = ""
    } else if (a == 'sr-beob') {
        offisrbeob.lastname = document.getElementById("oe-lastname").value;
        offisrbeob.abfahrt = document.getElementById("oe-abfahrt").value;
        offisrbeob.firstname = document.getElementById("oe-firstname").value;
        offisrbeob.heimkehr = document.getElementById("oe-heimkehr").value;
        offisrbeob.birthday = document.getElementById("oe-birthday").value;
        offisrbeob.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offisrbeob.verein = document.getElementById("oe-club").value;
        offisrbeob.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offisrbeob.licence = document.getElementById("oe-licence").value;
        offisrbeob.spesen = document.getElementById("oe-spesen").value;
        offisrbeob.email = document.getElementById("oe-email").value;
        offisrbeob.spielleitung = document.getElementById("oe-spielleitung").value;
        offisrbeob.summe = document.getElementById("oe-summe").value;
        a3o5.innerHTML = offisrbeob.firstname + " " + offisrbeob.lastname
        a6o5.innerHTML = offisrbeob.verein
        a7o5.innerHTML = "Kosten: "+offisrbeob.summe+"€"
        a8o5.innerHTML = ""
    } else if (a == 'aufsicht') {
        offiaufsicht.lastname = document.getElementById("oe-lastname").value;
        offiaufsicht.abfahrt = document.getElementById("oe-abfahrt").value;
        offiaufsicht.firstname = document.getElementById("oe-firstname").value;
        offiaufsicht.heimkehr = document.getElementById("oe-heimkehr").value;
        offiaufsicht.birthday = document.getElementById("oe-birthday").value;
        offiaufsicht.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offiaufsicht.verein = document.getElementById("oe-club").value;
        offiaufsicht.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offiaufsicht.licence = document.getElementById("oe-licence").value;
        offiaufsicht.spesen = document.getElementById("oe-spesen").value;
        offiaufsicht.email = document.getElementById("oe-email").value;
        offiaufsicht.spielleitung = document.getElementById("oe-spielleitung").value;
        offiaufsicht.summe = document.getElementById("oe-summe").value;
        a3o6.innerHTML = offiaufsicht.firstname + " " + offiaufsicht.lastname
        a6o6.innerHTML = offiaufsicht.verein
        a7o6.innerHTML = "Kosten: "+offiaufsicht.summe+"€"
        a8o6.innerHTML = ""
    } else if (a == 't-dele') {
        offitdele.lastname = document.getElementById("oe-lastname").value;
        offitdele.abfahrt = document.getElementById("oe-abfahrt").value;
        offitdele.firstname = document.getElementById("oe-firstname").value;
        offitdele.heimkehr = document.getElementById("oe-heimkehr").value;
        offitdele.birthday = document.getElementById("oe-birthday").value;
        offitdele.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offitdele.verein = document.getElementById("oe-club").value;
        offitdele.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offitdele.licence = document.getElementById("oe-licence").value;
        offitdele.spesen = document.getElementById("oe-spesen").value;
        offitdele.email = document.getElementById("oe-email").value;
        offitdele.spielleitung = document.getElementById("oe-spielleitung").value;
        offitdele.summe = document.getElementById("oe-summe").value;
        a3o7.innerHTML = offitdele.firstname + " " + offitdele.lastname
        a6o7.innerHTML = offitdele.verein
        a7o7.innerHTML = "Kosten: "+offitdele.summe+"€"
        a8o7.innerHTML = ""
    } else if (a == 'ordner') {
        offiordner.lastname = document.getElementById("oe-lastname").value;
        offiordner.abfahrt = document.getElementById("oe-abfahrt").value;
        offiordner.firstname = document.getElementById("oe-firstname").value;
        offiordner.heimkehr = document.getElementById("oe-heimkehr").value;
        offiordner.birthday = document.getElementById("oe-birthday").value;
        offiordner.fahrerkm = document.getElementById("oe-fahrerkm").value;
        offiordner.verein = document.getElementById("oe-club").value;
        offiordner.mitfahrerkm = document.getElementById("oe-mitfahrerkm").value;
        offiordner.licence = document.getElementById("oe-licence").value;
        offiordner.spesen = document.getElementById("oe-spesen").value;
        offiordner.email = document.getElementById("oe-email").value;
        offiordner.spielleitung = document.getElementById("oe-spielleitung").value;
        offiordner.summe = document.getElementById("oe-summe").value;
        a3o8.innerHTML = offiordner.firstname + " " + offiordner.lastname
        a6o8.innerHTML = offiordner.verein
        a7o8.innerHTML = "Kosten: "+offiordner.summe+"€"
        a8o8.innerHTML = ""
    }

    closeNav()
}


function pinInsert(a) {
    if (a == "home1") {
        if (homepin1.value == pinhome) {


            homepin1.style.display = "none"
            homepinbutton1.style.display = "none"
            homepincancel1.style.display = "block"
            const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)

        
            toastTeamcolor2.style.backgroundColor = hcolor

            toastHead2.innerHTML = home_team + " - Aufstellung Unterschrieben"
            toastBootstrap2.show()
            homepininserted = true;
        } else {
            
            const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)

        
            toastTeamcolor2.style.backgroundColor = hcolor

            toastHead2.innerHTML = " Falsche PIN"
            toastBootstrap2.show()
        }
    } else if (a == "cancelhome1") {


        homepin1.style.display = "block"
        homepin1.value = ""
        homepinbutton1.style.display = "block"
        homepincancel1.style.display = "none"
        const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)

    
        toastTeamcolor2.style.backgroundColor = hcolor

        toastHead2.innerHTML = home_team + " - Unterschrift Zurückgenommen"
        toastBootstrap2.show()
        homepininserted = false;

    } else if (a == "guest1") {
        if (guestpin1.value == pinguest) {


            guestpin1.style.display = "none"
            guestpinbutton1.style.display = "none"
            guestpincancel1.style.display = "block"
            const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)

        
            toastTeamcolor2.style.backgroundColor = gcolor

            toastHead2.innerHTML = guest_team + " - Aufstellung Unterschrieben"
            toastBootstrap2.show()
            guestpininserted = true;
        } else {
            
            const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)

        
            toastTeamcolor2.style.backgroundColor = hcolor

            toastHead2.innerHTML = " Falsche PIN"
            toastBootstrap2.show()
        }
    } else if (a == "cancelguest1") {


        guestpin1.style.display = "block"
        guestpin1.value = ""
        guestpinbutton1.style.display = "block"
        guestpincancel1.style.display = "none"
        const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)

    
        toastTeamcolor2.style.backgroundColor = gcolor

        toastHead2.innerHTML = guest_team + " - Unterschrift Zurückgenommen"
        toastBootstrap2.show()
        guestpininserted = false;

    }

    if (guestpininserted == true && homepininserted == true) {
        sidemenuspielprotokoll.classList.remove("spielprotokolloff")
    } else {
        sidemenuspielprotokoll.classList.add("spielprotokolloff")
    }
}


function connectoption() {
    Swal.fire({
        title: 'Mit Welchem Service Verbinden?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        confirmButtonText: 'Snow Broadcast',
        denyButtonColor: '#007bff',
        denyButtonText: `Snow Action`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}