//加盖公章
function seal()
{
	
			 var cebfilename=document.ArchiveSend.FileNew.value;
			 var serverip=document.ArchiveSend.serverip.value;
			 		if(cebfilename=="")
			 		{
			 			alert("请选择要盖章的CEB文件!");
			 			return;
			 		}
			 		else
					{
						var fileExtendKind=cebfilename.split('.')[1].toUpperCase();
						if(fileExtendKind!="CEB")
						{
							alert("请选择CEB文件!");
							return;
						}
					}
				//
				var AffixRegisterURL,PrintURL;
				var objStampClientTool = new ActiveXObject("StampClientTool.StampTool");
				AffixRegisterURL = "http://" + serverip + "/StampServer/interfaces/background/AffixRegister.aspx" ;
				PrintURL ="http://" + serverip + "/StampServer/extend/interfaces/printerrror.aspx" ;						
				//采用原来U盘形式的本地化盖章
				nRet = objStampClientTool.LocalSealStamp(cebfilename,'',AffixRegisterURL,PrintURL);
}

//发文预览
function printview()
{
				var cebfile=document.ArchiveSend.FileNew.value;
				if(cebfile=="")
				{
					alert("请选择CEB文件!");
			 		return;
				}
				else
				{
					var fileExtendKind=cebfile.split('.')[1].toUpperCase();
					if(fileExtendKind!="CEB")
					{
						alert("请选择CEB文件!");
						return;
					}
				}
				var serverip=document.ArchiveSend.serverip.value;
				var objautoprint,ret,printtype;
				department = "";// "苏州市政府法制办公室"
				printtype =  "http://" + serverip + "/stampserver/extend/interfaces/Error.aspx";
				ret = 0;
				objautoprint = new ActiveXObject("AutoPrintsvr.AutoPrint");
				ret = objautoprint.VisualPrintLocalCEB(cebfile,department,printtype);
				delete objautoprint;
}

//发文打印
function sendprint()
{
				var cebfile=document.ArchiveSend.FileNew.value;
				if(cebfile=="")
				{
					alert("请选择CEB文件!");
			 		return;
				}
				else
				{
					var fileExtendKind=cebfile.split('.')[1].toUpperCase();
					if(fileExtendKind!="CEB")
					{
						alert("请选择CEB文件!");
						return;
					}
				}
				var serverip=document.ArchiveSend.serverip.value;
				var objautoprint,ret,printtype;
				department = "";// "苏州市政府法制办公室";
				printtype =  "http://" + serverip + "/stampserver/extend/interfaces/SendPrint.aspx";
				ret = 0;
				objautoprint = new ActiveXObject("AutoPrintsvr.AutoPrint");
				ret = objautoprint.VisualPrintLocalCEB(cebfile,department,printtype);
				delete objautoprint;
}