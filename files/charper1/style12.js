/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head2'>��������</span> - ��� ���������������� ������� ������������� ����, ��������������� ��� ������������� ��� <span class='head2'>�������������� �������������</span> <span class='index'>R</span>."
  var t1 ="<span class='head2'>����������� �������</span> - ��� ���������������� ������� ����, ��������������� ��� ������������� ��� <span class='head2'>������������� </span><span class='index'>L</span>."
   var t2 ="<span class='head2'>�����������</span> - ��� ���������������� ������� ����, ��������������� ��� ������������� ��� <span class='head2'>�������</span> <span class='index'>�</span>."

Text[0]=[":: �������� ::",t0]
Text[1]=[":: ����������� ������� ::",t1]
Text[2]=[":: ����������� ::",t2]

Style[0]=["white","black","black","#FFFFFF","","","center","","","Verdana","center","",2,2,"80%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

