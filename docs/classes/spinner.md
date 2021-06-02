[terminal-next](../README.md) / [Exports](../modules.md) / Spinner

# Class: Spinner

Spinner with a text

![](https://i.imgur.com/3wYKaNZ.gif)

```ts
const spinner = new Spinner(t, 'test');
// you define tick rate yourself or just tick whenever a progress is made
const itv = setInterval(async () => {
	await spinner.draw();
}, 100);

setTimeout(()=> {
	clearInterval(itv);
	// important, in order to stop terminal from flickering, show cursor after this is done
	t.showCursor();
}, 3000);
```

## Hierarchy

- [Widget](widget.md)

  ↳ **Spinner**

## Table of contents

### Constructors

- [constructor](spinner.md#constructor)

### Properties

- [indent](spinner.md#indent)
- [style](spinner.md#style)
- [styles](spinner.md#styles)
- [terminal](spinner.md#terminal)
- [text](spinner.md#text)
- [tick](spinner.md#tick)

### Other Methods

- [draw](spinner.md#draw)
- [setText](spinner.md#settext)

### Widget Styles Methods

- [addStyle](spinner.md#addstyle)
- [setStyle](spinner.md#setstyle)

## Constructors

### constructor

• **new Spinner**(`terminal`, `text?`)

Creates Spinner instance

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `terminal` | [Terminal](terminal.md) | `undefined` | [Terminal](terminal.md) instance |
| `text` | `string` | '' | text after spinner |

#### Overrides

[Widget](widget.md).[constructor](widget.md#constructor)

## Properties

### indent

• **indent**: `number` = 0

Indent for widget (not every widget uses this)

#### Inherited from

[Widget](widget.md).[indent](widget.md#indent)

___

### style

• **style**: `string` = 'default'

current widget style

#### Inherited from

[Widget](widget.md).[style](widget.md#style)

___

### styles

• **styles**: `Object`

Style definition for this widget is just a character array ex `['a', 'b', 'c']`

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

### tick

• **tick**: `number` = 0

Current spinner tick (index of chars table)

## Other Methods

### draw

▸ **draw**(`noTick?`): [Spinner](spinner.md)

Draw the spinner, either in interval or when progress is made

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `noTick` | `boolean` | false | if this is set to `true`, tick will not inscrease |

#### Returns

[Spinner](spinner.md)

#### Overrides

[Widget](widget.md).[draw](widget.md#draw)

___

### setText

▸ **setText**(`t`): [Spinner](spinner.md)

Sets the text after spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `string` |

#### Returns

[Spinner](spinner.md)

___

## Widget Styles Methods

### addStyle

▸ **addStyle**(`name`, `style`): [Spinner](spinner.md)

Adds new style for a widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | style name |
| `style` | `any` | style definition, widget specific |

#### Returns

[Spinner](spinner.md)

#### Inherited from

[Widget](widget.md).[addStyle](widget.md#addstyle)

___

### setStyle

▸ **setStyle**(`style`): [Spinner](spinner.md)

Sets a new style for widget, style has to be added first, style is widget specific

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | style name |

#### Returns

[Spinner](spinner.md)

#### Inherited from

[Widget](widget.md).[setStyle](widget.md#setstyle)
