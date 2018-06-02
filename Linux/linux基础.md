###	1.[Linux命令大全参考网站](http://man.linuxde.net/par/1)
###	2.node安装流程
> ####git安装
> (1) 创建git文件夹 ——> # mkdir git <br>
> (2) 下载git源码安装包 ——> # wget http://git-scm.com/download <br>
> (3) 安装git ——> # yum install git-core <br>
> (4) git安装完毕

> ####nvm安装
>（1）从git上克隆nvm源码 ——> # git clone https://github.com/cnpm/nvm.git <br>
>（2) 执行source + nvm.sh路径，如：# source git/nvm/nvm.sh <br>
>（3）查看node可安装的所有版本 ——> # nvm ls-remote <br>
>（4）安装指定的node版本 ——> # nvm install 8.11.2 <br>
>（5）验证node是否安装成功 ——> # node --version
> 如果返回v8.11.2，则nodejs安装成功 <br>
>（6）node安装完毕
