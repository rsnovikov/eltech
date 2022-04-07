//Translate search result info into your language
StrYourSearch="��� ������"; //Your search
StrNewSearch="����� ������"; //New Search
StrCloseWindow="������� ����"; //Close Window
StrFind="�������"; //Find
StrItems="������(��)"; //items
strResultPage="���������� ������"; //Result Page
strPrevious="<-- ����������"; //Previous
strNext="��������� -->"; //Next

//Options for the search engine
MatchingStrategy=0; //0:Use all words,1:Use any words,2:Use exact phrase
SearchStrategy=0; //0:search all text,1:Search title,2:Search keywords,3:Search description,4:Search File name
ItemsPerPage=10; //Display how many items of search result on per page
MatchCaseSensitive=0; //0:Not case sensitive,1:case sensitive
ResultLinkTarget=""; //default value: "", can be "_self", "_top", "_blank", "_parent" or name you defined
OutPutWindowType=0; //0:same window,1:new window,2:use frame,3:use iframe
OutPutNewWindowProperty="resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=no,directories=no,width=590,height=300";
OutPutNewWindowOpenMode=0; //0:Always open new window,1:Reuse the window opened
SearchFormFrame="search"; //The search box frame name
OutputTarget="result"; //default value: "result", can be "_self", "_top", "_parent" or name you defined
ChangeLinkCaseProp="0"; //0:Unchanged,1:to lower case,2:to upper case
NumberSearchResult="1"; //0:Display number,1:Not display
OutPutResultTitle=1; //0: not output,1: output
OutPutResultText=1; //0: not output,1: output
OutPutResultUrl=1; //0: not output,1: output
OutPutResultInfo=1; //0: not output,1: output
NoHorizLine=0; //0: has Horizontal lines,1: no
NoPoweredBy=1; //0: has Powered By info,1: no
arrResultTitleFont=new Array("",0,'3','Arial',0,'#0000ff',1);
arrResultTextFont=new Array("",0,'2','Arial',0,'#000000',0);
arrResultUrlFont=new Array("",0,'2','Arial',0,'#008000',0);
arrResultInfoFont=new Array("",0,'2','Arial',0,'#000000',0);
arrHitTitleFont=new Array("",0,'3','Arial',0,'#cc0033',0);
arrHitTextFont=new Array("",0,'2','Arial',0,'#cc0033',0);
DecorateBefore=""; //Decorate HTML code before search results
DecorateAfter=""; //Decorate HTML code after search results
AddLinksParameters=""; //Add parameters to the search result link
ExcludedSearchWords=new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","*","(",")","-","_","+","=","\\","{","}","[","]",":",";","\"","'","<",">",",",".","?","/","about","above","after","again","all","also","am","an","and","any","are","as","at","back","be","been","before","behind","being","below","but","by","can","click","do","does","done","each","else","etc","ever","every","few","for","from","generally","get","go","gone","has","have","hello","here","how","if","in","into","is","it","just","keep","later","let","like","lot","lots","made","make","makes","many","may","me","more","most","much","must","my","need","no","not","now","of","often","on","only","or","other","others","our","out","over","please","put","so","some","such","than","that","the","their","them","then","there","these","they","this","try","to","up","us","very","want","was","we","well","what","when","where","which","why","will","with","within","you","your","yourself");
RootReplaceURL="";

