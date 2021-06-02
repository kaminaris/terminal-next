[terminal-next](../README.md) / [Exports](../modules.md) / Widget

# Class: Widget

Abstract class to server as styled widget base

## Hierarchy

- **Widget**

  ↳ [Confirm](confirm.md)

  ↳ [Select](select.md)

  ↳ [Spinner](spinner.md)

  ↳ [Table](table.md)

  ↳ [TextInput](textinput.md)

  ↳ [ProgressBar](progressbar.md)

## Table of contents

### Constructors

- [constructor](widget.md#constructor)

### Properties

- [indent](widget.md#indent)
- [style](widget.md#style)
- [terminal](widget.md#terminal)

### Other Methods

- [draw](widget.md#draw)

### Widget Styles Methods

- [addStyle](widget.md#addstyle)
- [setStyle](widget.md#setstyle)

## Constructors

### constructor

• **new Widget**(`terminal`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `terminal` | [Terminal](terminal.md) |

## Properties

### indent

• **indent**: `number` = 0

Indent for widget (not every widget uses this)

___

### style

• **style**: `string` = 'default'

current widget style

___

### terminal

• `Protected` **terminal**: [Terminal](terminal.md)

## Other Methods

### draw

▸ `Abstract` **draw**(): `any`

#### Returns

`any`

___

## Widget Styles Methods

### addStyle

▸ **addStyle**(`name`, `style`): [Widget](widget.md)

Adds new style for a widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | style name |
| `style` | `any` | style definition, widget specific |

#### Returns

[Widget](widget.md)

___

### setStyle

▸ **setStyle**(`style`): [Widget](widget.md)

Sets a new style for widget, style has to be added first, style is widget specific

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | style name |

#### Returns

[Widget](widget.md)
