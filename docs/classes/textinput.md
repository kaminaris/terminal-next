[terminal-next](../README.md) / [Exports](../modules.md) / TextInput

# Class: TextInput

TextInput widget, example:

![](https://i.imgur.com/ikCwe6n.png)

```ts
const ti = new TextInput(t, 'Your name?');
const answ = await ti.start();
t.text(answ);
```

## Hierarchy

- [Widget](widget.md)

  ↳ **TextInput**

## Table of contents

### Constructors

- [constructor](textinput.md#constructor)

### Properties

- [answer](textinput.md#answer)
- [cursorAt](textinput.md#cursorat)
- [hasError](textinput.md#haserror)
- [indent](textinput.md#indent)
- [keypress](textinput.md#keypress)
- [question](textinput.md#question)
- [rlInterface](textinput.md#rlinterface)
- [style](textinput.md#style)
- [terminal](textinput.md#terminal)
- [validator](textinput.md#validator)

### Other Methods

- [close](textinput.md#close)
- [draw](textinput.md#draw)
- [setValidator](textinput.md#setvalidator)
- [start](textinput.md#start)

### Widget Styles Methods

- [addStyle](textinput.md#addstyle)
- [setStyle](textinput.md#setstyle)

## Constructors

### constructor

• **new TextInput**(`terminal`, `question`, `validator?`)

Create TextInput widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `terminal` | [Terminal](terminal.md) | [Terminal](terminal.md) instance |
| `question` | `string` | question to ask |
| `validator?` | (`v`: `string`) => `boolean` | custom validator that can deny the value is conditions are not met |

#### Overrides

[Widget](widget.md).[constructor](widget.md#constructor)

## Properties

### answer

• `Protected` **answer**: `string` = ''

___

### cursorAt

• `Protected` **cursorAt**: `number` = 0

___

### hasError

• `Protected` **hasError**: `boolean`

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

### validator

• `Protected` `Optional` **validator**: (`v`: `string`) => `boolean`

#### Type declaration

▸ (`v`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

##### Returns

`boolean`

## Other Methods

### close

▸ **close**(): `void`

Close the widget

#### Returns

`void`

___

### draw

▸ **draw**(): `void`

Draw the widget

#### Returns

`void`

#### Overrides

[Widget](widget.md).[draw](widget.md#draw)

___

### setValidator

▸ **setValidator**(`validator`): `void`

Sets the validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | (`v`: `string`) => `boolean` |

#### Returns

`void`

___

### start

▸ **start**(): `Promise`<any\>

Execute the widget

#### Returns

`Promise`<any\>

___

## Widget Styles Methods

### addStyle

▸ **addStyle**(`name`, `style`): [TextInput](textinput.md)

Adds new style for a widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | style name |
| `style` | `any` | style definition, widget specific |

#### Returns

[TextInput](textinput.md)

#### Inherited from

[Widget](widget.md).[addStyle](widget.md#addstyle)

___

### setStyle

▸ **setStyle**(`style`): [TextInput](textinput.md)

Sets a new style for widget, style has to be added first, style is widget specific

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | style name |

#### Returns

[TextInput](textinput.md)

#### Inherited from

[Widget](widget.md).[setStyle](widget.md#setstyle)
