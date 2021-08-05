<?php
function listDir($dir)
{
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if ((is_dir($dir . "/" . $file)) && $file != "." && $file != "..") {
                    rename($dir . "/" . $file, $dir . "/" . mb_convert_encoding($file, "GBK", "UTF-8"));
                    listDir($dir . "/" . $file . "/");
                } else {
                    if ($file != "." && $file != "..") {
                        rename($dir . "/" . $file, $dir . "/" . mb_convert_encoding($file, "GBK", "UTF-8"));
                        echo $dir . "/" . $file;
                    }
                }
            }
            closedir($dh);
        }
    }
}
?>
<?php
//开始运行
listDir("./convert");

?>

<!-- 最近用teleport下个整站，但是发现teleport下载下来的文件中文名是乱码，其实也不怪teleport，因为它把文件名用utf8格式保存，而简体版windows下ANSI的文件名默认是gbk格式，这就导致了文件名乱码。
本来想偷下懒，网上找个现成VBS转码的，不过居然发现没有合适的，都是转文件内容码，那么略微改造了下一个php函数可以让php来重命名文件名。

把要转的文件放到convert文件夹里，运行这个函数即可。另外考虑为了便捷，弄个vbs版本出来

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
解决用teleport ultra下载网站中文乱码的问题
在网页head中加入：

<meta http-equiv="content-type" content="text/html; charset=UTF-8">

ok了

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
Teleport Pro 是款优秀的网站离线浏览工具（即网站整站下载工具），Teleport Ultra是其增强版，但使用此系列软件下载的离线网页里会包含大量冗余代码（如tppabs），手动去修改工作量很大，下面介绍如何通过软件进行正则表达式批量替换冗余代码（推荐DreamWeaver的正则替换功能）。

清除tppabs标签：

html文件中：

查找：\btppabs="h[^"]*"

替换：（空）

css文件中的图片链接（以gif图片为例）：

查找：tpa=http://[^\s]*.gif

替换：（空）

css文件中的注释：

查找：/\*tpa.*?\*/

替换：（空）



修复confirm链接：

查找：href=" *javascript:if\(confirm\('(htt[^"\s]*).*?"

替换：href="$1"

冗余代码示例：href="javascript:if(confirm('http://www.xxxxx.com/ \n\n该文件无法用 Teleport Ultra 下载, 因为 不可用, 或放弃了下载, 或项目即将停止。 \n\n你想在服务器上打开它?'))window.location='http://www.xxxx.com/'"

示例替换后结果：href=http://www.xxxx.com/
————————————————

版权声明：本文为CSDN博主「yukon12345」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/yukon12345/article/details/43983783 -->