[terminal-next](../README.md) / [Exports](../modules.md) / Codes

# Class: Codes

Class that is used to group special terminal ansi codes, if you want to have support for custom codes,
extend this class and override it in terminal like this:

```ts
const t = new Terminal();
t.codes = yourCustomCodesClassInstance;
```

## Table of contents

### Constructors

- [constructor](codes.md#constructor)

### Properties

- [background](codes.md#background)
- [blink](codes.md#blink)
- [bright](codes.md#bright)
- [clear](codes.md#clear)
- [dim](codes.md#dim)
- [foreground](codes.md#foreground)
- [fullBackground](codes.md#fullbackground)
- [fullForeground](codes.md#fullforeground)
- [hidden](codes.md#hidden)
- [reset](codes.md#reset)
- [reverse](codes.md#reverse)
- [underscore](codes.md#underscore)

### Methods

- [addColor](codes.md#addcolor)
- [getColorCode](codes.md#getcolorcode)
- [getRgbCode](codes.md#getrgbcode)

## Constructors

### constructor

• **new Codes**()

## Properties

### background

• **background**: `Map`<string, string\>

___

### blink

• **blink**: `string` = '\x1b[5m'

___

### bright

• **bright**: `string` = '\x1b[1m'

___

### clear

• **clear**: `string` = '\x1Bc'

___

### dim

• **dim**: `string` = '\x1b[2m'

___

### foreground

• **foreground**: `Map`<string, string\>

___

### fullBackground

• **fullBackground**: `string` = '\x1b[48;5;'

___

### fullForeground

• **fullForeground**: `string` = '\x1b[38;5;'

___

### hidden

• **hidden**: `string` = '\x1b[8m'

___

### reset

• **reset**: `string` = '\x1b[0m'

___

### reverse

• **reverse**: `string` = '\x1b[7m'

___

### underscore

• **underscore**: `string` = '\x1b[4m'

## Methods

### addColor

▸ **addColor**(`type`, `name`, `code`): [Codes](codes.md)

Adds the color to palette

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `ColorCodeType` | either 'foreground' or 'background' |
| `name` | `string` | color name |
| `code` | `string` \| `Color` | color code or rgb code |

#### Returns

[Codes](codes.md)

___

### getColorCode

▸ **getColorCode**(`type`, `name`): `string`

Gets the color code for color name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `ColorCodeType` | either 'foreground' or 'background' |
| `name` | `string` \| `Color` | color name or rgb code |

#### Returns

`string`

___

### getRgbCode

▸ **getRgbCode**(`type`, `code`): `string`

Gets the code for RGB color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `ColorCodeType` | either 'foreground' or 'background' |
| `code` | `Color` | color code or rgb code |

#### Returns

`string`
