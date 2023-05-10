# 零代码 一键部署ChatGPT到钉钉 无须VPN<br/>



<div align="center">
    <kbd><img src="https://user-images.githubusercontent.com/12178686/235676046-53200fda-5f48-4bb0-a2b5-00a887b8464f.jpg" width="400px"></kbd>
</div>
<br/>
<div align="center">
    <kbd><img src="https://user-images.githubusercontent.com/12178686/235674823-06be7c5e-f165-46e9-ab71-c805b95547f2.png" width="800px"></kbd>
</div>

<div align="center"  style="font-size: 12px; line-height: 12px;">
   ChatGPT 接入钉钉, 赋能商业成功
</div>

## 关于本项目
本项目可以实现一键部署ChatGPT到钉钉中，使ChatGPT与钉钉完美融合，手机或电脑上，打开钉钉，就可以使用强大的ChatGPT智能问答。截止目前，本项目可以提供两个能力:<br>

1. 功能集成，将ChatGPT问答功能集成到钉钉，借助钉钉机器人功能，我们可以与ChatGPT一对一问答，或者在群里让ChatGPT参与问答，安装请参照下面的**部署方法**
2. 更强大的功能扩展，本项目为开源项目，有开发能力的小伙伴可以Fork到自己的仓库，根据自己企业业务需要，比如结合钉钉开放的API，二次开发一些其他功能。


## 部署方法
[指导视频](https://youtu.be/JgBNsWQcSqw)

1. 创建企业微信应用<br>


第一步，创建应用。<br/>
1、登录[钉钉开发者后台](https://open-dev.dingtalk.com/#/)，选择应用开发 > 企业内部开发 > 创建应用，单击创建应用；创建应用后，进入机器人与消息推送页面，进入机器人配置页面。

![image](https://user-images.githubusercontent.com/12178686/235679150-828883cb-213c-4d66-8059-6a2fc0015219.png)

<div align="center">
<kbd><img src="https://user-images.githubusercontent.com/12178686/235679870-f67476e4-dd30-4019-9797-c48a1b29a1d1.png" width="400px"/></kbd>
</div>

2、单击应用功能 > 机器人与消息推送。
![image](https://user-images.githubusercontent.com/12178686/235680489-906ff1f9-57b6-4964-bba0-9f98667917c7.png)
点亮此按扭

3、打开机器人配置开关后，填写机器人相关配置信息，除了**消息接收地址**，信息完善后，请点<发布>，成功会看到“编辑成功”提示。
<div align="center">
<kbd> <img src="https://user-images.githubusercontent.com/12178686/235687039-5ae8aa50-c530-4218-bad5-05f22c139fa1.png" width="600px"/> </kbd>
</div>
<br/><br/>

4、配置机器人权限，单击权限管理 > 机器人，将相关权限开通，操作如下图，
<kbd> <img src="https://user-images.githubusercontent.com/12178686/235688384-84e36e99-26c5-4fe8-9447-6656ba4ca3df.png" /> </kbd>

<kbd> <img src="https://user-images.githubusercontent.com/12178686/235688637-cb847183-e774-4de8-a103-fcc36576b2c0.png" /> </kbd>




第二步，部署前的准备工作

1、**open-api-key**

这个需要在ChatGPT账号里生成
<kbd> <img src="https://user-images.githubusercontent.com/12178686/233278134-9d3fb914-9f3a-4049-b20e-3b0f237239f6.png" /> </kbd>

[申请网址API KEY](https://platform.openai.com/account/api-keys)

2、**AppKey AppSecret**
<kbd> <img src="https://user-images.githubusercontent.com/12178686/235689786-0b284295-3f94-47ad-a3a8-557c2ef8f91e.png" /> </kbd>




第三步，一键部署安装服务
<a href="https://render.com/deploy?repo=https://github.com/sytpb/chatgpt-dingtalk-robot">
  <kbd><img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render"></kbd>
</a>
请点右键 > 新标签页打开

<kbd> <img src="https://user-images.githubusercontent.com/12178686/235695916-e0d48472-6769-4d92-bdbb-7721496f3575.png" /> </kbd>

如图所示，将上面的字段信息填入，端口填入4位数，比如7070，然后点击Apply。 <br/><br/>

<kbd align="center"><img src="https://user-images.githubusercontent.com/12178686/235698794-a8df81fc-9fe6-43b4-9705-e1fd6cd3b18e.png" /></kbd>

<div align="center">
    <kbd> <img src="https://user-images.githubusercontent.com/12178686/235699569-b7c5a287-b96f-492d-9ab1-794d7368402a.png" width="800px" /> </kbd>
</div>
<br/><br/>

需要等1-5分钟部署，完成后复制生成的服务的URL，如下图，**然后拷贝URL后面拼接上/message**, 比如URL是 https://abc.com 拼接成 https://abc.com/message， 粘贴到上面**消息接收地址**页面里，点击<调试>，然后再次点击<发布>即可。

## 功能支持
:100: 下面就可以直接体验了，支持两种聊天模式，一是一对一单聊，另一个是群里添加此机器人，@他的名字，发消息让ChatGPT 回答，如文档开头的两个图片，第一张是一对一单聊，第二张是群里与ChatGPT聊天,更多使用场景请加群讨论。（有问题请提issue)

## 新功能调查

您的工作场景，最想要Chatgpt为您做什么？除了现有的问答模式。假如需要以下功能，

1、语音对话，什么场景用？

2、图片生成，什么场景用？

3、其他，请列举

欢迎来群里讨论！
<div align="center">
    <kbd> <img src="https://user-images.githubusercontent.com/12178686/236080457-3fe7f8cf-3d2b-4bdb-937c-289c92e3900a.jpg" width="200px" alt="group"> </kbd>
</div>


