/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head2'>Ток <em>I </em> = 1 A</span> равен заряду <span class='index'>Q</span> = 1 Кл = 6,24<span class='symbol'>Ч</span>10<span class='stepen'>18</span> электронов, проходящему через поперечное сечение проводника за время <span class='index'>t</span> = 1 с. "
  var t1 ="<span class='head2'>Ампер</span> - это электрический ток, который проходя по двум прямолинейным параллельным бесконечным проводникам, расположенным на расстоянии 1 м друг от друга, вызывает на каждом участке длиной 1 м силу взаимодействия 2<span class='symbol'>Ч</span>10<span class='stepen'>-7</span> Н. "
   var t2 ="<span class='head2'>Напряжение</span> <span class='index'>U</span> = 1 В равно энергии <span class='index'>W</span> = 1 Дж, затраченной на перемещение заряда <em>Q </em> = 1 Кл из одной точки проводника в другую."
    var t3 ="<span class='head2'>Вольт</span> - это напряжение (разность потенциалов) таких двух точек поля (проводника), для которых перемещение заряда в 1 Кл из одной точки в другую требует совершения работы в 1 Дж. "
   var t4 ="<span class='head2'>Электродвижущая сила </span><span class='index'>E</span> = 1 В численно равна работе <span class='index'>E</span> = 1 Дж, затрачиваемой сторонним полем на перемещение заряда <span class='index'>Q</span> = 1 Кл из одной точки поля (проводника) в другую. "
var t5 = "<span class='head2'>Напряжённость элекрического поля </span><img  src='images/image030.gif' width=14 height=17 hspace='0' vspace='0' border='0'> = 1 В/м</span> численно равна силе в 1 Н, действующей со стороны поля на положительный точечный заряд в 1 Кл."

Text[0]=[":: Ток I = 1 А ::",t0]
Text[1]=[":: Ампер ::",t1]
Text[2]=[":: Напряжение U = 1 В ::",t2]
Text[3]=[":: Вольт ::",t3]
Text[4]=[":: Электродвижущая сила (ЭДС) Е = 1В ::",t4]
Text[5]=[":: Напряжённость ::",t5]

Style[0]=["white","black","black","white","","","center","","","Verdana","center","",2,2,"90%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

