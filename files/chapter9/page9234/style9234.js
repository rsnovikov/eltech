/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
var t0 ="<span class='head2'> <img  src='page9234/images/image95a.jpg'  hspace='0' vspace='0' border='0'>"
var t1 ="<span class='head2'> <img  src='page9234/images/image95b.jpg'  hspace='0' vspace='0' border='0'>"
var t2 ="<span class='head2'> <img  src='page9234/images/image95b[line 1].jpg'  hspace='0' vspace='0' border='0'>"
var t3 ="<span class='head2'> <img  src='page9234/images/image95b[line 2].jpg'  hspace='0' vspace='0' border='0'>"


Text[0]=[":: ????????? ?????????? ??????????? (???. 9.5, ?) ::",t0]
Text[1]=[":: ??????? ?????????????? (???. 9.5, ?)  ::",t1]
Text[2]=[":: ??????? ?????????????? (???. 9.5, ?) ?????? 1::",t2]
Text[3]=[":: ??????? ?????????????? (???. 9.5, ?) ?????? 2::",t3]


Style[0]=["white","black","black","white","","","center","center","","Verdana","center","",2,2,"50%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

