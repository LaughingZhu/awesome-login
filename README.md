# Awesome Login

一个基于 React、TypeScript、Vite、GSAP 和 Bun 的单页登录界面示例，重点展示英文黑白风格的登录卡片，以及左侧彩色角色动效。

## 项目结构

```text
src/
  components/
    AnimatedCharacters/   # 左侧角色动画与场景结构
    BrandMark.tsx         # 移动端品牌图形
    FeishuIcon.tsx        # 本地 SVG 图标
  hooks/
    useMediaQuery.ts      # 响应式媒体查询
  pages/
    Login/
      components/         # BrandPanel / LoginForm / SocialLogin
      index.tsx           # 登录页组装入口
      index.module.css    # 黑白主题样式
```

## 本地开发

```bash
bun install
bun dev
```

## 构建与检查

```bash
bun run build
bun run lint
```

## 说明

- 当前项目定位为登录页 UI Demo，不包含真实鉴权链路
- 表单提交和飞书登录按钮均为演示反馈，用于展示交互状态和视觉效果
- 页面已移除 `antd`，改用原生表单和本地 SVG，以减少打包体积并提升稳定性
