# CSS3 Flex 布局

## 介绍

CSS3 引入了一种强大的布局模型，称为 Flexbox（弹性盒子布局），用于更容易地实现复杂的页面布局和对齐。Flex 布局是一个一维布局模型，允许您在一个方向上（水平或垂直）对元素进行排列和对齐，而不需要复杂的浮动和定位。

## 基本概念

- **Flex 容器**：包含一个或多个子元素的父元素被称为 Flex 容器。通过设置容器的 `display` 属性为 `flex` 或 `inline-flex` 来定义一个 Flex 容器。

- **Flex 项目**：容器内的每个子元素称为 Flex 项目，它们相对于容器进行布局。

## 容器属性

以下是一些用于控制 Flex 容器的属性：

1. `display`：定义容器是一个 Flex 容器还是一个行内 Flex 容器。可以设置为 `flex` 或 `inline-flex`。

2. `flex-direction`：定义 Flex 项目在容器中的排列方向。可以设置为 `row`（水平排列）、`row-reverse`（反向水平排列）、`column`（垂直排列）、`column-reverse`（反向垂直排列）。

3. `flex-wrap`：定义 Flex 项目在容器中是否换行。可以设置为 `nowrap`（不换行）、`wrap`（换行）、`wrap-reverse`（反向换行）。

4. `justify-content`：定义 Flex 项目在主轴上的对齐方式。可以设置为 `flex-start`、`flex-end`、`center`、`space-between`、`space-around`。

5. `align-items`：定义 Flex 项目在交叉轴上的对齐方式。可以设置为 `flex-start`、`flex-end`、`center`、`baseline`、`stretch`。

6. `align-content`：定义多行 Flex 项目在交叉轴上的对齐方式。可以设置为 `flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`stretch`。

## 项目属性

以下是一些用于控制 Flex 项目的属性：

1. `order`：定义项目的排列顺序，可以为负值。

2. `flex-grow`：定义项目在剩余空间中的放大比例。

3. `flex-shrink`：定义项目在空间不足时的缩小比例。

4. `flex-basis`：定义项目在分配空间之前的初始大小。

5. `flex`：简写属性，包括 `flex-grow`、`flex-shrink`、`flex-basis`。

6. `align-self`：定义项目在交叉轴上的对齐方式，覆盖容器的 `align-items` 属性。

## 示例

以下是一个简单的示例，展示了如何使用 Flex 布局：

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
}
