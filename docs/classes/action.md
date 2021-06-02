[terminal-next](../README.md) / [Exports](../modules.md) / Action

# Class: Action

Simple class used to determine if key press was action or just a normal key

## Table of contents

### Constructors

- [constructor](action.md#constructor)

### Methods

- [actionName](action.md#actionname)

## Constructors

### constructor

• **new Action**()

## Methods

### actionName

▸ `Static` **actionName**(`key`): ``false`` \| ``"first"`` \| ``"abort"`` \| ``"last"`` \| ``"reset"`` \| ``"return"`` \| ``"backspace"`` \| ``"delete"`` \| ``"escape"`` \| ``"tab"`` \| ``"pagedown"`` \| ``"pageup"`` \| ``"home"`` \| ``"end"`` \| ``"down"`` \| ``"right"`` \| ``"left"`` \| ``"up"``

Determine if key is action, if so, return normalized action name

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

``false`` \| ``"first"`` \| ``"abort"`` \| ``"last"`` \| ``"reset"`` \| ``"return"`` \| ``"backspace"`` \| ``"delete"`` \| ``"escape"`` \| ``"tab"`` \| ``"pagedown"`` \| ``"pageup"`` \| ``"home"`` \| ``"end"`` \| ``"down"`` \| ``"right"`` \| ``"left"`` \| ``"up"``
