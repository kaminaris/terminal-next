[terminal-next](../README.md) / [Exports](../modules.md) / Terminal

# Class: Terminal

Main terminal class that is mostly used for manipulating terminal streams

## Table of contents

### Constructors

- [constructor](terminal.md#constructor)

### Properties

- [stdin](terminal.md#stdin)
- [stdout](terminal.md#stdout)

### Other Methods

- [bgBlack](terminal.md#bgblack)
- [bgBlue](terminal.md#bgblue)
- [bgCyan](terminal.md#bgcyan)
- [bgGreen](terminal.md#bggreen)
- [bgMagenta](terminal.md#bgmagenta)
- [bgRed](terminal.md#bgred)
- [bgWhite](terminal.md#bgwhite)
- [bgYellow](terminal.md#bgyellow)
- [black](terminal.md#black)
- [blue](terminal.md#blue)
- [bright](terminal.md#bright)
- [cyan](terminal.md#cyan)
- [dim](terminal.md#dim)
- [green](terminal.md#green)
- [magenta](terminal.md#magenta)
- [red](terminal.md#red)
- [white](terminal.md#white)
- [yellow](terminal.md#yellow)

### Terminal Control Methods

- [clear](terminal.md#clear)
- [clearLine](terminal.md#clearline)
- [cursorTo](terminal.md#cursorto)
- [getCursor](terminal.md#getcursor)
- [hideCursor](terminal.md#hidecursor)
- [moveTo](terminal.md#moveto)
- [setRawMode](terminal.md#setrawmode)
- [showCursor](terminal.md#showcursor)

### Text Methods

- [format](terminal.md#format)
- [newline](terminal.md#newline)
- [space](terminal.md#space)
- [text](terminal.md#text)

## Constructors

### constructor

• **new Terminal**(`stdout?`, `stdin?`)

Creates new instance of terminal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stdout?` | `WriteStream` | if not provided, process.stdout will be used |
| `stdin?` | `ReadStream` | if not provided, process.stdin will be used |

## Properties

### stdin

• `Optional` **stdin**: `ReadStream`

___

### stdout

• `Optional` **stdout**: `WriteStream`

## Other Methods

### bgBlack

▸ **bgBlack**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bgBlue

▸ **bgBlue**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bgCyan

▸ **bgCyan**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bgGreen

▸ **bgGreen**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bgMagenta

▸ **bgMagenta**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bgRed

▸ **bgRed**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bgWhite

▸ **bgWhite**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bgYellow

▸ **bgYellow**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### black

▸ **black**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### blue

▸ **blue**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### bright

▸ **bright**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### cyan

▸ **cyan**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### dim

▸ **dim**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### green

▸ **green**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### magenta

▸ **magenta**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### red

▸ **red**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### white

▸ **white**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

### yellow

▸ **yellow**(`t`): [Terminal](terminal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Terminal](terminal.md)

___

## Terminal Control Methods

### clear

▸ **clear**(): `void`

Clears the terminal

#### Returns

`void`

___

### clearLine

▸ **clearLine**(`dir?`): `void`

Clears the line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dir` | `Direction` | 1 |

#### Returns

`void`

___

### cursorTo

▸ **cursorTo**(`x`, `y?`): `void`

Moves cursor to absolute position

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y?` | `number` |

#### Returns

`void`

___

### getCursor

▸ **getCursor**(): `Promise`<`Object`\>

Gets cursor position, not every terminal is supported, better to not rely on this as from test
It can be inconsistent

#### Returns

`Promise`<`Object`\>

___

### hideCursor

▸ **hideCursor**(): `void`

Hides cursor

#### Returns

`void`

___

### moveTo

▸ **moveTo**(`dx`, `dy?`): `void`

Moves cursor to relative position

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy?` | `number` |

#### Returns

`void`

___

### setRawMode

▸ **setRawMode**(`raw`): `void`

Puts terminal in raw mode or disables raw mode, only TTY terminals supported

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `boolean` |

#### Returns

`void`

___

### showCursor

▸ **showCursor**(): `void`

Shows cursor

#### Returns

`void`

___

## Text Methods

### format

▸ **format**(`t`, `options?`): `string`

Format text without outputting it to stdout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `string` | text to format |
| `options?` | `TextFormatOptions` | formatting options |

#### Returns

`string`

___

### newline

▸ **newline**(): [Terminal](terminal.md)

Outputs a newline character \n

#### Returns

[Terminal](terminal.md)

___

### space

▸ **space**(): [Terminal](terminal.md)

Outputs a single space

#### Returns

[Terminal](terminal.md)

___

### text

▸ **text**(`t`, `options?`): [Terminal](terminal.md)

Formats text and outputs it to stdout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `string` | text to display |
| `options?` | `TextFormatOptions` | formatting options |

#### Returns

[Terminal](terminal.md)
