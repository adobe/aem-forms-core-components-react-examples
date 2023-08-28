/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2023 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/

import Form from '../components/Form';
import Panel from '../components/Panel';
import TextField from '../components/TextField';
import Date from '../components/Date';
import PlainText from '../components/PlainText';
import Title from '../components/Title';
import Image from '../components/Image';
import Rating from '../components/Rating';
import Slider from '../components/Slider';
import TabsVerticalComp from '../components/TabsVerticalComp';
import TabsHorizontalComp from '../components/TabsHorizontalComp';
import Button from '../components/Button';
import Number from '../components/Number';
import DropDown from '../components/DropDown';
import AutoComplete from '../components/AutoComplete';
import Radiobutton from '../components/Radiobutton';
import CheckboxGroup from '../components/CheckboxGroup';
import Checkbox from '../components/Checkbox';
import Switch from '../components/Switch';
import Accordion from '../components/Accordion';
import Wizard from '../components/Wizard';

export default {
  form: Form,
  panel: Panel,
  'text-input': TextField,
  'date-input': Date,
  'text-input': TextField,
  'plain-text': PlainText,
  'custom:title': Title,
  image: Image,
  'text-input': TextField,
  'custom:rating':Rating,
  'custom:slider':Slider
  'text-input': TextField,
  'custom:vertical-tab': TabsVerticalComp,
  'custom:horizontal-tab': TabsHorizontalComp
  'text-input': TextField,
  button: Button
  'text-input': TextField,
  'number-input': Number
  'text-input': TextField,
  'drop-down': DropDown,
  'custom:autocomplete':AutoComplete
  'text-input': TextField,
  'radio-group': Radiobutton
  'text-input': TextField,
  'checkbox-group': CheckboxGroup
  'text-input': TextField,
  checkbox: Checkbox,
  'custom:switch': Switch
  'text-input': TextField,
  'custom:accordion': Accordion
  'text-input': TextField,
  'custom:switch': Switch,
  'password-input': TextField,
  'multiline-input': TextField,
  email:TextField
  'text-input': TextField,
  'custom:wizard': Wizard
};