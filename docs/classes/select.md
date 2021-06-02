[terminal-next](../README.md) / [Exports](../modules.md) / Select

# Class: Select

Basic select widget, example:

![](https://i.imgur.com/PUwIYkG.gif)

```ts
const options = [
	{title: 'Option 1', value: '111'},
	{title: 'Option 2', value: '222'},
	{title: 'Some other option', value: '333'},
];
const select = new Select(t, options);
const result = await select.start();
t.text('answer: ' + result);
```

## Hierarchy

- [Widget](widget.md)

  ↳ **Select**

## Table of contents

### Constructors

- [constructor](select.md#constructor)

### Properties

- [firstDraw](select.md#firstdraw)
- [indent](select.md#indent)
- [options](select.md#options)
- [style](select.md#style)
- [terminal](select.md#terminal)

### Other Methods

- [draw](select.md#draw)
- [getValue](select.md#getvalue)
- [start](select.md#start)

### Widget Styles Methods

- [addStyle](select.md#addstyle)
- [setStyle](select.md#setstyle)

## Constructors

### constructor

• **new Select**(`terminal`, `options`)

Creates select widget instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `terminal` | [Terminal](terminal.md) | [Terminal](terminal.md) instance |
| `options` | `SelectOption`[] | select options, simple `{title: string, value: any}` array |

#### Overrides

[Widget](widget.md).[constructor](widget.md#constructor)

## Properties

### firstDraw

• `Protected` **firstDraw**: `boolean` = true

___

### indent

• **indent**: `number` = 0

Indent for widget (not every widget uses this)

#### Inherited from

[Widget](widget.md).[indent](widget.md#indent)

___

### options

• **options**: `SelectOption`[] = []

___

### style

• **style**: `string` = 'default'

current widget style

#### Inherited from

[Widget](widget.md).[style](widget.md#style)

___

### terminal

• `Protected` **terminal**: [Terminal](terminal.md)

#### Inherited from

[Widget](widget.md).[terminal](widget.md#terminal)

## Other Methods

### draw

▸ **draw**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Overrides

[Widget](widget.md).[draw](widget.md#draw)

___

### getValue

▸ **getValue**(): `any`

Gets the selected option value

#### Returns

`any`

___

### start

▸ **start**(): `Promise`<any\>

Execute widget, stop terminal and wait for user input

#### Returns

`Promise`<any\>

___

## Widget Styles Methods

### addStyle

▸ **addStyle**(`name`, `style`): [Select](select.md)

Adds new style for a widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | style name |
| `style` | `any` | style definition, widget specific |

#### Returns

[Select](select.md)

#### Inherited from

[Widget](widget.md).[addStyle](widget.md#addstyle)

___

### setStyle

▸ **setStyle**(`style`): [Select](select.md)

Sets a new style for widget, style has to be added first, style is widget specific

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | style name |

#### Returns

[Select](select.md)

#### Inherited from

[Widget](widget.md).[setStyle](widget.md#setstyle)
