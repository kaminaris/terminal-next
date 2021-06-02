[terminal-next](../README.md) / [Exports](../modules.md) / Table

# Class: Table

Main table widget, example usage:

![](https://i.imgur.com/6VAWTJo.png)

```ts
const data = [
	['id', 'name', 'email', 'active', 'banned'],
	['1', 'Marian', 'mtest@tst.com', 'true', 'false'],
	['2', 'Adam', 'adam@gmail.com', 'true', 'true'],
	['3', 'Gertruda', 'g.rtruda@wp.pl', 'false', 'false']
];
const table = new Table(t);
table.setData(data);
table.draw();
```

## Hierarchy

- [Widget](widget.md)

  ↳ **Table**

## Table of contents

### Constructors

- [constructor](table.md#constructor)

### Properties

- [headerTextStyle](table.md#headertextstyle)
- [indent](table.md#indent)
- [maxWidth](table.md#maxwidth)
- [rows](table.md#rows)
- [style](table.md#style)
- [styles](table.md#styles)
- [terminal](table.md#terminal)
- [textStyle](table.md#textstyle)

### Other Methods

- [calcWidths](table.md#calcwidths)
- [draw](table.md#draw)
- [drawDivider](table.md#drawdivider)
- [drawRow](table.md#drawrow)
- [setData](table.md#setdata)
- [setHeaderTextStyle](table.md#setheadertextstyle)
- [setTextStyle](table.md#settextstyle)

### Widget Styles Methods

- [addStyle](table.md#addstyle)
- [setStyle](table.md#setstyle)

## Constructors

### constructor

• **new Table**(`terminal`, `maxWidth?`)

Creates table widget

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `terminal` | [Terminal](terminal.md) | `undefined` | [Terminal](terminal.md) instance |
| `maxWidth` | `boolean` | false | should table not expand after maximum terminal width [NYI] |

#### Overrides

[Widget](widget.md).[constructor](widget.md#constructor)

## Properties

### headerTextStyle

• **headerTextStyle**: `TextFormatOptions`

___

### indent

• **indent**: `number` = 0

Indent for widget (not every widget uses this)

#### Inherited from

[Widget](widget.md).[indent](widget.md#indent)

___

### maxWidth

• `Protected` **maxWidth**: `boolean` = false

___

### rows

• **rows**: [TableRow](tablerow.md)[] = []

Internal table rows, you can technically set this yourself however you will need to properly construct
TableRow

___

### style

• **style**: `string` = 'default'

current widget style

#### Inherited from

[Widget](widget.md).[style](widget.md#style)

___

### styles

• **styles**: `Object`

Table has pretty advanced styles, open up the class if you wish to define style yourself

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | `Object` |
| `default.b` | `string` |
| `default.bc` | `string` |
| `default.c` | `string` |
| `default.l` | `string` |
| `default.lb` | `string` |
| `default.lc` | `string` |
| `default.line` | `string` |
| `default.lt` | `string` |
| `default.m` | `string` |
| `default.r` | `string` |
| `default.rb` | `string` |
| `default.rc` | `string` |
| `default.rt` | `string` |
| `default.t` | `string` |
| `default.tc` | `string` |

#### Overrides

Widget.styles

___

### terminal

• `Protected` **terminal**: [Terminal](terminal.md)

#### Inherited from

[Widget](widget.md).[terminal](widget.md#terminal)

___

### textStyle

• **textStyle**: `TextFormatOptions`

## Other Methods

### calcWidths

▸ **calcWidths**(): `void`

Recalculate widths of columns

#### Returns

`void`

___

### draw

▸ **draw**(): [Table](table.md)

Draws the table

#### Returns

[Table](table.md)

#### Overrides

[Widget](widget.md).[draw](widget.md#draw)

___

### drawDivider

▸ `Protected` **drawDivider**(`row`, `leftChar`, `rightChar`, `middleChar`, `fill`): `void`

Draw divider

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | [TableRow](tablerow.md) |
| `leftChar` | `string` |
| `rightChar` | `string` |
| `middleChar` | `string` |
| `fill` | `string` |

#### Returns

`void`

___

### drawRow

▸ `Protected` **drawRow**(`row`, `leftChar`, `rightChar`, `middleChar`): `void`

Draw the row

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | [TableRow](tablerow.md) |
| `leftChar` | `string` |
| `rightChar` | `string` |
| `middleChar` | `string` |

#### Returns

`void`

___

### setData

▸ **setData**(`data`): [Table](table.md)

Sets the data for table, first row will be treated as header

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[][] |

#### Returns

[Table](table.md)

___

### setHeaderTextStyle

▸ **setHeaderTextStyle**(`style`): `void`

Set header text style

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `TextFormatOptions` |

#### Returns

`void`

___

### setTextStyle

▸ **setTextStyle**(`style`): `void`

Sets content text style

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `TextFormatOptions` |

#### Returns

`void`

___

## Widget Styles Methods

### addStyle

▸ **addStyle**(`name`, `style`): [Table](table.md)

Adds new style for a widget

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | style name |
| `style` | `any` | style definition, widget specific |

#### Returns

[Table](table.md)

#### Inherited from

[Widget](widget.md).[addStyle](widget.md#addstyle)

___

### setStyle

▸ **setStyle**(`style`): [Table](table.md)

Sets a new style for widget, style has to be added first, style is widget specific

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | style name |

#### Returns

[Table](table.md)

#### Inherited from

[Widget](widget.md).[setStyle](widget.md#setstyle)
