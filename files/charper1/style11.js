/*
Please refer to readme.html for full Instructions

Text[...]=[title,text]

Style[...]=[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,TextTextAlign, TitleFontFace, TextFontFace, TipPosition, StickyStyle, TitleFontSize, TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY, TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]
*/
var FiltersEnabled = 1 // if your not going to use transitions or filters in any of the tips set this to 0
 var t0 ="<span class='head2'>������������� ����</span> - ��� ������������ ��������� � ��������, ���������� ���� ��� �������������� ����, ���������������� �������� � ������� ����� ���� ������� � ������� ������� �� ��������������� ����, ���� � ����������."
 var t1 ="<span class='text'><span class='head2'>������������� ��� ������������</span> - ������� ������������� �������� ��������� ��������� �������������� ������ <span class='index'>q</span> � �������� ��� � �������, ������������� ��������������� ��������� ���������, ������ ����������� �� ������� �� �������������� ������, ������������ ���������� ���������� ������ ������ ��������������� �����������, �. �. </span><table width='100%' border='0'>  <tr>    <td height='30'><div align='left' class='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong><img width='160' height='36' src='page11/clip_image002_0000.jpg'></strong></div></td>"+
"<td class='head2'><div align='right' class='head2'>(1.1)</div></td></tr></table><span class='text'>�� ��������� (1.1) ������� ������� ���� [ <span class='index'>I</span> ] = [<span class='index'> q</span> ]/[ <span class='index'>t</span> ] = ��/c = A&#183;c/c = A (�����). </p>"
  var t2 ="<p class='text'><span class='head2'>������������� ��� ��������</span>  � ������������� ���, �������������� ��������� ������������� ������� ������, ������������� ��������������� ��������� ���������, ������ ����������� �� ������� �� �������������� ������, ������������ ������ ������ ��������������� �����������.</p>"
   var t3 ="<span class='head2'>������������� ��� ��������</span> � ������������ �������������� ���� �������� � ������� � �������������� ���� ����������� �����������, ������������� ��������������� ��������� ���������, ������ ����������� �� ������� �� ������ �������������� �������� <span class='index'>DS</span> ������ ��������������� ����������� <span class='index'>S</span>, �. �.   <img src='page11/clip_image002_0001.jpg' width='202' height='36' align='top'><br>��� <span class='index'>D </span>- ������������� ��������.</p>"
    var t4 ="<p class='text'><span class='head2'>������ ������������� ���</span> �  ��������� ��������, ������ ����� �������������� ���� ������������, �������������� ���� �������� � �������������� ���� �������� ������ ��������������� �����������.</p>"
	 var t5 ="<p class='text'><span class='head2'>���������� ������������� ���</span> (� ���������� <span class='head2'>���</span>) - ��� ���������� � ���������������� �������� ���������� ������ (�������). ��� ���������� ���� � ������� ������� ����������� ����������  �������    <span class='symbol'>D</span><span class='index'>t </span>�����������  ���������� �����  <span class='symbol'>D</span><span class='index'>q</span>. ������� ���   <span class='index'>i</span> = <span class='index'>q</span>/<span class='index'>t</span>, ��� <span class='index'>q</span> - ���� �����  � ������� (��) ��  ����� <span class='index'>t</span> (�). </p>"
	 var t6 ="<span class='text'><span class='head2'>�������� ������������� ����������� ����</span><span class='index'> I</span> �� ������� (�� ��������� �������) ���� �������������� ����������� �������� ������ ���������� (�������� - �������, ���������� ���������� ������������� ������� (<span class='index'>q</span><span class='indexsmall'>e</span> = -1,602<span class='symbol'>�</span>10<span class='stepen'>-19</span> ��, ����� 1�� = 6,24<span class='symbol'>�</span>10<span class='stepen'>18</span>  ����������)), �. �. �� ��������� �� ����� � ������� ����������� � ����� � ������� �����������, ������� <span class='head2'>������� ����������</span> (� ���������� <span class='head2'>����������</span>) �� ������������� ����� �������, �. �.</span><table width='100%'  border='0'><tr>    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='index'>U</span><span class='indexsmall'>ab</span> = <span class='symbol'>j</span><span class='indexsmall'>a</span> - <span class='symbol'>j</span><span class='indexsmall'>b</span>.</td>"+
	 "<td><div align='right'><span class='head2'>(1.2)</span></div></td>  </tr></table>"
	 	 var t7 ="<span class='text'><span class='head2'>��������� �������������</span> (<span class='symbol'>j</span><span class='indexsmall'>a</span></a>) ����� <span class='index'>�</span> - ������, ������� ����� ���������, ����� ��������� ������� ������ (1&nbsp;��)  �� ������ ����� � ������������� (��� ��� �������������� ���� ), �. �.</span><table width='100%'  border='0'>  <tr>    <td>&nbsp;&nbsp;&nbsp;<img src='page11/clip_image002_0007.gif' width='164' height='69'><img src='page11/clip_image002_0008.gif' width='99' height='68'></td>    <td><div align='right'><span class='head2'>(1.3)</span></div></td>  </tr></table>"+
