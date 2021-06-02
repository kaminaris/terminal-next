[terminal-next](../README.md) / [Exports](../modules.md) / ProgressBar

# Class: ProgressBar

ProgressBar widget, example

![](https://i.imgur.com/IYDxWBa.gif)

```ts
const pb = new ProgressBar(t, 100);
await pb.draw();
let prog = 0;
const itv = setInterval(async () => {
	await pb.setProgress(prog);
	prog++;
	if (prog > 100) {
		clearInterval(itv);
	}
}, 50);
```

Built in styles: default, text

Style definition:
```ts
styleName: {
	full: '\u2588',
	empty: '\u2591'
}
```

## Hierarchy

- [Widget](widget.md)

  ↳ **ProgressBar**

## Table of contents

### Constructors

- [constructor](progressbar.md#constructor)

### Properties

- [endChar](progressbar.md#endchar)
- [indent](progressbar.md#indent)
- [max](progressbar.md#max)
- [progress](progressbar.md#progress)
- [startChar](progressbar.md#startchar)
- [style](progressbar.md#style)
- [styles](progressbar.md#styles)
- [terminal](progressbar.md#terminal)
- [text](progressbar.md#text)
- [width](progressbar.md#width)

### Other Methods

- [calculateProgress](progressbar.md#calculateprogress)
- [draw](progressbar.md#draw)
- [setProgress](progressbar.md#setprogress)

### Widget Styles Methods

- [addStyle](progressbar.md#addstyle)
- [setStyle](progressbar.md#setstyle)

## Constructors

### constructor

• **new ProgressBar**(`terminal`, `max`, `progress?`, `width?`, `text?`)

Creates new ProgressBar instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `terminal` | [Terminal](terminal.md) | `undefined` | Terminal instance |
| `max` | `number` | `undefined` | maximum numerical progress |
| `progress` | `number` | 0 | current numerical progress |
| `width` | `number` | 40 | character width |
| `text` | `string` | '' | text to display after progressbar |

#### Overrides

[Widget](widget.md).[constructor](widget.md#constructor)

## Properties

### endChar

• **endChar**: `string` = ']'

Ending character, after progressbar

___

### indent

• **indent**: `number` = 0

Indent for widget (not every widget uses this)

#### Inherited from

[Widget](widget.md).[indent](widget.md#indent)

___

### max

• `Protected` **max**: `number`

___

### progress

• `Protected` **progress**: `number` = 0

___

### startChar

• **startChar**: `string` = '['

Starting character, before the progressbar itself

___

### style

• **style**: `string` = 'default'

current widget style

#### Inherited from

[Widget](widget.md).[style](widget.md#style)

___

### styles

• **styles**: `Object`

You can override style of this widget by executing functions `addStyle` and `setStyle`

#### Index signature

▪ [name: `string`]: `any`

#### Overrides

Widget.styles

___

### terminal

• `Protected` **terminal**: [Terminal](terminal.md)

#### Inherited from

[Widget](widget.md).[terminal](widget.md#terminal)

___

### text

• `Protected` **text**: `string` = ''

___

### width

• `Protected` **width**: `number` = 40

## Other Methods

### calculateProgress

▸ **calculateProgress**(): `number`

Calculate current progress width based on progress, max and progressbar width

#### Returns

`number`

___

### draw

▸ **draw**(): `Promise`<void\>

Execute the widget

#### Returns

`Promise`<void\>

#### Overrides

[Widget](widget.md).[draw](widget.md#draw)

___

### setProgress

▸ **setProgress**(`progress`): `Promise`<[ProgressBar](progressbar.md)\>

Sets the current progress and draws progressbar

#### Parameters

| Name | Type |
| :------ | :------ |
| `progress` | `number` |

#### Returns

`Promise`<[ProgressBar](progressbar.md)\>

___

## Widget Styles Methods

### addStyle

▸ **addStyle**(`name`, `style`): [ProgressBar](progressbar.md)

Adds new style for a widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | style name |
| `style` | `any` | style definition, widget specific |

#### Returns

[ProgressBar](progressbar.md)

#### Inherited from

[Widget](widget.md).[addStyle](widget.md#addstyle)

___

### setStyle

▸ **setStyle**(`style`): [ProgressBar](progressbar.md)

Sets a new style for widget, style has to be added first, style is widget specific

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | style name |

#### Returns

[ProgressBar](progressbar.md)

#### Inherited from

[Widget](widget.md).[setStyle](widget.md#setstyle)
