/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 
 var t0 ="<span class='head2'>��� <em>I </em> = 1 A</span> ����� ������ <span class='index'>Q</span> = 1 �� = 6,24<span class='symbol'>�</span>10<span class='stepen'>18</span> ����������, ����������� ����� ���������� ������� ���������� �� ����� <span class='index'>t</span> = 1 �. "
  var t1 ="<span class='head2'>�����</span> - ��� ������������� ���, ������� ������� �� ���� ������������� ������������ ����������� �����������, ������������� �� ���������� 1 � ���� �� �����, �������� �� ������ ������� ������ 1 � ���� �������������� 2<span class='symbol'>�</span>10<span class='stepen'>-7</span> �. "
   var t2 ="<span class='head2'>����������</span> <span class='index'>U</span> = 1 � ����� ������� <span class='index'>W</span> = 1 ��, ����������� �� ����������� ������ <em>Q </em> = 1 �� �� ����� ����� ���������� � ������."
    var t3 ="<span class='head2'>�����</span> - ��� ���������� (�������� �����������) ����� ���� ����� ���� (����������), ��� ������� ����������� ������ � 1 �� �� ����� ����� � ������ ������� ���������� ������ � 1 ��. "
   var t4 ="<span class='head2'>��������������� ���� </span><span class='index'>E</span> = 1 � �������� ����� ������ <span class='index'>E</span> = 1 ��, ������������� ��������� ����� �� ����������� ������ <span class='index'>Q</span> = 1 �� �� ����� ����� ���� (����������) � ������. "
var t5 = "<span class='head2'>������������ ������������� ���� </span><img  src='images/image030.gif' width=14 height=17 hspace='0' vspace='0' border='0'> = 1 �/�</span> �������� ����� ���� � 1 �, ����������� �� ������� ���� �� ������������� �������� ����� � 1 ��."

Text[0]=[":: ��� I = 1 � ::",t0]
Text[1]=[":: ����� ::",t1]
Text[2]=[":: ���������� U = 1 � ::",t2]
Text[3]=[":: ����� ::",t3]
Text[4]=[":: ��������������� ���� (���) � = 1� ::",t4]
Text[5]=[":: ������������ ::",t5]

Style[0]=["white","black","black","white","","","center","","","Verdana","center","",2,2,"90%",,1,20,0,10,51,1,100,"complex","gray"]

applyCssFilter()

