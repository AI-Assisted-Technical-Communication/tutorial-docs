# 搭建对外文档中心

<br>

本教程为希望利用 GitHub 和 Read the Docs 托管 Markdown 文档并搭建在线技术文档中心的读者提供详细的指导与说明。通过本教程，读者将掌握从设置 Git 环境到发布在线文档的完整流程，最终建立在线技术文档中心。

## 目标读者

本教程面向以下读者：

- 掌握基本计算机操作，但技术基础相对薄弱，对 Git、GitHub 和 Markdown 不够熟悉的读者。
- 希望搭建自己的在线技术文档中心的读者。

## 教程目标

通过本教程，你将能够：

- 安装并配置 Git，用于为构建技术文档版本管理体系。
- 注册并授权 GitHub 账号，从而利用 GitHub 托管文档。
- 安装和配置 VS Code 编辑器，配置一个高效、易用的文档编辑环境。
- 掌握 Markdown 基础语法，编写格式清晰的文档。
- 创建、编辑和推送文档到 GitHub 仓库，实现文档的版本管理与团队协作。
- 通过 Read the Docs 构建在线文档中心。

## 操作环境

<br>

本教程使用的软件及其版本如下：

- 操作系统：Windows 11
- Git：2.41.0.windows.3
- GitHub：Free, pro, and team
- Read the Docs：Version 3.1
- VS Code：Version 1.81


## 前提条件

<br>

在开始之前，确保已经了解或掌握以下知识：