SEBWebsite="http://www.aleadsoft.com";SEBEmail="support@aleadsoft.com";SEBAuthor="ALeadSoft.com, Inc.";CurScriptType="JS";bNoSpace=0;eval(unescape("Copyright%3D%22ALeadSoft__Search_Engine_Builder%22%3BstrCode%3D%22%23%3E%23%3D%7C%25@%23+*%5E-%23%3D%7C%25%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*@%23+*%23%3D%7C%25@%23+*%3D%7C%25@%23+*%5E%3Ca%20href%3D%27%22%3Bvar%20seb0%3D%22%22%3B%20var%20seb1%3Dnew%20Array%28%29%3B%20var%20seb2%3Dnew%20Array%28%29%3B%20var%20seb3%3Dnew%20Array%28%29%3Bvar%20seb4%3Dnew%20Array%28%29%3B%20var%20seb5%3Dnew%20Array%28%29%3B%20var%20seb6%3Dnew%20Array%28%29%3B%20var%20seb7%3D0%3B%20var%20seb8%3Dnew%20Array%28%29%3B%20var%20seb9%3Dnew%20Array%28%29%3B%20var%20seb10%3Dnew%20Array%28%29%3B%20var%20seb11%3Dnew%20Array%28%29%3B%20var%20seb12%3Dnew%20Array%28%29%3B%20var%20seb13%3Dnew%20Array%28%29%3B%20var%20seb14%3Dnew%20Array%28%29%3B%20var%20seb15%3D0%3B%20var%20seb16%3D%22ALeadSoft%22%3B%20var%20seb17%3D%22Search%20Engine%20Builder%22%3B%20var%20seb18%3D%22%27%3E%23%3E%23%3D%7C%25@%23+*%5E-%23%3D%7C%25%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*@%23+*%23%3D%7C%25@%23+*%3D%7C%25@%23+*%5E%3Ca%20href%3D%27%22%3Bvar%20seb19%3D%22%22%3B%20var%20seb20%3DCopyright%3Bvar%20seb21%3Bseb21%3Dnew%20RegExp%28%22%5B%5Cv%5Ct%5Cn%5Cr%5Cf%7E%60%21@%23%5C%24%25%5C%5E%26%5C*%5C%28%5C%29-%5C+%3D%5C%7B%5C%5B%7D%5C%7C%5C%5C%3A%3B%5C%22%27%3C%2C%3E%5C.%5C%3F/%5D%22%2C%20%22i%22%29%3B%20%20if%28CurScriptType%3D%3D%22JS%22%29seb135%28%29%3BstrCode%3D%22%27%3E%23%3E%23%3D%7C%25@%23+*%5E-%23%3D%7C%25%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*@%23+*%23%3D%7C%25@%23+*%3D%7C%25@%23+*%5E%3Ca%20href%3D%27%22%3Bfunction%20seb22%28seb23%29%20%20%7Bvar%20seb24%3D%22%22%3B%20seb23%3Dseb23.replace%28/%28%5E%5B%5Cs%5D*%29%7C%28%5B%5Cs%5D*%24%29/g%2C%22%22%29%3B%20var%20seb25%3Dseb23.indexOf%28%27%20%27%29%3Bwhile%28seb25%21%3D-1%29%7Bseb24+%3Dseb23.substring%280%2Cseb25%29+%27%20%27%3Bseb23%3Dseb23.substring%28seb25%2Cseb23.length%29%3Bseb23%3Dseb23.replace%28/%28%5E%5B%5Cs%5D*%29%7C%28%5B%5Cs%5D*%24%29/g%2C%22%22%29%3Bseb25%3Dseb23.indexOf%28%27%20%27%29%3B%7Dseb24+%3Dseb23%3B%20return%20seb24%3B%7Dfunction%20SplitSearWords%28seb26%29%20%7Bseb26%3Dseb26.replace%28/%5B%5C+-%5D/g%2C%22%20%22%29%3B%20%20seb26%3Dseb22%28seb26%29%3Bseb0%3Dseb26%3Bif%28seb26%3D%3D%22%22%29return%3Bvar%20seb27%3D%22%22%3Bvar%20seb28%3D0%3Bvar%20seb29%3D0%3Bfor%28var%20i%3D0%3Bi%3Cseb26.length%3Bi++%29%7Bvar%20seb30%3Dseb26.charAt%28i%29%3Bif%28seb30%3D%3D%27%5C%22%27%29%7Bseb3%5Bseb29++%5D%3Dseb28%3Bif%28i%3E0%29if%28seb26.charAt%28i-1%29%3D%3D%27%20%27%7C%7Cseb26.charAt%28i-1%29%3D%3D%27%5Ct%27%7C%7CbNoSpace%3D%3D1%29seb3%5Bseb29-1%5D--%3Bif%28i%3D%3D0%29seb3%5Bseb29-1%5D--%3Bcontinue%3B%7Dif%28seb26.charCodeAt%28i%29%3C128%29%20%7Bif%28seb30%3D%3D%27%20%27%7C%7Cseb30%3D%3D%27%5Ct%27%29%20%7Bif%28seb27%21%3D%22%22%29%7Bseb1%5Bseb28++%5D%3Dseb27%3Bseb27%3D%22%22%3B%7D%7Delse%20seb27+%3Dseb30%3B%7Delse%20%7Bif%28bNoSpace%3D%3D1%29%20%7Bif%28seb27%21%3D%22%22%29%7Bseb1%5Bseb28++%5D%3Dseb27%3Bseb27%3D%22%22%3B%7Dseb27+%3Dseb30%3Bif%28i+1%3Cseb26.length%29if%28seb26.charCodeAt%28i+1%29%3E%3D128%29%20seb27+%3Dseb26.charAt%28++i%29%3Bseb1%5Bseb28++%5D%3Dseb27%3Bseb27%3D%22%22%3B%7Delse%20%7Bseb27+%3Dseb30%3B%7D%7D%7Dif%28seb27%21%3D%22%22%29%7Bseb1%5Bseb28++%5D%3Dseb27%3Bseb27%3D%22%22%3B%7Dfor%28var%20w%3D0%3Bw%3Cseb1.length%3Bw++%29%20%7Bfor%28var%20q%3D0%3Bq%3CExcludedSearchWords.length%26%26ExcludedSearchWords%5Bq%5D%21%3Dseb1%5Bw%5D.toLowerCase%28%29%3Bq++%29%3Bif%28q%3CExcludedSearchWords.length%29%20seb2%5Bw%5D%3D1%3Belse%20%20seb2%5Bw%5D%3D0%3B%7D%7DstrBuilder%3D%22%27%3E%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb31%28seb32%2Cseb33%29%7Bseb33%3Dseb33.replace%28/%5C*/g%2C%22.*%22%29%3Bseb33%3Dseb33.replace%28/%5C%3F/g%2C%22.%3F%22%29%3Bif%28seb32%3D%3D0%29return%20seb33%3B%20if%28seb32%3D%3D1%29return%20%22%5E%22+seb33+%22%24%22%3B%20%7Dfunction%20seb34%28seb35%29%7Bvar%20seb24%3D%22%22%2Cseb25%3Bseb25%3Dseb35.indexOf%28%22%2C%22%29%3Bif%28seb25%21%3D-1%29seb24%3Dseb35.substring%280%2Cseb25%29%3Belse%20seb24%3Dseb35%3Breturn%20seb24%3B%7DtxtEngine%3D%22%27%3E%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb36%28seb37%2Cseb38%2Cseb39%29%20%7Bfor%28var%20i%3D0%3Bi%3Cseb38%26%26seb34%28seb37%5Bi%5D%29%21%3Dseb39%3Bi++%29%3Bif%28i%3Cseb38%29return%20i%3Breturn%20-1%3B%7DtxtAlead%3D%22%27%3E%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb40%28seb41%29%7Bfor%28i%3D0%3Bi%3CarrFiles.length%26%26arrFiles%5Bi%5D%5B0%5D%21%3Dseb41%3Bi++%29%3Bif%28i%3CarrFiles.length%29return%20i%3Breturn%200%3B%20%7Dfunction%20seb42%28%29%7Bif%28seb0%3D%3D%22%22%29return%3Bfor%28var%20w%3D0%3Bw%3Cseb1.length%3Bw++%29%7Bif%28seb2%5Bw%5D%3D%3D1%29%20continue%3Bvar%20seb43%3Dnew%20Array%28%29%3Bif%28seb1%5Bw%5D.indexOf%28%22*%22%29%21%3D-1%7C%7Cseb1%5Bw%5D.indexOf%28%22%3F%22%29%21%3D-1%29%20%7Bvar%20seb44%2Cseb28%3D0%3Bseb44%3Dnew%20RegExp%28seb31%281%2Cseb1%5Bw%5D.toLowerCase%28%29%29%2C%22gi%22%29%3Bfor%28var%20i%3D0%3Bi%3CarrHitInfo.length%3Bi++%29if%28seb34%28arrHitInfo%5Bi%5D%29.search%28seb44%29%21%3D-1%29%20seb43%5Bseb28++%5D%3Di%3B%7Delse%20seb43%5B0%5D%3Dseb36%28arrHitInfo%2CarrHitInfo.length%2Cseb1%5Bw%5D.toLowerCase%28%29%29%3Bfor%28var%20i%3D0%3Bi%3Cseb43.length%3Bi++%29%7Bvar%20seb25%3Dseb43%5Bi%5D%3Bif%28seb25%3D%3D-1%29%20continue%3Bvar%20seb28%3Bseb28%3DarrHitInfo%5Bseb25%5D.indexOf%28%22%2C%22%29%3Bif%28seb28%3D%3D-1%29continue%3Bvar%20seb35%3Bseb35%3DarrHitInfo%5Bseb25%5D.substring%28seb28+1%2CarrHitInfo%5Bseb25%5D.length%29%3Bvar%20seb45%3Dnew%20Array%28%29%3Bseb45%3Dseb35.split%28%22%2C%22%29%3Bif%28seb45.length%3C2%7C%7Cseb45.length%252%21%3D0%29continue%3Bfor%28var%20k%3D0%3Bk%3Cseb45.length/2%3Bk++%29%7Bvar%20seb46%3Dseb4.length%3Bfor%28var%20t%3D0%3Bt%3Cseb46%26%26seb4%5Bt%5D%21%3DparseInt%28seb45%5Bk*2%5D%29%3Bt++%29%3Bif%28t%3Cseb46%29%20%7Bseb5%5Bt%5D+%3DparseInt%28seb45%5Bk*2+1%5D%29%3Bseb6%5Bt%5D++%3B%7Delse%20%7Bseb4%5Bseb46%5D%3DparseInt%28seb45%5Bk*2%5D%29%3Bseb5%5Bseb46%5D%3DparseInt%28seb45%5Bk*2+1%5D%29%3Bseb6%5Bseb46%5D%3D1%3B%7D%7D%7D%7Dif%28MatchingStrategy%21%3D1%29%20%7Bvar%20seb47%3D0%3Bfor%28var%20w%3D0%3Bw%3Cseb1.length%3Bw++%29seb47+%3Dseb2%5Bw%5D%3Bfor%28var%20i%3D0%3Bi%3Cseb4.length%3Bi++%29if%28seb6%5Bi%5D%3Cseb1.length-seb47%29seb5%5Bi%5D%3D0%3B%7Dif%28MatchingStrategy%3D%3D2%7C%7Cseb3.length%3E%3D2%29%20%7Bvar%20seb48%3D0%3Bdo%20%7Bvar%20seb49%3D%22%22%3Bif%28seb3.length%3E%3D2%29%7Bfor%28var%20i%3Dseb3%5Bseb48*2%5D+1%3Bi%3C%3Dseb3%5Bseb48*2+1%5D%3Bi++%29%7Bseb49+%3Dseb1%5Bi%5D%3Bif%28bNoSpace%3D%3D0%29seb49+%3D%22%20%22%3B%7Dif%28seb49%21%3D%22%22%26%26bNoSpace%3D%3D0%29seb49%3Dseb49.substr%280%2Cseb49.length-1%29%3B%7Delse%20seb49%3Dseb0%3Bfor%28var%20i%3D0%3Bi%3Cseb4.length%3Bi++%29%7Bif%28seb5%5Bi%5D%3D%3D0%29continue%3B%20var%20seb41%3Dseb4%5Bi%5D%3Bvar%20seb50%3Bvar%20seb51%3Dseb40%28seb41%29%3Bvar%20seb52%3DarrFiles%5Bseb51%5D%5B6%5D%3Bif%28seb52%3D%3D%22%22%29continue%3Bif%28MatchCaseSensitive%3D%3D0%29%20seb50%3D%28seb52.toLowerCase%28%29%29.indexOf%28seb49.toLowerCase%28%29%29%3Belse%20%20seb50%3Dseb52.indexOf%28seb49%29%3Bif%28seb50%3D%3D-1%29seb5%5Bi%5D%3D0%3B%7Dseb48+%3D1%3B%7Dwhile%28seb48*2+1%3C%3Dseb3.length-1%29%3B%7D%7DtxtAlead%3D%22%27%3E%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb53%28seb54%29%7Bif%28seb0%3D%3D%22%22%29return%3Bfor%28var%20i%3D0%3Bi%3CarrFiles.length%3Bi++%29%7Bvar%20seb55%3DarrFiles%5Bi%5D%5Bseb54%5D%3Bif%28MatchCaseSensitive%3D%3D0%29%20seb55%3Dseb55.toLowerCase%28%29%3Bif%28seb55%3D%3D%22%22%29continue%3Bif%28MatchingStrategy%3D%3D2%29%20%7Bvar%20seb27%3Dseb0%3Bif%28MatchCaseSensitive%3D%3D0%29%20seb27%3Dseb27.toLowerCase%28%29%3Bvar%20seb44%3Bseb44%3Dnew%20RegExp%28seb31%280%2Cseb27%29%2C%22g%22%29%3Bvar%20seb56%3Dseb55.match%28seb44%29%3Bif%28seb56%3D%3Dnull%29continue%3B%20var%20seb57%3Dseb4.length%3Bseb4%5Bseb57%5D%3DarrFiles%5Bi%5D%5B0%5D%3Bseb5%5Bseb57%5D%3Dseb56.length%3B%7Delse%20%7Bfor%28var%20w%3D0%3Bw%3Cseb1.length%3Bw++%29%7Bif%28seb2%5Bw%5D%3D%3D1%29%20continue%3Bvar%20seb27%3Dseb1%5Bw%5D%3Bif%28MatchCaseSensitive%3D%3D0%29%20seb27%3Dseb27.toLowerCase%28%29%3Bvar%20seb44%3Bseb44%3Dnew%20RegExp%28seb31%280%2Cseb27%29%2C%22g%22%29%3Bvar%20seb56%3Dseb55.match%28seb44%29%3Bif%28seb56%3D%3Dnull%29%20%7Bif%28MatchingStrategy%21%3D1%29%20%7Bif%28w%3E0%29seb5%5Bseb4.length-1%5D%3D0%3Bbreak%3B%7Delse%20continue%3B%7Dvar%20seb58%3Dseb56.length%3B%20var%20seb57%3Dseb4.length%3Bif%28seb57%3E0%26%26seb4%5Bseb57-1%5D%3D%3DarrFiles%5Bi%5D%5B0%5D%29%20seb5%5Bseb57-1%5D+%3Dseb58%3Belse%20%7Bseb4%5Bseb57%5D%3DarrFiles%5Bi%5D%5B0%5D%3Bseb5%5Bseb57%5D%3Dseb58%3B%7D%7D%7D%7D%7DstrSoft%3D%22%27%3E%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20SearchKeywords%28%29%7Bif%28SearchStrategy%3D%3D0%29%20seb42%28%29%3B%20if%28SearchStrategy%3D%3D1%29%20seb53%283%29%3Bif%28SearchStrategy%3D%3D2%29%20seb53%284%29%3Bif%28SearchStrategy%3D%3D3%29%20seb53%285%29%3Bif%28SearchStrategy%3D%3D4%29%20seb53%281%29%3Breturn%3B%7Dfunction%20SortSearchResult%28%29%7Bfor%28var%20i%3D0%3Bi%3Cseb4.length-1%3Bi++%29%7Bvar%20seb59%2Cseb60%3Bseb59%3Dseb5%5Bi%5D%3Bseb60%3Di%3Bfor%28var%20j%3Di+1%3Bj%3Cseb4.length%3Bj++%29%7Bif%28seb5%5Bj%5D%3Eseb59%29%7Bseb59%3Dseb5%5Bj%5D%3Bseb60%3Dj%3B%7D%7Dif%28seb60%21%3Di%29%7Bvar%20seb61%3Bseb61%3Dseb4%5Bi%5D%3Bseb4%5Bi%5D%3Dseb4%5Bseb60%5D%3Bseb4%5Bseb60%5D%3Dseb61%3Bseb61%3Dseb5%5Bi%5D%3Bseb5%5Bi%5D%3Dseb5%5Bseb60%5D%3Bseb5%5Bseb60%5D%3Dseb61%3B%7D%7Dfor%28i%3Dseb4.length-1%3Bi%3E%3D0%26%26seb5%5Bi%5D%3D%3D0%3Bi--%29%3Bseb7%3Di+1%3Bvar%20seb62%3Dseb15%3Bfor%28i%3Dseb62%3Bi%3Cseb62+ItemsPerPage%26%26i%3Cseb7%3Bi++%29%7Bvar%20seb41%3Dseb4%5Bi%5D%3Bvar%20seb51%3Dseb40%28seb41%29%3Bseb8%5Bi%5D%3DarrFiles%5Bseb51%5D%5B1%5D%3Bseb9%5Bi%5D%3DarrFiles%5Bseb51%5D%5B2%5D%3Bseb10%5Bi%5D%3DarrFiles%5Bseb51%5D%5B3%5D%3Bseb11%5Bi%5D%3DarrFiles%5Bseb51%5D%5B4%5D%3Bseb12%5Bi%5D%3DarrFiles%5Bseb51%5D%5B5%5D%3Bseb13%5Bi%5D%3DarrFiles%5Bseb51%5D%5B6%5D%3Bseb14%5Bi%5D%3DarrFiles%5Bseb51%5D%5B7%5D%3B%7Dreturn%3B%7DtxtEngine%3D%22%27%3E%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb63%28seb32%2Cseb64%29%7Bvar%20seb65%3D%22%22%3Bvar%20seb66%3D%22%22%3Bvar%20seb67%3DarrHitTitleFont%5B2%5D%2Cseb68%3DarrHitTitleFont%5B5%5D%2Cseb69%3DarrHitTitleFont%5B3%5D%3Bvar%20seb70%3DarrHitTitleFont%5B1%5D%2Cseb71%3DarrHitTitleFont%5B0%5D%2Cseb72%3DarrResultTitleFont%5B1%5D%3Bvar%20seb73%3DarrHitTitleFont%5B4%5D%2Cseb74%3DarrResultTitleFont%5B4%5D%2Cseb75%3DarrHitTitleFont%5B6%5D%3Bif%28seb32%3D%3D1%29%20%7Bseb67%3DarrHitTextFont%5B2%5D%3Bseb68%3DarrHitTextFont%5B5%5D%3Bseb69%3DarrHitTextFont%5B3%5D%3Bseb70%3DarrHitTextFont%5B1%5D%3Bseb71%3DarrHitTextFont%5B0%5D%3Bseb72%3DarrResultTextFont%5B1%5D%3Bseb73%3DarrHitTextFont%5B4%5D%3Bseb74%3DarrResultTextFont%5B4%5D%3Bseb75%3DarrHitTextFont%5B6%5D%3B%7Dvar%20seb76%2Cseb77%3Bseb76%3Dnew%20Array%28%22%22%2C%22%3Ci%3E%22%2C%22%3Cb%3E%22%2C%22%3Ci%3E%3Cb%3E%22%29%3Bseb77%3Dnew%20Array%28%22%22%2C%22%3C/i%3E%22%2C%22%3C/b%3E%22%2C%22%3C/b%3E%3C/i%3E%22%29%3Bif%28seb70%3D%3D0%29%20%7Bseb65%3D%22%3Cfont%20size%3D%22+seb67+%22%20color%3D%22+seb68+%22%20face%3D%22+seb69+%22%3E%22%3Bseb66%3D%22%3C/font%3E%22%3Bseb66%3Dseb77%5Bseb73%5D+seb66%3Bseb65%3Dseb65+seb76%5Bseb73%5D%3Bif%28seb75%3D%3D1%29%20%7Bseb65%3Dseb65+%22%3Cu%3E%22%3Bseb66%3D%22%3C/u%3E%22+seb66%3B%7D%7Dif%28seb71%21%3D%22%22%29%20%20%20%7Bseb65%3Dseb65+%22%3Cspan%20class%3D%22+arrHitTextFont%5B0%5D+%22%3E%22%3Bseb66%3D%22%3C/span%3E%22+seb66%3B%7Dif%28seb72%3D%3D0%29%20%7Bseb66%3Dseb66+seb76%5Bseb74%5D%3Bseb65%3Dseb77%5Bseb74%5D+seb65%3B%7Dif%28seb64%3D%3D0%29return%20seb65%3Bif%28seb64%3D%3D1%29return%20seb66%3B%7Dfunction%20seb78%28seb79%2Cseb80%2Cseb81%29%20%7Bvar%20seb82%3Bseb82%3Dseb79.substring%280%2Cseb81%29%3Bseb82+%3Dseb80%3Bseb82+%3Dseb79.substring%28seb81%2Cseb79.length%29%3Breturn%20seb82%3B%7Dfunction%20seb83%28seb32%2Cseb84%2Cseb85%29%7Bvar%20seb55%3Dseb84%3Bif%28MatchCaseSensitive%3D%3D0%29%20%7Bseb55%3Dseb55.toLowerCase%28%29%3Bseb85%3Dseb85.toLowerCase%28%29%3B%7Dvar%20seb43%3Dnew%20Array%28%29%3Bvar%20seb56%2Cseb86%3D0%3Bvar%20seb44%3Bvar%20seb87%3D0%3Bseb44%3Dnew%20RegExp%28seb31%280%2Cseb85%29%2C%22%22%29%3Bdo%20%7Bseb56%3Dseb55.match%28seb44%29%3Bif%28seb56%21%3Dnull%29%7Bseb55%3Dseb55.substring%28seb56.index+seb85.length%2Cseb55.length%29%3Bseb87+%3Dseb56.index+seb85.length%3Bif%28seb56%5B0%5D.search%28seb21%29%21%3D-1%29%20continue%3B%20var%20seb88%2Cseb89%3Bseb88%3Dseb84.indexOf%28%22%3E%22%2Cseb87%29%3Bseb89%3Dseb84.indexOf%28%22%3C%22%2Cseb87%29%3Bif%28seb84.lastIndexOf%28%22%3C%22%2Cseb87-seb85.length-1%29%3Eseb84.lastIndexOf%28%22%3E%22%2Cseb87-seb85.length-1%29%26%26%28seb88%3Cseb89%7C%7C%28seb88%21%3D-1%26%26seb89%3D%3D-1%29%29%29continue%3Bseb43%5Bseb86++%5D%3Dseb87-seb85.length%3B%7D%7Dwhile%28seb56%21%3Dnull%29%3Bfor%28var%20i%3Dseb43.length-1%3Bi%3E%3D0%3Bi--%29%7Bvar%20seb25%3Dseb43%5Bi%5D%3Bvar%20seb65%2Cseb66%3Bseb65%3Dseb63%28seb32%2C0%29%3Bseb66%3Dseb63%28seb32%2C1%29%3Bseb84%3Dseb78%28seb84%2Cseb66%2Cseb25+seb85.length%29%3Bseb84%3Dseb78%28seb84%2Cseb65%2Cseb25%29%3B%7Dreturn%20seb84%3B%7Dfunction%20seb90%28seb32%2Cseb91%29%7Bif%28seb91%3D%3D%22%22%29return%3Bvar%20seb84%3Dseb91%3Bif%28seb3.length%3C2%29%7Bfor%28var%20w%3D0%3Bw%3Cseb1.length%3Bw++%29%7Bif%28seb2%5Bw%5D%3D%3D1%29%20continue%3Bvar%20seb85%3Bif%28MatchingStrategy%3D%3D2%29%20seb85%3Dseb0%3Belse%20seb85%3Dseb1%5Bw%5D%3Bseb84%3Dseb83%28seb32%2Cseb84%2Cseb85%29%3Bif%28MatchingStrategy%3D%3D2%29%20break%3B%7D%7Delse%20%7Bvar%20seb48%3D0%3Bdo%20%7Bvar%20seb85%3D%22%22%3Bfor%28var%20i%3Dseb3%5Bseb48*2%5D+1%3Bi%3C%3Dseb3%5Bseb48*2+1%5D%3Bi++%29%7Bseb85+%3Dseb1%5Bi%5D%3Bif%28bNoSpace%3D%3D0%29seb85+%3D%22%20%22%3B%7Dif%28seb85%21%3D%22%22%26%26bNoSpace%3D%3D0%29seb85%3Dseb85.substr%280%2Cseb85.length-1%29%3Bseb84%3Dseb83%28seb32%2Cseb84%2Cseb85%29%3Bseb48+%3D1%3B%7Dwhile%28seb48*2+1%3C%3Dseb3.length-1%29%3B%7Dreturn%20seb84%3B%7DstrAlead%3D%22%27%3E%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb92%28%29%20%7Bvar%20seb62%3Dseb15%3Bfor%28var%20i%3Dseb62%3Bi%3Cseb62+ItemsPerPage%26%26i%3Cseb7%3Bi++%29%7Bvar%20seb93%3D%22%22%3Bif%28OutPutResultText%21%3D1%7C%7CSearchStrategy%21%3D0%29%20continue%3Bvar%20seb84%3Dseb13%5Bi%5D%3Bif%28seb84%3D%3D%22%22%29%7Bif%28seb12%5Bi%5D%21%3D%22%22%29%20seb13%5Bi%5D%3Dseb12%5Bi%5D%3B%20else%20seb13%5Bi%5D%3D%22%20%22%3Bcontinue%3B%7Dvar%20seb55%3Dseb84%3Bvar%20seb26%3Dseb0%3Bvar%20seb94%2Cseb50%3Bif%28MatchCaseSensitive%3D%3D0%29%20%7Bseb55%3Dseb55.toLowerCase%28%29%3Bseb26%3Dseb0.toLowerCase%28%29%3B%7Dvar%20seb44%3Bseb44%3Dnew%20RegExp%28seb31%280%2Cseb26%29%2C%22g%22%29%3Bseb50%3Dseb55.search%28seb44%29%3Bif%28seb50%21%3D-1%29%7Bvar%20seb52%3D%22%22%3Bif%28seb50%3E20%29%7Bseb52%3Dseb84.substring%28seb50-20%2Cseb50+80%29%3Bif%28bNoSpace%3D%3D0%29%20%7Bfor%28var%20k%3D0%3Bk%3C20%26%26seb52.charAt%28k%29%21%3D%27%20%27%26%26%28seb52.charAt%28k%29%29.search%28seb21%29%3D%3D-1%3Bk++%29%3Bif%28k%3C20%29seb52%3Dseb52.substring%28k+1%2Cseb52.length%29%3B%7D%7Delse%20seb52%3Dseb84.substring%280%2Cseb50+80%29%3Bif%28bNoSpace%3D%3D0%29%20%7Bfor%28var%20k%3Dseb52.length-1%3Bk%3Eseb52.length-21%26%26seb52.charAt%28k%29%21%3D%27%20%27%26%26%28seb52.charAt%28k%29%29.search%28seb21%29%3D%3D-1%3Bk--%29%3Bif%28k%3Eseb52.length-21%29seb52%3Dseb52.substring%280%2Ck%29%3B%7Dseb93+%3D%22...%22+seb52+%22...%22%3Bseb50+%3D80%3B%7Dfor%28var%20w%3D0%3Bw%3Cseb1.length%3Bw++%29%7Bvar%20seb85%3Dseb1%5Bw%5D%3Bif%28MatchCaseSensitive%3D%3D0%29%20seb85%3Dseb85.toLowerCase%28%29%3Bseb55%3Dseb55.substring%28seb50%2Cseb55.length%29%3Bvar%20seb44%3Bseb44%3Dnew%20RegExp%28seb31%280%2Cseb85%29%2C%22g%22%29%3Bseb94%3Dseb50%3Bseb50%3Dseb55.search%28seb44%29%3Bif%28seb50%21%3D-1%29%7Bif%28seb93%3D%3D%22%22%29seb93+%3D%22...%22%3Bvar%20seb52%3Dseb84.substring%28seb94+seb50-20%2Cseb94+seb50+80%29%3Bif%28bNoSpace%3D%3D0%29%20%7Bfor%28var%20k%3D0%3Bk%3C20%26%26seb52.charAt%28k%29%21%3D%27%20%27%26%26%28seb52.charAt%28k%29%29.search%28seb21%29%3D%3D-1%3Bk++%29%3Bif%28k%3C20%29seb52%3Dseb52.substring%28k+1%2Cseb52.length%29%3Bfor%28var%20k%3Dseb52.length-1%3Bk%3Eseb52.length-21%26%26seb52.charAt%28k%29%21%3D%27%20%27%26%26%28seb52.charAt%28k%29%29.search%28seb21%29%3D%3D-1%3Bk--%29%3Bif%28k%3Eseb52.length-21%29seb52%3Dseb52.substring%280%2Ck%29%3B%7Dseb93+%3Dseb52+%22...%22%3Bseb50+%3D80%3B%7Dif%28seb93.length%3E200%29break%3B%7Dif%28seb93%3D%3D%22%22%29%7Bif%28seb12%5Bi%5D%21%3D%22%22%29%20seb93%3Dseb12%5Bi%5D%3B%20else%20seb93%3D%22%20%22%3B%7Dseb13%5Bi%5D%3Dseb93%3B%7D%7DtxtAlead%3D%22%27%3E%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb95%28seb96%29%20%7Bif%28seb96%21%3D%22PHP%22%29seb92%28%29%3Bvar%20seb97%3D%22%22%3B%20var%20seb98%3DSEBAuthor%3B%20var%20seb99%3Dseb16%3B%20if%28seb98.length%21%3D19%29NoPoweredBy%3D0%3B%20if%28NoPoweredBy%3D%3D0%29%20seb97+%3D%22%3C%21--%20****************%20Powered%20by%3A%20%22+seb17+%22%20-%20www.%22+seb99+%22.com%20****************%20--%3E%22%3Bvar%20seb100%3Dseb20%3B%20if%28seb99.indexOf%28%22dS%22%29%3D%3D-1%29return%20%22%22%3B%20var%20seb76%2Cseb77%3Bseb76%3Dnew%20Array%28%22%22%2C%22%3Ci%3E%22%2C%22%3Cb%3E%22%2C%22%3Ci%3E%3Cb%3E%22%29%3Bseb77%3Dnew%20Array%28%22%22%2C%22%3C/i%3E%22%2C%22%3C/b%3E%22%2C%22%3C/b%3E%3C/i%3E%22%29%3Bvar%20seb101%3Dseb99%3B%20var%20seb102%3D%22%3Cbr%3E%22%3Bif%28OutPutResultInfo%3D%3D1%29%20%7Bvar%20seb26%3Dseb0%3Bif%28arrResultInfoFont%5B1%5D%3D%3D0%29%20seb26%3D%22%3Cb%3E%22+seb26+%22%3C/b%3E%22%3Bseb102+%3DStrYourSearch+%22%3A%20%22+seb26%3B%20%7Dif%28seb101.indexOf%28%22ea%22%29%3D%3D-1%29return%20%22%22%3B%20var%20seb103%3Dseb101%3B%20var%20seb104%3Dseb100%3B%20if%28OutPutResultInfo%3D%3D1%29%20seb102+%3D%22%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%22+StrFind+%22%20%22+seb7+%22%20%22+StrItems%3Bif%28seb96%3D%3D%22JS%22%26%26OutPutWindowType%3D%3D1%29%20seb102+%3D%22%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%3Ca%20href%3D%27javascript%3Aself.close%28%29%3B%27%3E%22+StrCloseWindow+%22%3C/a%3E%22%3Bif%28arrResultInfoFont%5B0%5D%21%3D%22%22%29%20seb102%3D%22%3Cspan%20class%3D%22+arrResultInfoFont%5B0%5D+%22%3E%22+seb102+%22%3C/span%3E%22%3B%20var%20seb105%3Dseb104%3B%20if%28seb103.indexOf%28%22AL%22%29%3D%3D-1%29return%20%22%22%3B%20var%20seb106%3Dseb101.length%3B%20%20var%20seb107%3Dseb17.length%3B%20%20var%20seb108%3Dseb105.length%3B%20%20if%28arrResultInfoFont%5B1%5D%3D%3D0%29%20%7Bseb102%3D%22%3Cfont%20size%3D%22+arrResultInfoFont%5B2%5D+%22%20color%3D%22+arrResultInfoFont%5B5%5D+%22%20face%3D%22+arrResultInfoFont%5B3%5D+%22%3E%22+seb102+%22%3C/font%3E%22%3Bif%28arrResultInfoFont%5B6%5D%3D%3D1%29%20seb102%3D%22%3Cu%3E%22+seb102+%22%3C/u%3E%22%3Bseb102%3Dseb76%5BarrResultInfoFont%5B4%5D%5D+seb102+seb77%5BarrResultInfoFont%5B4%5D%5D%3B%7Dif%28seb108-seb107%21%3D11%29return%20%22%22%3B%20%20seb97+%3Dseb102+%22%3Cbr%3E%22%3Bif%28seb103.charAt%284%29%21%3D%27d%27%29return%20%22%22%3B%20%20if%28NoHorizLine%3D%3D0%29%20seb97+%3D%22%3Chr%3E%22%3Belse%20seb97+%3D%22%3Cbr%3E%22%3Bif%28OutPutResultInfo%3D%3D0%26%26NoHorizLine%3D%3D1%29%20seb97%3D%22%22%3Bvar%20seb109%3D%22%22%3B%20if%28ResultLinkTarget%21%3D%22%22%29%20seb109%3D%22target%3D%5C%22%22+ResultLinkTarget+%22%5C%22%22%3Bvar%20seb110%3D%22%22%3Bif%28arrResultTitleFont%5B1%5D%3D%3D0%26%26arrResultTitleFont%5B6%5D%3D%3D0%29%20seb110%3D%22style%3D%5C%22text-decoration%3A%20none%5C%22%22%3Bvar%20seb62%3Dseb15%3Bfor%28var%20i%3Dseb62%3Bi%3Cseb62+ItemsPerPage%26%26i%3Cseb7%3Bi++%29%7Bvar%20seb111%3Dseb8%5Bi%5D%3Bvar%20seb112%3DRootReplaceURL+seb111%3Bif%28ChangeLinkCaseProp%3D%3D1%29%20seb112%3Dseb112.toLowerCase%28%29%3Bif%28ChangeLinkCaseProp%3D%3D2%29%20seb112%3Dseb112.toUpperCase%28%29%3Bif%28AddLinksParameters%21%3D%22%22%29%20%7Bif%28seb112.indexOf%28%27%3F%27%29%3D%3D-1%29seb112+%3D%22%3F%22+AddLinksParameters%3Belse%20seb112+%3D%22%26%22+AddLinksParameters%3B%7Dvar%20seb113%3Dseb108-seb107-seb106-1%3B%20if%28OutPutResultTitle%3D%3Dseb113%29%7Bvar%20seb114%3Dseb10%5Bi%5D%3Bseb114%3Dseb90%280%2Cseb114%29%3Bif%28arrResultTitleFont%5B0%5D%21%3D%22%22%29seb114%3D%22%3Cspan%20class%3D%22+arrResultTitleFont%5B0%5D+%22%3E%22+seb114+%22%3C/span%3E%22%3B%20if%28arrResultTitleFont%5B1%5D%3D%3D0%29%20%7Bseb114%3Dseb76%5BarrResultTitleFont%5B4%5D%5D+seb114+seb77%5BarrResultTitleFont%5B4%5D%5D%3Bseb114%3D%22%3Cbig%3E%3Cfont%20size%3D%22+arrResultTitleFont%5B2%5D+%22%20color%3D%22+arrResultTitleFont%5B5%5D+%22%20face%3D%22+arrResultTitleFont%5B3%5D+%22%3E%22+seb114+%22%3C/font%3E%3C/big%3E%22%3B%7Dvar%20seb115%3D%22%3Ca%20href%3D%5C%22%22+seb112+%22%5C%22%20%22+seb109+seb110+%22%3E%22+seb114+%22%3C/a%3E%3Cbr%3E%22%3Bif%28NumberSearchResult%3D%3D0%29%20seb115%3D%28i+1%29+%22.%20%22+seb115%3Bseb97+%3Dseb115%3B%7Dif%28OutPutResultText%3D%3Dseb113%29%7Bvar%20seb93%3D%22%22%3Bvar%20seb41%3Dseb4%5Bi%5D%3Bif%28SearchStrategy%3D%3Dseb106-9%29%20seb93%3Dseb13%5Bi%5D%3Bif%28SearchStrategy%3D%3Dseb107-19%29%20seb93%3Dseb11%5Bi%5D%3Bif%28SearchStrategy%3D%3Dseb108-29%7C%7CSearchStrategy%3D%3Dseb108-28%29%20seb93%3Dseb12%5Bi%5D%3Bseb93%3Dseb90%281%2Cseb93%29%3B%20if%28SearchStrategy%3D%3D1%29%20seb93%3Dseb12%5Bi%5D%3Bif%28arrResultTextFont%5B0%5D%21%3D%22%22%29seb93%3D%22%3Cspan%20class%3D%22+arrResultTextFont%5B0%5D+%22%3E%22+seb93+%22%3C/span%3E%22%3B%20if%28arrResultTextFont%5B1%5D%3D%3D0%29%20%7Bif%28arrResultTextFont%5B6%5D%3D%3D1%29%20seb93%3D%22%3Cu%3E%22+seb93+%22%3C/u%3E%22%3Bseb93%3Dseb76%5BarrResultTextFont%5B4%5D%5D+seb93+seb77%5BarrResultTextFont%5B4%5D%5D%3Bseb93%3D%22%3Cbig%3E%3Cfont%20size%3D%22+arrResultTextFont%5B2%5D+%22%20color%3D%22+arrResultTextFont%5B5%5D+%22%20face%3D%22+arrResultTextFont%5B3%5D+%22%3E%22+seb93+%22%3C/font%3E%3C/big%3E%22%3B%7Dseb97+%3Dseb93+%22%3Cbr%3E%22%3B%7Dif%28OutPutResultUrl%3D%3Dseb113%29%7Bvar%20seb55%3Dseb112%3Bseb55%3Dseb55+%22%20-%20%22+seb14%5Bi%5D+%22k%22%3B%20if%28seb9%5Bi%5D%21%3D%22%22%29%20seb55%3Dseb55+%22%20-%20%22+seb9%5Bi%5D%3Bif%28arrResultUrlFont%5B0%5D%21%3D%22%22%29seb55%3D%22%3Cspan%20class%3D%22+arrResultUrlFont%5B0%5D+%22%3E%22+seb55+%22%3C/span%3E%22%3B%20if%28arrResultUrlFont%5B1%5D%3D%3D0%29%20%7Bif%28arrResultUrlFont%5B6%5D%3D%3D1%29%20seb55%3D%22%3Cu%3E%22+seb55+%22%3C/u%3E%22%3Bseb55%3Dseb76%5BarrResultUrlFont%5B4%5D%5D+seb55+seb77%5BarrResultUrlFont%5B4%5D%5D%3Bseb55%3D%22%3Cfont%20size%3D%22+arrResultUrlFont%5B2%5D+%22%20color%3D%22+arrResultUrlFont%5B5%5D+%22%20face%3D%22+arrResultUrlFont%5B3%5D+%22%3E%22+seb55+%22%3C/font%3E%22%3B%7Dif%28seb10%5Bi%5D%3D%3D%22%22%29seb97+%3D%22%3Ca%20href%3D%5C%22%22+seb112+%22%5C%22%20%22+seb109+%22%3E%22+seb55+%22%3C/a%3E%3Cbr%3E%22%3Belse%20seb97+%3Dseb55+%22%3Cbr%3E%22%3B%7Dseb97+%3D%22%3Cbr%3E%22%3B%7Dif%28NoHorizLine%3D%3D0%29%20seb97+%3D%22%3Chr%3E%22%3Bvar%20seb102%3D%22%22%3Bvar%20seb116%3DparseInt%28%28seb7-1%29/ItemsPerPage%29+1%3Bif%28seb116%3Eseb113%29%7Bif%28NoHorizLine%3D%3D1%29seb102+%3D%22%3Cbr%3E%22%3B%20%20seb102+%3DstrResultPage+%22%3A%20%22%3Bvar%20seb112%3Bif%28seb96%3D%3D%22ASP%22%29seb112%3Dseb19%3Bif%28seb96%3D%3D%22PHP%22%7C%7Cseb96%3D%3D%22JS%22%29seb112%3Ddocument.location.pathname%3Bvar%20seb117%3Dseb0%3B%20if%28seb96%3D%3D%22JS%22%29%20%7Bvar%20seb118%3Dnavigator.appVersion.indexOf%28%22MSIE%22%29%3Bif%28seb118%21%3D-1%29if%28navigator.appVersion.substr%28seb118%2C8%29%3E%3D%22MSIE%205.5%22%29%20seb117%3DencodeURIComponent%28seb0%29%3B%7Dseb112+%3D%22%3FsearWords%3D%22+seb117%3Bseb112+%3D%22%26Send%3DSearch%22%3Bseb112+%3D%22%26match%3D%22+MatchingStrategy%3Bseb112+%3D%22%26search%3D%22+SearchStrategy%3Bseb112+%3D%22%26items%3D%22+ItemsPerPage%3Bvar%20seb119%3D%22%22%3Bif%28seb96%3D%3D%22JS%22%26%26OutPutWindowType%3D%3D2%26%26SearchFormFrame%21%3D%22%22%29%20seb119%3D%22target%3D%5C%22%22+SearchFormFrame+%22%5C%22%22%3Bif%28seb15%3E%3DItemsPerPage%29%20seb102+%3D%22%3Ca%20href%3D%5C%22%22+seb112+%22%26start%3D%22+%28seb15-ItemsPerPage%29+%22%5C%22%20%22+seb119+%22%3E%22+strPrevious+%22%3C/a%3E%20%22%3Bvar%20seb120%3Dseb108-seb106-13%3B%20var%20t%3Dseb15/ItemsPerPage-seb120%3Bif%28t%3C0%29t%3D0%3Bfor%28%3Bt%3Cseb116%26%26t%3Cseb15/ItemsPerPage+seb120%3Bt++%29%7Bif%28t%21%3Dseb15/ItemsPerPage%29%20seb102+%3D%22%3Ca%20href%3D%5C%22%22+seb112+%22%26start%3D%22+t*ItemsPerPage+%22%5C%22%20%22+seb119+%22%3E%22+%28t+1%29+%22%3C/a%3E%20%22%3Belse%20seb102+%3D%28t+1%29+%22%20%22%3B%7Dif%28seb15%3C%28seb116-1%29*ItemsPerPage%29%20seb102+%3D%22%3Ca%20href%3D%5C%22%22+seb112+%22%26start%3D%22+%28seb15+ItemsPerPage%29+%22%5C%22%20%22+seb119+%22%3E%22+strNext+%22%3C/a%3E%20%22%3Bseb102+%3D%22%3Cbr%3E%3Cbr%3E%22%3B%7Dif%28NoPoweredBy%3D%3D0%29%20%7Bseb102+%3D%22%3Cfont%20size%3D%27-1%27%3EPowered%20by%20%3Ca%20href%3D%5C%22http%3A//www.%22+seb101+%22.com%5C%22%20target%3D%5C%22_blank%5C%22%3E%22%3Bseb102+%3Dseb17%3Bseb102+%3D%22%3C/a%3E%202005%3C/font%3E%22%3B%7Dif%28arrResultInfoFont%5B0%5D%21%3D%22%22%29%20seb102%3D%22%3Cspan%20class%3D%22+arrResultInfoFont%5B0%5D+%22%3E%22+seb102+%22%3C/span%3E%22%3B%20if%28arrResultInfoFont%5B1%5D%3D%3D0%29%20%7Bseb102%3D%22%3Cfont%20size%3D%22+arrResultInfoFont%5B2%5D+%22%20color%3D%22+arrResultInfoFont%5B5%5D+%22%20face%3D%22+arrResultInfoFont%5B3%5D+%22%3E%22+seb102+%22%3C/font%3E%22%3Bif%28arrResultInfoFont%5B6%5D%3D%3D1%29%20seb102%3D%22%3Cu%3E%22+seb102+%22%3C/u%3E%22%3Bif%28arrResultInfoFont%5B4%5D%3D%3D1%29%20seb102%3D%22%3Ci%3E%22+seb102+%22%3C/i%3E%22%3Bif%28arrResultInfoFont%5B4%5D%3D%3D2%29%20seb102%20%3D%20%22%3Cb%3E%22+seb102+%22%3C/b%3E%22%3Bif%28arrResultInfoFont%5B4%5D%3D%3D3%29%20seb102%3D%22%3Ci%3E%3Cb%3E%22+seb102+%22%3C/b%3E%3C/i%3E%22%3B%7Dseb97+%3Dseb102%3Bif%28seb105.indexOf%28seb101%29%21%3D0%29return%20%22%22%3B%20seb97%3DDecorateBefore+seb97+DecorateAfter%3Bif%28seb98.indexOf%28seb101%29%3D%3D-1%29return%20%22%22%3B%20return%20seb97%3B%7DtxtAlead%3D%22%27%3E%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20OutPutSearchResult%28seb96%29%7Bvar%20seb97%3Bseb97%3Dseb95%28seb96%29%3Bvar%20seb121%3DSEBEmail%3B%20if%28seb17.indexOf%28%22earc%22%29%3D%3D-1%29return%3B%20var%20seb122%3Dseb17%3B%20%20var%20seb123%3DSEBWebsite%3B%20%20if%28seb122.indexOf%28%22ngin%22%29%3D%3D-1%7C%7Cseb122.indexOf%28%22uild%22%29%3D%3D-1%29return%3B%20if%28seb123.indexOf%28%22lea%22%29%3D%3D-1%29return%3B%20var%20seb124%3Dseb123.length%3B%20if%28seb121.indexOf%28%22eads%22%29%3D%3D-1%29return%3B%20var%20seb125%3Dseb121.length%3B%20var%20seb126%3Dseb124-seb125%3B%20if%28seb96%3D%3D%22PHP%22%29document.write%28seb97%29%3Bif%28seb96%3D%3D%22ASP%22%29Response.Write%28seb97%29%3Bif%28seb96%3D%3D%22JS%22%29%7Bif%28OutPutWindowType%3D%3Dseb126-3%29%20%7Bdocument.write%28seb97%29%3B%7Dif%28OutPutWindowType%3D%3Dseb126-2%29%20%7Bvar%20seb127%3D%22Object%22%3Bif%28OutPutNewWindowOpenMode%3D%3D0%29%20seb127+%3DMath.floor%28Math.random%28%29*1000%29+1%3Bvar%20seb128%3Bseb128%3Dopen%28%22%22%2Cseb127%2COutPutNewWindowProperty%29%3Bseb128.document.close%28%29%3B%20seb128.document.open%28%29%3Bseb128.document.write%28seb97%29%3B%7Dif%28OutPutWindowType%3D%3Dseb126-1%7C%7COutPutWindowType%3D%3Dseb126%29%20%7Bif%28OutputTarget%3D%3D%22_top%22%29top.document.write%28seb97%29%3Bif%28OutputTarget%3D%3D%22_parent%22%29parent.document.write%28seb97%29%3Bif%28OutputTarget%3D%3D%22_self%22%29%7Bself.document.close%28%29%3B%20self.document.open%28%29%3Bself.document.write%28seb97%29%3B%7Dif%28OutputTarget.charAt%280%29%21%3D%27_%27%29%20%7Bparent.frames%28OutputTarget%29.document.close%28%29%3B%20parent.frames%28OutputTarget%29.document.open%28%29%3Bparent.frames%28OutputTarget%29.document.write%28seb97%29%3B%7D%7D%7Dif%28seb96%21%3D%22ASP%22%29%20if%28document.formSear%29if%28document.formSear.searWords%29document.formSear.searWords.value%3Dseb0%3Breturn%3B%7Dfunction%20OnSearchSubmit%28%29%7Bvar%20seb25%3Dnavigator.appVersion.indexOf%28%22MSIE%22%29%3Bif%28seb25%21%3D-1%29if%28navigator.appVersion.substr%28seb25%2C8%29%3C%22MSIE%205.5%22%29%20return%20true%3Bvar%20seb26%3Ddocument.formSear.searWords.value%3Bseb26%3Dseb26.replace%28/%5C+/g%2C%20%22%20%22%29%3B%20%20var%20seb129%3Ddocument.location.pathname+%22%3FsearWords%3D%22+encodeURIComponent%28seb26%29%3Bif%28document.formSear.search%29%20seb129+%3D%22%26search%3D%22+document.formSear.search.value%3Bif%28document.formSear.match%29%20seb129+%3D%22%26match%3D%22+document.formSear.match.value%3Bif%28document.formSear.area%29%20%7Bif%28document.formSear.area.value%3D%3D1%29%20document.location%3Dseb129%3Bif%28document.formSear.area.value%3D%3D2%29%20document.location%3D%22http%3A//www.google.com/search%3Fq%3D%22+encodeURIComponent%28seb26%29%3B%7Delse%20document.location%3Dseb129%3Breturn%20false%3B%7DtxtAlead%3D%22%27%3E%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%23%3D%7C%25@%23+*%5E-%23%3D%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%23%3D%7C%25@%23+*%7C%25@%23+*%3Ca%20href%3D%27%22%3Bfunction%20seb130%28seb131%29%7BparamStr%3Ddocument.location.search%3Bif%28paramStr%3D%3D%22%22%29return%20%22%22%3Bif%28paramStr.charAt%280%29%3D%3D%22%3F%22%29paramStr%3DparamStr.substring%281%2CparamStr.length%29%3Barg%3DparamStr.split%28%22%26%22%29%3Bfor%28i%3D0%3Bi%3Carg.length%3Bi++%29%7Barg_values%3Darg%5Bi%5D.split%28%22%3D%22%29%3Bif%28seb131%3D%3Dunescape%28arg_values%5B0%5D%29%29%7Bvar%20seb132%3Bif%28self.decodeURI%29%20seb132%3DdecodeURI%28arg_values%5B1%5D%29%3Belse%20seb132%3Dunescape%28arg_values%5B1%5D%29%3B%20%20return%20seb132%3B%7D%7Dreturn%3B%7Dfunction%20seb133%28%29%7Bvar%20seb26%3B%20if%28document.location.search%3D%3D%22%22%29%20%7Bif%28%21document.formSear%29return%200%3Bif%28document.formSear.match%29%7Bvar%20seb134%3DparseInt%28document.formSear.match.value%29%3Bif%28%21isNaN%28seb134%29%29MatchingStrategy%3Dseb134%3B%7Dif%28document.formSear.search%29%7Bvar%20seb134%3DparseInt%28document.formSear.search.value%29%3Bif%28%21isNaN%28seb134%29%29SearchStrategy%3Dseb134%3B%7Dseb26%3Ddocument.formSear.searWords.value%3B%20%7Delse%20%7Bvar%20seb134%3Bseb134%3DparseInt%28seb130%28%22match%22%29%29%3Bif%28%21isNaN%28seb134%29%29MatchingStrategy%3Dseb134%3Bseb134%3DparseInt%28seb130%28%22search%22%29%29%3Bif%28%21isNaN%28seb134%29%29SearchStrategy%3Dseb134%3Bseb134%3DparseInt%28seb130%28%22start%22%29%29%3Bif%28%21isNaN%28seb134%29%29seb15%3Dseb134%3Bseb134%3DparseInt%28seb130%28%22items%22%29%29%3Bif%28%21isNaN%28seb134%29%29ItemsPerPage%3Dseb134%3Bseb26%3Dseb130%28%22searWords%22%29%3B%7Dif%28seb26%3D%3D%22%22%29return%200%3BSplitSearWords%28seb26%29%3B%20return%201%3B%7Dfunction%20seb135%28%29%20%7Bif%28seb133%28%29%3D%3D0%29return%3BSearchKeywords%28%29%3BSortSearchResult%28%29%3BOutPutSearchResult%28%22JS%22%29%3Breturn%3B%7D"));
