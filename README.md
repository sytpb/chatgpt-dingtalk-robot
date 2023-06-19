
# 零代码 一键部署ChatGPT到钉钉 无须翻墙<br/>


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




1. 创建钉钉应用<br>

## 部署方式一 Vercel方式（推荐）
1. 创建钉钉应用<br>


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

3、**要有一个自己的域名**
自己已经注册好的一个域名。

第三步，一键部署安装服务
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsytpb%2Fchatgpt-dingtalk-robot%2Ftree%2Fmain&env=PORT,APPKEY,APPSECRET,OPENAI_MODEL,OPENAI_API_KEY&project-name=chatgpt-dingtalk-robot&repository-name=chatgpt-dingtalk-robot)
请点右键 > 新标签页打开 <br/>

<kbd>
     <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/4b8390f2-027a-45de-b199-264774c088d0" /> 
</kbd>
<br/><br/>
请将*Create private Git Repository* 勾点掉，然后点击 Create
<br/><br/>
    
<kbd>
    <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/bdcb5f0c-14c7-4a0a-9409-5d5e157bd92e" />
</kbd>
<br/><br/>
这一步要填入相关参数，注意，前后不要加入多余的空格， OPENAI_MODEL, 可以填入gpt-3.5-turbo或者gpt-4， ** 注意账号不支持gpt4,要填入 gpt-3.5-turbo，否则无法使用 **。 然后点击 Deploy。
# 参数选项请参考下面参数表格说明
<br/><br/>    

<kbd>
    <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/52775310-2543-4b00-82f1-6aa52a142750" />
</kbd>
<br/><br/>
部署成功，如图所示。
<br/><br/>
    
<kbd>
    <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/d5f2ae85-342f-4a56-b1e0-314abbbde901" />
</kbd>
<br/> <br/>
绑定自己的域名,填入域名，点 Add。
<br/> <br/>
    
    
<kbd>
    <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/510f3fea-8fcb-4569-9dac-703fad7bdca4" />
</kbd>
<br/> <br/>
保持默认，点 Add
<br/> <br/>
    
<kbd>
    <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/cc6a06b7-af1a-4821-8f75-383efa1437e4" />
</kbd>
<br/> <br/>
复制 IP地址
<br/> <br/>
    
<kbd>
    <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/4e26c7e2-07e9-48a1-b16d-a67abcb6e3d7" />
</kbd>
<br/> <br/>    
到自己购买域名的控制台，我这里是腾讯云控制台，给域名增加解析记录，如图所示，一条A记录，一条CNAME记录。
<br/> <br/>
    
<kbd>
    <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/7b2897ce-3f72-4c8f-bfe8-218b739e829e" />
</kbd>
<br/> <br/>
配置成功，Vercel 页面会自动出现所示标志。
<br/> <br/>
    
**把域名加上/message**, 比如域名是abc.com  URL： https://www.abc.com/message， 粘贴到上面**消息接收地址**页面里，点击<调试>，然后再次点击<发布>即可。到此部署完成！

## 部署方式二 Render方式
<details>
    <summary>点击查看详细</summary>
<br>
[指导视频](https://youtu.be/JgBNsWQcSqw)

1. 创建钉钉应用<br>


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


如图所示，将上面的字段信息填入，端口填入4位数，比如7070，然后点击Apply。 注意现更新增加了OPENAI_MODEL  值可以是gpt-3.5-turbo 或者gpt-4（如果你的key支持可填） <br/><br/>


<kbd align="center"><img src="https://user-images.githubusercontent.com/12178686/235698794-a8df81fc-9fe6-43b4-9705-e1fd6cd3b18e.png" /></kbd>

<div align="center">
    <kbd> <img src="https://user-images.githubusercontent.com/12178686/235699569-b7c5a287-b96f-492d-9ab1-794d7368402a.png" width="800px" /> </kbd>
</div>
<br/><br/>

需要等1-5分钟部署，完成后复制生成的服务的URL，如下图，**然后拷贝URL后面拼接上/message**, 比如URL是 https://abc.com 拼接成 https://abc.com/message， 粘贴到上面**消息接收地址**页面里，点击<调试>，然后再次点击<发布>即可。


</details>

## 部署方式三 Docker方式
<details>
<summary>服务器docker部署</summary>

1. 前提条件:
  - 一台服务器
  - 一个域名

2. 复制变量文件 `.env.example`，填写自己的配置

3. 运行docker
假设新变量文件名为 `.env.local`

```bash
# docker4bill/ww-openai-node:alpine 为构建好的镜像，你也可以利用本仓库的 Dockerfile 构建自己的镜像
docker run --env-file .env.local -p 6060:6060 -d docker4bill/ww-openai-node:alpine
```

4. 用 `caddy` 或者 `nginx` 给以上服务做个反代即可

</details>    

## 参数请参照下表完成,注意值前后不要有空格

| Key                               |  value                         | 说明                                                                                                                                      |
| --------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| APPKEY                            |                                |                                                                                                                                           |
| APPSECRET                         |                                |                                                                                                                                           |
| OPENAI_API_KEY                    |                                |                                                                                                                                           |
| OPENAI_MODEL                      |  gpt-3.5-turbo                 |     gpt-3.5-turbo 或者gpt-4    注意：不支持gpt4填入gpt-4无效                                                                               |
| PORT                              |  7070                          |     可以改成其他                                                                                                                          |
|CHAT_HISTORY                       |  no                            |     yes 或者 no  yes支持上下文会话，no 不支持上下文，区别上下文对话token 成本高                                                             |

## 功能支持
部署完成，:100: 下面就可以直接使用了，支持两种聊天模式，一是一对一单聊，另一个是群里添加此机器人，@他的名字，发消息让ChatGPT 回答，如文档开头的两个图片，第一张是一对一单聊，第二张是群里与ChatGPT聊天,更多使用场景请加群讨论。（有问题请提issue)


## 新功能调查

您的工作场景，最想要Chatgpt为您做什么？除了现有的问答模式。假如需要以下功能，

1、语音对话，什么场景用？

2、图片生成，什么场景用？

3、其他，请列举

欢迎来群里讨论！


<div align="center">
    <kbd> <img src="https://github.com/sytpb/chatgpt-dingtalk-robot/assets/12178686/1689367d-b06c-4a19-ae53-7e6223949306" width="200px" alt="group"> </kbd>
</div>


