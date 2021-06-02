[terminal-next](../README.md) / [Exports](../modules.md) / Confirm

# Class: Confirm

Boolean confirmation in terminal, returns false/true, example:

```ts
const ti = new Confirm(t, 'Super?');
const answ = await ti.start();
t.text(answ.toString()).newline();
```

## Hierarchy

- [Widget](widget.md)

  ↳ **Confirm**

## Table of contents

### Constructors

- [constructor](confirm.md#constructor)

### Properties

- [answer](confirm.md#answer)
- [indent](confirm.md#indent)
- [keypress](confirm.md#keypress)
- [no](confirm.md#no)
- [question](confirm.md#question)
- [rlInterface](confirm.md#rlinterface)
- [style](confirm.md#style)
- [terminal](confirm.md#terminal)
- [yes](confirm.md#yes)
- [yesDefault](confirm.md#yesdefault)

### Other Methods

- [draw](confirm.md#draw)
- [start](confirm.md#start)

### Widget Styles Methods

- [addStyle](confirm.md#addstyle)
- [setStyle](confirm.md#setstyle)

## Constructors

### constructor

• **new Confirm**(`terminal`, `question`, `yesDefault?`, `yes?`, `no?`)

Creates new confirmation widget

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `terminal` | [Terminal](terminal.md) | `undefined` | instance of Terminal |
| `question` | `string` | `undefined` | question you wish to ask |
| `yesDefault` | `boolean` | true | if set to true, yes (true) will be default (on enter press) |
| `yes` | `string` | 'y' | character that will act as true response, this has to be a single letter |
| `no` | `string` | 'n' | character that will act as false response, this has to be a single letter |

#### Overrides

[Widget](widget.md).[constructor](widget.md#constructor)

## Properties

### answer

• `Protected` **answer**: `boolean` = true

___

### indent

• **indent**: `number` = 0

Indent for widget (not every widget uses this)

#### Inherited from

[Widget](widget.md).[indent](widget.md#indent)

___

### keypress

• `Protected` **keypress**: `any`

___

### no

• `Protected` **no**: `string` = 'n'

___

### question

• `Protected` **question**: `string`

___

### rlInterface

• `Protected` **rlInterface**: `Interface`

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

___

### yes

• `Protected` **yes**: `string` = 'y'

___

### yesDefault

• `Protected` **yesDefault**: `boolean` = true

## Other Methods

### draw

▸ **draw**(): `void`

Draws the widget, not advised to run manually

#### Returns

`void`

#### Overrides

[Widget](widget.md).[draw](widget.md#draw)

___

### start

▸ **start**(): `Promise`<boolean\>

Execute the widget, this will stop terminal and wait for keypress, resolves the promise to true false or null
null if action was canceled by pressing escape or abort keyboard command

#### Returns

`Promise`<boolean\>

___

## Widget Styles Methods

### addStyle

▸ **addStyle**(`name`, `style`): [Confirm](confirm.md)

Adds new style for a widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | style name |
| `style` | `any` | style definition, widget specific |

#### Returns

[Confirm](confirm.md)

#### Inherited from

[Widget](widget.md).[addStyle](widget.md#addstyle)

___

### setStyle

▸ **setStyle**(`style`): [Confirm](confirm.md)

Sets a new style for widget, style has to be added first, style is widget specific

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | style name |

#### Returns

[Confirm](confirm.md)

#### Inherited from

[Widget](widget.md).[setStyle](widget.md#setstyle)