"<span class='text'>���  <img src='page11/clip_image002_0006.gif' width='18' height='23' align='absmiddle'>   - <span class='head2'>������������</span> (������) �������������� ����, �������� ������ ��������� ����, ����������� �� ���������� �������, � �������� � ������. �� ����� ����������� �������� ������� ������������<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [<span class='index'>E</span>] = [H]/[��] = �<span class='symbol'>�</span>�<span class='symbol'>�</span>�/�<span class='symbol'>�</span>A<span class='symbol'>�</span>c = �/� (����� �� ����). </span>"
		 	 var t8 ="<span class='text'><span class='head2'>����������</span> - ��� ������, ������������� �� ������� ������� ������ (1&nbsp;��) �� ����� <span class='index'>�</span> � ����� <span class='index'>b</span> ���� � �������������<img src='page11/clip_image002_0006.gif' width='18' height='23' align='absmiddle'>�� ������������� ���� � ������ ��������� ��������� ������������� �������������� ����, �. �.</span><table width='100%'  border='0'>  <tr>    <td>&nbsp;&nbsp;&nbsp;<img src='page11/clip_image002_0009.gif' width='99' height='49' align='middle'>.</td>    <td><div align='right'><span class='head2'>(1.3)</span></div></td>  </tr></table><span class='text'>���������� ���������� ������<span class='head2'> �������� ����������� (����������)</span> ����� ���������������� �������. ����� ������� � ���������� ����� ������������� ����, �� ������������� �������� ����������� ����� ���� ������ � ������ (������ ����������), ��������� ������� ��������� ������ ����. �� ����������� (1.4) �������� ������� ���������� (����������) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[<span class='index'>U</span>] = [�/�]<span class='symbol'>�</span>[�] = B (�����). </span>"
   var t9 ="<p class='text'><span class='head2'>��������������� ����</span> <span class='index'>E</span> (� ���������� ��� <span class='index'>E</span>) - ��������� ��������, ��������������� ����������� ���������� ���� � ���������������� �������������� ���� �������� ������������� ���. ��� <span class='index'>�</span> �������� ����� ������ (�������) <span class='index'>W</span> � ������� (��), ������������� ���� ����� �� ����������� ������� ������ (1 ��) �� ����� ����� ���� � ������.  �� ����� ����������� ������� ������� ��� [<span class='index'>E</span>] = [<span class='index'>W</span>]/[<span class='index'>q</span>] = ��/�� = �&#183;�&#183;�/�&#183;� = � (�����). ����� <span class='head2'>����������</span> (�������� �����������) 1 � ����� 1 �� ������� ��� ����������� 1 �� ������  �� ����� ����� ���������� � ������.</p>"

Text[0]=[":: ������������� ���� ::",t0]
Text[1]=[":: ������������� ��� ������������ ::",t1]
Text[2]=[":: ������������� ��� �������� ::",t2]
Text[3]=[":: ������������� ��� �������� ::",t3]
Text[4]=[":: ������ ������������� ��� ::",t4]
Text[5]=[":: ���������� ������������� ��� ::",t5]
Text[6]=[":: �������� ������������� ����������� ���� ::",t6]
Text[7]=[":: ��������� ������������� ::",t7]
Text[8]=[":: ���������� ::",t8]
Text[9]=[":: ��������������� ����  (���) ::",t9]

Style[0]=["white","black","black","white","","","center","","","Verdana","center","",2,2,"100%",,1,5,0,10,51,1,,"complex","gray"]

applyCssFilter()