1. 了解 Git 的分支管理的原理以及常用 Git 指令的含义，如 Clone、Pull、Commit、Stage、Push、Merge 等。更多信息，参考 [Git Reference](https://git-scm.com/docs)。

2. 了解 GitHub 的基础操作及其与 Git 的关系。更多信息，参考 [GitHub 入门文档](https://docs.github.com/zh/get-started)。

3. 了解 Read the Docs。更多信息，参考 [Read the Docs: documentation simplified](https://docs.readthedocs.io/en/stable/)。

4. 掌握 VS Code 基本操作，并了解 VS Code 与 Git 指令的关系。更多信息，参考 [Introduction to Git in VS Code](hhttps://code.visualstudio.com/docs/sourcecontrol/intro-to-git)。

5. 掌握 Markdown 基础语法。具体语法，参考 [Markdown Guideline](https://www.markdownguide.org/basic-syntax/)。


## 操作步骤

> 注意：本教程以 Windows 操作系统为例，若当前电脑为 MacOS 或 Linux，操作步骤可能略有不同。

### 步骤 1：下载 Git

1. 前往 Git 官方网站的下载页面：https://git-scm.com/downloads。

2. 下载页面将自动检测到当前电脑的操作系统是，并自动提供适用于当前系统的安装程序。以 Windows 操作系统为例，点击 **Download for Windows** 下载 Git 安装程序。

3. 下载完毕后，在文件资源管理器中找到已下载的安装程序并双击打开。

4. 按照安装向导中的步骤进行安装。Git 支持在安装时自定义安装选项和路径，但通常情况下保持默认设置即可。

5. 安装完成后，打开电脑的 **命令提示符** 或 **终端** 应用，并输入 ``git --version`` 来验证 Git 是否已正确安装。若已正确安装，系统将返回当前 Git 的版本信息。

``` python
PS E:\repo\demo> git --version
git version 2.41.0.windows.3
```


### 步骤 2：注册 Github

1. ​前往 [GitHub 官方网站](https://github.com/) 点击 Sign up，按照提示注册 Github 账号。

2. 参照 [验证电子邮件地址](https://docs.github.com/zh/get-started/signing-up-for-github/verifying-your-email-address)，验证注册时输入的电子邮件地址。


### 步骤 3：注册 Read the Docs

1. 前往 [readthedocs.org](https://readthedocs.org/) 并点击页面右上角的 **Sign up** 按钮。

2. 在账号注册页面中，选择 **Sign up with Github**。

3. 按照页面提示进行账号授权操作。

4. 填写账号名、电子邮箱等必要信息，然后点击 **Create account** 注册账号。


### 步骤 4：下载 VS Code 编辑器

1. 前往 [VS Code 官方网站](https://code.visualstudio.com/Download) 下载 VS Code 客户端。

2. 下载完毕后，在文件资源管理器中找到已下载的安装程序并双击打开。

3. 在本地打开 VS Code 安装程序，按照程序中的提示安装 VS Code。


### 步骤 5：编辑器授权 Github 账号

​1. 打开 VS Code 编辑器，点击左侧的 **源代码（Source Control）** |Source_Control| 图标。

2. 点击 **克隆仓库（Clone Repository）**，并点击 **从 GitHub 克隆（Clone from GitHub）**。

3. 此时弹窗提示必须登录 GitHub，点击 **允许（Allow）**，将打开登录 GitHub 的浏览器页面。

4. 在浏览器中确认登录 GitHub 后，回到 VS Code。

5. 在弹窗中允许 VS Code 打开 GitHub 的 URI。

6. 几秒之后，你可以在 VS Code 编辑器的左侧，点击 **账号（Accounts）**，确认 VS Code 账号已登录成功。

### 步骤 6：配置编辑器（可选）

VS Code 编辑 Markdown 格式的文件，但为了优化 Markdown 编辑体验，可安装以下扩展：

- Markdown All in One：

    - 功能： 这个扩展为 Markdown 编辑器提供了一系列快捷命令，用于插入常用的 Markdown 语法。它简化了插入链接、图片、标题、列表等常用元素的过程。
    
    - 优势： 你可以通过键入简短的命令触发自动完成，插入特定的 Markdown 格式，节省了输入时间并降低了出错的可能性。

- Markdown Preview Enhanced：

    - 功能： 这个扩展提供了增强的 Markdown 预览功能，不仅仅是基本的预览。它支持 MathJax、流程图、时序图等扩展功能，以及多种主题和样式。

    - 优势： 你可以在编辑器内实时预览 Markdown 渲染效果，并且可以使用更多高级功能来增强文档的可读性和表现力。例如，你可以绘制复杂的流程图和图表，使文档更加丰富多彩。

通过下列步骤安装扩展：

1. 打开 VS Code 编辑器，​点击左侧的扩展（Extensions）图标，然后在搜索框中搜索以下扩展并安装：

    - Markdown all in one
    
    - Markdown preview enhanced

2. 安装后，在 VS Code 界面左侧点击 **扩展**，打开 **已安装** 标签页，即可看到已下载的扩展。

### 步骤 7：创建项目

在 GitHub 仓库中创建项目有两种方式：复制现有的仓库，或新建一个仓库。为实现快速配置 Read the Docs 仓库，推荐直接复制现有的 Read the Docs 配置仓库到个人空间：

1. 在 Github 中，访问现有的仓库，例如 ``https://github.com/AI-Assisted-Technical-Communication/AI-Translation``。

2. 参照 [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)，将该仓库复制一份至个人空间内。

### 步骤 8：在项目中添加文件

创建或复制到个人空间的仓库仍然在云端，可参照 [Commit your first change](https://docs.github.com/en/get-started/quickstart/create-a-repo#commit-your-first-change) 直接在网页进行编辑。通常情况下，为了进行多人、多文件同时编辑，推荐将仓库复制到本地，并使用 VS Code 进行编辑。

<br>

通过以下步骤复制仓库到本地并使用 VS Code 进行编辑：

1. 登录 Github。在个人空间内，点击 **我的仓库**，找到复制来的仓库，进入仓库首页。
   
2. 仓库首页，点击 **<> Code**，复制该仓库的 HTTPS URL。

3. 打开 VS Code，点击 **源代码 > 克隆仓库**。

4. 完成仓库克隆后，在左下角可以看到当前打开的分支。通常是主分支（Master/Main）。

5. 点击分支名称，可以创建新分支，或切换到其他分支。如果是多人合作，建议不要直接在主分支上编辑，创建一个新分支，编辑好之后再合并到主分支。

6. 点击 **Explorer**，点击一个已有的文件进行编辑，或创建一个新文件：
    
    a. 在 Explorer 左侧目录栏中的空白位置右键，创建新文件；
    
    b. 新文件的名称中包含了你期望创建的文件格式。例如，将文件命名为 ``new.md``，表示创建一个名为 ``new`` 的 markdown 文件，用于编辑 markdown 内容。将文件命名为 ``index.rst``，表示创建一个名为``index`` 的 reStructuredText 文件，用于编写文档中心的目录。

7. 编辑后，输入 ``Ctrl+S`` 保存已编辑的内容。


### 步骤 9：提交编辑内容

1. 点击左侧导航栏的 **源代码（Source Control）**，"Changes" 面板中的文件右侧标记表示了对文件的不同更改状态。这些标记通常用于 Git 版本控制操作。以下是常见的这些标记及其含义：

    - U（Untracked）： 表示该文件是未跟踪的新文件，存在于工作目录中但未添加到云端分支。

    - M（Modified）： 表示该文件在工作目录中已经有过更改，但还没有被添加到暂存区（Staging Area）。

    - A（Added）： 表示该文件已经被添加到版本控制，且在下一次提交时会被包含。

    - D（Deleted）： 表示该文件在工作目录中已经被删除，且在下一次提交时会被移除。

    - R（Renamed）： 表示该文件已经被重命名，通常会伴随 M 或 D 标记以指示具体的状态。

    - C（Copied）： 表示该文件已经被复制，通常会伴随 M 或 D 标记以指示具体的状态。

    - *（Ignored）： 表示该文件已被定义为被版本控制系统忽略，不会被纳入版本控制。

    - ?（Untracked）： 表示该文件是未跟踪的新文件，类似于 U，但在某些版本控制系统中使用不同的标记。

2. 点击 Changes 旁边对应的 “+”（Stage All Changes），将所有更改添加到暂存区。或点击某个文件对应的 “+”（Stage Changes），将某个文件的更新添加到暂存区。

3. 在 Message 处输入此次更新的主要内容概述。

4. 点击 **Commit**，将更改保存在本地版本库中的一个新的提交记录中。

5. 点击 **Sync**，将更改同步到远程版本库，同时将远程版本库中的内容更新到本地。这一步骤是 VS Code 的特有功能，相当于 Git 中的 Push + Pull。如有需要，也可点击 **源代码（Source Control）** 左侧面板上方的 **... > 拉取（Pull）/推送（Push）**，仅进行其中一个操作。

6. 同步后，访问网页版 GitHub，可以看到刚才提交的更新。

### 步骤 10：创建 Read the Docs 项目

1. 登录 Read the Docs 并在账号首页选择 **Import a Project**。

2. 在 Import a Repository 页面中，你可以看到当前 Github 账号的公开项目列表。
   
   - 如果你的文档仓库已出现在列表中，点击仓库名称，自动连接 Github 仓库。
   
   - 如果你的文档仓库未出现在列表中，选择 **Import Manually** 进行手动配置。

3. 按照提示创建项目并进行初始化配置。

在进行上述操作时，注意以下事项：

- 确保在 Read the Docs 中选择正确的 GitHub 仓库，且仓库名称或 URL 的输入应该准确无误。
    
- 在项目配置中，确保选择适当的文档类型和默认分支，这样可以确保正确的文档构建和版本控制。
    
- 确保仓库中包含了 ``readthedocs.yml`` 和 ``conf.py`` 文件对构建过程进行配置。这些文件可以用于定义构建设置、指定依赖项等。根据需求，可以在readthedocs项目中配置构建过程的一些设置。例如，你可以指定构建文档的工具、安装依赖项、设置构建环境等。根据你的具体需求，进行适当的配置。
    

### 步骤 11：检查在线文档

Read the Docs 项目在创建完成后会自动构建一次文档，及时检查构建状态并验证生成的文档。如果有任何问题，可以返回配置页面进行调整。自动构建之后，可以点击右上角的 **文档**，阅读构建好的文档。

## 相关信息

- Git 官方文档：https://git-scm.com/book/zh/v2
- Github 官方文档：https://docs.github.com/cn
- VS Code 官方文档：https://code.visualstudio.com/docs
- Read the Docs 文档：https://docs.readthedocs.io/en/stable/


