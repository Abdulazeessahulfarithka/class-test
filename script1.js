var table=document.createElement("table")
table.setAttribute("class","table");

var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark")

var tr=document.createElement("tr")

var th1=document.createElement("th")
th1.setAttribute("scope","col")
th1.innerHTML="first";

var th2=document.createElement("th")
th2.setAttribute("scope","col")
th2.innerHTML="second";

var th3=document.createElement("th")
th3.setAttribute("scope","col")
th3.innerHTML="third";

var tbody=document.createElement("tbody")
thead.setAttribute("class","tbody")

var trb=document.createElement("tr")

var td1=document.createElement("td")
td1="mark";

var td2=document.createElement("td")
td2.innerHTML="otto";

var td3=document.createElement("td")
td3.innerHTML="@mdo";

trb.append(td1,td2,td3);
tbody.append(trb);
tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead,tbody);
document.body.append(table);