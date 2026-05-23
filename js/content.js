/**
 * Content pages — 32 bilingual (EN/中文) tutorial pages
 * Each page targets one keyword for SEO
 */
const CATEGORIES = [
  { slug: "getting-started", en: "Getting Started", zh: "入门指南", icon: "🚀" },
  { slug: "slash-commands",  en: "Slash Commands",  zh: "斜杠命令", icon: "⚡" },
  { slug: "configuration",   en: "Configuration",   zh: "配置管理", icon: "⚙️" },
  { slug: "permissions",     en: "Permissions",     zh: "权限系统", icon: "🔒" },
  { slug: "hooks",           en: "Hooks",           zh: "钩子系统", icon: "🪝" },
  { slug: "skills",          en: "Skills & MCP",    zh: "技能与MCP", icon: "🧩" }
];

const CONTENT = [

  // ==============================================
  // Category: Getting Started (6 pages)
  // ==============================================

  {
    slug: "what-is-claude-code",
    category: "getting-started",
    related: ["installation-guide", "first-launch", "basic-usage"],
    en: {
      title: "What Is Claude Code?",
      summary: "A complete introduction to Claude Code — Anthropic's AI-powered CLI agent that lives in your terminal and transforms how you write software.",
      body: `<p>Claude Code is Anthropic's official command-line interface tool that brings the power of Claude directly into your terminal. Unlike traditional IDE plugins that offer inline autocomplete, Claude Code functions as a fully autonomous AI agent — it reads your entire codebase, understands project structure, edits files directly, runs shell commands, and executes complex multi-step tasks through natural language conversation.</p>

<h2>What Makes Claude Code Different?</h2>

<p>Most AI coding tools are passive — they suggest completions as you type. Claude Code is <em>active</em>. You describe what you want in plain English, and it does the work. Need to add a rate limiter to every API endpoint? Claude Code finds each endpoint, writes the middleware, and applies it. Want to refactor a class hierarchy across 12 files? Claude Code maps the dependencies, performs the refactor, and updates every reference.</p>

<h2>Key Capabilities</h2>

<ul>
<li><strong>Full Codebase Understanding</strong> — Claude Code indexes your project automatically. It knows your file structure, git history, coding conventions, and architectural patterns without any manual configuration.</li>
<li><strong>Direct File Editing</strong> — Unlike chat-based tools where you copy-paste code, Claude Code reads and writes files directly using specialized editing tools that make precise, targeted changes.</li>
<li><strong>Shell Command Execution</strong> — Claude Code runs terminal commands — installing packages, running tests, executing builds, and managing git — all with your explicit permission.</li>
<li><strong>Natural Language Interface</strong> — No special syntax to learn. Describe your goal and Claude figures out the implementation. This makes it accessible to both senior engineers and developers learning a new stack.</li>
<li><strong>Cross-Platform</strong> — Available on macOS, Linux, and Windows via WSL or PowerShell. Install via Homebrew, npm, or direct download scripts.</li>
</ul>

<h2>How It Fits Your Workflow</h2>

<p>Claude Code operates in your existing terminal, alongside your editor. You keep coding in VS Code, vim, or any IDE, and switch to the terminal when you want Claude's help. This means no context switching to a browser or separate app — your entire development environment stays in one place.</p>

<p>The tool is designed for the full software development lifecycle: writing new features, debugging issues, reviewing code, writing tests, managing git workflows, and automating repetitive tasks. It's not just a code generator — it's a development partner.</p>`
    },
    zh: {
      title: "什么是 Claude Code？",
      summary: "全面介绍 Claude Code —— Anthropic 推出的 AI 驱动命令行代理工具，驻留在你的终端中，彻底改变你编写软件的方式。",
      body: `<p>Claude Code 是 Anthropic 官方推出的命令行界面工具，将 Claude 的强大能力直接带入你的终端。不同于传统 IDE 插件提供的行内自动补全，Claude Code 作为一个完全自主的 AI 代理运行 —— 它能读取你的整个代码库、理解项目结构、直接编辑文件、运行 Shell 命令，并通过自然语言对话执行复杂的多步骤任务。</p>

<h2>Claude Code 的独特之处</h2>

<p>大多数 AI 编码工具是被动的 —— 它们在你输入时提供补全建议。Claude Code 是<em>主动</em>的。你用简单的英语描述需求，它来执行。需要为每个 API 端点添加限流器？Claude Code 会找到每个端点、编写中间件并应用它。想要跨 12 个文件重构类层次结构？Claude Code 会映射依赖关系、执行重构并更新每个引用。</p>

<h2>核心能力</h2>

<ul>
<li><strong>全面理解代码库</strong> — Claude Code 自动索引你的项目。它了解你的文件结构、Git 历史记录、编码规范和架构模式，无需任何手动配置。</li>
<li><strong>直接文件编辑</strong> — 与基于聊天的工具需要复制粘贴不同，Claude Code 使用专门的编辑工具直接读写文件，进行精确、有针对性的更改。</li>
<li><strong>Shell 命令执行</strong> — Claude Code 运行终端命令 —— 安装软件包、运行测试、执行构建、管理 Git —— 所有这些都需经过你的明确授权。</li>
<li><strong>自然语言界面</strong> — 无需学习特殊语法。描述你的目标，Claude 会找出实施方案。这让资深工程师和学习新技术栈的开发者都能轻松使用。</li>
<li><strong>跨平台</strong> — 支持 macOS、Linux 和 Windows（通过 WSL 或 PowerShell）。可通过 Homebrew、npm 或直接下载脚本安装。</li>
</ul>

<h2>如何融入你的工作流</h2>

<p>Claude Code 在你现有的终端中运行，与你的编辑器并行。你可以继续在 VS Code、vim 或任何 IDE 中编码，当需要 Claude 帮助时切换到终端。这意味着无需切换到浏览器或单独的应用程序 —— 整个开发环境都在一个地方。</p>

<p>这个工具设计用于完整的软件开发生命周期：编写新功能、调试问题、审查代码、编写测试、管理 Git 工作流以及自动化重复性任务。它不仅仅是代码生成器 —— 它是你的开发伙伴。</p>`
    }
  },

  {
    slug: "installation-guide",
    category: "getting-started",
    related: ["what-is-claude-code", "first-launch", "authentication"],
    en: {
      title: "How to Install Claude Code",
      summary: "Step-by-step installation guide for Claude Code on macOS, Linux, and Windows. Get up and running in under a minute.",
      body: `<p>Claude Code is designed to be installed in seconds, regardless of your operating system. There are four installation methods available, each optimized for different platforms and workflows. Choose the one that matches your setup.</p>

<h2>macOS — Homebrew</h2>

<p>For macOS users, Homebrew is the recommended installation method. It handles updates automatically and integrates with your existing package management workflow.</p>

<pre><code>brew install claude-code</code></pre>

<p>After installation, verify it works by running <code>claude --version</code>. Homebrew will keep Claude Code updated when you run <code>brew upgrade</code>.</p>

<h2>Linux — Install Script</h2>

<p>On Linux, use the official install script. It detects your distribution and installs the appropriate binary.</p>

<pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>

<p>The script adds Claude Code to your PATH automatically. If you prefer to inspect scripts before running them, download the script first and review it.</p>

<h2>Windows — PowerShell</h2>

<p>Windows users can install via PowerShell. This method works on Windows 10 and 11, with or without WSL.</p>

<pre><code>irm https://claude.ai/install.ps1 | iex</code></pre>

<p>For the best experience on Windows, consider using Windows Terminal with WSL2 — Claude Code integrates seamlessly with Linux environments inside WSL.</p>

<h2>Cross-Platform — npm</h2>

<p>If you already have Node.js installed, npm is the most portable option and works identically on all platforms.</p>

<pre><code>npm install -g @anthropic-ai/claude-code</code></pre>

<p>This method requires Node.js 18 or later. Use <code>npm update -g @anthropic-ai/claude-code</code> to upgrade.</p>

<h2>Post-Installation</h2>

<p>After installation, navigate to any project directory and run <code>claude</code>. On first run, you'll be prompted to authenticate with your Anthropic account. Claude Code supports Claude Pro, Max, Team, and Enterprise subscriptions, as well as direct API key usage.</p>`
    },
    zh: {
      title: "如何安装 Claude Code",
      summary: "Claude Code 在 macOS、Linux 和 Windows 上的详细安装指南。不到一分钟即可完成安装。",
      body: `<p>无论你使用什么操作系统，Claude Code 都可以在几秒内完成安装。有四种安装方式可供选择，分别针对不同平台和工作流进行了优化。选择匹配你环境的方式。</p>

<h2>macOS — Homebrew</h2>

<p>对于 macOS 用户，Homebrew 是推荐的安装方式。它能自动处理更新，并与你现有的包管理工作流集成。</p>

<pre><code>brew install claude-code</code></pre>

<p>安装完成后，运行 <code>claude --version</code> 来验证。当你运行 <code>brew upgrade</code> 时，Homebrew 会保持 Claude Code 更新。</p>

<h2>Linux — 安装脚本</h2>

<p>在 Linux 上，使用官方安装脚本。它会自动检测你的发行版并安装相应的二进制文件。</p>

<pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>

<p>脚本会自动将 Claude Code 添加到你的 PATH 中。如果你习惯在运行前先检查脚本，可以先下载再审查。</p>

<h2>Windows — PowerShell</h2>

<p>Windows 用户可以通过 PowerShell 安装。此方法适用于 Windows 10 和 11，无论是否使用 WSL。</p>

<pre><code>irm https://claude.ai/install.ps1 | iex</code></pre>

<p>为了在 Windows 上获得最佳体验，建议使用 Windows Terminal 配合 WSL2 —— Claude Code 可以与 WSL 内的 Linux 环境无缝集成。</p>

<h2>跨平台 — npm</h2>

<p>如果你已安装 Node.js，npm 是最便捷的跨平台安装方式，在所有平台上表现一致。</p>

<pre><code>npm install -g @anthropic-ai/claude-code</code></pre>

<p>此方法需要 Node.js 18 或更高版本。使用 <code>npm update -g @anthropic-ai/claude-code</code> 来升级。</p>

<h2>安装后</h2>

<p>安装完成后，进入任意项目目录并运行 <code>claude</code>。首次运行时，系统会提示你使用 Anthropic 账号进行认证。Claude Code 支持 Claude Pro、Max、Team 和 Enterprise 订阅，也支持直接使用 API 密钥。</p>`
    }
  },

  {
    slug: "first-launch",
    category: "getting-started",
    related: ["installation-guide", "authentication", "basic-usage"],
    en: {
      title: "First Launch: Your First Claude Code Session",
      summary: "Walk through your first Claude Code session — authentication, the interactive interface, and your first successful interaction.",
      body: `<p>Your first Claude Code session is an exciting moment. After installation, opening Claude Code for the first time presents you with an authentication flow, followed by an interactive REPL interface where you can start giving instructions immediately.</p>

<h2>Starting Claude Code</h2>

<p>Open your terminal and navigate to any project directory — even an empty one works for testing. Type <code>claude</code> and press Enter.</p>

<pre><code>cd my-project
claude</code></pre>

<p>Claude Code will initialize and present you with the authentication screen. You'll need an active Anthropic account with a Claude subscription (Pro, Max, Team, or Enterprise), or an API key.</p>

<h2>Authentication Methods</h2>

<p>Claude Code supports two authentication paths. The OAuth flow opens your browser for one-click login — just follow the link. Alternatively, you can set an API key as an environment variable: <code>ANTHROPIC_API_KEY</code>. The API key method is preferred for CI/CD pipelines and automated workflows.</p>

<p>Once authenticated, Claude Code displays a welcome message and drops you into the interactive prompt. The prompt shows a <code>></code> cursor, ready for your input.</p>

<h2>Your First Interaction</h2>

<p>Start with something simple to verify everything works:</p>

<pre><code>> What files are in this directory?</code></pre>

<p>Claude Code will list the files using its built-in tools. This confirms that Claude can see your project and execute commands. Next, try something practical:</p>

<pre><code>> Create a simple README.md for this project</code></pre>

<p>Claude Code will ask for confirmation (depending on your permission settings) and then write the file. You'll see the result in your editor immediately.</p>

<h2>What You'll Notice</h2>

<p>Claude Code shows you which tools it's using as it works — Read, Write, Edit, Bash — so you always know what's happening. You can interrupt at any time with Ctrl+C. The session preserves context, so follow-up questions reference everything discussed earlier.</p>`
    },
    zh: {
      title: "首次启动：你的第一个 Claude Code 会话",
      summary: "体验你的第一个 Claude Code 会话 —— 认证流程、交互式界面和第一次成功的交互。",
      body: `<p>你的第一个 Claude Code 会话是令人兴奋的时刻。安装完成后，首次打开 Claude Code 会进入认证流程，然后是一个交互式 REPL 界面，你可以立即开始下达指令。</p>

<h2>启动 Claude Code</h2>

<p>打开你的终端，进入任意项目目录——即使是空目录也可以用于测试。输入 <code>claude</code> 并回车。</p>

<pre><code>cd my-project
claude</code></pre>

<p>Claude Code 将初始化并显示认证界面。你需要一个有效的 Anthropic 账号和 Claude 订阅（Pro、Max、Team 或 Enterprise），或者一个 API 密钥。</p>

<h2>认证方式</h2>

<p>Claude Code 支持两种认证方式。OAuth 流程会打开浏览器进行一键登录——只需点击链接即可。或者，你可以将 API 密钥设置为环境变量：<code>ANTHROPIC_API_KEY</code>。API 密钥方式更适合 CI/CD 流水线和自动化工作流。</p>

<p>认证完成后，Claude Code 会显示欢迎信息并进入交互提示符。提示符显示 <code>></code> 光标，等待你的输入。</p>

<h2>你的第一次交互</h2>

<p>从简单的开始，验证一切正常运行：</p>

<pre><code>> 这个目录里有哪些文件？</code></pre>

<p>Claude Code 将使用其内置工具列出文件。这确认了 Claude 可以看到你的项目并执行命令。接下来，尝试一些实用的操作：</p>

<pre><code>> 为这个项目创建一个简单的 README.md</code></pre>

<p>Claude Code 会请求确认（取决于你的权限设置），然后写入文件。你会立即在编辑器中看到结果。</p>

<h2>你会注意到的</h2>

<p>Claude Code 在工作时会显示它使用的工具——Read、Write、Edit、Bash——因此你始终知道正在发生什么。你可以随时用 Ctrl+C 中断。会话会保留上下文，因此后续问题会引用之前讨论过的所有内容。</p>`
    }
  },

  {
    slug: "authentication",
    category: "getting-started",
    related: ["first-launch", "installation-guide", "project-setup"],
    en: {
      title: "Claude Code Authentication Setup",
      summary: "Complete guide to Claude Code authentication — OAuth login, API keys, environment variables, and troubleshooting common auth issues.",
      body: `<p>Authentication is the gateway to Claude Code. Understanding your auth options ensures a smooth setup whether you're working on a personal laptop, a shared server, or in a CI/CD pipeline. Claude Code supports multiple authentication methods to fit different environments.</p>

<h2>OAuth Browser Login</h2>

<p>The default and simplest method. When you run <code>claude</code> for the first time, it opens your browser to <code>claude.ai/activate</code>. Log in with your Anthropic account, approve the device, and the terminal session is automatically authorized. The token is cached locally, so subsequent sessions start instantly without re-authentication.</p>

<p>OAuth works with Claude Pro, Max, Team, and Enterprise subscriptions. Your subscription determines available models, rate limits, and context window size.</p>

<h2>API Key Authentication</h2>

<p>For programmatic access, CI/CD pipelines, or when you prefer token-based auth, set the <code>ANTHROPIC_API_KEY</code> environment variable:</p>

<pre><code>export ANTHROPIC_API_KEY="sk-ant-api03-..."</code></pre>

<p>Generate API keys from the Anthropic Console at <code>console.anthropic.com</code>. API key usage is billed per-token, separate from subscription plans. This method is ideal for automated scripts, CI runners, and headless environments where browser login isn't possible.</p>

<h2>Enterprise Authentication</h2>

<p>Enterprise customers can configure Claude Code to use their organization's SSO provider. Enterprise policies are set in <code>/etc/claude-code/CLAUDE.md</code> and can enforce specific auth methods, model restrictions, and permission rules across the entire organization.</p>

<h2>Troubleshooting</h2>

<p>If authentication fails, run <code>/doctor</code> to diagnose the issue. Common problems include expired tokens (re-run <code>claude</code> to re-authenticate), firewall blocking the auth endpoint, or an invalid API key. For API keys, verify the key is active in the Anthropic Console and has sufficient credits.</p>`
    },
    zh: {
      title: "Claude Code 认证设置",
      summary: "Claude Code 认证完整指南 —— OAuth 登录、API 密钥、环境变量以及常见认证问题排查。",
      body: `<p>认证是使用 Claude Code 的门户。了解你的认证选项可以确保无论是在个人笔记本、共享服务器还是 CI/CD 流水线中都能顺利设置。Claude Code 支持多种认证方式以适应不同环境。</p>

<h2>OAuth 浏览器登录</h2>

<p>默认且最简单的方式。首次运行 <code>claude</code> 时，它会在浏览器中打开 <code>claude.ai/activate</code>。使用你的 Anthropic 账号登录，批准设备，终端会话即自动获得授权。令牌会缓存到本地，因此后续会话无需重新认证即可立即启动。</p>

<p>OAuth 适用于 Claude Pro、Max、Team 和 Enterprise 订阅。你的订阅决定可用的模型、速率限制和上下文窗口大小。</p>

<h2>API 密钥认证</h2>

<p>对于程序化访问、CI/CD 流水线或偏好基于令牌的认证方式，设置 <code>ANTHROPIC_API_KEY</code> 环境变量：</p>

<pre><code>export ANTHROPIC_API_KEY="sk-ant-api03-..."</code></pre>

<p>从 Anthropic 控制台 <code>console.anthropic.com</code> 生成 API 密钥。API 密钥使用按每 Token 计费，与订阅计划分开。此方式非常适合自动化脚本、CI 运行器和无法进行浏览器登录的无界面环境。</p>

<h2>企业认证</h2>

<p>企业客户可以配置 Claude Code 使用其组织的 SSO 提供商。企业策略设置在 <code>/etc/claude-code/CLAUDE.md</code> 中，可以在整个组织内强制执行特定的认证方式、模型限制和权限规则。</p>

<h2>故障排除</h2>

<p>如果认证失败，运行 <code>/doctor</code> 来诊断问题。常见问题包括令牌过期（重新运行 <code>claude</code> 重新认证）、防火墙阻止认证端点、或 API 密钥无效。对于 API 密钥，请在 Anthropic 控制台中验证密钥是否激活且余额充足。</p>`
    }
  },

  {
    slug: "basic-usage",
    category: "getting-started",
    related: ["first-launch", "what-is-claude-code", "project-setup"],
    en: {
      title: "Claude Code Basic Usage Patterns",
      summary: "Learn the fundamental interaction patterns in Claude Code — asking questions, editing files, running commands, and managing multi-step tasks.",
      body: `<p>Once Claude Code is installed and authenticated, you're ready to start using it. The basic interaction pattern is simple: you describe what you want in natural language, Claude figures out the steps, asks for permissions as needed, and executes. But there are patterns and techniques that make your interactions dramatically more effective.</p>

<h2>The Core Loop</h2>

<p>Every Claude Code interaction follows the same loop: <strong>Ask → Review → Execute → Verify</strong>. You ask Claude to do something, it proposes an approach and the tools it will use, you approve (or the action runs automatically depending on permissions), Claude executes, and you verify the result. This tight feedback loop means you're always in control.</p>

<h2>Asking Questions About Your Codebase</h2>

<p>Claude Code excels at answering questions about your project. Ask things like:</p>

<ul>
<li>"How does authentication work in this project?"</li>
<li>"Where is the error handling middleware defined?"</li>
<li>"What database queries does the user profile endpoint make?"</li>
<li>"Which files import the deprecated utility function?"</li>
</ul>

<p>Claude reads your codebase on demand — it doesn't need pre-indexing or configuration. The more specific your question, the more precise the answer.</p>

<h2>Making Changes</h2>

<p>When you ask Claude to modify code, it uses the Edit tool for surgical changes and the Write tool for creating new files. Examples:</p>

<ul>
<li>"Add input validation to the login form"</li>
<li>"Refactor this function to use async/await"</li>
<li>"Rename getCwd to getCurrentWorkingDirectory across the project"</li>
<li>"Create a new API route for user preferences"</li>
</ul>

<h2>Running Commands</h2>

<p>Claude Code can execute shell commands in your project directory. It runs tests, installs dependencies, manages git, and more. Commands require permission by default — you'll see a confirmation prompt before anything executes. This safety mechanism prevents unintended operations.</p>

<h2>Multi-Step Workflows</h2>

<p>The real power emerges when you chain actions. A single prompt like "Add a dark mode toggle to settings, update all components to respect it, and write tests" triggers a coordinated sequence of reads, edits, command runs, and verifications — all handled autonomously with you reviewing at key checkpoints.</p>`
    },
    zh: {
      title: "Claude Code 基本使用模式",
      summary: "学习 Claude Code 的基本交互模式 —— 提问、编辑文件、运行命令以及管理多步骤任务。",
      body: `<p>安装并认证 Claude Code 后，你就可以开始使用了。基本的交互模式很简单：用自然语言描述你想要的内容，Claude 找出执行步骤，根据需要请求权限，然后执行。但有一些模式和技巧可以显著提高你的交互效率。</p>

<h2>核心循环</h2>

<p>每次 Claude Code 交互都遵循相同的循环：<strong>提问 → 审查 → 执行 → 验证</strong>。你要求 Claude 做某事，它会提出方法和将使用的工具，你批准（或根据权限设置自动执行），Claude 执行，你验证结果。这个紧密的反馈循环意味着你始终掌控一切。</p>

<h2>询问有关代码库的问题</h2>

<p>Claude Code 擅长回答关于你的项目的问题。可以问诸如：</p>

<ul>
<li>"这个项目的认证是如何工作的？"</li>
<li>"错误处理中间件在哪里定义的？"</li>
<li>"用户资料端点执行了哪些数据库查询？"</li>
<li>"哪些文件引用了已弃用的工具函数？"</li>
</ul>

<p>Claude 按需读取你的代码库——不需要预索引或配置。你的问题越具体，答案就越精确。</p>

<h2>进行更改</h2>

<p>当你要求 Claude 修改代码时，它使用 Edit 工具进行精确修改，使用 Write 工具创建新文件。例如：</p>

<ul>
<li>"为登录表单添加输入验证"</li>
<li>"将这个函数重构为使用 async/await"</li>
<li>"在整个项目中把 getCwd 重命名为 getCurrentWorkingDirectory"</li>
<li>"为用户偏好设置创建一个新的 API 路由"</li>
</ul>

<h2>运行命令</h2>

<p>Claude Code 可以在你的项目目录中执行 Shell 命令。它运行测试、安装依赖、管理 Git 等。命令默认需要权限——你会在执行前看到确认提示。这个安全机制可以防止意外操作。</p>

<h2>多步骤工作流</h2>

<p>当你链式执行操作时，真正的威力就显现了。一个简单的提示，比如"为设置添加暗色模式切换、更新所有组件以支持它、并编写测试"，会触发一系列协调的读取、编辑、命令运行和验证——所有这些都由 Claude 自主处理，你在关键检查点进行审查。</p>`
    }
  },

  {
    slug: "project-setup",
    category: "getting-started",
    related: ["basic-usage", "claudemd-overview", "init-command"],
    en: {
      title: "Project Setup with Claude Code",
      summary: "How to set up a project for optimal Claude Code usage — CLAUDE.md creation, project structure, and team onboarding best practices.",
      body: `<p>Setting up your project properly for Claude Code takes just a few minutes but pays dividends in every subsequent session. A well-configured project helps Claude understand your conventions, follow your patterns, and produce code that matches your existing codebase.</p>

<h2>Step 1: Run /init</h2>

<p>The first command in any project should be <code>/init</code>. This scans your codebase and generates a <code>CLAUDE.md</code> file containing your tech stack, directory structure, build commands, coding conventions, and more. Think of it as an auto-generated onboarding document for your AI pair programmer.</p>

<pre><code>> /init</code></pre>

<p>Claude analyzes your package.json, tsconfig, directory layout, git history, and existing code patterns to build a comprehensive project profile. The generated CLAUDE.md typically includes your language, framework, testing setup, linting rules, and common commands.</p>

<h2>Step 2: Review and Customize CLAUDE.md</h2>

<p>The auto-generated CLAUDE.md is a starting point. After /init completes, open the file and add:</p>

<ul>
<li><strong>Architecture decisions</strong> — why you chose certain patterns, not just what they are</li>
<li><strong>Team conventions</strong> — naming preferences, file organization rules, PR templates</li>
<li><strong>Gotchas</strong> — known tricky areas, legacy code that shouldn't be touched, upcoming refactors</li>
<li><strong>Domain context</strong> — business logic that isn't obvious from the code alone</li>
</ul>

<p>The better your CLAUDE.md, the more context Claude has for every session. It's the highest-leverage 10-minute investment you can make.</p>

<h2>Step 3: Configure Settings</h2>

<p>Create or update <code>.claude/settings.json</code> to set project-specific permissions and hooks. This ensures consistent behavior across your team — every developer gets the same Claude experience when working in this repository.</p>`
    },
    zh: {
      title: "使用 Claude Code 进行项目设置",
      summary: "如何为最佳 Claude Code 使用体验设置项目 —— CLAUDE.md 创建、项目结构和团队入职最佳实践。",
      body: `<p>为 Claude Code 正确设置项目只需几分钟，但能在后续每次会话中带来巨大回报。配置良好的项目能帮助 Claude 理解你的规范、遵循你的模式，并生成与现有代码库匹配的代码。</p>

<h2>第一步：运行 /init</h2>

<p>任何项目中的第一个命令都应该是 <code>/init</code>。它会扫描你的代码库并生成一个 <code>CLAUDE.md</code> 文件，包含你的技术栈、目录结构、构建命令、编码规范等。可以把它想象成为你的 AI 结对编程伙伴自动生成的新手指南。</p>

<pre><code>> /init</code></pre>

<p>Claude 分析你的 package.json、tsconfig、目录布局、Git 历史和现有代码模式，构建全面的项目档案。生成的 CLAUDE.md 通常包含你的语言、框架、测试设置、代码检查规则和常用命令。</p>

<h2>第二步：审查和自定义 CLAUDE.md</h2>

<p>自动生成的 CLAUDE.md 是一个起点。/init 完成后，打开文件并添加：</p>

<ul>
<li><strong>架构决策</strong> — 为什么选择某些模式，而不仅仅是它们是什么</li>
<li><strong>团队规范</strong> — 命名偏好、文件组织规则、PR 模板</li>
<li><strong>注意事项</strong> — 已知的棘手区域、不应修改的遗留代码、即将进行重构的计划</li>
<li><strong>领域上下文</strong> — 仅从代码中不明显看出的业务逻辑</li>
</ul>

<p>你的 CLAUDE.md 写得越好，Claude 在每次会话中拥有的上下文就越多。这是你能做的回报率最高的 10 分钟投入。</p>

<h2>第三步：配置设置</h2>

<p>创建或更新 <code>.claude/settings.json</code> 来设置项目特定的权限和钩子。这确保团队间行为一致——每个开发者在这个仓库中工作时都能获得相同的 Claude 体验。</p>`
    }
  },

  // ==============================================
  // Category: Slash Commands (10 pages)
  // ==============================================

  {
    slug: "init-command",
    category: "slash-commands",
    related: ["project-setup", "claudemd-overview", "compact-command"],
    en: {
      title: "/init Command: Auto-Generate Project Context",
      summary: "Master the /init slash command in Claude Code — automatically generate CLAUDE.md files that teach Claude about your project's tech stack and conventions.",
      body: `<p>The <code>/init</code> command is the single most important slash command you'll run in any project. It scans your entire codebase and generates a CLAUDE.md file that serves as Claude's reference document for understanding how your project works.</p>

<h2>What /init Does</h2>

<p>When you run <code>/init</code>, Claude Code performs a deep analysis of your project. It reads your package.json or equivalent manifest files to identify your tech stack. It scans your directory structure to understand the architecture. It examines your configuration files (tsconfig, eslint, prettier) to learn your coding standards. It even reviews your git history to understand recent changes and team patterns.</p>

<p>The output is a structured CLAUDE.md file that covers language, framework, build system, test runner, linting rules, project structure, and common commands. This file is loaded into context at the start of every session, so Claude always knows your project's fundamentals.</p>

<h2>When to Use /init</h2>

<ul>
<li>First time opening a project in Claude Code</li>
<li>After major architectural changes (new framework, new build system)</li>
<li>When onboarding a new team member who will use Claude Code</li>
<li>After significant refactors that changed project structure</li>
</ul>

<h2>Customizing After /init</h2>

<p>The generated CLAUDE.md is a starting point. After it's created, open the file and add domain-specific knowledge — why you chose certain patterns, which parts of the codebase are legacy, any upcoming migrations, and team-specific conventions. This human touch transforms a good CLAUDE.md into a great one.</p>

<p>Keep your CLAUDE.md under approximately 200 lines for optimal context usage. Use <code>@path/to/file</code> imports to reference detailed documentation without bloating the main file.</p>`
    },
    zh: {
      title: "/init 命令：自动生成项目上下文",
      summary: "掌握 Claude Code 的 /init 斜杠命令 —— 自动生成 CLAUDE.md 文件，教会 Claude 你的项目技术栈和编码规范。",
      body: `<p><code>/init</code> 命令是你在任何项目中会运行的最重要的斜杠命令。它会扫描你的整个代码库并生成一个 CLAUDE.md 文件，作为 Claude 理解你项目运作方式的参考文档。</p>

<h2>/init 做什么</h2>

<p>当你运行 <code>/init</code> 时，Claude Code 会对你的项目进行深度分析。它读取你的 package.json 或等效的清单文件来识别技术栈。它扫描目录结构以了解架构。它检查配置文件（tsconfig、eslint、prettier）来学习你的编码标准。它甚至会审查你的 Git 历史来了解最近的更改和团队模式。</p>

<p>输出是一个结构化的 CLAUDE.md 文件，涵盖语言、框架、构建系统、测试运行器、检查规则、项目结构和常用命令。该文件在每次会话开始时加载到上下文中，因此 Claude 始终了解你项目的基本信息。</p>

<h2>何时使用 /init</h2>

<ul>
<li>首次在 Claude Code 中打开项目时</li>
<li>重大架构更改后（新框架、新构建系统）</li>
<li>新团队成员入职并将使用 Claude Code 时</li>
<li>重大重构改变了项目结构后</li>
</ul>

<h2>/init 后的自定义</h2>

<p>生成的 CLAUDE.md 是一个起点。文件创建后，打开它并添加领域特定知识——为什么选择某些模式、代码库的哪些部分是遗留代码、即将进行的迁移计划、团队特定规范。这种人机结合的方式将好的 CLAUDE.md 变成卓越的 CLAUDE.md。</p>

<p>保持 CLAUDE.md 在约 200 行以内以获得最佳上下文使用效果。使用 <code>@path/to/file</code> 导入来引用详细文档而不使主文件臃肿。</p>`
    }
  },

  {
    slug: "compact-command",
    category: "slash-commands",
    related: ["init-command", "context-command", "clear-command"],
    en: {
      title: "/compact Command: Managing Context Windows",
      summary: "Learn how to use /compact to summarize conversations, free up context space, and maintain Claude Code performance during long sessions.",
      body: `<p>Claude Code operates within a context window — the total amount of conversation, code, and tool output it can "see" at once. Long sessions with many file reads, tool calls, and back-and-forth exchanges gradually fill this window. The <code>/compact</code> command solves this by intelligently summarizing the conversation to free up space.</p>

<h2>How /compact Works</h2>

<p>When you run <code>/compact</code>, Claude Code analyzes the entire conversation history and produces a condensed summary. This summary preserves key decisions, ongoing tasks, important code snippets, and unresolved questions while discarding redundant exchanges, superseded attempts, and verbose tool outputs.</p>

<p>The summary replaces the raw conversation in context, typically reducing usage by 60-80%. This means you can continue working without losing the thread of what's been discussed and decided.</p>

<h2>Using Hints for Better Summaries</h2>

<p>The most powerful feature of /compact is the hint parameter. Add a focus hint to tell the summarizer what to prioritize:</p>

<pre><code>/compact keep the auth refactor context and the database schema changes</code></pre>

<p>With a hint, the summary preserves everything related to your specified topics while compressing everything else. This targeted approach ensures critical context survives the compaction.</p>

<h2>When to Compact</h2>

<ul>
<li><strong>Proactively</strong>: Before starting a new major task — compact after finishing feature A, before starting feature B</li>
<li><strong>At 70% usage</strong>: Run <code>/context</code> to check usage; compact when you cross 70%</li>
<li><strong>After large file reads</strong>: Reading many large files fills context quickly</li>
<li><strong>Before long-running operations</strong>: Ensure ample space for the upcoming work</li>
</ul>

<p>Don't wait until you hit the context limit — proactive compaction produces better summaries because Claude has more room to think about what to preserve.</p>`
    },
    zh: {
      title: "/compact 命令：管理上下文窗口",
      summary: "学习如何使用 /compact 总结对话、释放上下文空间，并在长会话中保持 Claude Code 的性能。",
      body: `<p>Claude Code 在上下文窗口内运行——即它一次能"看到"的对话、代码和工具输出的总量。包含大量文件读取、工具调用和来回交流的长会话会逐渐填满这个窗口。<code>/compact</code> 命令通过智能总结对话来释放空间。</p>

<h2>/compact 如何工作</h2>

<p>当你运行 <code>/compact</code> 时，Claude Code 分析整个对话历史并生成精简的摘要。这个摘要保留了关键决策、进行中的任务、重要的代码片段和未解决的问题，同时丢弃冗余的交流、被替代的尝试和冗长的工具输出。</p>

<p>摘要替换上下文中的原始对话，通常将使用量减少 60-80%。这意味着你可以继续工作而不会丢失已讨论和决定的内容。</p>

<h2>使用提示获得更好的摘要</h2>

<p>/compact 最强大的功能是提示参数。添加焦点提示告诉摘要器优先保留什么：</p>

<pre><code>/compact 保留认证重构的上下文和数据库模式更改</code></pre>

<p>有了提示，摘要会保留与你指定主题相关的所有内容，同时压缩其他部分。这种有针对性的方法确保关键上下文在压缩后得以保留。</p>

<h2>何时压缩</h2>

<ul>
<li><strong>主动压缩</strong>：在开始新的重大任务前——完成功能 A 后进行压缩，再开始功能 B</li>
<li><strong>使用量达 70% 时</strong>：运行 <code>/context</code> 检查使用量；超过 70% 时进行压缩</li>
<li><strong>读取大文件后</strong>：读取大量大文件会迅速填满上下文</li>
<li><strong>长时间操作前</strong>：确保有充足空间进行即将到来的工作</li>
</ul>

<p>不要等到触发上下文限制再压缩——主动压缩能产生更好的摘要，因为 Claude 有更多空间思考保留什么。</p>`
    }
  },

  {
    slug: "clear-command",
    category: "slash-commands",
    related: ["compact-command", "context-command"],
    en: {
      title: "/clear Command: Reset Your Session",
      summary: "How and when to use /clear (aliases /reset, /new) to completely reset a Claude Code session and start fresh.",
      body: `<p>The <code>/clear</code> command (also available as <code>/reset</code> or <code>/new</code>) completely resets your Claude Code session. Unlike <code>/compact</code> which preserves key context in a summary, <code>/clear</code> wipes the slate clean — all conversation history is discarded, and Claude Code starts fresh with only CLAUDE.md and project context loaded.</p>

<h2>When to Use /clear</h2>

<p>Use /clear when you're switching to a completely unrelated task. If you've been building a new API endpoint for 30 minutes and now want to fix a CSS bug, /clear resets Claude's focus. It's also useful after completing a major piece of work — clear the context before starting something new to avoid Claude being influenced by now-irrelevant past discussions.</p>

<p>Other good times to use /clear:</p>

<ul>
<li>After a series of failed approaches — start fresh with a new strategy</li>
<li>When the conversation has wandered and the context is cluttered with tangents</li>
<li>Before asking Claude to review code with fresh eyes</li>
<li>After toxic or confusing interactions that may have confused the model</li>
</ul>

<h2>/clear vs /compact</h2>

<p>Choose <code>/compact</code> when you need to continue related work but want to free up space — it preserves the thread. Choose <code>/clear</code> when you genuinely want to start over. A good practice: compact before clearing if there are decisions worth preserving. You can review the compact summary, note anything important, then clear.</p>

<p>Note that /clear does not affect files on disk — it only resets the conversation. Any code changes already made persist. It also doesn't reset your settings, permissions, or CLAUDE.md configuration.</p>`
    },
    zh: {
      title: "/clear 命令：重置会话",
      summary: "如何以及何时使用 /clear（别名 /reset、/new）完全重置 Claude Code 会话并重新开始。",
      body: `<p><code>/clear</code> 命令（也可用 <code>/reset</code> 或 <code>/new</code>）完全重置你的 Claude Code 会话。与 <code>/compact</code> 在摘要中保留关键上下文不同，<code>/clear</code> 清除一切——所有对话历史被丢弃，Claude Code 只加载 CLAUDE.md 和项目上下文全新开始。</p>

<h2>何时使用 /clear</h2>

<p>当你切换到完全不相关的任务时使用 /clear。如果你花了 30 分钟构建一个新的 API 端点，现在想修复一个 CSS Bug，/clear 会重置 Claude 的关注点。在完成一项重要工作后使用也很有用——在开始新任务前清除上下文，避免 Claude 被现已无关的过去讨论影响。</p>

<p>其他适合使用 /clear 的场景：</p>

<ul>
<li>一系列失败的尝试后——用新策略重新开始</li>
<li>对话偏离主题，上下文充满无关的旁支</li>
<li>在要求 Claude 以全新视角审查代码之前</li>
<li>在可能混淆了模型的不良或混乱交互之后</li>
</ul>

<h2>/clear vs /compact</h2>

<p>当需要继续相关工作但想释放空间时选择 <code>/compact</code>——它保留对话主线。当真正想重新开始时选择 <code>/clear</code>。一个好习惯是：如果有值得保留的决策，在清除前先压缩。你可以查看压缩摘要，记下重要内容，然后再清除。</p>

<p>注意 /clear 不影响磁盘上的文件——它只重置对话。已做的任何代码更改都会保留。它也不会重置你的设置、权限或 CLAUDE.md 配置。</p>`
    }
  },

  {
    slug: "context-command",
    category: "slash-commands",
    related: ["compact-command", "usage-command", "clear-command"],
    en: {
      title: "/context Command: Visualize Token Usage",
      summary: "How to use /context to see a detailed breakdown of your context window usage — essential for debugging performance and managing long sessions.",
      body: `<p>The <code>/context</code> command provides a real-time visualization of your context window usage. It shows exactly how your context budget is being spent — how much goes to conversation history, how much to file contents, how much to tool outputs, and how much remains available.</p>

<h2>Reading the /context Output</h2>

<p>When you run <code>/context</code>, Claude Code displays a breakdown by component. You'll see the percentage used by system prompts, CLAUDE.md files, conversation history, file reads, tool outputs, and other sources. The visualization makes it immediately obvious if one component is consuming disproportionate space — for example, if a single large file read is taking 30% of your context.</p>

<h2>Using /context to Optimize</h2>

<p>The primary use case for /context is deciding when to compact. As a rule of thumb, compact when you're above 70% utilization. Below 50%, you have plenty of room. Between 50-70%, be mindful of large operations. Above 70%, compact before proceeding.</p>

<p>/context also helps you identify context-heavy patterns. If you notice that reading test files is consuming 40% of your context, you might ask Claude to read only relevant test files rather than entire test suites. If conversation history is dominating, it's definitely time to compact.</p>

<h2>Context-Aware Workflow</h2>

<p>Make /context part of your regular workflow. Check before starting a major task, after reading large files, and periodically during long sessions. Context awareness is a skill that separates efficient Claude Code users from those who constantly hit limits and lose work.</p>`
    },
    zh: {
      title: "/context 命令：可视化 Token 使用量",
      summary: "如何使用 /context 查看上下文窗口使用量的详细分解——对调试性能和管理长会话至关重要。",
      body: `<p><code>/context</code> 命令提供上下文窗口使用量的实时可视化。它精确显示你的上下文预算如何被使用——多少用于对话历史、多少用于文件内容、多少用于工具输出、以及还剩多少可用。</p>

<h2>阅读 /context 输出</h2>

<p>当你运行 <code>/context</code> 时，Claude Code 按组件显示使用量分解。你会看到系统提示、CLAUDE.md 文件、对话历史、文件读取、工具输出和其他来源各自使用的百分比。可视化让你立即发现某个组件是否消耗了不成比例的空间——例如，单个大文件读取是否占用了 30% 的上下文。</p>

<h2>使用 /context 优化</h2>

<p>/context 的主要用途是决定何时压缩。经验法则是：使用量超过 70% 时进行压缩。低于 50% 时，空间充足。50-70% 之间，注意大型操作。超过 70%，在继续之前先压缩。</p>

<p>/context 还帮助你识别上下文密集型模式。如果你注意到读取测试文件消耗了 40% 的上下文，你可以让 Claude 只读取相关的测试文件而不是整个测试套件。如果对话历史占主导地位，那绝对该压缩了。</p>

<h2>上下文感知工作流</h2>

<p>将 /context 纳入你的日常工作流。在开始重大任务前、读取大文件后以及长时间会话中定期检查。上下文感知能力是区分高效 Claude Code 用户和那些不断触及限制、丢失工作成果的用户的技能。</p>`
    }
  },

  {
    slug: "usage-command",
    category: "slash-commands",
    related: ["context-command", "compact-command", "model-command"],
    en: {
      title: "/usage Command: Monitor Token Consumption",
      summary: "Track your Claude Code token consumption and API costs with the /usage command — essential for budgeting and optimizing your workflow.",
      body: `<p>The <code>/usage</code> command shows your token consumption statistics for the current session and your account overall. If you're using API key authentication, this directly translates to cost. If you're on a subscription, it helps you understand your usage patterns.</p>

<h2>What /usage Shows</h2>

<p>The /usage output displays the number of input tokens processed, output tokens generated, and the total for the current session. It also shows whether you're using prompt caching (which reduces input token costs by 90% for cached content) and your cache hit rate. For API users, it can estimate the dollar cost based on current model pricing.</p>

<h2>Cost Management Strategy</h2>

<p>Token costs vary significantly by model. Claude Opus processes tokens at a higher rate than Sonnet, which costs more than Haiku. Use <code>/usage</code> to understand your per-session costs, then use <code>/model</code> to switch to a more cost-effective model for simpler tasks. Run heavy code generation on Opus, but switch to Sonnet or Haiku for straightforward questions, documentation, or simple refactors.</p>

<p>Prompt caching is the single biggest cost saver. CLAUDE.md files, system prompts, and frequently accessed files are cached automatically. You'll see the cache hit rate in /usage — higher is better. Structure your sessions to benefit from caching: keep related work in the same session rather than clearing frequently.</p>`
    },
    zh: {
      title: "/usage 命令：监控 Token 消耗",
      summary: "使用 /usage 命令追踪 Claude Code 的 Token 消耗和 API 成本——对预算管理和优化工作流至关重要。",
      body: `<p><code>/usage</code> 命令显示当前会话和账户整体的 Token 消耗统计。如果你使用 API 密钥认证，这直接转化为成本。如果你在订阅计划上，它能帮助你了解使用模式。</p>

<h2>/usage 显示什么</h2>

<p>/usage 输出显示当前会话处理的输入 Token 数量、生成的输出 Token 数量和总数。它还显示是否使用提示缓存（可将缓存内容的输入 Token 成本降低 90%）以及缓存命中率。对于 API 用户，它可以根据当前模型定价估算美元成本。</p>

<h2>成本管理策略</h2>

<p>Token 成本因模型而异。Claude Opus 的 Token 处理费率高于 Sonnet，而 Sonnet 又高于 Haiku。使用 <code>/usage</code> 了解每次会话的成本，然后使用 <code>/model</code> 为简单任务切换到更经济的模型。在 Opus 上运行繁重的代码生成，但在简单问题、文档或简单重构上切换到 Sonnet 或 Haiku。</p>

<p>提示缓存是最大的成本节省器。CLAUDE.md 文件、系统提示和频繁访问的文件会自动缓存。你将在 /usage 中看到缓存命中率——越高越好。构建会话以受益于缓存：将相关工作保持在同一会话中，而不是频繁清除。</p>`
    }
  },

  {
    slug: "config-command",
    category: "slash-commands",
    related: ["model-command", "permissions-command", "settings-json"],
    en: {
      title: "/config Command: Customize Claude Code",
      summary: "Learn how to use the /config command to customize Claude Code's appearance, behavior, model selection, and permissions through the interactive settings UI.",
      body: `<p>The <code>/config</code> command opens Claude Code's interactive settings interface. This is the central hub for customizing how Claude Code looks and behaves — theme, model preferences, permission rules, and environment variables all live here.</p>

<h2>Settings Categories</h2>

<p>The /config UI is organized into tabs covering different aspects of Claude Code. The Appearance tab controls your theme and color scheme. The Model tab sets your default model and allows per-task model switching. The Permissions tab manages which tools require explicit approval. The Environment tab sets variables and API configuration.</p>

<h2>Theme Customization</h2>

<p>Claude Code supports multiple built-in themes that control the terminal UI colors. You can switch between light and dark themes, adjust accent colors, and configure syntax highlighting for code blocks. Changes take effect immediately — no restart required.</p>

<h2>Model Selection</h2>

<p>In the Model tab, you can set a default model for all sessions and configure model-switching shortcuts. You might set Sonnet as your daily driver for speed and cost-efficiency, with Opus reserved for complex architectural work or difficult debugging sessions.</p>

<h2>Permission Configuration</h2>

<p>The Permissions tab is where you control Claude's autonomy. You can set tools like Read, Glob, and Grep to "always allow," while keeping Edit, Write, and Bash at "ask first." This gives Claude freedom to explore your codebase while requiring your approval for any changes. The settings are stored in <code>.claude/settings.json</code>.</p>`
    },
    zh: {
      title: "/config 命令：自定义 Claude Code",
      summary: "学习如何使用 /config 命令通过交互式设置界面自定义 Claude Code 的外观、行为、模型选择和权限。",
      body: `<p><code>/config</code> 命令打开 Claude Code 的交互式设置界面。这是自定义 Claude Code 外观和行为的中心枢纽——主题、模型偏好、权限规则和环境变量都在这里设置。</p>

<h2>设置类别</h2>

<p>/config UI 按不同方面组织为标签页。外观标签页控制主题和配色方案。模型标签页设置默认模型并允许按任务切换模型。权限标签页管理哪些工具需要明确批准。环境标签页设置变量和 API 配置。</p>

<h2>主题自定义</h2>

<p>Claude Code 支持多个内置主题来控制终端 UI 颜色。你可以在明暗主题之间切换、调整强调色、配置代码块的语法高亮。更改立即生效——无需重启。</p>

<h2>模型选择</h2>

<p>在模型标签页中，你可以为所有会话设置默认模型并配置模型切换快捷方式。你可以设置 Sonnet 作为日常主力以获得速度和成本效率，而 Opus 保留用于复杂的架构工作或困难的调试会话。</p>

<h2>权限配置</h2>

<p>权限标签页是你控制 Claude 自主程度的地方。你可以将 Read、Glob 和 Grep 等工具设置为"始终允许"，同时保持 Edit、Write 和 Bash 为"先询问"。这给予 Claude 探索代码库的自由，同时要求任何更改都需要你的批准。这些设置存储在 <code>.claude/settings.json</code> 中。</p>`
    }
  },

  {
    slug: "permissions-command",
    category: "slash-commands",
    related: ["config-command", "permission-system", "allow-deny-lists"],
    en: {
      title: "/permissions Command: Security Controls",
      summary: "Master the /permissions command to configure which tools Claude Code can use automatically and which require explicit approval — keeping your codebase secure.",
      body: `<p>The <code>/permissions</code> command provides direct access to Claude Code's permission system. While <code>/config</code> offers a broader settings UI, <code>/permissions</code> focuses specifically on tool access control — the security boundary between Claude's suggestions and actual system changes.</p>

<h2>Permission Levels</h2>

<p>Claude Code tools fall into three tiers. Read-only tools (Read, Glob, Grep) are safe and can typically be set to always-allow. Editing tools (Edit, Write) modify files and usually warrant confirmation. Shell execution (Bash) has the highest risk and most users keep it as "always prompt."</p>

<p>Each tool can be configured independently. You might allow Glob and Grep without prompts, require confirmation for Edit and Write, and set Bash to prompt with a denylist blocking dangerous commands like <code>rm -rf</code> or <code>git push --force</code>.</p>

<h2>Permission Sources and Precedence</h2>

<p>Permissions come from multiple sources, evaluated in order: enterprise policies (set by your organization), user global settings (<code>~/.claude/settings.json</code>), project settings (<code>.claude/settings.json</code>), and session overrides. Later sources can tighten but not loosen earlier restrictions — an enterprise policy blocking Bash execution cannot be overridden by a project setting.</p>

<h2>Best Practices</h2>

<p>Start restrictive and loosen gradually as you build trust. For new projects, keep Edit, Write, and Bash at "always prompt." After a few sessions, if Claude consistently makes good decisions, you can relax permissions for specific tools. Regularly review your permission configuration to ensure it still matches your risk tolerance.</p>`
    },
    zh: {
      title: "/permissions 命令：安全控制",
      summary: "掌握 /permissions 命令来配置哪些工具 Claude Code 可以自动使用、哪些需要明确批准——确保代码库安全。",
      body: `<p><code>/permissions</code> 命令提供对 Claude Code 权限系统的直接访问。虽然 <code>/config</code> 提供更广泛的设置界面，但 <code>/permissions</code> 专门聚焦于工具访问控制——Claude 建议和实际系统更改之间的安全边界。</p>

<h2>权限级别</h2>

<p>Claude Code 工具分为三个层级。只读工具（Read、Glob、Grep）是安全的，通常可以设置为始终允许。编辑工具（Edit、Write）修改文件，通常需要确认。Shell 执行（Bash）风险最高，大多数用户保持为"始终提示"。</p>

<p>每个工具可以独立配置。你可以允许 Glob 和 Grep 无需提示，对 Edit 和 Write 要求确认，并将 Bash 设置为提示并配置阻止危险命令（如 <code>rm -rf</code> 或 <code>git push --force</code>）的黑名单。</p>

<h2>权限来源和优先级</h2>

<p>权限来自多个来源，按顺序评估：企业策略（由你的组织设置）、用户全局设置（<code>~/.claude/settings.json</code>）、项目设置（<code>.claude/settings.json</code>）和会话覆盖。后面的来源可以收紧但不能放宽前面的限制——阻止 Bash 执行的企业策略不能被项目设置覆盖。</p>

<h2>最佳实践</h2>

<p>从严格开始，随信任建立逐步放宽。对于新项目，保持 Edit、Write 和 Bash 为"始终提示"。经过几次会话后，如果 Claude 持续做出良好决策，你可以放宽特定工具的权限。定期检查权限配置，确保它仍符合你的风险承受能力。</p>`
    }
  },

  {
    slug: "doctor-command",
    category: "slash-commands",
    related: ["installation-guide", "authentication", "config-command"],
    en: {
      title: "/doctor Command: Diagnostics and Troubleshooting",
      summary: "Use the /doctor command to diagnose Claude Code installation issues, configuration problems, and connectivity troubles — your first stop when something breaks.",
      body: `<p>The <code>/doctor</code> command is Claude Code's built-in diagnostic tool. When something isn't working — authentication fails, commands time out, or tools behave unexpectedly — /doctor is your first troubleshooting step.</p>

<h2>What /doctor Checks</h2>

<p>Running /doctor performs a comprehensive health check of your Claude Code installation. It verifies the binary integrity, checks that all required dependencies are present, tests connectivity to Anthropic's API, validates your authentication token, confirms file system permissions, and checks for configuration conflicts.</p>

<p>Each check returns a pass, warning, or failure status with specific details about what's wrong. A failing check includes actionable suggestions for how to fix the issue.</p>

<h2>Common Issues Detected</h2>

<p>Expired or invalid authentication tokens are the most common issue /doctor catches. It also detects network connectivity problems, especially in environments with strict firewalls or proxy configurations. Configuration conflicts — such as conflicting permission rules across project and user settings — are flagged with clear resolution guidance.</p>

<p>For enterprise users, /doctor validates that organizational policies are correctly applied and that the installation complies with enterprise requirements.</p>

<h2>When to Run /doctor</h2>

<p>Run /doctor as a first step whenever Claude Code behaves unexpectedly. Also run it after upgrading to a new version, after changing your network environment (VPN, proxy), or when setting up Claude Code on a new machine. A clean /doctor report gives you confidence that your installation is healthy.</p>`
    },
    zh: {
      title: "/doctor 命令：诊断和故障排除",
      summary: "使用 /doctor 命令诊断 Claude Code 安装问题、配置问题和连接故障——当出现问题时这是你的第一站。",
      body: `<p><code>/doctor</code> 命令是 Claude Code 的内置诊断工具。当出现问题——认证失败、命令超时或工具行为异常——/doctor 是你的第一个故障排除步骤。</p>

<h2>/doctor 检查什么</h2>

<p>运行 /doctor 会对你的 Claude Code 安装进行全面健康检查。它验证二进制文件完整性、检查所有必需依赖项是否存在、测试与 Anthropic API 的连接、验证认证令牌、确认文件系统权限，并检查配置冲突。</p>

<p>每项检查返回通过、警告或失败状态，并附有具体的问题详情。失败的检查包含如何解决问题的可操作建议。</p>

<h2>检测到的常见问题</h2>

<p>过期或无效的认证令牌是 /doctor 捕获的最常见问题。它还检测网络连接问题，特别是在严格防火墙或代理配置的环境中。配置冲突——例如项目和用户设置之间冲突的权限规则——会被标记并提供清晰的解决指导。</p>

<p>对于企业用户，/doctor 验证组织策略是否正确应用，以及安装是否符合企业要求。</p>

<h2>何时运行 /doctor</h2>

<p>每当 Claude Code 行为异常时，将运行 /doctor 作为第一步。在升级到新版本后、更改网络环境后（VPN、代理）、或在新机器上设置 Claude Code 时也要运行。一份干净的 /doctor 报告让你确信安装是健康的。</p>`
    }
  },

  {
    slug: "model-command",
    category: "slash-commands",
    related: ["config-command", "usage-command", "model-selection"],
    en: {
      title: "/model Command: Switching AI Models",
      summary: "How to use /model to switch between Claude Opus, Sonnet, and Haiku — choosing the right model for each task based on complexity and cost.",
      body: `<p>The <code>/model</code> command lets you switch between Claude models on the fly. Claude Code supports three model tiers — Opus (most capable), Sonnet (balanced), and Haiku (fastest/cheapest). Each tier has different strengths, and knowing when to use each one maximizes both productivity and cost-efficiency.</p>

<h2>Model Comparison</h2>

<p><strong>Opus</strong> is Claude's most powerful model. Use it for complex architectural decisions, difficult debugging sessions, large-scale refactors, and tasks requiring deep reasoning about your codebase. It's the most expensive per token but often saves time on hard problems.</p>

<p><strong>Sonnet</strong> is the recommended default for most development work. It handles feature implementation, code review, test generation, and bug fixes with excellent quality at moderate cost. Most Claude Code users spend 80% of their time on Sonnet.</p>

<p><strong>Haiku</strong> is fast and inexpensive — ideal for quick questions, documentation lookups, simple refactors, and boilerplate generation. Use it for tasks where you need a quick answer, not deep analysis.</p>

<h2>Usage Patterns</h2>

<pre><code>/model opus    # Switch to Opus for complex work
/model sonnet  # Switch to Sonnet (default)
/model haiku   # Switch to Haiku for quick tasks</code></pre>

<p>You can switch models mid-session without losing context. A common pattern: use Sonnet for implementation, switch to Opus for code review and architecture decisions, then switch to Haiku for documentation and cleanup.</p>`
    },
    zh: {
      title: "/model 命令：切换 AI 模型",
      summary: "如何使用 /model 在 Claude Opus、Sonnet 和 Haiku 之间切换——根据复杂性和成本为每个任务选择合适的模型。",
      body: `<p><code>/model</code> 命令让你可以随时在 Claude 模型之间切换。Claude Code 支持三个模型层级——Opus（最强）、Sonnet（均衡）和 Haiku（最快/最便宜）。每个层级有不同的优势，知道何时使用每个模型可以最大化生产力和成本效率。</p>

<h2>模型对比</h2>

<p><strong>Opus</strong> 是 Claude 最强大的模型。用于复杂的架构决策、困难的调试会话、大规模重构以及需要对代码库进行深度推理的任务。它每 Token 最贵，但在难题上通常节省时间。</p>

<p><strong>Sonnet</strong> 是大多数开发工作的推荐默认选择。它以适中的成本处理功能实现、代码审查、测试生成和 Bug 修复，质量出色。大多数 Claude Code 用户 80% 的时间使用 Sonnet。</p>

<p><strong>Haiku</strong> 快速且便宜——非常适合快速问题、文档查找、简单重构和样板代码生成。用于需要快速回答而非深度分析的任务。</p>

<h2>使用模式</h2>

<pre><code>/model opus    # 切换到 Opus 进行复杂工作
/model sonnet  # 切换到 Sonnet（默认）
/model haiku   # 切换到 Haiku 进行快速任务</code></pre>

<p>你可以在会话中切换模型而不丢失上下文。一个常见模式：使用 Sonnet 进行实现，切换到 Opus 进行代码审查和架构决策，然后切换到 Haiku 进行文档和清理工作。</p>`
    }
  },

  {
    slug: "plan-command",
    category: "slash-commands",
    related: ["init-command", "basic-usage", "model-command"],
    en: {
      title: "/plan Command: Architecture-First Development",
      summary: "Learn how to use /plan mode in Claude Code to design solutions before writing code — explore approaches, evaluate trade-offs, and get approval before implementing.",
      body: `<p>The <code>/plan</code> command puts Claude Code into a special planning mode where it analyzes, researches, and designs solutions without making any changes to your codebase. This is architecture-first development — think before you build.</p>

<h2>How Plan Mode Works</h2>

<p>In plan mode, Claude Code can read files, search your codebase, and analyze existing code patterns, but it cannot edit or write files. It has access to all read-only tools plus the ability to ask you clarifying questions. This creates a safe environment for exploration.</p>

<p>When you ask a question in plan mode, Claude responds with analysis, trade-off evaluations, and implementation strategies. You discuss and refine the approach until you're satisfied, then exit plan mode to begin implementation. The plan context carries over, so Claude remembers all the decisions made during planning.</p>

<h2>When to Use Plan Mode</h2>

<p>Use plan mode for any non-trivial change: new features, architectural refactors, performance optimizations, or security improvements. It's especially valuable for changes that affect multiple files or have multiple valid approaches.</p>

<p>Plan mode also serves as a learning tool. Ask Claude to explain how a system works or why a pattern was chosen before modifying it. The analysis-only constraint means you can explore freely without worrying about accidental changes.</p>

<h2>Exiting Plan Mode</h2>

<p>When you're ready to implement, exit plan mode and Claude transitions to normal mode with the full plan context. It immediately begins executing the agreed-upon approach, starting with the first step of the implementation plan.</p>`
    },
    zh: {
      title: "/plan 命令：架构优先开发",
      summary: "学习如何使用 Claude Code 的 /plan 模式在编写代码之前设计解决方案——探索方法、评估利弊并在实施前获得批准。",
      body: `<p><code>/plan</code> 命令将 Claude Code 置于特殊的规划模式，在这种模式下它分析、研究和设计解决方案，但不对代码库进行任何更改。这是架构优先开发——在构建之前先思考。</p>

<h2>Plan 模式如何工作</h2>

<p>在 plan 模式下，Claude Code 可以读取文件、搜索代码库并分析现有代码模式，但不能编辑或写入文件。它可以访问所有只读工具，并可以向您提出澄清性问题。这为探索创造了安全的环境。</p>

<p>当你在 plan 模式下提问时，Claude 会以分析、利弊评估和实施策略作为回应。你们讨论并完善方法，直到你满意为止，然后退出 plan 模式开始实施。plan 上下文会被保留，因此 Claude 记得规划期间做出的所有决策。</p>

<h2>何时使用 Plan 模式</h2>

<p>对于任何重大更改都使用 plan 模式：新功能、架构重构、性能优化或安全改进。对于影响多个文件或有多种有效方法的更改尤其有价值。</p>

<p>Plan 模式也是一个学习工具。在修改之前，让 Claude 解释系统如何工作或为什么选择某种模式。仅分析的约束意味着你可以自由探索而不必担心意外更改。</p>

<h2>退出 Plan 模式</h2>

<p>当你准备好实施时，退出 plan 模式，Claude 会带着完整的计划上下文转换到普通模式。它立即开始执行已达成一致的方法，从实施计划的第一步开始。</p>`
    }
  },

  // ==============================================
  // Category: Configuration (5 pages)
  // ==============================================

  {
    slug: "claudemd-overview",
    category: "configuration",
    related: ["project-setup", "init-command", "claudemd-hierarchy"],
    en: {
      title: "CLAUDE.md: The Complete Guide",
      summary: "Everything you need to know about CLAUDE.md files — the most powerful configuration tool in Claude Code for teaching Claude about your project.",
      body: `<p>CLAUDE.md is the cornerstone of effective Claude Code usage. It's a Markdown file that Claude reads at the start of every session, and it's the primary way you teach Claude about your project's conventions, architecture, and preferences. A well-crafted CLAUDE.md transforms Claude from a generic AI assistant into a project-specific expert.</p>

<h2>What Goes in CLAUDE.md</h2>

<p>An effective CLAUDE.md typically includes your tech stack, project structure overview, coding conventions, build and test commands, architectural decisions, and configuration details. It should also cover team-specific preferences — how you name branches, format commit messages, and structure PRs.</p>

<p>Think of CLAUDE.md as the onboarding document you'd give a senior engineer joining your team. What would they need to know to be productive on day one? That's exactly what Claude needs too.</p>

<h2>Format and Structure</h2>

<p>CLAUDE.md uses standard Markdown. Use headers for organization, code blocks for commands, and concise language throughout. Keep the total file under approximately 200 lines for optimal context usage. If you need more detailed documentation, use <code>@path/to/file</code> references to import additional files without bloating the main CLAUDE.md.</p>

<p>A typical structure: Tech Stack → Project Structure → Commands → Conventions → Architecture → Gotchas. This ordered structure helps Claude find relevant information quickly.</p>

<h2>Keeping CLAUDE.md Current</h2>

<p>CLAUDE.md is a living document. Update it when your tech stack changes, when you adopt new conventions, or when you discover gotchas that Claude should know about. Run <code>/init</code> periodically to refresh the auto-generated sections while preserving your custom additions.</p>`
    },
    zh: {
      title: "CLAUDE.md：完整指南",
      summary: "关于 CLAUDE.md 文件你需要知道的一切——Claude Code 中最强大的配置工具，用来教 Claude 了解你的项目。",
      body: `<p>CLAUDE.md 是高效使用 Claude Code 的基石。它是一个 Markdown 文件，Claude 在每次会话开始时读取，是你教会 Claude 了解项目规范、架构和偏好的主要方式。精心编写的 CLAUDE.md 将 Claude 从通用 AI 助手转变为项目专属专家。</p>

<h2>CLAUDE.md 包含什么</h2>

<p>有效的 CLAUDE.md 通常包含你的技术栈、项目结构概览、编码规范、构建和测试命令、架构决策以及配置细节。它还应该涵盖团队特定偏好——如何命名分支、格式化提交消息以及构建 PR。</p>

<p>把 CLAUDE.md 想象成你给加入团队的高级工程师的新手指南。他们需要在第一天就能高效工作需要知道什么？这正是 Claude 也同样需要的。</p>

<h2>格式和结构</h2>

<p>CLAUDE.md 使用标准 Markdown。使用标题进行组织，使用代码块表示命令，全文使用简洁的语言。将总文件保持在约 200 行以内以获得最佳上下文使用效果。如果需要更详细的文档，使用 <code>@path/to/file</code> 引用来导入额外文件而不使主 CLAUDE.md 臃肿。</p>

<p>典型结构：技术栈 → 项目结构 → 命令 → 规范 → 架构 → 注意事项。这个有序结构帮助 Claude 快速找到相关信息。</p>

<h2>保持 CLAUDE.md 最新</h2>

<p>CLAUDE.md 是一个活的文档。当技术栈变化、采用新规范或发现 Claude 应该知道的陷阱时更新它。定期运行 <code>/init</code> 来刷新自动生成的部分，同时保留你的自定义添加。</p>`
    }
  },

  {
    slug: "claudemd-hierarchy",
    category: "configuration",
    related: ["claudemd-overview", "settings-json", "enterprise-policies"],
    en: {
      title: "CLAUDE.md Configuration Hierarchy",
      summary: "Understand the six-level CLAUDE.md hierarchy — from enterprise policies to local overrides — and how each level affects Claude Code's behavior.",
      body: `<p>Claude Code doesn't read just one CLAUDE.md file. It follows a six-level hierarchy, with each level able to add context or override settings from previous levels. Understanding this hierarchy is essential for teams, enterprises, and anyone who uses Claude Code across multiple projects.</p>

<h2>The Six Levels</h2>

<ol>
<li><strong>Enterprise</strong> — <code>/etc/claude-code/CLAUDE.md</code>: Set by your organization's IT admin. Applies to all users and all projects on the system. Typically contains security policies, approved model lists, and compliance requirements.</li>
<li><strong>User Global</strong> — <code>~/.claude/CLAUDE.md</code>: Your personal global settings. Cross-project preferences like preferred language, model defaults, and personal conventions.</li>
<li><strong>User Rules</strong> — <code>~/.claude/rules/*.md</code>: Modular user-level rules organized by topic. Each file can target specific paths or project types.</li>
<li><strong>Project</strong> — <code>./CLAUDE.md</code> or <code>./.claude/CLAUDE.md</code>: The most commonly used level. Project-specific conventions, architecture, and commands.</li>
<li><strong>Project Rules</strong> — <code>./.claude/rules/*.md</code>: Path-scoped rules within the project. A rule in <code>rules/frontend.md</code> only applies when working in the frontend directory.</li>
<li><strong>Local Overrides</strong> — <code>./CLAUDE.local.md</code>: Personal project overrides that are automatically gitignored. Your local preferences that shouldn't be committed.</li>
</ol>

<h2>How Later Overrides Earlier</h2>

<p>When settings conflict, later levels take precedence. A local override can tighten a project-level setting but cannot loosen an enterprise-level restriction. This ensures organizational security policies are always enforced while giving developers flexibility within those bounds.</p>`
    },
    zh: {
      title: "CLAUDE.md 配置层级",
      summary: "理解六级 CLAUDE.md 层级——从企业策略到本地覆盖——以及每个层级如何影响 Claude Code 的行为。",
      body: `<p>Claude Code 不只读取一个 CLAUDE.md 文件。它遵循六级层次结构，每个层级可以添加上下文或覆盖先前层级的设置。理解这个层级结构对团队、企业以及任何跨多个项目使用 Claude Code 的人都至关重要。</p>

<h2>六个层级</h2>

<ol>
<li><strong>企业级</strong> — <code>/etc/claude-code/CLAUDE.md</code>：由组织 IT 管理员设置。适用于系统上所有用户和所有项目。通常包含安全策略、批准的模型列表和合规要求。</li>
<li><strong>用户全局</strong> — <code>~/.claude/CLAUDE.md</code>：你的个人全局设置。跨项目偏好，如首选语言、模型默认值和个人规范。</li>
<li><strong>用户规则</strong> — <code>~/.claude/rules/*.md</code>：按主题组织的模块化用户级规则。每个文件可以针对特定路径或项目类型。</li>
<li><strong>项目级</strong> — <code>./CLAUDE.md</code> 或 <code>./.claude/CLAUDE.md</code>：最常用的层级。项目特定规范、架构和命令。</li>
<li><strong>项目规则</strong> — <code>./.claude/rules/*.md</code>：项目内按路径范围的规则。<code>rules/frontend.md</code> 中的规则仅在前端目录中工作时适用。</li>
<li><strong>本地覆盖</strong> — <code>./CLAUDE.local.md</code>：自动被 gitignore 的个人项目覆盖。不应提交的个人偏好。</li>
</ol>

<h2>后者如何覆盖前者</h2>

<p>当设置冲突时，后面的层级优先。本地覆盖可以收紧项目级设置，但不能放松企业级限制。这确保组织安全策略始终被强制执行，同时在这些范围内给予开发者灵活性。</p>`
    }
  },

  {
    slug: "settings-json",
    category: "configuration",
    related: ["claudemd-overview", "hooks-overview", "permission-system"],
    en: {
      title: "settings.json: Full Configuration Reference",
      summary: "A complete reference for Claude Code's settings.json — permissions, hooks, environment variables, model defaults, and all configurable options.",
      body: `<p>The <code>settings.json</code> file is Claude Code's primary configuration mechanism for programmatic settings. Unlike CLAUDE.md which provides contextual guidance, settings.json controls operational behavior — what Claude can do, what triggers automated actions, and how the environment is configured.</p>

<h2>File Locations</h2>

<p>Settings follow the same hierarchy as CLAUDE.md. User-level settings live at <code>~/.claude/settings.json</code> and apply across all projects. Project-level settings live at <code>.claude/settings.json</code> within your repository and can be shared with your team via git. A local override at <code>.claude/settings.local.json</code> is automatically gitignored.</p>

<h2>Key Configuration Sections</h2>

<p>The <strong>permissions</strong> section controls tool access. Each tool (Read, Write, Edit, Glob, Grep, Bash, etc.) can be set to "allow", "deny", or "prompt". You can also define allowlists and denylists for Bash commands — for example, allowing <code>npm test</code> without prompting while blocking <code>git push --force</code>.</p>

<p>The <strong>hooks</strong> section defines event-driven automations. Hooks fire on events like PostToolUse, PreToolUse, and SessionStart, running custom commands or scripts in response.</p>

<p>The <strong>env</strong> section sets environment variables available to Claude Code and any commands it runs. Use this for API endpoints, feature flags, or any configuration needed during development.</p>

<h2>Example Configuration</h2>

<pre><code>{
  "permissions": {
    "Read": "allow",
    "Glob": "allow",
    "Grep": "allow",
    "Edit": "prompt",
    "Write": "prompt",
    "Bash": "prompt"
  },
  "env": {
    "NODE_ENV": "development"
  }
}</code></pre>`
    },
    zh: {
      title: "settings.json：完整配置参考",
      summary: "Claude Code settings.json 的完整参考——权限、钩子、环境变量、模型默认值和所有可配置选项。",
      body: `<p><code>settings.json</code> 文件是 Claude Code 用于程序化设置的主要配置机制。不同于提供上下文指导的 CLAUDE.md，settings.json 控制操作行为——Claude 可以做什么、什么触发自动化操作以及环境如何配置。</p>

<h2>文件位置</h2>

<p>设置遵循与 CLAUDE.md 相同的层级结构。用户级设置位于 <code>~/.claude/settings.json</code>，适用于所有项目。项目级设置位于仓库内的 <code>.claude/settings.json</code>，可以通过 Git 与团队共享。本地覆盖文件 <code>.claude/settings.local.json</code> 自动被 gitignore。</p>

<h2>关键配置部分</h2>

<p><strong>权限</strong>部分控制工具访问。每个工具（Read、Write、Edit、Glob、Grep、Bash 等）可以设置为"allow"、"deny"或"prompt"。你还可以为 Bash 命令定义允许列表和拒绝列表——例如，允许 <code>npm test</code> 无需提示，同时阻止 <code>git push --force</code>。</p>

<p><strong>钩子</strong>部分定义事件驱动的自动化。钩子在 PostToolUse、PreToolUse 和 SessionStart 等事件上触发，运行自定义命令或脚本作为响应。</p>

<p><strong>env</strong>部分设置 Claude Code 及其运行的任何命令可用的环境变量。用于 API 端点、功能标志或开发期间所需的任何配置。</p>

<h2>配置示例</h2>

<pre><code>{
  "permissions": {
    "Read": "allow",
    "Glob": "allow",
    "Grep": "allow",
    "Edit": "prompt",
    "Write": "prompt",
    "Bash": "prompt"
  },
  "env": {
    "NODE_ENV": "development"
  }
}</code></pre>`
    }
  },

  {
    slug: "theme-configuration",
    category: "configuration",
    related: ["config-command", "model-selection", "settings-json"],
    en: {
      title: "Claude Code Theme and UI Configuration",
      summary: "Customize Claude Code's terminal appearance — themes, colors, font settings, and display preferences for a comfortable development experience.",
      body: `<p>Claude Code's terminal interface is highly configurable. While it runs in plain text, the UI uses colors, formatting, and layout options that you can customize through the <code>/config</code> interface or directly in settings.json. A comfortable visual setup makes long coding sessions more pleasant and productive.</p>

<h2>Built-in Themes</h2>

<p>Claude Code ships with several curated themes covering light and dark variants. Themes control the background, text color, accent highlights, syntax coloring for code blocks, and status indicators. You can switch themes instantly from the /config Appearance tab — no restart required.</p>

<p>Popular themes include the default dark theme optimized for low eye strain, a high-contrast theme for accessibility, and a light theme for bright environments. Each theme is designed to maintain clear visual hierarchy while being comfortable for extended use.</p>

<h2>Custom Color Configuration</h2>

<p>For users who want fine-grained control, settings.json accepts custom color overrides. You can configure specific UI elements: prompt color, code block background, error message styling, diff highlighting, and tool output formatting. This is useful for matching Claude Code's appearance to your terminal theme or personal preferences.</p>

<h2>Display Options</h2>

<p>Beyond colors, you can configure the prompt style (single-line vs multi-line), timestamp display, tool output verbosity, and progress indicator style. These ergonomic settings reduce visual noise and help you focus on what matters during development sessions.</p>`
    },
    zh: {
      title: "Claude Code 主题和 UI 配置",
      summary: "自定义 Claude Code 的终端外观——主题、颜色、字体设置和显示偏好，打造舒适的开发体验。",
      body: `<p>Claude Code 的终端界面高度可配置。虽然它在纯文本中运行，但 UI 使用颜色、格式和布局选项，你可以通过 <code>/config</code> 界面或直接在 settings.json 中进行自定义。舒适的视觉设置使长时间编码会话更加愉快和高效。</p>

<h2>内置主题</h2>

<p>Claude Code 提供多个精心设计的主题，涵盖明暗变体。主题控制背景、文本颜色、强调色高亮、代码块语法着色和状态指示器。你可以从 /config 外观标签页即时切换主题——无需重启。</p>

<p>流行的主题包括针对低眼疲劳优化的默认暗色主题、面向无障碍的高对比度主题，以及适用于明亮环境的浅色主题。每个主题都设计为在保持清晰视觉层次的同时适合长时间使用。</p>

<h2>自定义颜色配置</h2>

<p>对于需要精细控制的用户，settings.json 接受自定义颜色覆盖。你可以配置特定的 UI 元素：提示符颜色、代码块背景、错误消息样式、差异高亮和工具输出格式。这对于将 Claude Code 的外观与你的终端主题或个人偏好匹配很有用。</p>

<h2>显示选项</h2>

<p>除了颜色之外，你还可以配置提示符样式（单行 vs 多行）、时间戳显示、工具输出详细程度和进度指示器样式。这些人体工程学设置减少视觉噪音，帮助你在开发会话期间专注于重要事项。</p>`
    }
  },

  {
    slug: "model-selection",
    category: "configuration",
    related: ["model-command", "usage-command", "theme-configuration"],
    en: {
      title: "Model Selection Strategy for Claude Code",
      summary: "Develop a cost-effective model selection strategy — when to use Opus, Sonnet, or Haiku based on task complexity, budget, and performance requirements.",
      body: `<p>Choosing the right Claude model for each task is the single biggest lever you have for balancing quality, speed, and cost in Claude Code. A thoughtful model selection strategy can cut your API costs by 50-70% while delivering identical or better results for most tasks.</p>

<h2>The Tiered Approach</h2>

<p>Think of models as a three-tier system. <strong>Haiku</strong> is your go-to for quick, simple tasks — documentation generation, variable renaming, syntax fixes, and straightforward questions about your codebase. It's fast and costs a fraction of the higher tiers.</p>

<p><strong>Sonnet</strong> handles the vast majority of development work. Feature implementation, bug fixes, test generation, refactoring, code review — Sonnet delivers professional-quality results at moderate cost. Most developers default to Sonnet and only switch when the task demands it.</p>

<p><strong>Opus</strong> is reserved for the hardest problems. Complex architectural decisions involving multiple systems, debugging elusive race conditions, security audits, and large-scale cross-file refactors. Opus costs more per token but often solves problems that would take multiple Sonnet attempts.</p>

<h2>Per-Session Strategy</h2>

<p>A productive session often uses multiple models. Start on Sonnet for implementation, switch to Opus when you hit a complex design decision, then drop to Haiku for documentation and cleanup. This fluid model switching is unique to Claude Code and one of its most powerful features.</p>`
    },
    zh: {
      title: "Claude Code 模型选择策略",
      summary: "制定经济高效的模型选择策略——根据任务复杂性、预算和性能需求决定何时使用 Opus、Sonnet 或 Haiku。",
      body: `<p>为每个任务选择合适的 Claude 模型是你在 Claude Code 中平衡质量、速度和成本的最大杠杆。深思熟虑的模型选择策略可以将 API 成本降低 50-70%，同时在大多数任务中提供相同或更好的结果。</p>

<h2>分层方法</h2>

<p>将模型视为三层系统。<strong>Haiku</strong> 是你处理快速、简单任务的首选——文档生成、变量重命名、语法修复以及关于代码库的简单问题。它速度快，成本仅为更高层级的零头。</p>

<p><strong>Sonnet</strong> 处理绝大多数开发工作。功能实现、Bug 修复、测试生成、重构、代码审查——Sonnet 以适中的成本提供专业质量的结果。大多数开发者默认使用 Sonnet，只在任务需要时才切换。</p>

<p><strong>Opus</strong> 保留用于最困难的问题。涉及多个系统的复杂架构决策、调试难以捉摸的竞态条件、安全审计和大规模跨文件重构。Opus 每 Token 成本更高，但通常解决需要多次 Sonnet 尝试才能解决的问题。</p>

<h2>每次会话策略</h2>

<p>高效的会话通常使用多个模型。从 Sonnet 开始实现，遇到复杂设计决策时切换到 Opus，然后降到 Haiku 进行文档和清理工作。这种流畅的模型切换是 Claude Code 独有的，也是其最强大的功能之一。</p>`
    }
  },

  // ==============================================
  // Category: Permissions (5 pages)
  // ==============================================

  {
    slug: "permission-system",
    category: "permissions",
    related: ["permissions-command", "permission-types", "allow-deny-lists"],
    en: {
      title: "Claude Code Permission System Explained",
      summary: "A deep dive into Claude Code's permission architecture — how the security model works, the permission lifecycle, and how to configure it for your workflow.",
      body: `<p>Claude Code's permission system is the security boundary between AI suggestions and actual system changes. Every tool Claude uses — reading files, editing code, running shell commands — goes through the permission layer. Understanding how this system works helps you configure it for both safety and productivity.</p>

<h2>The Permission Model</h2>

<p>Each tool in Claude Code has a permission state. <strong>Allow</strong> means Claude can use the tool without asking. <strong>Deny</strong> blocks the tool entirely. <strong>Prompt</strong> asks for your confirmation each time. These states can be set per-tool and per-context (user global, project, session).</p>

<p>The permission check happens every time Claude wants to use a tool, not just once per session. This means you can allow safe operations (reading files) while keeping a gate on sensitive ones (shell commands), and the gate stays in place throughout your work.</p>

<h2>Permission Inheritance</h2>

<p>Permissions cascade through the configuration hierarchy. Enterprise policies set the baseline — they can deny tools globally or restrict which models are available. User settings add personal preferences. Project settings refine for the specific repository. Session overrides allow temporary adjustments without changing committed configuration.</p>

<p>Critically, lower levels can only tighten restrictions, not loosen them. A project setting cannot allow what an enterprise policy denies. This ensures organizational security requirements are never bypassed.</p>

<h2>Permission Zones</h2>

<p>Tools are grouped into zones: Read-Only (safe, low risk), File Modification (medium risk, reversible via git), and Shell Execution (highest risk, potentially irreversible). Most users adopt a zoned approach: allow read-only tools freely, prompt for file edits, and prompt with extra scrutiny for shell commands.</p>`
    },
    zh: {
      title: "Claude Code 权限系统详解",
      summary: "深入了解 Claude Code 的权限架构——安全模型如何工作、权限生命周期以及如何为你的工作流配置它。",
      body: `<p>Claude Code 的权限系统是 AI 建议和实际系统更改之间的安全边界。Claude 使用的每个工具——读取文件、编辑代码、运行 Shell 命令——都要经过权限层。理解这个系统如何工作有助于你在安全性和生产力之间取得平衡。</p>

<h2>权限模型</h2>

<p>Claude Code 中的每个工具都有一个权限状态。<strong>Allow</strong> 表示 Claude 可以使用该工具而无需询问。<strong>Deny</strong> 完全阻止该工具。<strong>Prompt</strong> 每次请求你的确认。这些状态可以按工具和上下文（用户全局、项目、会话）设置。</p>

<p>权限检查在 Claude 每次想要使用工具时都会发生，而不仅仅每次会话一次。这意味着你可以允许安全操作（读取文件），同时对敏感操作（Shell 命令）保持门禁，并且这个门禁在整个工作过程中始终有效。</p>

<h2>权限继承</h2>

<p>权限通过配置层级进行级联。企业策略设置基线——它们可以全局拒绝工具或限制可用模型。用户设置添加个人偏好。项目设置针对特定仓库进行细化。会话覆盖允许临时调整而不更改已提交的配置。</p>

<p>关键是，较低层级只能收紧限制，不能放松它们。项目设置不能允许企业策略拒绝的内容。这确保组织安全要求永远不会被绕过。</p>

<h2>权限区域</h2>

<p>工具分为区域：只读（安全，低风险）、文件修改（中等风险，可通过 Git 恢复）和 Shell 执行（最高风险，可能不可逆）。大多数用户采用分区方法：自由允许只读工具，对文件编辑提示确认，对 Shell 命令进行额外审查后提示。</p>`
    }
  },

  {
    slug: "permission-types",
    category: "permissions",
    related: ["permission-system", "allow-deny-lists", "session-overrides"],
    en: {
      title: "Claude Code Permission Types and Tools",
      summary: "Complete catalog of every Claude Code tool and its permission category — Read, Write, Edit, Glob, Grep, Bash, and specialized tools explained.",
      body: `<p>Claude Code has a growing set of tools, each with specific capabilities and risk profiles. Understanding what each tool does helps you make informed decisions about which permissions to grant. Here's the complete catalog organized by risk tier.</p>

<h2>Read-Only Tools (Low Risk)</h2>

<p><strong>Read</strong> — Reads file contents from the filesystem. This is Claude's primary way of understanding your code. It can read any file you have access to, including images and PDFs. Safe to allow without prompting.</p>

<p><strong>Glob</strong> — Fast file pattern matching. Finds files by name patterns like <code>**/*.tsx</code>. Essential for codebase exploration and completely safe.</p>

<p><strong>Grep</strong> — Powerful search tool using ripgrep. Searches file contents with full regex support. Like Glob, it's read-only and safe to allow freely.</p>

<h2>File Modification Tools (Medium Risk)</h2>

<p><strong>Edit</strong> — Performs exact string replacements in existing files. This is Claude's primary editing tool — surgical, precise changes rather than full file rewrites. Changes are visible in git diff for review.</p>

<p><strong>Write</strong> — Creates new files or completely overwrites existing ones. Higher impact than Edit since it replaces entire file contents. Most users keep this at prompt level.</p>

<h2>Execution Tools (High Risk)</h2>

<p><strong>Bash</strong> — Executes shell commands in your project directory. Can run anything your user account can: tests, builds, git operations, package management. The most powerful and potentially dangerous tool. Use with denylists for dangerous commands.</p>`
    },
    zh: {
      title: "Claude Code 权限类型和工具",
      summary: "每个 Claude Code 工具及其权限类别的完整目录——Read、Write、Edit、Glob、Grep、Bash 以及专用工具的说明。",
      body: `<p>Claude Code 拥有不断增长的工具集，每个工具都有特定的能力和风险配置。理解每个工具的作用有助于你对授予哪些权限做出明智决定。以下是按风险层级组织的完整目录。</p>

<h2>只读工具（低风险）</h2>

<p><strong>Read</strong> — 从文件系统读取文件内容。这是 Claude 理解你代码的主要方式。它可以读取你有权访问的任何文件，包括图像和 PDF。可以安全地允许而无需提示。</p>

<p><strong>Glob</strong> — 快速文件模式匹配。通过名称模式查找文件，如 <code>**/*.tsx</code>。对代码库探索至关重要，完全安全。</p>

<p><strong>Grep</strong> — 使用 ripgrep 的强大搜索工具。以完全正则表达式支持搜索文件内容。与 Glob 一样，它是只读的，可以安全地自由允许。</p>

<h2>文件修改工具（中等风险）</h2>

<p><strong>Edit</strong> — 在现有文件中执行精确的字符串替换。这是 Claude 的主要编辑工具——精确的外科手术式更改，而不是完全重写文件。更改可在 git diff 中查看以供审查。</p>

<p><strong>Write</strong> — 创建新文件或完全覆盖现有文件。影响比 Edit 大，因为它替换整个文件内容。大多数用户将其保持在提示级别。</p>

<h2>执行工具（高风险）</h2>

<p><strong>Bash</strong> — 在你的项目目录中执行 Shell 命令。可以运行你的用户账户能做的任何事情：测试、构建、Git 操作、包管理。最强大也最有潜在危险的���具。配合危险命令拒绝列表使用。</p>`
    }
  },

  {
    slug: "allow-deny-lists",
    category: "permissions",
    related: ["permission-system", "permission-types", "settings-json"],
    en: {
      title: "Allowlists and Denylists for Bash Commands",
      summary: "How to configure Bash command allowlists and denylists in Claude Code — grant safe commands automatic execution while blocking dangerous operations.",
      body: `<p>The Bash tool is Claude Code's most powerful capability, but also the one that warrants the most careful permission configuration. Allowlists and denylists give you fine-grained control over which shell commands Claude can execute automatically and which always require your explicit approval.</p>

<h2>Denylist: Block Dangerous Commands</h2>

<p>A denylist specifies commands or patterns that are always blocked, even if Bash is otherwise set to "allow." This is your safety net. Common denylist entries include destructive commands like <code>rm -rf</code>, force push operations (<code>git push --force</code>), and commands that modify system configuration outside the project directory.</p>

<p>Denylists support pattern matching, so you can block entire categories of operations. A pattern like <code>rm -rf /*</code> would block any recursive force removal from root, while <code>git push --force*</code> blocks all force push variants.</p>

<h2>Allowlist: Pre-Approve Safe Commands</h2>

<p>An allowlist specifies commands that can run without prompting, even when Bash is set to "prompt." This reduces interruption for routine operations you trust. Common allowlist entries include test runners (<code>npm test</code>, <code>pytest</code>), linters (<code>eslint</code>), and version checks (<code>node --version</code>, <code>git status</code>).</p>

<p>Be selective with allowlists. Only pre-approve commands that are read-only or have no irreversible side effects. A good rule: if you'd run the command without thinking twice, it's probably safe to allowlist.</p>

<h2>Best Practices</h2>

<p>Start with a denylist of clearly dangerous commands and no allowlist. As you build trust with Claude Code in a project, gradually add safe commands to the allowlist. Review your lists periodically — what was safe last month may need adjustment as your project evolves.</p>`
    },
    zh: {
      title: "Bash 命令的允许列表和拒绝列表",
      summary: "如何在 Claude Code 中配置 Bash 命令的允许列表和拒绝列表——授予安全命令自动执行权限，同时阻止危险操作。",
      body: `<p>Bash 工具是 Claude Code 最强大的能力，但也是最需要仔细配置权限的工具。允许列表和拒绝列表让你精细控制哪些 Shell 命令 Claude 可以自动执行，哪些始终需要你的明确批准。</p>

<h2>拒绝列表：阻止危险命令</h2>

<p>拒绝列表指定始终被阻止的命令或模式，即使 Bash 在其他情况下被设置为"allow"。这是你的安全网。常见的拒绝列表条目包括破坏性命令，如 <code>rm -rf</code>、强制推送操作（<code>git push --force</code>）以及修改项目目录之外系统配置的命令。</p>

<p>拒绝列表支持模式匹配，因此你可以阻止整类操作。像 <code>rm -rf /*</code> 这样的模式会阻止从根目录的任何递归强制删除，而 <code>git push --force*</code> 阻止所有强制推送变体。</p>

<h2>允许列表：预批准安全命令</h2>

<p>允许列表指定可以无需提示运行的命令，即使 Bash 被设置为"prompt"。这减少了对于你信任的常规操作的中断。常见的允许列表条目包括测试运行器（<code>npm test</code>、<code>pytest</code>）、代码检查器（<code>eslint</code>）和版本检查（<code>node --version</code>、<code>git status</code>）。</p>

<p>选择允许列表时要谨慎。只预批准只读或没有不可逆副作用的命令。一个好规则：如果你会毫不犹豫地运行该命令，那么添加到允许列表大概也是安全的。</p>

<h2>最佳实践</h2>

<p>从包含明确危险命令的拒绝列表开始，不设允许列表。随着你在项目中对 Claude Code 建立信任，逐渐将安全命令添加到允许列表。定期审查你的列表——上个月安全的内容可能随着项目发展需要调整。</p>`
    }
  },

  {
    slug: "enterprise-policies",
    category: "permissions",
    related: ["permission-system", "claudemd-hierarchy", "settings-json"],
    en: {
      title: "Enterprise Policies for Claude Code",
      summary: "How organizations enforce Claude Code security policies — mandatory configurations, approved models, and compliance requirements across all developers.",
      body: `<p>Enterprise policies are the top level of Claude Code's configuration hierarchy, set by IT administrators to enforce organizational standards. These policies apply to every Claude Code installation in the organization and cannot be overridden by user or project settings. They ensure compliance, security, and consistency at scale.</p>

<h2>Policy Enforcement</h2>

<p>Enterprise policies are defined in <code>/etc/claude-code/CLAUDE.md</code> on managed machines. This file is typically deployed through MDM (Mobile Device Management) or configuration management tools, ensuring every developer machine has the same policy. When Claude Code starts, it reads this file first, establishing the baseline that all other settings must respect.</p>

<h2>What Policies Can Control</h2>

<p>Enterprise policies can restrict which Claude models are available — for example, limiting users to specific approved models while blocking newer or more expensive ones. They can mandate permission settings, such as requiring prompt confirmation for all Bash commands regardless of project settings. They can enforce data handling rules, like disabling certain file access patterns or requiring specific environment variables.</p>

<p>Policies can also configure API endpoints, forcing traffic through an organization's private network or VPN rather than directly to Anthropic's public API. This is essential for industries with data residency requirements.</p>

<h2>Compliance and Auditing</h2>

<p>Enterprise policies support compliance frameworks like SOC 2, HIPAA, and GDPR by ensuring consistent security controls across all Claude Code usage. Administrators can enforce session logging, data retention limits, and access controls that satisfy audit requirements without burdening individual developers.</p>`
    },
    zh: {
      title: "Claude Code 企业策略",
      summary: "组织如何强制执行 Claude Code 安全策略——强制性配置、批准的模型以及适用于所有开发者的合规要求。",
      body: `<p>企业策略是 Claude Code 配置层级的最高级别，由 IT 管理员设置以强制执行组织标准。这些策略适用于组织中的每个 Claude Code 安装，不能被用户或项目设置覆盖。它们确保大规模使用的合规性、安全性和一致性。</p>

<h2>策略强制执行</h2>

<p>企业策略在受管机器的 <code>/etc/claude-code/CLAUDE.md</code> 中定义。该文件通常通过 MDM（移动设备管理）或配置管理工具部署，确保每个开发者机器具有相同的策略。当 Claude Code 启动时，它首先读取此文件，建立所有其他设置必须遵守的基线。</p>

<h2>策略可以控制什么</h2>

<p>企业策略可以限制可用的 Claude 模型——例如，将用户限制在特定的已批准模型，同时阻止更新或更昂贵的模型。它们可以强制权限设置，如要求所有 Bash 命令无论项目设置如何都必须提示确认。它们可以强制执行数据处理规则，如禁用某些文件访问模式或要求特定的环境变量。</p>

<p>策略还可以配置 API 端点，强制流量通过组织的私有网络或 VPN 而不是直接到达 Anthropic 的公共 API。这对于有数据驻留要求的行业至关重要。</p>

<h2>合规与审计</h2>

<p>企业策略通过确保所有 Claude Code 使用中的一致安全控制来支持 SOC 2、HIPAA 和 GDPR 等合规框架。管理员可以强制执行会话日志记录、数据保留限制和访问控制，满足审计要求而不给个别开发者增加负担。</p>`
    }
  },

  {
    slug: "session-overrides",
    category: "permissions",
    related: ["permission-system", "settings-json", "permission-types"],
    en: {
      title: "Session Overrides: Temporary Permission Changes",
      summary: "How to use session-level permission overrides in Claude Code — temporarily adjust permissions for a specific task without changing committed configuration.",
      body: `<p>Session overrides are temporary permission changes that apply only to your current Claude Code session. They let you adjust permissions for a specific task without modifying your committed settings.json — perfect for one-off operations that need different access levels than your usual workflow.</p>

<h2>When to Use Session Overrides</h2>

<p>Session overrides shine in several scenarios. When doing a large refactor that touches many files, you might temporarily allow Edit without prompts to avoid constant interruptions — then revert when the refactor is done. When working in a sensitive directory, you might temporarily deny Bash or restrict it further. When debugging a CI issue, you might need to allow commands that are normally on your denylist.</p>

<p>The key advantage is that overrides are ephemeral. Close the session, and your permissions return to the project and user defaults. No accidentally-committed loose permissions, no forgetting to revert after the task.</p>

<h2>How Overrides Work</h2>

<p>Overrides follow the same permission model as regular settings. You can set any tool to allow, deny, or prompt for the duration of the session. Overrides can only tighten restrictions relative to the baseline — they cannot loosen enterprise policies or grant access that's denied at a higher level.</p>

<p>You can apply overrides through the /permissions interface or directly in the session. The override state is visible in the permission display so you always know which temporary adjustments are active.</p>`
    },
    zh: {
      title: "会话覆盖：临时权限更改",
      summary: "如何在 Claude Code 中使用会话级权限覆盖——为特定任务临时调整权限而不更改已提交的配置。",
      body: `<p>会话覆盖是仅适用于当前 Claude Code 会话的临时权限更改。它们让你为特定任务调整权限而无需修改已提交的 settings.json——非常适合需要与日常工作流不同访问级别的一次性操作。</p>

<h2>何时使用会话覆盖</h2>

<p>会话覆盖在多种场景中表现出色。进行涉及许多文件的大规模重构时，你可以临时允许 Edit 而无需提示以避免持续中断——重构完成后恢复。在敏感目录中工作时，你可以临时拒绝 Bash 或进一步限制它。调试 CI 问题时，你可能需要允许通常在你的拒绝列表中的命令。</p>

<p>关键优势是覆盖是短暂的。关闭会话，你的权限恢复到项目和用户默认值。没有意外提交的宽松权限，不用担心任务完成后忘记恢复。</p>

<h2>覆盖如何工作</h2>

<p>覆盖遵循与常规设置相同的权限模型。你可以为会话期间将任何工具设置为 allow、deny 或 prompt。覆盖只能相对于基线收紧限制——它们不能放宽企业策略或授予在更高层级被拒绝的访问权限。</p>

<p>你可以通过 /permissions 界面或直接在会话中应用覆盖。覆盖状态在权限显示中可见，因此你始终知道哪些临时调整处于活动状态。</p>`
    }
  },

  // ==============================================
  // Category: Hooks (3 pages)
  // ==============================================

  {
    slug: "hooks-overview",
    category: "hooks",
    related: ["settings-json", "hook-events", "hook-examples"],
    en: {
      title: "Claude Code Hooks: Automate Your Workflow",
      summary: "Introduction to Claude Code's hooks system — event-driven automation that enforces rules, runs checks, and integrates with external tools automatically.",
      body: `<p>Hooks are Claude Code's event-driven automation system. Unlike CLAUDE.md which is advisory (Claude reads it and decides how to apply it), hooks are enforcement — they run automatically when specific events occur, and they can block operations, modify behavior, or trigger external processes.</p>

<h2>Hooks vs CLAUDE.md</h2>

<p>This distinction is fundamental. CLAUDE.md says "please follow these conventions." Hooks say "this will happen before/after every tool use, regardless." Use CLAUDE.md for guidance and preferences. Use hooks for mandatory checks, automated quality gates, and integrations that must fire reliably.</p>

<h2>Common Use Cases</h2>

<p>Hooks excel at repetitive enforcement tasks. Run a linter after every file edit to catch style violations immediately. Run tests after changes to specific files. Block edits to sensitive files like <code>.env</code> or production configuration. Enforce commit message format conventions by hooking into git operations. Trigger a notification when long-running tasks complete.</p>

<p>The automation possibilities are extensive because hooks can run any shell command. This means they integrate with your entire development toolchain — linters, formatters, test runners, build systems, deployment scripts, and notification services.</p>

<h2>Configuration</h2>

<p>Hooks are configured in <code>settings.json</code> under the <code>"hooks"</code> key. Each hook specifies an event (when it fires), a matcher (which tools or files trigger it), and a command (what to run). Hooks respect the configuration hierarchy — enterprise, user, project, and local — with the same precedence rules as other settings.</p>`
    },
    zh: {
      title: "Claude Code 钩子：自动化你的工作流",
      summary: "Claude Code 钩子系统简介——事件驱动的自动化，强制执行规则、运行检查并自动与外部工具集成。",
      body: `<p>钩子是 Claude Code 的事件驱动自动化系统。与 CLAUDE.md 的建议性不同（Claude 读取并决定如何应用），钩子是强制执行——它们在特定事件发生时自动运行，可以阻止操作、修改行为或触发外部流程。</p>

<h2>钩子 vs CLAUDE.md</h2>

<p>这个区别是根本性的。CLAUDE.md 说"请遵循这些规范"。钩子说"每次工具使用前/后都会发生这个，无论如何。"使用 CLAUDE.md 进行指导和偏好设置。使用钩子进行强制检查、自动化质量门禁和必须可靠触发的集成。</p>

<h2>常见用例</h2>

<p>钩子在重复性强制执行任务中表现出色。在每次文件编辑后运行代码检查器以立即捕获风格违规。在对特定文件进行更改后运行测试。阻止对敏感文件（如 <code>.env</code> 或生产配置）的编辑。通过钩入 Git 操作强制执行提交消息格式规范。在长时间运行的任务完成时触发通知。</p>

<p>自动化可能性非常广泛，因为钩子可以运行任何 Shell 命令。这意味着它们与你的整个开发工具链集成——代码检查器、格式化工具、测试运行器、构建系统、部署脚本和通知服务。</p>

<h2>配置</h2>

<p>钩子在 <code>settings.json</code> 的 <code>"hooks"</code> 键下配置。每个钩子指定一个事件（何时触发）、一个匹配器（哪些工具或文件触发它）和一个命令（运行什么）。钩子遵循配置层级——企业、用户、项目和本地——与其他设置具有相同的优先级规则。</p>`
    }
  },

  {
    slug: "hook-events",
    category: "hooks",
    related: ["hooks-overview", "hook-examples", "settings-json"],
    en: {
      title: "Claude Code Hook Events Reference",
      summary: "Complete reference for all Claude Code hook events — PreToolUse, PostToolUse, SessionStart, SessionEnd, and notification hooks explained.",
      body: `<p>Claude Code hooks fire on specific lifecycle events. Each event type serves a different purpose and gives you control at different points in Claude's execution flow. Understanding when each event fires helps you design hooks that are both powerful and safe.</p>

<h2>PreToolUse</h2>

<p>Fires <em>before</em> a tool executes. This is your opportunity to inspect what Claude is about to do and potentially block it. A PreToolUse hook can examine the tool arguments, check against allowlists or denylists, and return a decision: allow, deny, or prompt the user.</p>

<p>Common PreToolUse hooks: blocking edits to protected files, preventing specific Bash commands, enforcing that certain tools are never used on production environments, and adding custom confirmation prompts for high-risk operations.</p>

<h2>PostToolUse</h2>

<p>Fires <em>after</em> a tool completes. This is where you automate follow-up actions. A PostToolUse hook on Edit or Write might run a linter on the changed file. A PostToolUse hook on Bash might verify the exit code and log the output.</p>

<p>PostToolUse hooks are the most commonly used because they enable automatic quality checks without blocking Claude's work. They're ideal for linting, formatting, test execution, and notification triggers.</p>

<h2>SessionStart and SessionEnd</h2>

<p>SessionStart fires when a Claude Code session begins. Use it to set up environment variables, load additional context, or display project-specific information. SessionEnd fires when the session closes — useful for cleanup, logging, or saving session summaries.</p>

<h2>Notification Hooks</h2>

<p>Claude Code also supports notification hooks that fire on specific conditions — task completion, errors, or permission prompts. These integrate with desktop notifications, Slack messages, or any notification system via shell commands.</p>`
    },
    zh: {
      title: "Claude Code 钩子事件参考",
      summary: "所有 Claude Code 钩子事件的完整参考——PreToolUse、PostToolUse、SessionStart、SessionEnd 和通知钩子详解。",
      body: `<p>Claude Code 钩子在特定的生命周期事件上触发。每种事件类型服务于不同的目的，在 Claude 执行流程的不同点为你提供控制。理解每个事件何时触发有助于你设计既强大又安全的钩子。</p>

<h2>PreToolUse</h2>

<p>在工具执行<em>之前</em>触发。这是你检查 Claude 即将执行什么并可能阻止它的机会。PreToolUse 钩子可以检查工具参数、对照允许列表或拒绝列表进行检查，并返回决定：允许、拒绝或提示用户。</p>

<p>常见的 PreToolUse 钩子：阻止对受保护文件的编辑、阻止特定的 Bash 命令、强制某些工具永远不用于生产环境、为高风险操作添加自定义确认提示。</p>

<h2>PostToolUse</h2>

<p>在工具完成<em>之后</em>触发。这是你自动化后续操作的地方。Edit 或 Write 上的 PostToolUse 钩子可以对更改的文件运行代码检查器。Bash 上的 PostToolUse 钩子可以验证退出代码并记录输出。</p>

<p>PostToolUse 钩子是最常用的，因为它们启用自动质量检查而不会阻止 Claude 的工作。它们非常适合代码检查、格式化、测试执行和通知触发。</p>

<h2>SessionStart 和 SessionEnd</h2>

<p>SessionStart 在 Claude Code 会话开始时触发。用于设置环境变量、加载额外上下文或显示项目特定信息。SessionEnd 在会话关闭时触发——用于清理、日志记录或保存会话摘要。</p>

<h2>通知钩子</h2>

<p>Claude Code 还支持在特定条件下触发的通知钩子——任务完成、错误或权限提示。这些通过 Shell 命令与桌面通知、Slack 消息或任何通知系统集成。</p>`
    }
  },

  {
    slug: "hook-examples",
    category: "hooks",
    related: ["hooks-overview", "hook-events", "settings-json"],
    en: {
      title: "Claude Code Hooks: Practical Examples",
      summary: "Real-world Claude Code hook examples — auto-linting, test execution, protected file blocking, and commit message enforcement patterns.",
      body: `<p>The best way to understand hooks is through practical examples. Here are battle-tested hook configurations that teams use in production to automate quality enforcement and integrate Claude Code with their existing development toolchain.</p>

<h2>Auto-Lint on File Edit</h2>

<p>This PostToolUse hook runs ESLint on any file Claude edits, catching style violations immediately:</p>

<pre><code>{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "command": "npx eslint --fix \\"$CLAUDE_FILE_PATH\\""
    }]
  }
}</code></pre>

<p>The hook fires after every Edit or Write operation. The <code>$CLAUDE_FILE_PATH</code> variable contains the path of the modified file, so the linter runs only on what changed.</p>

<h2>Run Tests on Source Changes</h2>

<p>This hook automatically runs related tests when source files change:</p>

<pre><code>{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "command": "npm test -- --findRelatedTests \\"$CLAUDE_FILE_PATH\\""
    }]
  }
}</code></pre>

<p>Using Jest's <code>--findRelatedTests</code> flag means only tests relevant to the changed file run, keeping the feedback loop fast.</p>

<h2>Protected Files</h2>

<p>A PreToolUse hook that blocks edits to sensitive configuration:</p>

<pre><code>{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Edit|Write",
      "command": "[[ \\"$CLAUDE_FILE_PATH\\" == *.env* ]] && exit 1 || exit 0"
    }]
  }
}</code></pre>

<p>If the target file matches <code>.env</code> patterns, the hook exits with code 1, which Claude Code interprets as a block. This prevents accidental exposure of secrets or credentials.</p>`
    },
    zh: {
      title: "Claude Code 钩子：实用示例",
      summary: "真实世界的 Claude Code 钩子示例——自动代码检查、测试执行、受保护文件阻止和提交消息强制执行模式。",
      body: `<p>理解钩子的最佳方式是通过实际示例。以下是团队在生产中使用的经过实战检验的钩子配置，用于自动化质量强制并将 Claude Code 与现有开发工具链集成。</p>

<h2>文件编辑后自动检查代码</h2>

<p>这个 PostToolUse 钩子在 Claude 编辑任何文件后运行 ESLint，立即捕获风格违规：</p>

<pre><code>{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "command": "npx eslint --fix \\"$CLAUDE_FILE_PATH\\""
    }]
  }
}</code></pre>

<p>钩子在每次 Edit 或 Write 操作后触发。<code>$CLAUDE_FILE_PATH</code> 变量包含修改文件的路径，因此代码检查器只对更改的内容运行。</p>

<h2>源文件更改时运行测试</h2>

<p>这个钩子在源文件更改时自动运行相关测试：</p>

<pre><code>{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "command": "npm test -- --findRelatedTests \\"$CLAUDE_FILE_PATH\\""
    }]
  }
}</code></pre>

<p>使用 Jest 的 <code>--findRelatedTests</code> 标志意味着只有与更改文件相关的测试会运行，保持反馈循环快速。</p>

<h2>保护敏感文件</h2>

<p>一个阻止编辑敏感配置的 PreToolUse 钩子：</p>

<pre><code>{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Edit|Write",
      "command": "[[ \\"$CLAUDE_FILE_PATH\\" == *.env* ]] && exit 1 || exit 0"
    }]
  }
}</code></pre>

<p>如果目标文件匹配 <code>.env</code> 模式，钩子以代码 1 退出，Claude Code 将其解释为阻止。这防止了密钥或凭据的意外暴露。</p>`
    }
  },

  // ==============================================
  // Category: Skills (3 pages)
  // ==============================================

  {
    slug: "skills-overview",
    category: "skills",
    related: ["creating-skills", "custom-skills", "hooks-overview"],
    en: {
      title: "Claude Code Skills: Reusable Workflows",
      summary: "Learn Claude Code's skills system — create reusable instruction packs that load on demand, keep context lean, and automate complex workflows.",
      body: `<p>Skills are Claude Code's mechanism for on-demand instruction packs. Unlike CLAUDE.md which loads into every session, skills only activate when you invoke them (explicitly via slash command or implicitly via trigger words). This keeps your default context lean while giving you powerful specialized capabilities when needed.</p>

<h2>Skills vs CLAUDE.md</h2>

<p>CLAUDE.md is always-on context — perfect for fundamental project knowledge that Claude needs in every interaction. Skills are just-in-time context — perfect for specialized workflows that you only need occasionally. A deployment skill might contain step-by-step instructions for your deploy pipeline, but loading those instructions into every session would waste context. Skills solve this by loading on demand.</p>

<h2>Anatomy of a Skill</h2>

<p>A skill is a Markdown file stored in <code>.claude/skills/</code>. Each skill has frontmatter metadata (name, description, trigger words) and a body containing instructions. The body can include step-by-step procedures, configuration examples, domain knowledge, or anything Claude needs to execute the workflow.</p>

<p>Skills can be project-specific (stored in the project's <code>.claude/skills/</code> directory) or user-global (stored in <code>~/.claude/skills/</code>). Project skills are shared with your team via git; user skills are personal to your workflow.</p>

<h2>When to Create a Skill</h2>

<p>Create a skill for any repeatable, multi-step workflow: deployment processes, database migration procedures, release checklists, onboarding steps for new team members, or domain-specific code generation patterns. If you find yourself giving Claude the same instructions repeatedly, it's time to create a skill.</p>`
    },
    zh: {
      title: "Claude Code 技能：可复用工作流",
      summary: "学习 Claude Code 的技能系统——创建按需加载的可复用指令包，保持上下文精简并自动化复杂工作流。",
      body: `<p>技能是 Claude Code 的按需指令包机制。与加载到每次会话的 CLAUDE.md 不同，技能仅在你调用时激活（通过斜杠命令显式调用或通过触发词隐式调用）。这保持默认上下文精简，同时在需要时为你提供强大的专业能力。</p>

<h2>技能 vs CLAUDE.md</h2>

<p>CLAUDE.md 是始终开启的上下文——非常适合 Claude 在每次交互中都需要的基本项目知识。技能是即时上下文——非常适合你偶尔需要的专门工作流。部署技能可能包含部署流水线的分步说明，但将这些说明加载到每次会话会浪费上下文。技能通过按需加载解决了这个问题。</p>

<h2>技能的结构</h2>

<p>技能是存储在 <code>.claude/skills/</code> 中的 Markdown 文件。每个技能有 frontmatter 元数据（名称、描述、触发词）和包含指令的正文。正文可以包括分步程序、配置示例、领域知识或 Claude 执行工作流所需的任何内容。</p>

<p>技能可以是项目特定的（存储在项目的 <code>.claude/skills/</code> 目录中）或用户全局的（存储在 <code>~/.claude/skills/</code> 中）。项目技能通过 Git 与团队共享；用户技能是你个人的工作流偏好。</p>

<h2>何时创建技能</h2>

<p>为任何可重复的多步骤工作流创建技能：部署流程、数据库迁移程序、发布检查清单、新团队成员入职步骤或领域特定的代码生成模式。如果你发现自己在重复给 Claude 相同的指令，那就是创建技能的时候了。</p>`
    }
  },

  {
    slug: "creating-skills",
    category: "skills",
    related: ["skills-overview", "custom-skills", "claudemd-overview"],
    en: {
      title: "How to Create Custom Claude Code Skills",
      summary: "Step-by-step guide to creating effective Claude Code skills — frontmatter configuration, writing clear instructions, trigger words, and testing.",
      body: `<p>Creating a Claude Code skill is straightforward. You write a Markdown file with YAML frontmatter and instruction content, place it in the skills directory, and Claude Code automatically discovers and registers it. Here's how to create skills that are clear, effective, and maintainable.</p>

<h2>Step 1: Create the Skill File</h2>

<p>Skills live in <code>.claude/skills/&lt;skill-name&gt;/SKILL.md</code>. The directory name becomes the skill's default identifier. Create this structure in your project or user config directory:</p>

<pre><code>mkdir -p .claude/skills/deploy</code></pre>

<h2>Step 2: Write the Frontmatter</h2>

<p>The YAML frontmatter tells Claude Code when and how to use the skill:</p>

<pre><code>---
name: deploy
description: Deploy the application to production. Use when the user says "deploy", "ship it", or "push to production".
---</code></pre>

<p>The name is how you invoke the skill with a slash command (<code>/deploy</code>). The description includes trigger words that let Claude auto-detect when the skill is relevant.</p>

<h2>Step 3: Write Clear Instructions</h2>

<p>The body of the skill is what Claude reads when the skill activates. Write it like you're briefing a colleague. Be specific about the steps, expected outputs, and error handling:</p>

<pre><code># Deploy Workflow
1. Verify all tests pass: run npm test
2. Build the production bundle: npm run build
3. Deploy to staging first: npm run deploy:staging
4. Run smoke tests against staging
5. If smoke tests pass, promote to production: npm run deploy:prod
6. Verify production health endpoint returns 200</code></pre>

<h2>Step 4: Test the Skill</h2>

<p>Invoke your skill with <code>/deploy</code> and verify Claude follows the instructions correctly. Iterate on the instructions based on what Claude misunderstands or overlooks. Good skills evolve through use.</p>`
    },
    zh: {
      title: "如何创建自定义 Claude Code 技能",
      summary: "创建有效 Claude Code 技能的分步指南——frontmatter 配置、编写清晰的指令、触发词和测试。",
      body: `<p>创建 Claude Code 技能非常简单。你编写一个带有 YAML frontmatter 和指令内容的 Markdown 文件，将其放在技能目录中，Claude Code 会自动发现并注册它。以下是如何创建清晰、有效且易于维护的技能。</p>

<h2>第一步：创建技能文件</h2>

<p>技能位于 <code>.claude/skills/&lt;skill-name&gt;/SKILL.md</code>。目录名称成为技能的默认标识符。在你的项目或用户配置目录中创建此结构：</p>

<pre><code>mkdir -p .claude/skills/deploy</code></pre>

<h2>第二步：编写 Frontmatter</h2>

<p>YAML frontmatter 告诉 Claude Code 何时以及如何使用该技能：</p>

<pre><code>---
name: deploy
description: 将应用程序部署到生产环境。当用户说"deploy"、"ship it"或"push to production"时使用。
---</code></pre>

<p>名称是你用斜杠命令（<code>/deploy</code>）调用技能的方式。描述包含触发词，让 Claude 自动检测何时该技能相关。</p>

<h2>第三步：编写清晰的指令</h2>

<p>技能正文是 Claude 在技能激活时读取的内容。像给同事做简报一样编写。具体说明步骤、预期输出和错误处理：</p>

<pre><code># 部署工作流
1. 验证所有测试通过：运行 npm test
2. 构建生产包：npm run build
3. 先部署到预发环境：npm run deploy:staging
4. 对预发环境运行冒烟测试
5. 如果冒烟测试通过，推送到生产环境：npm run deploy:prod
6. 验证生产环境健康端点返回 200</code></pre>

<h2>第四步：测试技能</h2>

<p>使用 <code>/deploy</code> 调用你的技能，验证 Claude 是否正确地遵循指令。根据 Claude 误解或忽略的内容迭代改进指令。好的技能通过使用不断进化。</p>`
    }
  },

  {
    slug: "custom-skills",
    category: "skills",
    related: ["skills-overview", "creating-skills", "claudemd-overview"],
    en: {
      title: "Custom Skills: Advanced Patterns and Ideas",
      summary: "Advanced Claude Code skill patterns — chained skills, parameterized skills, integration skills, and creative ways to extend Claude Code's capabilities.",
      body: `<p>Beyond basic workflow automation, Claude Code skills can implement sophisticated patterns that transform how your team works. These advanced patterns leverage the skill system's flexibility to solve complex, recurring challenges.</p>

<h2>Chained Skills</h2>

<p>Skills can reference and invoke other skills, creating composable workflows. A release skill might invoke the deploy skill, which invokes the test skill. Each skill remains focused and maintainable while combining to handle complex processes.</p>

<h2>Parameterized Skills</h2>

<p>Skills can accept parameters through the invocation command. A migration skill might accept a migration name: <code>/migrate add-user-avatar</code>. Claude Code passes the parameter to the skill, which uses it to generate the appropriate migration file, update the schema, and create the rollback script.</p>

<h2>Integration Skills</h2>

<p>Skills can integrate with external services through APIs documented in the skill body. An issue-tracker skill might include the API endpoints for your Jira or Linear instance, authentication instructions, and templates for common ticket operations. Claude uses this information to interact with your tools directly.</p>

<h2>Team Onboarding Skills</h2>

<p>Create an onboarding skill that walks new developers through your entire setup process: installing dependencies, configuring environment variables, setting up databases, running migrations, and starting the development server. New team members run one command and get a guided setup experience.</p>

<h2>Best Practices for Advanced Skills</h2>

<p>Keep each skill focused on one workflow. Use descriptive names that match how you'll invoke them. Include error handling instructions — what should Claude do if a step fails? Test skills with new team members who have less context; if they can use it successfully, the skill is well-designed. Update skills when your workflows change.</p>`
    },
    zh: {
      title: "自定义技能：高级模式和创意",
      summary: "高级 Claude Code 技能模式——链式技能、参数化技能、集成技能以及扩展 Claude Code 能力的创造性方式。",
      body: `<p>除了基本的工作流自动化之外，Claude Code 技能还可以实现改变团队工作方式的复杂模式。这些高级模式利用技能系统的灵活性来解决复杂、重复出现的挑战。</p>

<h2>链式技能</h2>

<p>技能可以引用和调用其他技能，创建可组合的工作流。发布技能可以调用部署技能，部署技能又调用测试技能。每个技能保持专注和可维护，同时组合起来处理复杂流程。</p>

<h2>参数化技能</h2>

<p>技能可以通过调用命令接受参数。迁移技能可以接受迁移名称：<code>/migrate add-user-avatar</code>。Claude Code 将参数传递给技能，技能使用它生成适当的迁移文件、更新模式并创建回滚脚本。</p>

<h2>集成技能</h2>

<p>技能可以通过技能正文中记录的 API 与外部服务集成。问题跟踪技能可以包含 Jira 或 Linear 实例的 API 端点、认证说明和常见工单操作模板。Claude 使用这些信息直接与你的工具交互。</p>

<h2>团队入职技能</h2>

<p>创建引导新开发者完成整个设置流程的入职技能：安装依赖、配置环境变量、设置数据库、运行迁移和启动开发服务器。新团队成员运行一个命令即可获得引导式设置体验。</p>

<h2>高级技能最佳实践</h2>

<p>保持每个技能专注于一个工作流。使用匹配调用方式的描述性名称。包含错误处理指令——如果某步骤失败，Claude 应该怎么做？与上下文较少的新团队成员一起测试技能；如果他们能成功使用，说明该技能设计良好。当工作流变化时更新技能。</p>`
    }
  }

];
