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
————————————————
版权声明：本文为CSDN博主「yukon12345」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/yukon12345/article/details/43983783 -->