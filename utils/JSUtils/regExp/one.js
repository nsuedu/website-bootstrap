//功能：统计包含汉字的字符个数
//说明：汉字占2个字符，非汉字占1个字符
function checksum(chars)
{
	var sum = 0; 
	for (var i=0; i<chars.length; i++)
	{ 
   		var c = chars.charCodeAt(i); 
   		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f))
		{ 
   			sum++; 
   		}
   		else 
   		{     
   			sum+=2; 
   		} 
	}
	return sum;
}
