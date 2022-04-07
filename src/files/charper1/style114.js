/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head2'>Источник энергии</span><span class='text'> - это активный элемент электрической цепи, в котором преобрзуются различные виды энергии в электрическую.<br>Это генераторы электрических станций, аккумуляторные и солнечные батареи, термопары и др. </span>"
  var t1 ="<span class='head2'>Приёмники энергии</span> - это пассивные элементы, в которых преобразуется электрическая энергия в другие виды: в тепловую (нагревательные элементы), механическую (электрические двигатели), световую (люминесцентные лампы),  химическую (гальванические ванны) и др.<br>"
   var t2 ="<span class='head2'>Вспомогательные элементы электрической цепи</span> - это выключатели, предохранители, резистивные регуляторы тока, измерительные приборы, разъемы и др. "

Text[0]=[":: Источник энергии ::",t0]
Text[1]=[":: Приёмники энергии ::",t1]
Text[2]=[":: Вспомогательные элементы электрической цепи ::",t2]

Style[0]=["white","black","black","#FFFFFF","","","center","","","Verdana","center","",2,2,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

