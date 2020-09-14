$(function(){
	var students=[
		{"SId":"103101101","Name":"张三", "Sex":"男","Age":19,"Chinese1":94,"Math":82,"English":83,"Part":"是"},
		{"SId":"103101102","Name":"李四", "Sex":"女","Age":20,"Chinese1":65,"Math":76,"English":64,"Part":"否"},
		{"SId":"103101103","Name":"王五", "Sex":"女","Age":21,"Chinese1":96,"Math":53,"English":72,"Part":"是"},
		{"SId":"103101104","Name":"赵六", "Sex":"男","Age":19,"Chinese1":94,"Math":42,"English":90,"Part":"是"},
		{"SId":"103101105","Name":"黄七", "Sex":"女","Age":20,"Chinese1":73,"Math":31,"English":77,"Part":"否"},
		{"SId":"103101106","Name":"张小三","Sex":"男","Age":20,"Chinese1":97,"Math":83,"English":88,"Part":"否"},
		{"SId":"103101107","Name":"李小四","Sex":"男","Age":21,"Chinese1":82,"Math":74,"English":65,"Part":"是"},
		{"SId":"103101108","Name":"王小五","Sex":"女","Age":19,"Chinese1":90,"Math":88,"English":72,"Part":"否"},
		{"SId":"103101109","Name":"赵小六","Sex":"男","Age":20,"Chinese1":91,"Math":67,"English":88,"Part":"否"},
		{"SId":"1031011010","Name":"黄小七","Sex":"男","Age":20,"Chinese1":72,"Math":83,"English":75,"Part":"是"}
	        ];
	
	var firstRow=["学号","姓名","性别","年龄","语文","数学","英语","党员","平均成绩","待定"];
	
	var COrder=$("#COrder");
	var MOrder=$("#MOrder");
	var EOrder=$("#EOrder");
	
	var tbody =document.createElement("tbody");
	var table=document.createElement("table");
	 table.ondblclick=editCell;
	//设置表格的 行数 列数
	var line=11;
	var list= 10;
	
	$("#show").click(function(){
		CreateTable();
	});
	$("#avgbtn").click(function(){
		InsertAvg();
	});
	$("#filter").click(function(){
		Filter();
	});
	
	$("#COrder").click(function(){
		CSort();
	});
	$("#MOrder").click(function(){
		MSort();
	});
	$("#EOrder").click(function(){
		ESort();
	});
	
	
	
	function CreateTable(){
		 
		 table.setAttribute("border","1");
	
		 for(var i=1;i<=line;i++){
		 	
			 //创建tr
			 var tr=document.createElement("tr");	
			 
		 for(var j=1;j<=list;j++){		
		 	
			 //创建td
			 var td=document.createElement("td");
			 td.setAttribute("width","80px");
			 td.setAttribute("height","30px");
			 td.setAttribute("align","center");
			 
			 tr.appendChild(td);

		 }
		 	tbody.appendChild(tr);
		 	table.appendChild(tbody); 
		 }		 
			 document.getElementById("d1").appendChild(table);
			 InsertData();
		}
	
	function InsertData(){
		for(var i=0;i<line;i++)
			{
			//插入表格标题	
	 		 table.rows[0].cells[i].innerText=firstRow[i];
			//一列 一列得 插入数据
			 table.rows[i+1].cells[0].innerText=students[i].SId;
	 		 table.rows[i+1].cells[1].innerText=students[i].Name;
	 		 table.rows[i+1].cells[2].innerText=students[i].Sex;
	 		 table.rows[i+1].cells[3].innerText=students[i].Age;
	 		 table.rows[i+1].cells[4].innerText=students[i].Chinese1;
	 		 table.rows[i+1].cells[5].innerText=students[i].Math;
	 		 table.rows[i+1].cells[6].innerText=students[i].English;
	 		 table.rows[i+1].cells[7].innerText=students[i].Part;
	 		 
			}
	}
	
	function InsertAvg(){
	 for(var i=0;i<line;i++){
		  var a =(students[i].Chinese1+students[i].Math+students[i].English)/3;
		  var average =parseInt(a); 		  
 	  		table.rows[i+1].cells[8].innerText=average;
 	  		
 	  		
		}
	}
	
	function Filter(){
		
		for(var i=0;i<line;i++)
		{
			
			  var a =(students[i].Chinese1+students[i].Math+students[i].English)/3;
			  average=parseInt(a);
			  
			  if(students[i].Sex!="女"&&students[i].Part!="否")
			  {
			  	if(70<average&&average<80)
			  	{
			  		if(students[i].Age>=20)
			  		{
			  			table.rows[i+1].style.background='red';
			  		}
			  		
			  	}
	 
			 }	 
		}
 	  
	}
	
	var   Scores =[];
	function CSort(){
		for(var i=0;i<line;i++){
			Scores.push(table.rows[i+1]);

		}
		Scores.sort(function(tr1,tr2){
            n1=parseInt(tr1.cells[4].innerHTML);
            n2=parseInt(tr2.cells[4].innerHTML);
             return n1-n2;
         });    
         
         for(var i=0;i<Scores.length;i++)
         {
             table.tBodies[0].appendChild(Scores[i]);
         };
		
	}
	function ESort(){
		for(var i=0;i<line;i++){
			Scores.push(table.rows[i+1]);

		}
		Scores.sort(function(tr1,tr2){
            n1=parseInt(tr1.cells[6].innerHTML);
            n2=parseInt(tr2.cells[6].innerHTML);
             return n1-n2;
         });    
         
         for(var i=0;i<Scores.length;i++)
         {
             table.tBodies[0].appendChild(Scores[i]);
         };
		
	}
	function MSort(){
		for(var i=0;i<line;i++){
			Scores.push(table.rows[i+1]);

		}
		Scores.sort(function(tr1,tr2){
            n1=parseInt(tr1.cells[5].innerHTML);
            n2=parseInt(tr2.cells[5].innerHTML);
             return n1-n2;
         });    
         
         for(var i=0;i<Scores.length;i++)
         {
             table.tBodies[0].appendChild(Scores[i]);
         };
		
	}
	
	


	
	

	

	   //dom创建文本框
    var input = document.createElement("input");
    input.type="text" ;
     
    //得到当前的单元格
    var currentCell ; 
    function editCell(event)
    {
        if(event==null)
       {
            currentCell=window.event.srcElement;
        }
        else
        {
            currentCell=event.target;
        }
        
        if(currentCell.tagName=="TD"){

        //用单元格的值来填充文本框的值
        input.value=currentCell.innerHTML;
             //当文本框丢失焦点时调用last
        input.onblur=last;
        input.ondblclick=last;
        currentCell.innerHTML="";
        //把文本框加到当前单元格上.
        currentCell.appendChild(input);
           
        input.focus();

        }

    }
    
    function last()
    {
        //充文本框的值给当前单元格
        currentCell.innerHTML = input.value;
    }
  
	
	
	
});
